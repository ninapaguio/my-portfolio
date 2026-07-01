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
		<section
			className="flex flex-col gap-10"
			aria-labelledby="projects-heading"
		>
			<div className="space-y-8">
				<h1
					id="projects-heading"
					className="font-display text-5xl font-semibold leading-tight text-accent-secondary-deep md:text-7xl"
				>
					Things I've Built
				</h1>
				<p className="max-w-2xl text-lg leading-9 text-secondary-text">
					Some of my projects during my academe.
				</p>
			</div>

			<div className="grid gap-6 sm:grid-cols-2">
				{allProjects.map((project) => (
					<ProjectCard key={project.slug} project={project} />
				))}
			</div>
		</section>
	);
}
