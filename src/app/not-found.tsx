"use client"

import Button from "@/components/ui/Buttons/Button"
import { useRouter } from "next/navigation"
import classes from "./NotFound.module.scss"

export default function NotFoundPage() {
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

				<Button
					styles={{
						padding: "10px 25px",
						fontSize: "1.15em"
					}}
					onClick={handleClick}
				>
					На главную
				</Button>
			</div>
		</section>
	)
}
