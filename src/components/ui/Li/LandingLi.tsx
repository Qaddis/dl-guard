import type { LandingLiType } from "@/data"
import { motion } from "framer-motion"
import classes from "./Li.module.scss"

type PropsType = {
	type: "advs" | "techs"
	isRight: boolean
	isInView: boolean
	delay: number
} & LandingLiType

export default function ListItem({
	title,
	description,
	isRight,
	type,
	isInView,
	delay
}: PropsType) {
	const getClassNames = (): string => {
		let className = `${classes.item}`
		if (type === "techs") className += ` ${classes.techs}`
		if (isRight) className += ` ${classes.right}`

		return className
	}

	return (
		<motion.li
			initial={false}
			animate={{ x: isInView ? 0 : isRight ? "100%" : "-100%" }}
			transition={{ duration: 0.25, ease: "easeInOut", delay: delay }}
			className={getClassNames()}
		>
			<h3 dangerouslySetInnerHTML={{ __html: title }} />
			<p>{description}</p>
		</motion.li>
	)
}
