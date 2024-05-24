"use client"

import Landing from "@/components/Landing"
import { motion } from "framer-motion"
import { useState } from "react"
import classes from "./home.module.scss"

const enum infEnum {
	device = 0,
	soft = 1,
	server = 2
}

export default function Home() {
	const explanations: string[] = [
		`<b>Устройство</b> считывает уникальный идентификатор пропуска и выводит его в серийный порт, где его считывает приложение <b>"DL Guard | PC"</b>`,
		`<b>Приложение</b> считывает информацию с <b>устройств</b>,
		делает запрос на <b>сервер</b>, получает ответ и выводит результат.`,
		`<b>Сервер</b> получает уникальный номер пропуска от приложения <b>"DL Guard | PC"</b>,
		делает запрос к базе данных, проверяя, есть ли такой в списке разрешенных и отправляет ответ обратно на устройство.`
	]

	const [inf, setInf] = useState<infEnum>(infEnum.device)
	const [isShow, setIsShow] = useState<boolean>(false)

	const notHover = (): void => {
		setIsShow(false)
	}

	return (
		<div className="wrapper">
			<Landing />

			<section className={classes.information}>
				<h2 className={classes.heading}>Из чего состоит система?</h2>

				<div className={classes.parts}>
					<div
						onMouseLeave={notHover}
						onMouseEnter={() => {
							setIsShow(true)
							setInf(infEnum.device)
						}}
						className={classes.part}
					>
						Считывающее устройство
					</div>

					<div
						onMouseLeave={notHover}
						onMouseEnter={() => {
							setIsShow(true)
							setInf(infEnum.soft)
						}}
						className={classes.part}
					>
						Компьютерное приложение
					</div>

					<div
						onMouseLeave={notHover}
						onMouseEnter={() => {
							setIsShow(true)
							setInf(infEnum.server)
						}}
						className={classes.part}
					>
						Сервер
					</div>
				</div>

				<motion.div
					initial={false}
					animate={{ opacity: !isShow ? 0 : 1 }}
					className={classes.inf}
					dangerouslySetInnerHTML={{ __html: explanations[inf] }}
				/>
			</section>
		</div>
	)
}
