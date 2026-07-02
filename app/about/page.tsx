import type { Metadata } from "next";
import { stats, technologies, timeline } from "@/lib/constantsData";

export const metadata: Metadata = {
	title: "About",
	description: "About page of Niñalene Paguio",
};

async function getAboutData() {
	return { stats, technologies, timeline };
}

export default async function AboutPage() {
	const { stats, technologies, timeline } = await getAboutData();

	return (
		<section className="space-y-24 py-6">
			<div className="space-y-6">
				<h1 className="heading-hero">Who I am</h1>

				<p className="body-lead">
					Building an application is understanding requirements, designing
					solutions, and refining every detail until everything fits together,
					is what excites me most about software engineering.
				</p>
			</div>

			{/* Stats Section */}
			<div className="grid gap-6 md:grid-cols-3">
				{stats.map((stat) => (
					<div key={stat.label} className="surface-card-hover text-center">
						<h2 className="font-display text-5xl font-bold text-accent-primary">
							{stat.value}
						</h2>

						<p className="label-eyebrow mt-3">{stat.label}</p>
					</div>
				))}
			</div>

			{/* Education & Experience Section */}
			<div className="grid gap-10 lg:grid-cols-2">
				<div className="surface-card">
					<h2 className="heading-section">Education & Experience</h2>

					<div className="relative border-l-2 border-accent-primary/20 pl-8">
						{timeline.map((item) => (
							<div key={item.title} className="relative mb-10 last:mb-0">
								<div className="absolute -left-10 top-1 h-5 w-5 rounded-full bg-accent-primary ring-4 ring-white" />

								<p className="label-eyebrow text-accent-primary">{item.year}</p>

								<h3 className="mt-2 text-lg font-semibold">{item.title}</h3>

								<p className="text-secondary-text">{item.subtitle}</p>

								{item.current && (
									<span className="mt-3 inline-flex rounded-full bg-accent-secondary/10 px-3 py-1 text-xs font-medium text-accent-secondary-deep">
										Current
									</span>
								)}
							</div>
						))}
					</div>
				</div>

				{/* Technologies Section */}
				<div className="surface-card">
					<h2 className="heading-section">Technologies I've Used</h2>

					<div className="space-y-8">
						{Object.entries(technologies).map(([group, techs]) => (
							<div key={group}>
								<p className="label-eyebrow mb-4 text-accent-primary">
									{group}
								</p>

								<div className="flex flex-wrap gap-4">
									{techs.map(({ name, icon: Icon }) => (
										<div
											key={name}
											className="group relative flex h-16 w-16 cursor-pointer items-center justify-center rounded-2xl border border-border bg-background transition-all duration-300 hover:-translate-y-1 hover:border-accent-primary hover:bg-accent-primary/5 hover:shadow-lg"
										>
											<Icon className="text-3xl text-accent-secondary-deep transition-transform duration-300 group-hover:scale-110 group-hover:text-accent-primary" />
											<div className="pointer-events-none absolute -bottom-11 left-1/2 -translate-x-1/2 rounded-lg bg-primary-text px-3 py-1.5 text-xs whitespace-nowrap text-background opacity-0 shadow-lg transition-all duration-200 group-hover:translate-y-1 group-hover:opacity-100">
												{name}
											</div>
										</div>
									))}
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
