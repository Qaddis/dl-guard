import type { Metadata } from "next"
import Download from "./Download"

export const metadata: Metadata = {
	title: "Скачать",
	description: "Материалы DL Guard для скачивания. Готовая система, исходники",
	openGraph: {
		title: "Скачать готовую систему или исходники DL Guard",
		description:
			"Материалы DL Guard для скачивания. Готовая система, исходники",
		url: "https://dl-guard.vercel.app/download"
	},
	robots: {
		index: true,
		follow: true
	}
}

export default function DownloadPage() {
	return <Download />
}
