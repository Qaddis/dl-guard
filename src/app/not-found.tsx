"use client"

import Button from "@/components/ui/Button"
import type { NextPage } from "next"
import { useRouter } from "next/navigation"
import classes from "./NotFound.module.scss"

const NotFoundPage: NextPage = () => {
	const navigation = useRouter()

	const handleClick = () => {
		navigation.replace("/")
	}

	return (
		<section>
			<div className={`wrapper ${classes.wrapper}`}>
				<h2 className={classes.heading}>
					Page <span>Not Found</span>
				</h2>

				<Button onClick={handleClick}>На главную</Button>
			</div>
		</section>
	)
}

export default NotFoundPage
