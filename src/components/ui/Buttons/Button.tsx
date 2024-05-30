import type { CSSProperties, PropsWithChildren } from "react"
import classes from "./Buttons.module.scss"

interface IProps extends PropsWithChildren {
	styles?: CSSProperties
	onClick?: Function
	disabled?: boolean
}

export default function Button({
	children,
	styles,
	onClick,
	disabled
}: IProps) {
	const handleClick = (): void => {
		if (onClick) disabled ? null : onClick()
	}

	const getClassNames = (): string => {
		return disabled ? `${classes.button} ${classes.disabled}` : classes.button
	}

	return (
		<button onClick={handleClick} style={styles} className={getClassNames()}>
			{children}
		</button>
	)
}
