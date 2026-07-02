import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import HomeIntro from "@/components/HomeIntro";
import ProfileReveal from "@/components/ProfileReveal";
import { Button } from "@/components/ui/button";

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
			<HomeIntro>
				<Button
					asChild
					className="h-auto rounded-full bg-accent-primary px-6 py-3 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent-primary-deep"
				>
					<Link href="/projects">View Projects</Link>
				</Button>

				<Button
					asChild
					variant="outline"
					className="h-auto rounded-full border border-border bg-background-white px-6 py-3 font-medium text-primary-text transition-all duration-300 hover:-translate-y-0.5 hover:border-accent-primary hover:text-accent-primary"
				>
					<Link href="/about">About Me</Link>
				</Button>
			</HomeIntro>

			<ProfileReveal>
				<div
					aria-hidden
					className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[clamp(440px,72vh,720px)] w-[clamp(440px,72vh,720px)] -translate-x-1/2 -translate-y-1/2 rounded-full"
					style={{
						background:
							"radial-gradient(circle, rgba(43,124,118,0.22) 0%, rgba(43,124,118,0.10) 45%, rgba(43,124,118,0) 72%)",
					}}
				/>

				<div className="group relative h-[clamp(420px,70vh,640px)] w-full md:h-full md:flex-1">
					<Image
						src="/myProfile.png"
						alt="Portrait of Niñalene"
						width={600}
						height={600}
						priority
						sizes="(min-width: 768px) 40rem, 90vw"
						className="object-contain object-bottom transition-transform duration-500 group-hover:scale-[1.03]"
					/>
				</div>
			</ProfileReveal>
		</section>
	);
}
