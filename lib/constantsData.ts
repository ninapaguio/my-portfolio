// Data for the slug projects page
export function getProjectBySlug(slug: string): Project | undefined {
	return projects.find((project) => project.slug === slug);
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
		stack: ["Python", "JavaScript", "Flask"],
		image: ["/pluma.png", "/plumaViewDetails.png"],
	},
	{
		slug: "mindsweeper-kitties",
		title: "Mindsweeper Kitties",
		year: "2025",
		role: "Frontend and functionality developer",
		oneLiner:
			"An interactive game featuring classic Minesweeper mechanics with added competitive elements for human vs. AI gameplay.",
		problem:
			"Developing an AI that could make logical and competitive decisions without relying on random guesses.",
		approach:
			"Used of rule-based AI to create a competitive Minesweeper game where human players can challenge an AI opponent.",
		outcome:
			"The game was successful in providing an engaging experience for both human and AI players.",
		stack: ["Python", "JavaScript", "Flask"],
		image: ["/mindsweeperKitties.png", "/mindsweeperKittiesViewDetails.png"],
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
		stack: ["JavaScript", "PHP"],
		image: ["/labPup.png", "/labPupViewDetails.png"],
	},
];

// Data for the about page
import {
	SiCanva,
	SiFigma,
	SiFlask,
	SiGit,
	SiGithub,
	SiJavascript,
	SiLaravel,
	SiMysql,
	SiNextdotjs,
	SiPython,
	SiReact,
	SiTypescript,
} from "react-icons/si";
import { TbFileTypeSql } from "react-icons/tb";

export interface TimelineItem {
	title: string;
	subtitle: string;
	year: string;
	current?: boolean;
}

export interface StatItem {
	value: string;
	label: string;
}

export interface TechItem {
	name: string;
	icon: React.ComponentType<{ className?: string }>;
}

export const timeline: TimelineItem[] = [
	{
		year: "2026",
		title: "Software Engineering Intern",
		subtitle: "Stratpoint Technologies, Inc.",
		current: true,
	},
	{
		year: "2026",
		title: "BS Computer Science",
		subtitle: "Polytechnic University of the Philippines",
		current: true,
	},
	{
		year: "2022–2026",
		title: "DOST Undergraduate Scholar",
		subtitle: "Department of Science and Technology",
		current: true,
	},
	{
		year: "2025",
		title: "Programmer Intern",
		subtitle: "DOST – Personnel Evaluation System",
	},
];

export const stats: StatItem[] = [
	{
		value: "4+",
		label: "Years Learning",
	},
	{
		value: "2",
		label: "Internships",
	},
	{
		value: "2026",
		label: "Graduating",
	},
];

export const technologies: Record<string, TechItem[]> = {
	Languages: [
		{ name: "TypeScript", icon: SiTypescript },
		{ name: "JavaScript", icon: SiJavascript },
		{ name: "Python", icon: SiPython },
		{ name: "SQL", icon: TbFileTypeSql },
	],
	Frameworks: [
		{ name: "React", icon: SiReact },
		{ name: "Next.js", icon: SiNextdotjs },
		{ name: "Laravel", icon: SiLaravel },
		{ name: "Flask", icon: SiFlask },
	],
	Tools: [
		{ name: "Git", icon: SiGit },
		{ name: "GitHub", icon: SiGithub },
		{ name: "Figma", icon: SiFigma },
		{ name: "Canva", icon: SiCanva },
		{ name: "MySQL", icon: SiMysql },
	],
};

// Data for the contact page
export interface SocialLink {
	label: string;
	username: string;
	href: string;
	description: string;
}

export const socialLinks: SocialLink[] = [
	{
		label: "GitHub",
		username: "@ninapaguio",
		href: "https://github.com/ninapaguio",
		description: "View my projects and contributions",
	},
	{
		label: "LinkedIn",
		username: "@npaguio",
		href: "https://linkedin.com/in/npaguio",
		description: "Let's connect professionally",
	},
];
