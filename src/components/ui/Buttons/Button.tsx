import type { CSSProperties, PropsWithChildren } from "react"
import classes from "./buttons.module.scss"

interface IProps extends PropsWithChildren {
	styles?: CSSProperties
	onClick?: Function
	disabled?: boolean
	title?: string
	download?: string
}

export default function Button({
	children,
	styles,
	onClick,
	disabled,
	title,
	download
}: IProps) {
	const handleClick = (): void => {
		if (!disabled) {
			if (download) {
				const link = document.createElement("a")

				link.href = download
				link.style.display = "none"

				document.body.appendChild(link)
				link.click()

				document.body.removeChild(link)
			} else if (onClick) {
				onClick()
			}
		}
	}

	const getClassNames = (): string => {
		return disabled ? `${classes.button} ${classes.disabled}` : classes.button
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
