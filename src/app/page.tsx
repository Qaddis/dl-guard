"use client"

import Explanations from "@/components/Explanations"
import Landing from "@/components/Landing"
import ListItem from "@/components/ui/LandingLi"
import { advs, techs } from "@/data"
import { useInView } from "framer-motion"
import { useRef } from "react"
import classes from "./Home.module.scss"

export default function Home() {
	const advsRef = useRef<HTMLDivElement>(null)
	const techsRef = useRef<HTMLDivElement>(null)

	const advsInView = useInView(advsRef, { amount: 0.4, once: true })
	const techsInView = useInView(techsRef, { amount: 0.4, once: true })

	return (
		<div className="wrapper">
			<Landing />

			<hr />

			<Explanations />

			<hr />

			<section ref={advsRef} className={classes.advantages}>
				<h2 className="heading">Преимущества</h2>

				<ul className={classes.list}>
					{advs.map((item, index) => (
						<ListItem
							key={item.title}
							type="advs"
							title={item.title}
							description={item.description}
							isRight={(index + 1) % 2 === 0 ? true : false}
							delay={0.12 + (index + 1) / 10}
							isInView={advsInView}
						/>
					))}
				</ul>
			</section>

			<hr />

			<section ref={techsRef} className={classes.technologies}>
				<h2 className="heading">Технологии</h2>

				<ul className={classes.list}>
					{techs.map((item, index) => (
						<ListItem
							key={item.title}
							type="techs"
							title={item.title}
							description={item.description}
							isRight={(index + 1) % 2 === 0 ? true : false}
							delay={0.12 + (index + 1) / 10}
							isInView={techsInView}
						/>
					))}
				</ul>
			</section>
		</div>
	)
}
