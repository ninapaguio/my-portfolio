import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
	title: "Home",
	description:
		"I build the functional and interactive parts of web applications.",
	openGraph: {
		title: "Niñalene, a Backend Web Developer",
		description:
			"I build the functional and interactive parts of web applications.",
		type: "website",
	},
};

export default function HomePage() {
	return (
		<section className="relative flex flex-1 flex-col justify-center gap-12 md:flex-row md:items-center md:justify-between md:gap-10">
			<div className="relative z-10 flex flex-col gap-4 md:w-1/2 md:max-w-xl">
				<p
					className="animate-fade-up font-mono text-xs uppercase tracking-widest text-secondary-text/70"
					style={{ animationDelay: "0ms" }}
				>
					Portfolio
				</p>

				<p
					className="animate-fade-up max-w-2xl text-lg leading-8 text-secondary-text"
					style={{ animationDelay: "80ms" }}
				>
					Hi, my name is
				</p>

				<h1
					className="animate-fade-up font-display text-6xl leading-none font-bold tracking-tight md:text-8xl"
					style={{ animationDelay: "160ms" }}
				>
					Niñalene!
				</h1>

				<div
					className="animate-fade-up flex items-center gap-3"
					style={{ animationDelay: "240ms" }}
				>
					<p className="font-display text-2xl italic font-semibold text-accent-secondary-deep">
						Backend Web Developer
					</p>
				</div>

				<p
					className="animate-fade-up max-w-2xl text-lg leading-8 text-secondary-text"
					style={{ animationDelay: "320ms" }}
				>
					My goal is to create seamless and efficient user experiences through
					clean and maintainable code.
				</p>

				<div
					className="animate-fade-up flex flex-wrap gap-4"
					style={{ animationDelay: "400ms" }}
				>
					<Link
						href="/projects"
						className="rounded-full bg-accent-primary px-6 py-3 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent-primary-deep"
					>
						View Projects
					</Link>

					<Link
						href="/about"
						className="rounded-full border border-border bg-white px-6 py-3 font-medium text-primary-text transition-all duration-300 hover:-translate-y-0.5 hover:border-accent-primary hover:text-accent-primary"
					>
						About Me
					</Link>
				</div>
			</div>

			{}
			<div
				className="animate-fade-up relative flex w-full max-w-lg shrink-0 flex-col items-center pb-6 md:max-w-xl md:pb-0 md:fixed md:top-24 md:right-10 md:bottom-0 md:left-260 md:z-0 md:w-[clamp(380px,38vw,580px)] lg:right-16 xl:right-24"
				style={{ animationDelay: "200ms" }}
			>
				{/* Soft glow sitting behind the cutout — fades to transparent on its own, */}
				{/* so there's nothing for a parent box to clip into a hard edge. */}
				<div
					aria-hidden
					className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[clamp(440px,72vh,720px)] w-[clamp(440px,72vh,720px)] -translate-x-1/2 -translate-y-1/2 rounded-full"
					style={{
						background:
							"radial-gradient(circle, rgba(43,124,118,0.22) 0%, rgba(43,124,118,0.10) 45%, rgba(43,124,118,0) 72%)",
					}}
				/>
				<div
					aria-hidden
					className="pointer-events-none absolute -bottom-10 -right-10 -z-10 h-56 w-56 rounded-full md:h-64 md:w-64"
					style={{
						background:
							"radial-gradient(circle, rgba(232,179,57,0.28) 0%, rgba(232,179,57,0) 70%)",
					}}
				/>

				<div className="group relative h-[clamp(420px,70vh,640px)] w-full md:h-full md:flex-1">
					<Image
						src="/my-profile.png"
						alt="Portrait of Niñalene"
						fill
						priority
						sizes="(min-width: 768px) 40rem, 90vw"
						className="object-contain object-bottom transition-transform duration-500 group-hover:scale-[1.03]"
					/>
				</div>
			</div>
		</section>
	);
}
