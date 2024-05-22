"use client"

import Image from "next/image"
import type { FC } from "react"
import classes from "./AppHeader.module.scss"

const Header: FC = () => {
	return (
		<header className={classes.header}>
			<h1 className={classes.logo}>
				<Image src="/logo.png" alt="Logo" width={60} height={60} />
				DL Guard
			</h1>

			<nav className={classes.nav}></nav>
		</header>
	)
}

export default Header
