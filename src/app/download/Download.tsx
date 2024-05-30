"use client"

import ListElement from "@/components/ui/Li/MaterialsLi"
import { mtls } from "@/data"
import classes from "./Download.module.scss"

export default function Download() {
	return (
		<section>
			<div className={`wrapper ${classes.download}`}>
				<h2 className="heading">Скачать</h2>
				<p className={classes.description}>
					На данной странице вы можете скачать готовые части системы
					<br />(<span>компьютерное приложение</span>, <span>сервер</span> или
					<span> скетч и чертежи устройства</span>)<br />
					или найти ссылку на репозиторий с исходниками.
				</p>

				<hr />

				<h3 className={classes.heading}>Готовая система</h3>
				<ul className={classes.materials}>
					{mtls.map(item => (
						<ListElement key={item.title} {...item} />
					))}
				</ul>

				<hr />

				<h3 className={classes.heading}>Исходники</h3>
				<p className={classes.sources}>
					Все исходники можно найти{" "}
					<a target="_blank" href="https://github.com/qaddis/dl-guard-sources">
						тут
					</a>
					.
				</p>
			</div>
		</section>
	)
}
