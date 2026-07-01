"use client";

import { useActionState } from "react";
import SubmitButton from "@/components/SubmitButton";
import { type ContactFormState, submitContact } from "./actions";

const initialState: ContactFormState = {
	status: "idle",
	message: "",
};

interface SocialLink {
	label: string;
	username: string;
	href: string;
	description: string;
}

const socialLinks: SocialLink[] = [
	{
		label: "GitHub",
		username: "@ninapaguio",
		href: "https://github.com/ninapaguio",
		description: "View my projects and contributions",
	},
	{
		label: "LinkedIn",
		username: "@npaguio",
		href: "https://linkedin.com/in/npaguio",
		description: "Let's connect professionally",
	},
];

export default function ContactPage() {
	const [state, formAction] = useActionState(submitContact, initialState);

	return (
		<section className="py-8 md:py-12">
			<div className="grid items-start gap-16 lg:grid-cols-[0.9fr_1.1fr]">
				<div className="space-y-10">
					<div className="space-y-5">
						<h1 className="font-display text-4xl font-semibold leading-tight text-accent-primary-deep md:text-6xl">
							Want to connect?
						</h1>

						<p className="max-w-md text-base leading-8 text-secondary-text">
							Whether you have a project in mind or simply want to say hello,
							I'd love to hear from you. Feel free to send a message anytime.
						</p>
					</div>

					<div className="space-y-5">
						<div className="flex items-center gap-4">
							<div className="h-px flex-1 bg-border/40" />
							<span className="font-mono text-xs uppercase tracking-[0.25em] text-secondary-text">
								Find me online
							</span>
							<div className="h-px flex-1 bg-border/40" />
						</div>

						<div className="grid gap-4">
							{socialLinks.map((social) => (
								<a
									key={social.label}
									href={social.href}
									target="_blank"
									rel="noopener noreferrer"
									className="group rounded-2xl border border-border/40 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-accent-primary/60 hover:shadow-lg"
								>
									<div className="flex items-center justify-between">
										<div>
											<h3 className="font-semibold text-primary-text">
												{social.label}
											</h3>

											<p className="mt-1 font-mono text-xs text-accent-primary-deep">
												{social.username}
											</p>

											<p className="mt-3 text-sm leading-6 text-secondary-text">
												{social.description}
											</p>
										</div>

										<span className="text-xl transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
											↗
										</span>
									</div>
								</a>
							))}
						</div>
					</div>
				</div>

				<div className="rounded-3xl border border-border/40 bg-white p-8 shadow-sm md:p-10">
					<form action={formAction} className="space-y-6">
						<div className="space-y-2">
							<label
								htmlFor="name"
								className="font-mono font-medium text-xs uppercase tracking-widest text-secondary-text"
							>
								Name
							</label>

							<input
								id="nameID"
								name="name"
								type="text"
								required
								placeholder="Your Name"
								className="w-full rounded-xl border border-border/40 bg-background px-4 py-3 text-primary-text outline-none transition-all focus:border-accent-primary focus:ring-4 focus:ring-accent-primary/10"
							/>
						</div>

						<div className="space-y-2">
							<label
								htmlFor="email"
								className="font-mono font-medium text-xs uppercase tracking-widest text-secondary-text"
							>
								Email
							</label>

							<input
								id="emailID"
								name="email"
								type="email"
								required
								placeholder="Sample@email.com"
								className="w-full rounded-xl border border-border/40 bg-background px-4 py-3 text-primary-text outline-none transition-all focus:border-accent-primary focus:ring-4 focus:ring-accent-primary/10"
							/>
						</div>

						<div className="space-y-2">
							<label
								htmlFor="message"
								className="font-mono font-medium text-xs uppercase tracking-widest text-secondary-text"
							>
								Message
							</label>

							<textarea
								id="messageID"
								name="message"
								rows={7}
								required
								placeholder="Type your message here..."
								className="w-full resize-none rounded-xl border border-border/40 bg-background px-4 py-3 text-primary-text outline-none transition-all focus:border-accent-primary focus:ring-4 focus:ring-accent-primary/10"
							/>
						</div>

						<div className="pt-2">
							<SubmitButton />
						</div>

						{state.status !== "idle" && (
							<div
								role="status"
								className={`rounded-xl border px-4 py-3 text-sm ${
									state.status === "success"
										? "border-accent-secondary/20 bg-accent-secondary/10 text-accent-secondary-deep"
										: "border-accent-primary/20 bg-accent-primary/10 text-accent-primary-deep"
								}`}
							>
								{state.message}
							</div>
						)}
					</form>
				</div>
			</div>
		</section>
	);
}
