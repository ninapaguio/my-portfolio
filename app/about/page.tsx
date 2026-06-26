import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "About",
	description: "Background, education, and the tools I work with.",
};

const interests: string[] = [
	"Building a maintainable codebase",
	"Adapting to different ideas to solve problems",
	"AI agents and ML integration",
];

const techStack: string[] = ["3", "4"];

const experience: string[] = [
	"BS Computer Science — Polytechnic University of the Philippines, 2026",
	"DOST Undergraduate Scholar — DOST-SEI, 2022 – 2026",
	"Programmer Intern — DOST-PES, 2025",
	"Software Engineering Intern — Startpoint Technologies, Inc., 2026 – Present",
];

export default async function AboutPage() {
	// Simulated async fetch — swap for a CMS or database call.
	await new Promise((resolve) => setTimeout(resolve, 400));

	return (
		<section className="flex flex-col gap-10">
			<div>
				<div className="flex items-center gap-2">
					<span className="h-1.5 w-1.5 rounded-full bg-accent-secondary" />
					<span className="font-mono text-xs uppercase tracking-widest text-secondary-text/70">
						About
					</span>
				</div>
				<h1 className="mt-3 font-display text-4xl font-semibold text-accent-secondary-deep">
					Who I am
				</h1>
			</div>

			<div>
				<p className="text-lg leading-relaxed text-secondary-text">
					Aspiring software engineer focused on building maintainable,
					efficient, and scalable applications. Currently focusing on Full-Stack
					Web Development. I love to create applications that came from
					different ideas to have solutions to solve problems.
				</p>
			</div>

			<div className="grid gap-6 md:grid-cols-2">
				<div className="rounded-2xl border border-border/50 bg-white p-8">
					<h2 className="font-display text-lg font-semibold text-primary-text">
						Education &amp; Experience
					</h2>
					<ul className="mt-4 flex flex-col gap-4">
						{experience.map((exp: string) => (
							<li key={exp} className="flex flex-col">
								<span className="font-medium text-primary-text">
									{exp.split(" — ")[0]}
								</span>
								<span className="font-mono text-xs text-secondary-text/70">
									{exp.split(" — ")[1]}
								</span>
							</li>
						))}
					</ul>
				</div>

				<div className="rounded-2xl border border-border/50 bg-white p-8">
					<h2 className="font-display text-lg font-semibold text-primary-text">
						Areas of interest
					</h2>
					<ul className="mt-4 flex flex-col gap-2">
						{interests.map((interest: string) => (
							<li
								key={interest}
								className="font-mono text-xs text-secondary-text"
							>
								{interest}
							</li>
						))}
					</ul>
				</div>
			</div>

			<div className="rounded-2xl border border-border/50 bg-white p-8">
				<h2 className="font-display text-lg font-semibold text-primary-text">
					Technologies I've Worked With
				</h2>
				<ul className="mt-4 flex flex-col gap-2">
					{techStack.map((tech: string) => (
						<li
							key={tech}
							className="font-mono text-xs font-medium text-primary-text"
						>
							{tech}
						</li>
					))}
				</ul>
			</div>
		</section>
	);
}
