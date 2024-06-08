import type { Metadata } from "next"
import Download from "./Download"

export const metadata: Metadata = {
	title: "Скачать",
	description: "Материалы DL Guard для скачивания. Готовая система, исходники",
	openGraph: {
		type: "website",
		siteName: "DL Guard",
		images: "./og-image.png",
		title: "Скачать готовую систему или исходники DL Guard",
		description:
			"Материалы DL Guard для скачивания. Готовая система, исходники",
		url: ""
	}
}

export default function DownloadPage() {
	return <Download />
}
