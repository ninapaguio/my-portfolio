"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import ThemeToggle from "@/components/ThemeToggle";

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
	const pathname = usePathname();
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 8);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	return (
		<header
			className={`sticky top-0 z-50 border-b backdrop-blur-xl transition-all duration-300 ${
				scrolled
					? "border-border bg-background/95 shadow-mauve-600/10 shadow-lg"
					: "border-border/60 bg-background/80 shadow-lg"
			}`}
		>
			<nav className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-6 py-4 md:py-5">
				<div className="hidden w-10 md:block" aria-hidden="true" />

				<div className="flex items-center gap-4 md:gap-8">
					{navLinks.map((link) => {
						const active = pathname === link.href;

						return (
							<Link
								key={link.href}
								href={link.href}
								aria-current={active ? "page" : undefined}
								className="group relative px-2 py-1 font-mono text-sm transition-colors"
							>
								<span
									className={
										active
											? "text-accent-primary"
											: "text-secondary-text group-hover:text-primary-text"
									}
								>
									{link.label}
								</span>

								<span
									className={`absolute bottom-0 left-0 h-0.5 rounded-full bg-accent-primary transition-all duration-300 ${
										active ? "w-full" : "w-0 group-hover:w-full"
									}`}
								/>
							</Link>
						);
					})}
				</div>

				<ThemeToggle />
			</nav>
		</header>
	);
}
