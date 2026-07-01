import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
	return (
		<section className="flex flex-1 flex-col items-center justify-center gap-6 py-24 text-center">
			<p className="font-mono text-xs uppercase tracking-widest text-secondary-text/70">
				404
			</p>

			<h1 className="font-display text-4xl font-semibold text-accent-primary-deep md:text-6xl">
				Page not found
			</h1>

			<p className="max-w-md text-lg leading-8 text-secondary-text">
				The page you're looking for doesn't exist, or may have been moved.
			</p>

			<div className="flex flex-wrap justify-center gap-4">
				<Button
					asChild
					className="h-auto rounded-full bg-accent-primary px-6 py-3 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent-primary-deep"
				>
					<Link href="/">Go home</Link>
				</Button>

				<Button
					asChild
					variant="outline"
					className="h-auto rounded-full border border-border bg-white px-6 py-3 font-medium text-primary-text transition-all duration-300 hover:-translate-y-0.5 hover:border-accent-primary hover:text-accent-primary"
				>
					<Link href="/projects">View projects</Link>
				</Button>
			</div>
		</section>
	);
}
