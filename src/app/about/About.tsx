"use client"

import classes from "./About.module.scss"

export default function About() {
	return (
		<section>
			<div className={`wrapper ${classes.about}`}>
				<h2 className="heading">О проекте</h2>
				<p className={classes.text}>
					<span>DL Guard</span> - проект, выполненный одним человеком. <br />
					Изначально создавался как школьный проект за 10ый класс, в дальнейшем
					был доработан. <br />
					<span>Полностью бесплатный, с открытым исходным кодом</span>.
				</p>

				<ul className={classes.links}>
					<li>
						<a href="https://github.com/qaddis" target="_blank">
							Автор проекта
						</a>
					</li>

					<li>
						<a href="http://github.com/qaddis/dl-guard" target="_blank">
							Репозиторий на Github (сайт)
						</a>
					</li>

					<li>
						<a
							target="_blank"
							href="https://github.com/qaddis/dl-guard-sources"
						>
							Исходники
						</a>
					</li>

					<li>
						<a target="_blank" href="https://github.com/qaddis/dl-guard-web">
							Dl Guard (Старая версия)
						</a>
					</li>
				</ul>

				<hr />

				<h3>Credits</h3>
				<ul className={classes.credits}>
					<li>
						<a href="https://fonts.google.com/" target="_blank">
							Google Fonts
						</a>{" "}
						- шрифты (Nunito, <i>Roboto Slab</i>, <i>Dancing Script</i>)
					</li>
					<li>
						<a href="https://iconfinder.com/" target="_blank">
							Iconfinder
						</a>{" "}
						- иконки (VK, TG, Github, Burger)
					</li>
					<li>
						<a href="https://vercel.com/" target="_blank">
							Vercel
						</a>{" "}
						- хостинг
					</li>
				</ul>
			</div>
		</section>
	)
}
