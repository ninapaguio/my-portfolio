import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/lib/projects";

interface ProjectCardProps {
	project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
	return (
		<Link
			href={`/projects/${project.slug}`}
			className="group flex flex-col overflow-hidden rounded-2xl border border-border/50 bg-white transition-shadow hover:shadow-md"
		>
			<Image
				loading="lazy"
				src={project.image[0]}
				alt={`Image of the ${project.title} project`}
				width={640}
				height={400}
				className="h-44 w-full object-cover"
			/>
			<div className="flex flex-1 flex-col gap-3 p-6">
				<span className="font-mono text-xs text-secondary-text/60">
					{project.year}
				</span>
				<h3 className="font-display text-xl font-semibold text-primary-text">
					{project.title}
				</h3>
				<p className="text-sm leading-relaxed text-secondary-text">
					{project.oneLiner}
				</p>
				{project.stack.length > 0 && (
					<div className="mt-1 flex flex-wrap gap-1.5">
						{project.stack.slice(0, 2).map((tech: string) => (
							<span
								key={tech}
								className="rounded-md bg-accent-primary/10 px-2 py-1 font-mono text-[11px] text-accent-primary-deep"
							>
								{tech}
							</span>
						))}
						{project.stack.length > 2 && (
							<span className="rounded-md px-2 py-1 font-mono text-[11px] text-accent-secondary-deep">
								+{project.stack.length - 2}
							</span>
						)}
					</div>
				)}
				<span className="mt-auto pt-3 font-mono text-xs font-medium text-accent-secondary-deep opacity-75 transition-opacity group-hover:opacity-100">
					View details →
				</span>
			</div>
		</Link>
	);
}
