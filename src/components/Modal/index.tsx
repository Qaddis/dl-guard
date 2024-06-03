"use client"

import { useActions, useAppSelector } from "@/redux/hooks"
import { motion } from "framer-motion"
import { useRouter } from "next/navigation"
import { MouseEvent, useEffect, useState } from "react"
import NavLink from "../ui/NavLink"
import classes from "./Modal.module.scss"

export default function Modal() {
	const modalActive: boolean = useAppSelector(
		state => state.modalReducer
	).isShow
	const [isShow, setIsShow] = useState<boolean>(modalActive)
	const { toggleModal } = useActions()
	const navigation = useRouter()

	const closeModal = (): void => {
		setIsShow(false)
		setTimeout(() => toggleModal(), 350)
	}

	const goTo = (evt: MouseEvent<HTMLAnchorElement>, to: string): void => {
		evt.preventDefault()
		closeModal()
		navigation.push(to)
	}

	useEffect(() => {
		if (modalActive) setIsShow(true)
	}, [modalActive])

	return (
		<motion.div
			initial={false}
			animate={isShow ? "show" : "hidden"}
			variants={{ show: { opacity: 1 }, hidden: { opacity: 0 } }}
			transition={{ duration: 0.2, delay: !isShow ? 0.15 : 0 }}
			className={
				modalActive ? `${classes.modal} ${classes.active}` : classes.modal
			}
			onClick={closeModal}
		>
			<motion.section
				initial={false}
				variants={{ show: { x: 0 }, hidden: { x: "100%" } }}
				transition={{ duration: 0.2, delay: isShow ? 0.15 : 0 }}
				className={classes["modal-content"]}
				onClick={evt => evt.stopPropagation()}
			>
				<h2 className={classes.heading}>Навигация</h2>

				<nav className={classes.nav}>
					<NavLink onClick={evt => goTo(evt, "/")} to="/">
						Главная
					</NavLink>
					<NavLink onClick={evt => goTo(evt, "/download")} to="/download">
						Скачать
					</NavLink>
					<NavLink onClick={evt => goTo(evt, "/about")} to="/about">
						О проекте
					</NavLink>
				</nav>
			</motion.section>
		</motion.div>
	)
}
