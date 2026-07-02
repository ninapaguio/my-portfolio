"use client";

import { motion } from "motion/react";

interface ProfileRevealProps {
	children: React.ReactNode;
}

export default function ProfileReveal({ children }: ProfileRevealProps) {
	return (
		<motion.div
			initial={{ opacity: 0, y: 14, scale: 0.98 }}
			animate={{ opacity: 1, y: 0, scale: 1 }}
			transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
			className="relative flex w-full max-w-lg shrink-0 flex-col items-center pb-6 md:max-w-xl md:pb-0 md:fixed md:top-24 md:right-10 md:bottom-0 md:left-260 md:z-0 md:w-[clamp(380px,38vw,580px)] lg:right-16 xl:right-24"
		>
			{children}
		</motion.div>
	);
}
