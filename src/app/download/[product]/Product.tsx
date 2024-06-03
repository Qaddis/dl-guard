"use client"

import Button from "@/components/ui/Buttons/Button"
import OutlineButton from "@/components/ui/Buttons/OutlineButton"
import type { MaterialsLiType } from "@/data"
import { motion } from "framer-motion"
import { useRouter } from "next/navigation"
import classes from "./Product.module.scss"

export default function Product({
	title,
	description,
	path,
	howWork,
	techs
}: MaterialsLiType) {
	const navigation = useRouter()

	if (title === "none") navigation.replace("/not-found")

	const goBack = (): void => {
		navigation.push("/download")
	}

	return (
		<section>
			<motion.div
				initial={{ y: "10%" }}
				animate={{ y: 0 }}
				transition={{ delay: 0.2, duration: 0.35 }}
				className={`wrapper ${classes.product}`}
			>
				{title !== "none" ? (
					<>
						<h2 className="heading">
							DL Guard | <span>{title}</span>
						</h2>

						<h3 className={classes.heading}>Описание</h3>
						<p className={classes.description}>{description}</p>

						<h3 className={classes.heading}>Принцип работы</h3>
						<p
							className={classes["how-work"]}
							dangerouslySetInnerHTML={{ __html: howWork }}
						/>

						<h3 className={classes.heading}>Технологии</h3>
						<ol className={classes.techs}>
							{techs.map(item => (
								<li>{item}</li>
							))}
						</ol>

						<div className={classes.buttons}>
							{path ? (
								<a href={path} download>
									<Button>Скачать</Button>
								</a>
							) : (
								<Button disabled>Скачать</Button>
							)}
							<OutlineButton onClick={goBack}>Назад</OutlineButton>
						</div>
					</>
				) : (
					<h2 className="heading">None</h2>
				)}
			</motion.div>
		</section>
	)
}
