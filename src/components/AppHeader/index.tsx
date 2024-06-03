"use client"

import { useActions } from "@/redux/hooks"
import { motion, useMotionValueEvent, useScroll } from "framer-motion"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { useState } from "react"
import NavLink from "../ui/NavLink"
import classes from "./AppHeader.module.scss"

export default function Header() {
	const [isHidden, setIsHidden] = useState<boolean>(false)
	const { scrollY } = useScroll()
	const navigation = useRouter()
	const { toggleModal } = useActions()

	useMotionValueEvent(scrollY, "change", latest => {
		const previously = scrollY.getPrevious()

		if (previously) {
			if (latest > 150 && latest > previously) {
				if (latest - previously > 10) setIsHidden(true)
			} else {
				if (previously - latest > 10) setIsHidden(false)
			}
		}
	})

	const handleLogoClick = (): void => {
		navigation.push("/")
	}

	return (
		<motion.header
			initial={false}
			animate={isHidden ? "hidden" : "show"}
			variants={{ show: { y: 0 }, hidden: { y: "-100%" } }}
			transition={{
				duration: 0.25,
				ease: "easeOut"
			}}
			className={classes.header}
		>
			<div className={`wrapper ${classes.wrapper}`}>
				<h1
					title="На главную"
					className={classes.logo}
					onClick={handleLogoClick}
				>
					<Image src="/favicon.png" alt="Logo" width={360} height={360} />
					<span>
						<em>DL</em> Guard
					</span>
					<span onClick={e => e.stopPropagation()} className={classes.badge}>
						2.0
					</span>
				</h1>

				<nav className={classes.nav}>
					<NavLink to="/">Главная</NavLink>
					<NavLink to="/download">Скачать</NavLink>
					<NavLink to="/about">О проекте</NavLink>
				</nav>

				<button className={classes.burger} onClick={() => toggleModal()}>
					<Image
						src="/burger.png"
						width={256}
						height={256}
						alt="Open Navigation"
					/>
				</button>
			</div>
		</motion.header>
	)
}
