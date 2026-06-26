import type { Metadata } from "next";
import ProjectCard from "@/components/ProjectCard";
import { type Project, projects } from "@/lib/projects";

export const metadata: Metadata = {
	title: "Projects",
	description: "Some of my projects during my academe.",
};

async function getProjects(): Promise<Project[]> {
	await new Promise((resolve) => setTimeout(resolve, 300));
	return projects;
}

export default async function ProjectsPage() {
	const allProjects = await getProjects();

	return (
		<section className="flex flex-col gap-10">
			<div>
				<div className="flex items-center gap-2">
					<span className="h-1.5 w-1.5 rounded-full bg-accent-primary" />
					<span className="font-mono text-xs uppercase tracking-widest text-secondary-text/70">
						Projects
					</span>
				</div>
				<h1 className="mt-3 font-display text-4xl font-semibold text-accent-primary-deep">
					Things I've Built
				</h1>
				<p className="mt-3 max-w-lg text-secondary-text">
					Some of my projects during my academe.
				</p>
			</div>

			<div className="grid gap-6 sm:grid-cols-2">
				{allProjects.map((project: Project) => (
					<ProjectCard key={project.slug} project={project} />
				))}
			</div>
		</section>
	);
}
