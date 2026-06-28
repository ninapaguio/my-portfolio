"use client";

import { useActionState } from "react";
import SubmitButton from "@/components/SubmitButton";
import { type ContactFormState, submitContact } from "./actions";

const initialState: ContactFormState = { status: "idle", message: "" };

interface SocialLink {
	label: string;
	username: string;
	href: string;
}

const socialLinks: SocialLink[] = [
	{
		label: "GitHub",
		username: "@ninapaguio",
		href: "https://github.com/ninapaguio",
	},
	{
		label: "LinkedIn",
		username: "@npaguio",
		href: "https://linkedin.com/in/npaguio",
	},
];

export default function ContactPage() {
	const [state, formAction] = useActionState(submitContact, initialState);

	return (
		<section className="flex flex-col gap-10">
			<div>
				<div className="flex items-center gap-2">
					<span className="h-1.5 w-1.5 rounded-full bg-accent-secondary" />
					<span className="font-mono text-xs uppercase tracking-widest text-secondary-text/70">
						Contact Me
					</span>
				</div>
				<h1 className="mt-3 font-display text-4xl font-semibold text-accent-secondary-deep">
					Want to get in touch?
				</h1>
			</div>

			<form
				action={formAction}
				className="mx-auto flex w-full max-w-lg flex-col gap-5"
			>
				<div className="flex flex-col gap-1.5">
					<label
						htmlFor="name"
						className="font-mono text-xs uppercase tracking-wide text-secondary-text"
					>
						Name
					</label>
					<input
						id="name"
						name="name"
						type="text"
						placeholder="Type your name"
						required
						className="rounded-lg border-2 border-primary-text/10 bg-white px-4 py-2.5 text-primary-text outline-none transition-colors focus:border-accent-primary/60"
					/>
				</div>

				<div className="flex flex-col gap-1.5">
					<label
						htmlFor="email"
						className="font-mono text-xs uppercase tracking-wide text-secondary-text"
					>
						Email
					</label>
					<input
						id="email"
						name="email"
						type="email"
						placeholder="Type your email"
						required
						className="rounded-lg border-2 border-primary-text/10 bg-white px-4 py-2.5 text-primary-text outline-none transition-colors focus:border-accent-primary/60"
					/>
				</div>

				<div className="flex flex-col gap-1.5">
					<label
						htmlFor="message"
						className="font-mono text-xs uppercase tracking-wide text-secondary-text"
					>
						Message
					</label>
					<textarea
						id="message"
						name="message"
						rows={5}
						placeholder="Type your message"
						required
						className="rounded-lg border-2 border-primary-text/10 bg-white px-4 py-2.5 text-primary-text outline-none transition-colors focus:border-accent-primary/60"
					/>
				</div>

				<SubmitButton />

				{state.status !== "idle" && (
					<p
						role="status"
						className={`text-sm ${
							state.status === "success"
								? "text-accent-secondary-deep"
								: "text-accent-primary-deep"
						}`}
					>
						{state.message}
					</p>
				)}

				<div className="flex flex-col items-center gap-2 border-t border-border/40 pt-6">
					<p className="font-mono text-xs uppercase tracking-widest text-secondary-text/60">
						Or find me here
					</p>
					<div className="flex items-center gap-6">
						{socialLinks.map((social: SocialLink) => (
							<a
								key={social.label}
								href={social.href}
								target="_blank"
								rel="noopener noreferrer"
								className="flex flex-col items-center font-mono text-xs text-secondary-text transition-colors hover:text-accent-primary-deep"
							>
								<span className="font-medium text-primary-text">
									{social.label}
								</span>
								<span>{social.username}</span>
							</a>
						))}
					</div>
				</div>
			</form>
		</section>
	);
}
