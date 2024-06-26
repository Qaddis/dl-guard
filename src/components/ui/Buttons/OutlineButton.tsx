import type { CSSProperties, PropsWithChildren } from "react"
import classes from "./buttons.module.scss"

interface IProps extends PropsWithChildren {
	styles?: CSSProperties
	onClick?: Function
	disabled?: boolean
	title?: string
}

export default function OutlineButton({
	children,
	styles,
	onClick,
	disabled,
	title
}: IProps) {
	const handleClick = (): void => {
		if (onClick) disabled ? null : onClick()
	}

	const getClassNames = (): string => {
		return disabled
			? `${classes.button} ${classes.outline} ${classes.disabled}`
			: `${classes.button} ${classes.outline}`
	}

	return (
		<button
			title={disabled ? "Недоступно" : title}
			onClick={handleClick}
			style={styles}
			className={getClassNames()}
		>
			{children}
		</button>
	)
}
