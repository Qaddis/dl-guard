import Footer from "@/components/AppFooter"
import Header from "@/components/AppHeader"
import type { Metadata } from "next"
import { Dancing_Script, Nunito, Roboto_Slab } from "next/font/google"
import "./globals.scss"

const nunito = Nunito({
	weight: ["400", "700"],
	variable: "--nu-font",
	subsets: ["cyrillic"]
})

const roboto = Roboto_Slab({
	weight: ["400", "600"],
	subsets: ["cyrillic"],
	variable: "--rb-font"
})

const dancing = Dancing_Script({
	weight: "400",
	variable: "--ds-font",
	subsets: ["latin"]
})

export const metadata: Metadata = {
	title: "DL Guard",
	description: "By Qaddis with love =)"
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
				<Header />

				<main className="main">{children}</main>

				<Footer />
			</body>
		</html>
	)
}
