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
		"A web application for Filipino grammar error correction using an NMT Transformer approach.",
		problem:
			"Filipino grammar error correction is a challenging task due to linguistic complexity and limited low-resource NLP datasets. Pluma addresses this by providing an accessible web application that detects and corrects grammatical errors in Filipino text.",
		approach:
			"Employed an NMT Transformer approach to train models for generating synthetic training datasets and correcting Filipino grammar errors. The web application was built with Flask and deployed on HuggingFace Spaces.",
		outcome:
			"Achieved reliable grammar correction by maintaining high precision and conservative error correction boundaries.",
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
			"Designing an AI opponent capable of making logical, competitive board decisions in real time without relying on pure random guessing.",
		approach:
			"Implemented rule-based AI decision algorithms to create an engaging competitive Minesweeper experience where human players challenge an AI opponent.",
		outcome:
			"Delivered an entertaining, responsive game dynamic that balances strategic board play with competitive AI interactions.",
		stack: ["Python", "JavaScript", "Flask"],
		image: ["/mindsweeperKitties.png", "/mindsweeperKittiesViewDetails.png"],
	},
	{
		slug: "lab-pup-scheduling-system",
		title: "Lab Pup Scheduling System",
		year: "2024 – 2025",
		role: "Full-stack contributor",
		oneLiner:
			"A web application designed to reserve and manage laboratory rooms for university faculty.",
		problem:
			"Streamlining laboratory room reservations to avoid scheduling conflicts and provide faculty with real-time room availability.",
		approach:
			"Developed a full-stack web application using HTML, CSS, JavaScript, and PHP enabling faculty members to reserve laboratory rooms, monitor schedules, and manage bookings.",
		outcome:
			"While constrained by academic timelines, it served as an invaluable foundational experience in end-to-end full-stack development and database-driven workflows.",
		stack: ["JavaScript", "PHP"],
		image: ["/labPup.png", "/labPupViewDetails.png"],
	},
	{
		slug: "my-blog",
		title: "My Blog",
		year: "2026",
		role: "Full-stack Developer",
		oneLiner:
			"Full-stack Next.js 16 blog with instant multi-tag filtering, interactive discussions, and rate-limited Server Actions.",
		problem:
			"Traditional blogging platforms often feel sluggish and lack built-in abuse prevention for public comment and post submissions.",
		approach:
			"Utilized Next.js 16 App Router, React 19, and Drizzle ORM on PostgreSQL with Zod-validated Server Actions, in-memory IP rate limiting, and client-side combobox search.",
		outcome:
			"Delivered an optimized, secure blog with instant article discovery, animated UI transitions, and protected content workflows.",
		stack: [
			"Next.js",
			"React",
			"TypeScript",
			"ORM",
			"PostgreSQL",
			"Tailwind CSS",
			"Motion",
			"Zod",
		],
		image: ["/myBlog.png", "/myBlogViewDetails.png"],
	},
	{
		slug: "everflow",
		title: "Everflow",
		year: "2026",
		role: "FullStack Developer",
		oneLiner:
			"Real-time collaborative project management workspace with optimistic Kanban boards and role-based permissions.",
		problem:
			"Managing project lifecycles and team tasks often suffers from UI latency during high-frequency board edits and lack of robust access controls.",
		approach:
			"Built on Next.js 16 and TypeScript, combining Drizzle ORM/PostgreSQL with Clerk authentication for server-enforced RBAC, Zustand for optimistic drag-and-drop updates, and Pusher for live team sync.",
		outcome:
			"Achieved a highly responsive, zero-latency task management experience with automated rollbacks on mutation failure and full real-time collaboration.",
		stack: [
			"Next.js",
			"React",
			"TypeScript",
			"Tailwind CSS",
			"Zustand",
			"ORM",
			"PostgreSQL",
			"Clerk",
		],
		image: ["/everflowViewDetails.png", "/everflow.png"],
	}
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
