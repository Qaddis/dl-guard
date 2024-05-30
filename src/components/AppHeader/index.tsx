"use client"

import { motion, useMotionValueEvent, useScroll } from "framer-motion"
import Image from "next/image"
import { useState } from "react"
import NavLink from "../ui/NavLink"
import classes from "./AppHeader.module.scss"

export default function Header() {
	const [isHidden, setIsHidden] = useState<boolean>(false)
	const { scrollY } = useScroll()

	useMotionValueEvent(scrollY, "change", latest => {
		const previously = scrollY.getPrevious()

		if (previously) {
			if (latest > 100 && latest > previously) {
				if (latest - previously > 10) setIsHidden(true)
			} else {
				if (previously - latest > 10) setIsHidden(false)
			}
		}
	})

	return (
		<motion.header
			initial={false}
			animate={isHidden ? "hidden" : "show"}
			variants={{ show: { y: 0 }, hidden: { y: "-100%" } }}
			transition={{
				delay: isHidden ? 0.25 : 0,
				duration: 0.35,
				ease: "easeOut"
			}}
			className={classes.header}
		>
			<div className={`wrapper ${classes.wrapper}`}>
				<motion.h1
					initial={false}
					variants={{ show: { x: 0 }, hidden: { x: "-200%" } }}
					transition={{
						delay: isHidden ? 0 : 0.35,
						duration: 0.25,
						ease: "easeOut"
					}}
					className={classes.logo}
				>
					<Image src="/favicon.png" alt="Logo" width={360} height={360} />
					<span>
						<em>DL</em> Guard
					</span>
					<span className={classes.badge}>2.0</span>
				</motion.h1>

				<motion.nav
					initial={false}
					variants={{ show: { x: 0 }, hidden: { x: "200%" } }}
					transition={{
						delay: isHidden ? 0 : 0.35,
						duration: 0.25,
						ease: "easeOut"
					}}
					className={classes.nav}
				>
					<NavLink to="/">Главная</NavLink>
					<NavLink to="/download">Скачать</NavLink>
					<NavLink to="/about">О проекте</NavLink>
				</motion.nav>
			</div>
		</motion.header>
	)
}
