"use client"

import type { MaterialsLiType } from "@/data"
import { useRouter } from "next/navigation"
import Button from "../Buttons/Button"
import OutlineButton from "../Buttons/OutlineButton"
import classes from "./Li.module.scss"

export default function ListElement({
	title,
	description,
	path
}: MaterialsLiType) {
	const router = useRouter()

	const handleClick = (): void => {
		router.push("/product?item=" + title.toLowerCase())
	}

	return (
		<li className={classes["materials-li"]}>
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
		</li>
	)
}
