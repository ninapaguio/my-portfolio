import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProjectBySlug, type ProjectLink, projects } from "@/lib/projects";

interface ProjectPageProps {
	params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
	return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
	params,
}: ProjectPageProps): Promise<Metadata> {
	const { slug } = await params;
	const project = getProjectBySlug(slug);

	if (!project) {
		return { title: "Project not found" };
	}

	return { title: project.title, description: project.oneLiner };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
	const { slug } = await params;
	const project = getProjectBySlug(slug);

	if (!project) {
		notFound();
	}

	return (
		<article className="flex flex-col gap-8">
			<Link
				href="/projects"
				className="font-mono text-xs uppercase tracking-widest text-secondary-text/70 hover:text-primary-text"
			>
				← All Projects
			</Link>

			<Image
				loading="eager"
				src={project.image[1]}
				alt={`Image of the ${project.title} project`}
				width={960}
				height={540}
				className="w-full rounded-2xl border border-border/50 object-cover"
			/>

			<div>
				<span className="font-mono text-xs text-secondary-text/60">
					{project.year} — {project.role}
				</span>
				<h1 className="mt-2 font-display text-3xl font-semibold text-accent-primary-deep">
					{project.title}
				</h1>
				{project.stack.length > 0 && (
					<div className="mt-4 flex flex-wrap gap-1.5">
						{project.stack.map((tech: string) => (
							<span
								key={tech}
								className="rounded-md bg-accent-primary/10 px-2.5 py-1 font-mono text-xs text-accent-primary-deep"
							>
								{tech}
							</span>
						))}
					</div>
				)}
			</div>

			<div className="flex flex-col gap-6">
				<div>
					<h2 className="font-mono text-xs uppercase tracking-wider text-accent-secondary">
						The problem
					</h2>
					<p className="mt-2 leading-relaxed text-secondary-text">
						{project.problem}
					</p>
				</div>
				<div>
					<h2 className="font-mono text-xs uppercase tracking-wider text-accent-secondary">
						The approach
					</h2>
					<p className="mt-2 leading-relaxed text-secondary-text">
						{project.approach}
					</p>
				</div>
				{project.outcome && (
					<div>
						<h2 className="font-mono text-xs uppercase tracking-wider text-accent-secondary">
							The outcome
						</h2>
						<p className="mt-2 leading-relaxed text-secondary-text">
							{project.outcome}
						</p>
					</div>
				)}
			</div>

			{project.links.length > 0 && (
				<div className="flex flex-wrap gap-3 border-t border-border/40 pt-6">
					{project.links.map((link: ProjectLink) => (
						<a
							key={link.label}
							href={link.href}
							className="rounded-full border-2 border-primary-text/15 px-4 py-2 font-mono text-xs font-medium text-primary-text transition-colors hover:border-primary-text/40"
						>
							{link.label}
						</a>
					))}
				</div>
			)}
		</article>
	);
}
