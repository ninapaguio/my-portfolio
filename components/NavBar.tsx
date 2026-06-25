import Link from "next/link";

interface NavLink {
	href: string;
	label: string;
}

const navLinks: NavLink[] = [
	{ href: "/", label: "Home" },
	{ href: "/projects", label: "Projects" },
	{ href: "/about", label: "About" },
	{ href: "/contact", label: "Contact" },
];

export default function NavBar() {
	return (
		<header className="sticky top-0 z-40 border-b border-border/40 bg-background/90 backdrop-blur">
			<nav className="mx-auto flex max-w-3xl items-center justify-center gap-8 px-6 py-6 md:px-10">
				{navLinks.map((link) => (
					<Link
						key={link.href}
						href={link.href}
						className="font-mono text-sm text-primary-text transition-colors hover:text-accent-primary-deep"
					>
						{link.label}
					</Link>
				))}
			</nav>
		</header>
	);
}
