"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import {
	Card,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import type { Project } from "@/lib/constantsData";

interface ProjectCardProps {
	project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
	const wrapperRef = useRef<HTMLDivElement>(null);
	const tiltRef = useRef<HTMLDivElement>(null);
	const imageRef = useRef<HTMLImageElement>(null);

	useEffect(() => {
		const wrapper = wrapperRef.current;
		const tilt = tiltRef.current;
		const image = imageRef.current;

		if (!wrapper || !tilt || !image) return;

		let frame = 0;

		const mouse = {
			x: 0,
			y: 0,
		};

		let currentX = 0;
		let currentY = 0;

		const animate = () => {
			const rect = wrapper.getBoundingClientRect();

			const targetX = mouse.x - rect.left;
			const targetY = mouse.y - rect.top;

			currentX += (targetX - currentX) * 0.12;
			currentY += (targetY - currentY) * 0.12;

			const rotateY = ((currentX - rect.width / 2) / rect.width) * 6;

			const rotateX = -((currentY - rect.height / 2) / rect.height) * 6;

			tilt.style.transform = `
				perspective(1200px)
				rotateX(${rotateX}deg)
				rotateY(${rotateY}deg)
				scale3d(1.01,1.01,1.01)
			`;

			image.style.transform = `
				scale(1.03)
				translateX(${rotateY * 0.3}px)
				translateY(${rotateX * -0.3}px)
			`;

			frame = requestAnimationFrame(animate);
		};

		const handleEnter = (e: MouseEvent) => {
			mouse.x = e.clientX;
			mouse.y = e.clientY;

			tilt.style.transition = "transform .25s ease";
			image.style.transition = "transform .25s ease";

			frame = requestAnimationFrame(animate);
		};

		const handleMove = (e: MouseEvent) => {
			mouse.x = e.clientX;
			mouse.y = e.clientY;
		};

		const handleLeave = () => {
			cancelAnimationFrame(frame);

			tilt.style.transition = "transform .45s cubic-bezier(.22,1,.36,1)";
			image.style.transition = "transform .45s cubic-bezier(.22,1,.36,1)";

			tilt.style.transform =
				"perspective(1200px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)";

			image.style.transform = "scale(1)";
		};

		wrapper.addEventListener("mouseenter", handleEnter);
		wrapper.addEventListener("mousemove", handleMove);
		wrapper.addEventListener("mouseleave", handleLeave);

		return () => {
			cancelAnimationFrame(frame);

			wrapper.removeEventListener("mouseenter", handleEnter);
			wrapper.removeEventListener("mousemove", handleMove);
			wrapper.removeEventListener("mouseleave", handleLeave);
		};
	}, []);

	return (
		<Link href={`/projects/${project.slug}`} className="block h-full">
			<div
				ref={wrapperRef}
				className="group relative h-full rounded-xl transition-all duration-300 hover:-translate-y-1"
			>
				<div
					ref={tiltRef}
					className="h-full will-change-transform"
					style={{
						transformStyle: "preserve-3d",
					}}
				>
					<Card
						className="
							flex h-full flex-col pt-0
							ring-1 ring-border/60
							shadow-md
							transition-all
							duration-300
							group-hover:ring-accent-primary/30
							group-hover:shadow-xl
							group-hover:shadow-black/10
						"
					>
						<div className="overflow-hidden rounded-t-xl p-2 pb-0">
							<Image
								ref={imageRef}
								src={project.image[0]}
								alt={`Image of ${project.title}`}
								width={640}
								height={400}
								priority
								className="
									aspect-video
									w-full
									rounded-lg
									object-cover
									transition-all
									duration-500
									group-hover:brightness-105
								"
							/>
						</div>

						<CardHeader>
							<span className="font-mono text-xs text-secondary-text opacity-60">
								{project.year}
							</span>

							<CardTitle
								className="
									text-primary-text
									transition-colors
									duration-300
									group-hover:text-accent-primary
								"
							>
								{project.title}
							</CardTitle>

							<CardDescription className="text-secondary-text">
								{project.oneLiner}
							</CardDescription>
						</CardHeader>

						<div className="mt-auto flex flex-col bg-muted/40">
							{project.stack.length > 0 && (
								<div className="px-6 py-4">
									<div className="flex flex-wrap gap-2">
										{project.stack.slice(0, 2).map((tech) => (
											<span
												key={tech}
												className="
													rounded-full
													border
													border-border
													bg-muted
													px-3
													py-1
													font-mono
													text-[11px]
													transition-colors
													group-hover:border-accent-primary/40
												"
											>
												{tech}
											</span>
										))}

										{project.stack.length > 2 && (
											<span
												className="
													rounded-full
													border
													border-border
													bg-muted
													px-3
													py-1
													font-mono
													text-[11px]
												"
											>
												+{project.stack.length - 2}
											</span>
										)}
									</div>
								</div>
							)}

							<CardFooter className="border-t-0 bg-transparent justify-end">
								<span className="flex items-center gap-1 cursor-pointer rounded-full border border-accent-secondary-deep/30 px-3 py-1 font-mono text-xs font-medium text-accent-secondary-deep transition-colors hover:bg-accent-secondary-deep hover:text-white">
									View project
									<span className="transition-transform duration-300 group-hover:translate-x-1">
										→
									</span>
								</span>
							</CardFooter>
						</div>
					</Card>
				</div>
			</div>
		</Link>
	);
}
