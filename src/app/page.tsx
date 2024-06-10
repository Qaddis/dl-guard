import type { Metadata } from "next"
import Home from "./Home"

export const metadata: Metadata = {
	description:
		"DL Guard - система электронных пропусков с открытым исходным кодом и возможность дальнейшей доработки. By Qaddis"
}

export default function HomePage() {
	return <Home />
}
