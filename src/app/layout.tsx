import Footer from "@/components/AppFooter"
import Header from "@/components/AppHeader"
import Modal from "@/components/Modal"
import StoreProvider from "@/redux/StoreProvider"
import type { Metadata } from "next"
import { Dancing_Script, Nunito, Roboto_Slab } from "next/font/google"
import "./globals.scss"

const nunito = Nunito({
	weight: ["400", "700"],
	subsets: ["cyrillic"],
	variable: "--nu-font"
})

const roboto = Roboto_Slab({
	weight: ["400", "600"],
	subsets: ["cyrillic"],
	variable: "--rb-font"
})

const dancing = Dancing_Script({
	weight: "400",
	subsets: ["latin"],
	variable: "--ds-font"
})

export const metadata: Metadata = {
	title: {
		default: "DL Guard - система электронных пропусков",
		template: "%s | DL Guard"
	},
	keywords: [
		"DL",
		"DL Guard",
		"Система электронных пропусков",
		"Qaddis",
		"Электронные пропуска"
	]
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="ru">
			<body
				className={`${nunito.variable} ${roboto.variable} ${dancing.variable}`}
			>
				<StoreProvider>
					<Header />

					<main className="main">{children}</main>

					<Modal />

					<Footer />
				</StoreProvider>
			</body>
		</html>
	)
}
