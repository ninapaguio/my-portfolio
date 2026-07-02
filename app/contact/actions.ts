"use server";

import { headers } from "next/headers";
import { Resend } from "resend";
import { countWords, MAX_WORDS } from "@/lib/contactForm";

export type ContactStatus = "idle" | "success" | "error";

export interface ContactFormState {
	status: ContactStatus;
	message: string;
}

const resend = new Resend(process.env.RESEND_API_KEY);

const TO_EMAIL = process.env.CONTACT_TO_EMAIL;
const FROM_EMAIL = process.env.CONTACT_FROM_EMAIL;

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const fromAddressPattern =
	/^([^<>]+<[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+>|[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+)$/;

const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX_REQUESTS = 3;

// In-memory log (Note: Will reset on serverless restarts, but we add manual cleanup for VPS/Docker)
const submissionLog = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
	const now = Date.now();

	if (submissionLog.size > 1000) {
		for (const [key, timestamps] of submissionLog.entries()) {
			const freshTimestamps = timestamps.filter(
				(t) => now - t < RATE_LIMIT_WINDOW_MS,
			);
			if (freshTimestamps.length === 0) {
				submissionLog.delete(key);
			} else {
				submissionLog.set(key, freshTimestamps);
			}
		}
	}

	const timestamps = (submissionLog.get(ip) ?? []).filter(
		(t) => now - t < RATE_LIMIT_WINDOW_MS,
	);

	if (timestamps.length >= RATE_LIMIT_MAX_REQUESTS) {
		submissionLog.set(ip, timestamps);
		return true;
	}

	timestamps.push(now);
	submissionLog.set(ip, timestamps);
	return false;
}

export async function submitContact(
	_prevState: ContactFormState | null,
	formData: FormData,
): Promise<ContactFormState> {
	if (!TO_EMAIL || !FROM_EMAIL) {
		console.error(
			"Missing CONTACT_TO_EMAIL or CONTACT_FROM_EMAIL environment variable.",
		);
		return {
			status: "error",
			message: "The contact form is misconfigured. Please try again later.",
		};
	}

	if (!fromAddressPattern.test(FROM_EMAIL.trim())) {
		console.error(`CONTACT_FROM_EMAIL is malformed.`);
		return {
			status: "error",
			message: "The contact form is misconfigured. Please try again later.",
		};
	}

	const headerList = await headers();
	const ip =
		headerList.get("x-forwarded-for")?.split(",")[0]?.trim() ??
		headerList.get("x-real-ip") ??
		"unknown";

	if (isRateLimited(ip)) {
		return {
			status: "error",
			message:
				"You're sending messages too quickly. Please wait a bit and try again.",
		};
	}

	const name = formData.get("name");
	const email = formData.get("email");
	const message = formData.get("message");

	if (
		typeof name !== "string" ||
		typeof email !== "string" ||
		typeof message !== "string" ||
		!name.trim() ||
		!email.trim() ||
		!message.trim()
	) {
		return {
			status: "error",
			message: "Please fill in every field before sending.",
		};
	}

	if (!emailPattern.test(email)) {
		return {
			status: "error",
			message: "That email address doesn't look right.",
		};
	}

	const wordCount = countWords(message);
	if (wordCount > MAX_WORDS) {
		return {
			status: "error",
			message: `Please keep your message under ${MAX_WORDS} words.`,
		};
	}

	try {
		const { error } = await resend.emails.send({
			from: FROM_EMAIL,
			to: TO_EMAIL,
			replyTo: email,
			subject: `New message from ${name}`,
			text: `From: ${name} (${email})\n\n${message}`,
		});

		if (error) {
			console.error("Resend error:", error);
			return {
				status: "error",
				message: "Something went wrong sending your message. Please try again.",
			};
		}
	} catch (err) {
		console.error(
			"Unexpected error sending email:",
			err instanceof Error ? err.message : err,
		);
		return {
			status: "error",
			message: "Something went wrong sending your message. Please try again.",
		};
	}

	return {
		status: "success",
		message: `Thanks, ${name.split(" ")[0]}! I'll get back to you soon.`,
	};
}
