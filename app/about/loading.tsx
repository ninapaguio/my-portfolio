import { Skeleton } from "@/components/ui/skeleton";
import { stats, technologies, timeline } from "@/lib/constantsData";

export default function AboutLoading() {
	return (
		<section className="space-y-24 py-6">
			{/* Hero */}
			<div className="space-y-6">
				<div className="space-y-3">
					<Skeleton className="h-12 w-64 md:h-16 md:w-80" />
					<Skeleton className="h-12 w-48 md:h-16 md:w-60" />
				</div>

				<div className="space-y-3">
					<Skeleton className="h-5 w-full" />
					<Skeleton className="h-5 w-[95%]" />
					<Skeleton className="h-5 w-[82%]" />
				</div>
			</div>

			{/* Stats */}
			<div className="grid gap-6 md:grid-cols-3">
				{stats.map((stat) => (
					<div
						key={stat.label}
						className="rounded-3xl border border-border bg-background-white p-8 shadow-sm"
					>
						<Skeleton className="mx-auto h-12 w-20" />
						<Skeleton className="mx-auto mt-4 h-4 w-24" />
					</div>
				))}
			</div>

			{/* Education + Technologies */}
			<div className="grid gap-10 lg:grid-cols-2">
				{/* Timeline */}
				<div className="relative border-l-2 border-border pl-8">
					{timeline.map((item) => (
						<div key={item.title} className="relative mb-10 last:mb-0">
							<div className="absolute -left-10.5 top-1 h-5 w-5 rounded-full bg-border" />

							<Skeleton className="h-3 w-16" />
							<Skeleton className="mt-3 h-6 w-44" />
							<Skeleton className="mt-2 h-4 w-36" />

							{item.current && (
								<Skeleton className="mt-4 h-7 w-20 rounded-full" />
							)}
						</div>
					))}
				</div>

				{/* Technologies */}
				<div className="rounded-3xl border border-border bg-background-white p-8 shadow-sm">
					<Skeleton className="mb-8 h-9 w-64" />{" "}
					<div className="space-y-8">
						{Object.entries(technologies).map(([group, techs]) => (
							<div key={group}>
								<Skeleton className="mb-4 h-3 w-28" />{" "}
								<div className="flex flex-wrap gap-4">
									{techs.map(({ name }) => (
										<Skeleton
											key={name}
											className="h-16 w-16 rounded-2xl border border-border bg-background"
										/>
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
