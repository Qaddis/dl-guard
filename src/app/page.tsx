"use client"

import Button from "@/components/ui/Button"
import OutlineButton from "@/components/ui/OutlineButton"
import classes from "./home.module.scss"

export default function Home() {
	return (
		<div className="wrapper">
			<section className={classes.landing}>
				<div className={classes.info}>
					<h2 className={classes.heading}>
						<em>Открытый</em> код.
						<br />
						<em>Надёжная</em> защита.
					</h2>
					<p className={classes.description}>
						Система электронных пропусков с открытым исходным кодом и
						возможностью дальнейшей доработки.
					</p>
					<div className={classes.buttons}>
						<Button>Узнать больше</Button>
						<span>или</span>
						<OutlineButton>Скачать</OutlineButton>
					</div>
				</div>
				<div className={classes["3d-model"]}></div>
			</section>
		</div>
	)
}
