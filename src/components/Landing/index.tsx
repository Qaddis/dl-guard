"use client"

import { Canvas } from "@react-three/fiber"
import { Suspense, type FC } from "react"
import { Model } from "../Lock3D"
import Button from "../ui/Button"
import OutlineButton from "../ui/OutlineButton"
import classes from "./Landing.module.scss"

const Landing: FC = () => {
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
					<Button>Узнать больше</Button>
					<span>или</span>
					<OutlineButton>Скачать</OutlineButton>
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

export default Landing
