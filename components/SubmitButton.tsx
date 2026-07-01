"use client";

import { useFormStatus } from "react-dom";
import { Button } from "@/components/ui/button";

interface SubmitButtonProps {
	label?: string;
}

export default function SubmitButton({
	label = "Send Message",
}: SubmitButtonProps) {
	const { pending } = useFormStatus();

	return (
		<Button
			type="submit"
			disabled={pending}
			className="h-12 w-full rounded-xl bg-accent-secondary-deep text-sm font-semibold text-background transition-all hover:-translate-y-0.5 hover:bg-accent-secondary disabled:translate-y-0 disabled:cursor-not-allowed disabled:opacity-60"
		>
			{pending ? "Sending..." : label}
		</Button>
	);
}
