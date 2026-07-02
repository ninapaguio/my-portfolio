"use client";

import { motion } from "motion/react";

interface HomeIntroProps {
	children: React.ReactNode;
}

const container = {
	hidden: {},
	show: {
		transition: {
			staggerChildren: 0.08,
		},
	},
};

const item = {
	hidden: { opacity: 0, y: 14 },
	show: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.6, ease: "easeOut" as const },
	},
};

export default function HomeIntro({ children }: HomeIntroProps) {
	return (
		<motion.div
			variants={container}
			initial="hidden"
			animate="show"
			className="relative z-10 flex flex-col gap-4 md:w-1/2 md:max-w-xl"
		>
			<motion.p
				variants={item}
				className="label-eyebrow tracking-widest text-secondary-text/70"
			>
				Portfolio
			</motion.p>

			<motion.p variants={item} className="body-lead max-w-2xl">
				Hi, my name is
			</motion.p>

			<motion.h1
				variants={item}
				className="font-display text-6xl leading-none font-bold tracking-tight md:text-8xl"
			>
				Niñalene!
			</motion.h1>

			<motion.div variants={item} className="flex items-center gap-3">
				<p className="font-display text-2xl italic font-semibold text-accent-secondary-deep">
					Backend Web Developer
				</p>
			</motion.div>

			<motion.p variants={item} className="body-lead max-w-2xl">
				My goal is to create seamless and efficient user experiences through
				clean and maintainable code.
			</motion.p>

			<motion.div variants={item} className="flex flex-wrap gap-4">
				{children}
			</motion.div>
		</motion.div>
	);
}
