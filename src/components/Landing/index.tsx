"use client"

import { Canvas } from "@react-three/fiber"
import { useInView } from "framer-motion"
import { useRouter } from "next/navigation"
import { Suspense, useEffect, useRef } from "react"
import type { Group } from "three"
import { Model } from "../Lock3D"
import Button from "../ui/Buttons/Button"
import OutlineButton from "../ui/Buttons/OutlineButton"
import classes from "./landing.module.scss"

export default function Landing() {
	const navigation = useRouter()

	const scrollToAbout = (): void => {
		const content = document.getElementById("about")
		if (content) content.scrollIntoView({ behavior: "smooth", block: "start" })
	}

	const sectRef = useRef<HTMLDivElement>(null)
	const sectInView = useInView(sectRef, { amount: 0.3, once: false })

	const group = useRef<Group>(null)
	const cursorPos = useRef<{ x: number; y: number }>({ x: 0, y: 0 })

	useEffect(() => {
		const { clientWidth, clientHeight } = document.documentElement

		const handleMouse = (): void => {
			if (group.current && sectInView) {
				const x: number = (cursorPos.current.x / clientWidth) * 2 - 1
				const y: number = -(cursorPos.current.y / clientHeight) * 2 + 1

				group.current.rotation.x = -y
				group.current.rotation.y = x
			}
		}

		const handleMouseMove = (event: MouseEvent): void => {
			if (clientWidth > 768) {
				cursorPos.current.x = event.clientX
				cursorPos.current.y = event.clientY
				handleMouse()
			}
		}

		document.addEventListener("mousemove", handleMouseMove)

		return () => {
			document.removeEventListener("mousemove", handleMouseMove)
		}
	})

	return (
		<section ref={sectRef} className={classes.landing}>
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
					<pointLight position={[0, -0.5, 6]} intensity={8} castShadow />
					<directionalLight position={[0, 3, 3]} intensity={3.5} castShadow />
					<Suspense fallback={null}>
						<Model group={group} position={[0, -0.5, 0]} />
					</Suspense>
				</Canvas>
			</div>
		</section>
	)
}
