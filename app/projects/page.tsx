import type { Metadata } from "next";
import ProjectCard from "@/components/ProjectCard";
import { type Project, projects } from "@/lib/constantsData";

export const metadata: Metadata = {
	title: "Projects",
	description: "Some of my projects during my academe.",
};

async function getProjects(): Promise<Project[]> {
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
				<h1 id="projects-heading" className="heading-hero">
					Things I've Built
				</h1>
				<p className="body-lead max-w-2xl">
					Some of my projects during my academe.
				</p>
			</div>

			{/* Projects Grid Section */}
			<div className="grid gap-6 sm:grid-cols-2">
				{allProjects.map((project) => (
					<ProjectCard key={project.slug} project={project} />
				))}
			</div>
		</section>
	);
}
