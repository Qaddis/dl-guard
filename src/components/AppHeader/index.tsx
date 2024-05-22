"use client"

import Image from "next/image"
import type { FC } from "react"
import NavLink from "../ui/NavLink"
import classes from "./AppHeader.module.scss"

const Header: FC = () => {
	return (
		<header className={classes.header}>
			<div className={`wrapper ${classes.wrapper}`}>
				<h1 className={classes.logo}>
					<Image src="/favicon.png" alt="Logo" width={360} height={360} />
					<span>
						<em>DL</em> Guard
					</span>
					<span className={classes.badge}>2.0</span>
				</h1>

				<nav className={classes.nav}>
					<NavLink to="/">Главная</NavLink>
					<NavLink to="/download">Скачать</NavLink>
					<NavLink to="/about">О проекте</NavLink>
				</nav>
			</div>
		</header>
	)
}

export default Header
