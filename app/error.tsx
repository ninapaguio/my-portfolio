"use client";

import Link from "next/link";
import { useEffect } from "react";

interface ErrorPageProps {
	error: Error & { digest?: string };
	reset: () => void;
}

export default function ErrorPage({ error, reset }: ErrorPageProps) {
	useEffect(() => {
		console.error(error);
	}, [error]);

	return (
		<section className="flex flex-1 flex-col items-center justify-center gap-6 py-24 text-center">
			<p className="font-mono text-xs uppercase tracking-widest text-secondary-text/70">
				Error
			</p>

			<h1 className="font-display text-4xl font-semibold text-accent-primary-deep md:text-6xl">
				Something went wrong
			</h1>

			<p className="max-w-md text-lg leading-8 text-secondary-text">
				We hit an unexpected snag loading this page. You can try again, or head
				back home.
			</p>

			<div className="flex flex-wrap justify-center gap-4">
				<button
					type="button"
					onClick={() => reset()}
					className="rounded-full bg-accent-primary px-6 py-3 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent-primary-deep"
				>
					Try again
				</button>

				<Link
					href="/"
					className="rounded-full border border-border bg-white px-6 py-3 font-medium text-primary-text transition-all duration-300 hover:-translate-y-0.5 hover:border-accent-primary hover:text-accent-primary"
				>
					Go home
				</Link>
			</div>
		</section>
	);
}
