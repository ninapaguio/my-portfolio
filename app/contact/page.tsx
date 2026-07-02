"use client";

import { AnimatePresence, motion } from "motion/react";
import { useActionState, useEffect, useRef, useState } from "react";
import SubmitButton from "@/components/SubmitButton";
import { socialLinks } from "@/lib/constantsData";
import { countWords, MAX_WORDS } from "@/lib/contactForm";
import { type ContactFormState, submitContact } from "./actions";

const initialState: ContactFormState = {
	status: "idle",
	message: "",
};

const FLASH_DURATION_MS = 5000;

export default function ContactPage() {
	const [state, formAction, isPending] = useActionState(
		submitContact,
		initialState,
	);
	const [wordCount, setWordCount] = useState(0);
	const overLimit = wordCount > MAX_WORDS;
	const formRef = useRef<HTMLFormElement>(null);
	const [showFlash, setShowFlash] = useState(false);

	useEffect(() => {
		// Show flash banner when state changes, but only if not idle
		if (state.status === "idle") return;

		setShowFlash(true);

		if (state.status === "success") {
			formRef.current?.reset();
			setWordCount(0);
		}

		const timer = setTimeout(() => setShowFlash(false), FLASH_DURATION_MS);
		return () => clearTimeout(timer);
	}, [state]);

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

					{/* Social Links Section */}
					<div className="space-y-5">
						<div className="flex items-center gap-4">
							<div className="h-px flex-1 bg-border/40" />
							<span className="label-eyebrow">Find me online</span>
							<div className="h-px flex-1 bg-border/40" />
						</div>

						<div className="grid gap-4">
							{socialLinks.map((social, index) => (
								<motion.a
									key={social.label}
									href={social.href}
									target="_blank"
									rel="noopener noreferrer"
									initial={{ opacity: 0, y: 14 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{ duration: 0.5, delay: index * 0.08 }}
									className="group rounded-2xl border border-border/40 bg-background-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-accent-primary/60 hover:shadow-lg"
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
								</motion.a>
							))}
						</div>
					</div>
				</div>

				{/* Contact Form Section */}
				<div className="surface-card border-border/40 md:p-10">
					<form ref={formRef} action={formAction} className="space-y-6">
						<div className="space-y-2">
							<label htmlFor="nameID" className="label-eyebrow font-medium">
								Name
							</label>

							<input
								id="nameID"
								name="name"
								type="text"
								required
								placeholder="Your Name"
								disabled={isPending}
								className="w-full rounded-xl border border-border/40 bg-background px-4 py-3 text-primary-text outline-none transition-all focus:border-accent-primary focus:ring-4 focus:ring-accent-primary/10 disabled:opacity-60"
							/>
						</div>

						<div className="space-y-2">
							<label htmlFor="emailID" className="label-eyebrow font-medium">
								Email
							</label>

							<input
								id="emailID"
								name="email"
								type="email"
								required
								placeholder="Sample@email.com"
								disabled={isPending}
								className="w-full rounded-xl border border-border/40 bg-background px-4 py-3 text-primary-text outline-none transition-all focus:border-accent-primary focus:ring-4 focus:ring-accent-primary/10 disabled:opacity-60"
							/>
						</div>

						<div className="space-y-2">
							<label htmlFor="messageID" className="label-eyebrow font-medium">
								Message
							</label>

							<div className="relative">
								<textarea
									id="messageID"
									name="message"
									rows={7}
									required
									placeholder="Type your message here..."
									disabled={isPending}
									onChange={(e) => setWordCount(countWords(e.target.value))}
									className={`w-full resize-none rounded-xl border bg-background px-4 py-3 pb-8 text-primary-text outline-none transition-all focus:ring-4 disabled:opacity-60 ${
										overLimit
											? "border-accent-primary/60 focus:border-accent-primary focus:ring-accent-primary/10"
											: "border-border/40 focus:border-accent-primary focus:ring-accent-primary/10"
									}`}
								/>
								<span
									className={`pointer-events-none absolute bottom-2.5 right-3 font-mono text-xs ${
										overLimit
											? "text-accent-primary-deep"
											: "text-secondary-text"
									}`}
								>
									{wordCount}/{MAX_WORDS} words
								</span>
							</div>

							{overLimit && (
								<p className="text-xs text-accent-primary-deep">
									Please shorten your message to {MAX_WORDS} words or fewer.
								</p>
							)}
						</div>

						<div className="pt-2">
							<SubmitButton disabled={overLimit} />
						</div>
						<AnimatePresence>
							{state.status !== "idle" && showFlash && (
								<motion.div
									role="status"
									aria-live="polite"
									initial={{ opacity: 0, y: -6 }}
									animate={{ opacity: 1, y: 0 }}
									exit={{ opacity: 0, y: -6 }}
									transition={{ duration: 0.3 }}
									className={`rounded-xl border px-4 py-3 text-sm ${
										state.status === "success"
											? "border-accent-secondary/20 bg-accent-secondary/10 text-accent-secondary-deep"
											: "border-accent-primary/20 bg-accent-primary/10 text-accent-primary-deep"
									}`}
								>
									{state.message}
								</motion.div>
							)}
						</AnimatePresence>
					</form>
				</div>
			</div>
		</section>
	);
}
