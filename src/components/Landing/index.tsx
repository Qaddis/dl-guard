"use client"

import { Canvas } from "@react-three/fiber"
import { useRouter } from "next/navigation"
import { Suspense } from "react"
import { Model } from "../Lock3D"
import Button from "../ui/Buttons/Button"
import OutlineButton from "../ui/Buttons/OutlineButton"
import classes from "./Landing.module.scss"

export default function Landing() {
	const navigation = useRouter()

	const scrollToAbout = (): void => {
		const content = document.getElementById("about")
		if (content) content.scrollIntoView({ behavior: "smooth", block: "start" })
	}

	return (
		<section className={classes.landing}>
			<div className={classes.info}>
				<h2 className={classes.heading}>
					<em>Открытый</em> код.
					<br />
					<em>Надёжная</em> защита.
				</h2>
				<p className={classes.description}>
					Система электронных пропусков с открытым исходным кодом и возможностью
					дальнейшей доработки.
				</p>
				<div className={classes.buttons}>
					<Button onClick={scrollToAbout}>Узнать больше</Button>
					<span>или</span>
					<OutlineButton onClick={() => navigation.push("/download")}>
						Скачать
					</OutlineButton>
				</div>
			</div>

			<div className={classes["lock-3d"]}>
				<Canvas camera={{ position: [0, 1.5, 6], zoom: 2.6 }}>
					<ambientLight intensity={2} />
					<pointLight
						position={[0, -0.5, 6]}
						intensity={Math.PI * 2}
						castShadow
					/>
					<directionalLight
						position={[0, 3, 3]}
						intensity={Math.PI}
						castShadow
					/>
					<Suspense fallback={null}>
						<Model position={[0, -0.5, 0]} />
					</Suspense>
				</Canvas>
			</div>
		</section>
	)
}
