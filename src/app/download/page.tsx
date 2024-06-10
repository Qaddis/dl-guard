import type { Metadata } from "next"
import Download from "./Download"

export const metadata: Metadata = {
	title: "Скачать",
	description: "Материалы DL Guard для скачивания. Готовая система, исходники"
	// openGraph: {
	// 	type: "website",
	// 	siteName: "DL Guard",
	// 	images: {
	// 		url: "https://dl-guard.vercel.app/og-image.png",
	// 		width: "1200",
	// 		height: "630",
	// 		alt: "DL Guard"
	// 	},
	// 	title: "Скачать готовую систему или исходники DL Guard",
	// 	description:
	// 		"Материалы DL Guard для скачивания. Готовая система, исходники",
	// 	url: "https://dl-guard.vercel.app/download"
	// }
}

export default function DownloadPage() {
	return <Download />
}
