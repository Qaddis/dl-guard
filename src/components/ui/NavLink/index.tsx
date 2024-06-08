"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import type { CSSProperties, MouseEventHandler, PropsWithChildren } from "react"
import classes from "./nav-link.module.scss"

interface IProps extends PropsWithChildren {
	to: string
	styles?: CSSProperties
	onClick?: MouseEventHandler<HTMLAnchorElement>
}

export default function NavLink({ children, to, styles, onClick }: IProps) {
	const path = usePathname()

	return (
		<Link
			style={styles}
			className={
				path === to ? `${classes.link} ${classes.active}` : classes.link
			}
			onClick={onClick}
			href={to}
		>
			{children}
		</Link>
	)
}
