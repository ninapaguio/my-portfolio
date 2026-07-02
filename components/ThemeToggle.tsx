"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi2";
import { Button } from "@/components/ui/button";

export default function ThemeToggle() {
	const { resolvedTheme, setTheme } = useTheme();
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		return <div className="h-10 w-10" aria-hidden="true" />;
	}

	const isDark = resolvedTheme === "dark";

	return (
		<Button
			type="button"
			variant="outline"
			size="icon"
			onClick={() => setTheme(isDark ? "light" : "dark")}
			aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
			className="rounded-full border-white bg-background-deep text-primary-text transition-all duration-300 hover:-translate-y-0.5 hover:border-accent-primary hover:text-accent-primary"
		>
			{isDark ? (
				<HiOutlineSun className="h-5 w-5" />
			) : (
				<HiOutlineMoon className="h-5 w-5" />
			)}
		</Button>
	);
}
