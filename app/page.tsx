import type { Metadata } from "next";

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
		<section className="flex flex-1 flex-col justify-center gap-4">
			<p className="font-mono text-xs uppercase tracking-widest text-secondary-text/70">
				Portfolio
			</p>
			<h1 className="font-mono text-3xl leading-relaxed text-primary-text md:text-4xl">
				Hi, my <br />
				name is{" "}
				<span className="font-bold text-accent-primary-deep">Niñalene</span>!
			</h1>
			<div className="flex items-center gap-3">
				<p className="font-display text-xl italic text-accent-secondary-deep">
					Backend Web Developer
				</p>
			</div>
			<p className="max-w-xl text-lg leading-relaxed text-secondary-text">
				My goal is to create seamless and efficient user experiences through
				clean and maintainable code.
			</p>
		</section>
	);
}
