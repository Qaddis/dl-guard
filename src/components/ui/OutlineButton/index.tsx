"use client"

import type { CSSProperties, FC, ReactNode } from "react"
import classes from "./OutlinedButton.module.scss"

interface IProps {
	children: ReactNode
	styles?: CSSProperties
	onClick?: Function
	disabled?: boolean
}

const OutlineButton: FC<IProps> = ({ children, styles, onClick, disabled }) => {
	const handleClick = (): void => {
		if (onClick) disabled ? null : onClick()
	}

	const getClassnames = (): string => {
		return disabled ? `${classes.button} ${classes.disabled}` : classes.button
	}

	return (
		<button onClick={handleClick} style={styles} className={getClassnames()}>
			{children}
		</button>
	)
}

export default OutlineButton
