"use client"

import { usePathname } from "next/navigation"
import type { CSSProperties, FC, ReactNode } from "react"
import classes from "./NavLink.module.scss"

interface IProps {
	children: ReactNode
	to: string
	styles?: CSSProperties
}

const NavLink: FC<IProps> = ({ children, to, styles }) => {
	const path = usePathname()

	return (
		<a
			style={styles}
			className={
				path === to ? `${classes.link} ${classes.active}` : classes.link
			}
			href={to}
		>
			{children}
		</a>
	)
}

export default NavLink
