import type { Metadata } from "next"
import Home from "./Home"

export const metadata: Metadata = {
	description:
		"DL Guard - система электронных пропусков с открытым исходным кодом и возможность дальнейшей доработки. By Qaddis",
	openGraph: {
		type: "website",
		siteName: "DL Guard",
		images: {
			url: "https://dl-guard.vercel.app/og-image.png",
			width: "1200",
			height: "630",
			alt: "DL Guard"
		},
		title: "DL Guard - система электронных пропусков",
		description:
			"DL Guard - система электронных пропусков с открытым исходным кодом и возможность дальнейшей доработки",
		url: "https://dl-guard.vercel.app"
	}
}

export default function HomePage() {
	return <Home />
}
