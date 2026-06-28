"use client";

import { useFormStatus } from "react-dom";

interface SubmitButtonProps {
	label?: string;
}

export default function SubmitButton({
	label = "Send message",
}: SubmitButtonProps) {
	const { pending } = useFormStatus();

	return (
		<button
			type="submit"
			disabled={pending}
			className="rounded-full bg-accent-secondary-deep px-6 py-3 text-sm font-semibold text-background transition-colors hover:bg-accent-secondary disabled:cursor-not-allowed disabled:opacity-60"
		>
			{pending ? "Sending..." : label}
		</button>
	);
}
