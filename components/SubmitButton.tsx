"use client";

import { useFormStatus } from "react-dom";
import { Button } from "@/components/ui/button";

interface SubmitButtonProps {
	label?: string;
	disabled?: boolean;
}

export default function SubmitButton({
	label = "Send Message",
	disabled = false,
}: SubmitButtonProps) {
	const { pending } = useFormStatus();
	const isDisabled = pending || disabled;

	return (
		<Button
			type="submit"
			disabled={isDisabled}
			aria-disabled={isDisabled}
			className="h-12 w-full rounded-xl bg-accent-secondary-deep text-sm font-semibold text-background transition-all hover:-translate-y-0.5 hover:bg-accent-secondary disabled:translate-y-0 disabled:cursor-not-allowed disabled:opacity-60"
		>
			{pending ? "Sending..." : label}
		</Button>
	);
}
