import type { Metadata } from "next"
import About from "./About"

export const metadata: Metadata = {
	title: "О проекте",
	description: "Здесь можно узнать больше о DL Guard",
	openGraph: {
		type: "website",
		siteName: "DL Guard",
		images: {
			url: "https://dl-guard.vercel.app/og-image.png",
			width: "1200",
			height: "630",
			alt: "DL Guard"
		},
		title: "Узнать больше о DL Guard",
		description: "Узнать больше о DL Guard - системе электронных пропусков",
		url: "https://dl-guard.vercel.app/about"
	}
}

export default function AboutPage() {
	return <About />
}
