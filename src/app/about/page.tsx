import type { Metadata } from "next"
import About from "./About"

export const metadata: Metadata = {
	title: "О проекте",
	description: "Здесь можно узнать больше о DL Guard",
	openGraph: {
		title: "Узнать больше о DL Guard",
		description: "Узнать больше о DL Guard - системе электронных пропусков",
		url: "https://dl-guard.vercel.app/about"
	},
	robots: {
		index: true,
		follow: true
	}
}

export default function AboutPage() {
	return <About />
}
