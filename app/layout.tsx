import type { Metadata } from "next";
import { Fraunces, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";

const fraunces = Fraunces({
	subsets: ["latin"],
	variable: "--font-fraunces",
	weight: ["400", "500", "600", "700"],
});

const inter = Inter({
	subsets: ["latin"],
	variable: "--font-inter",
	weight: ["400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
	subsets: ["latin"],
	variable: "--font-jetbrains-mono",
	weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
	title: {
		default: "NP Portfolio",
		template: "%s · NP Portfolio",
	},
	description:
		"A portfolio site built with Next.js, showcasing projects and experience.",
};

interface RootLayoutProps {
	children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
	return (
		<html
			lang="en"
			className={`${fraunces.variable} ${inter.variable} ${jetbrainsMono.variable}`}
		>
			<body
				id="top"
				className="font-body bg-background text-primary-text antialiased flex min-h-screen flex-col"
			>
				<NavBar />
				<main
					id="main-content"
					className="mx-auto flex w-full max-w-7xl flex-1 flex-col px-4 py-12 md:px-10"
				>
					{children}
				</main>
				<Footer />
			</body>
		</html>
	);
}
