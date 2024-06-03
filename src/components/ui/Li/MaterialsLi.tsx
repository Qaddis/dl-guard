"use client"

import type { MaterialsLiType } from "@/data"
import { motion } from "framer-motion"
import { useRouter } from "next/navigation"
import Button from "../Buttons/Button"
import OutlineButton from "../Buttons/OutlineButton"
import classes from "./Li.module.scss"

interface IProps extends MaterialsLiType {
	delay: number
}

export default function ListElement({
	title,
	description,
	path,
	delay
}: IProps) {
	const router = useRouter()

	const handleClick = (): void => {
		router.push("/download/" + title.toLowerCase())
	}

	return (
		<motion.li
			initial={{ rotateX: 90 }}
			animate={{ rotateX: 0 }}
			transition={{ duration: 0.35, delay: delay }}
			className={classes["materials-li"]}
		>
			<div>
				<h3 className={classes.heading}>
					DL Guard | <span>{title}</span>
				</h3>
				<p className={classes.description}>{description}</p>
			</div>
			<div>
				<OutlineButton onClick={handleClick}>Подробнее</OutlineButton>
				{path ? (
					<a href={path} download>
						<Button styles={{ width: "100%" }}>Скачать</Button>
					</a>
				) : (
					<Button styles={{ width: "100%" }} disabled>
						Скачать
					</Button>
				)}
			</div>
		</motion.li>
	)
}
