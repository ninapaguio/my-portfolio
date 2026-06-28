"use server";

export type ContactStatus = "idle" | "success" | "error";

export interface ContactFormState {
	status: ContactStatus;
	message: string;
}

export async function submitContact(
	_prevState: ContactFormState,
	formData: FormData,
): Promise<ContactFormState> {
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

	const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	if (!emailPattern.test(email)) {
		return {
			status: "error",
			message: "That email address doesn't look right.",
		};
	}

	// Simulate a network call to an email provider or database.
	await new Promise((resolve) => setTimeout(resolve, 600));

	return {
		status: "success",
		message: `Thanks, ${name.split(" ")[0]}. I'll get back to you soon.`,
	};
}
