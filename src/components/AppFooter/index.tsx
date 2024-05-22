"use client"

import type { FC } from "react"
import classes from "./AppFooter.module.scss"

const Footer: FC = () => {
	return (
		<footer className={classes.header}>
			<ul className={classes.socials}></ul>
			<p className={classes.copyright}></p>
			<nav className={classes.nav}></nav>
		</footer>
	)
}

export default Footer
