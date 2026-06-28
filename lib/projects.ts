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
		oneLiner:
			"A web application for Filipino grammar error correction using NMT Transformer approach.",
		problem:
			"Filipino grammar error correction is a challenging task due to the complexity of the language and the lack of available resources." +
			"Pluma aims to address this problem by providing a web application that can correct grammar errors in Filipino text.",
		approach:
			"Used of NMT Transformer approach to train models for generating more training data and correcting grammar errors for Filipino." +
			"The web application was built using flask and deployed on HuggingFace Spaces.",
		outcome:
			"Pluma was able to achieve its goal by being conservative in correcting grammar errors.",
		stack: [],
		image: ["/pluma.png", "/pluma-viewDetails.png"],
		links: [],
	},
	{
		slug: "mindsweeper-kitties",
		title: "Mindsweeper Kitties",
		year: "2025",
		role: "Frontend and functionality developer",
		oneLiner:
			"An interactive game featuring classic Minesweeper mechanics with added competitive elements for human vs. AI gameplay.",
		problem: "",
		approach:
			"Used of rule-based AI to create a competitive Minesweeper game where human players can challenge an AI opponent.",
		outcome:
			"The game was successful in providing an engaging experience for both human and AI players.",
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
		problem:
			"A course project that aims to know the basic concepts of web development and how to create a functional web application that can be used in real-world scenarios.",
		approach:
			"Developed a full-stack web application using raw html, css, javascript and php that allows faculty members to reserve laboratory rooms, view availability, and manage their reservations.",
		outcome:
			"It was unfinished due to time constraints, but it was a great learning experience that allowed me to know the basic concepts of web development.",
		stack: [],
		image: ["/lab-pup.png", "/lab-pup-viewDetails.png"],
		links: [],
	},
];

export function getProjectBySlug(slug: string): Project | undefined {
	return projects.find((project) => project.slug === slug);
}
