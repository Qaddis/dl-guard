"use client"

import type { Transition, Variants } from "framer-motion"
import { motion, useInView } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import classes from "./explanations.module.scss"

const enum infEnum {
	device = 0,
	soft = 1,
	server = 2
}

export default function Explanations() {
	const explanations: string[] = [
		`<b>Устройство</b> считывает уникальный идентификатор пропуска и выводит его в серийный порт, где его считывает приложение <b>"DL Guard | PC"</b>`,
		`<b>Приложение</b> считывает информацию с <b>устройств</b>,
		делает запрос на <b>сервер</b>, получает ответ и выводит результат.`,
		`<b>Сервер</b> получает уникальный номер пропуска от приложения <b>"DL Guard | PC"</b>,
		делает запрос к базе данных и отправляет ответ обратно на устройство.`
	]

	const [inf, setInf] = useState<infEnum>(infEnum.device)
	const [isShow, setIsShow] = useState<boolean>(false)

	const onLeave = (): void => {
		setIsShow(false)
	}

	const partsRef = useRef<HTMLDivElement>(null)
	const partsInView = useInView(partsRef, { amount: 0.6, once: true })

	const variants: Variants = {
		hidden: {
			y: "100%"
		},
		show: {
			y: 0
		}
	}

	const transition: Transition = {
		duration: 0.2,
		ease: "easeInOut"
	}

	const [helper, setHelper] = useState<string>()

	useEffect(() => {
		if (window.innerWidth > 768) {
			setHelper("Наведите указатель, чтобы узнать подробнее")
		} else {
			setHelper("Нажмите на элемент, чтобы узнать подробнее")
		}
	})

	return (
		<section id="about" className={classes.information}>
			<h2 className={classes.heading}>
				Как устроена система <span>DL Guard</span>?
			</h2>
			<p>{helper}</p>

			<motion.div
				initial={false}
				animate={partsInView ? "show" : "hidden"}
				ref={partsRef}
				className={classes.parts}
			>
				<motion.div
					onMouseLeave={onLeave}
					onMouseEnter={() => {
						setIsShow(true)
						setInf(infEnum.device)
					}}
					variants={variants}
					transition={{ ...transition, delay: 0.12 }}
					className={classes.part}
				>
					Считывающее устройство
				</motion.div>

				<motion.div
					onMouseLeave={onLeave}
					onMouseEnter={() => {
						setIsShow(true)
						setInf(infEnum.soft)
					}}
					variants={variants}
					transition={{ ...transition, delay: 0.22 }}
					className={classes.part}
				>
					Компьютерное приложение
				</motion.div>

				<motion.div
					onMouseLeave={onLeave}
					onMouseEnter={() => {
						setIsShow(true)
						setInf(infEnum.server)
					}}
					variants={variants}
					transition={{ ...transition, delay: 0.32 }}
					className={classes.part}
				>
					Сервер
				</motion.div>
			</motion.div>

			<motion.div
				initial={false}
				animate={{ opacity: isShow ? 1 : 0 }}
				className={classes.inf}
				dangerouslySetInnerHTML={{ __html: explanations[inf] }}
			/>
		</section>
	)
}
