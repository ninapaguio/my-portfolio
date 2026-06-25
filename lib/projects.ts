export interface ProjectLink {
	label: string;
	href: string;
}

export interface Project {
	slug: string;
	title: string;
	year: string;
	role: string;
	oneLiner: string;
	problem: string;
	approach: string;
	outcome: string;
	stack: string[];
	image: string[];
	links: ProjectLink[];
}

export const projects: Project[] = [
	{
		slug: "pluma",
		title: "Pluma",
		year: "2025 – 2026",
		role: "ML & full-stack contributor",
		oneLiner: "A web application for Filipino grammar error correction.",
		problem: "problem sample",
		approach: "approach sample",
		outcome: "outcome sample",
		stack: [],
		image: ["/pluma.png", "/pluma-viewDetails.png"],
		links: [],
	},
	{
		slug: "mindsweeper-kitties",
		title: "Mindsweeper Kitties",
		year: "2025",
		role: "Frontend developer",
		oneLiner:
			"An interactive game featuring classic Minesweeper mechanics with added competitive elements for human vs. AI gameplay.",
		problem: "problem sample",
		approach: "approach sample",
		outcome: "outcome sample",
		stack: [],
		image: ["/mindsweeper-kitties.png", "/mindsweeper-kitties-viewDetails.png"],
		links: [],
	},
	{
		slug: "lab-pup-scheduling-system",
		title: "Lab Pup Scheduling System",
		year: "2024 – 2025",
		role: "Full-stack contributor",
		oneLiner:
			"A web application designed to reserve and manage laboratory rooms for faculty at the university.",
		problem: "problem sample",
		approach: "approach sample",
		outcome: "outcome sample",
		stack: [],
		image: ["/lab-pup.png", "/lab-pup-viewDetails.png"],
		links: [],
	},
];

export function getProjectBySlug(slug: string): Project | undefined {
	return projects.find((project) => project.slug === slug);
}
