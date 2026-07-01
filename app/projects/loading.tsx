import { Skeleton } from "@/components/ui/skeleton";
import { projects } from "@/lib/constantsData";

export default function ProjectsLoading() {
	return (
		<section className="flex flex-col gap-10">
			{/* Hero */}
			<div className="space-y-8">
				<div className="space-y-3">
					<Skeleton className="h-12 w-72 md:h-16 md:w-96" />
					<Skeleton className="h-12 w-56 md:h-16 md:w-80" />
				</div>

				<div className="max-w-2xl space-y-3">
					<Skeleton className="h-5 w-full" />
					<Skeleton className="h-5 w-5/6" />
				</div>
			</div>

			{/* Project Cards */}
			<div className="grid gap-6 sm:grid-cols-2">
				{projects.map((project) => {
					return (
						<div
							key={project.slug}
							className="overflow-hidden rounded-3xl border border-border bg-white shadow-sm"
						>
							<Skeleton className="aspect-video w-full rounded-none" />

							<div className="space-y-5 p-6">
								<Skeleton className="h-3 w-24" />

								<Skeleton className="h-7 w-3/4" />

								<div className="space-y-2">
									<Skeleton className="h-4 w-full" />
									<Skeleton className="h-4 w-11/12" />
									<Skeleton className="h-4 w-3/4" />
								</div>

								<div className="flex flex-wrap gap-2">
									{project.stack.map((tech) => (
										<Skeleton key={tech} className="h-7 w-16 rounded-full" />
									))}
								</div>

								<div className="flex justify-end">
									<Skeleton className="h-4 w-24" />
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</section>
	);
}
