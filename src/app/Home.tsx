"use client"

import Explanations from "@/components/Explanations"
import Landing from "@/components/Landing"
import ListItem from "@/components/ui/Li/LandingLi"
import { advs, techs } from "@/data"
import { useInView } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import styles from "./Home.module.scss"

export default function Home() {
	const [amount, setAmount] = useState<number>(0.4)

	const advsRef = useRef<HTMLDivElement>(null)
	const techsRef = useRef<HTMLDivElement>(null)

	const advsInView = useInView(advsRef, {
		amount: amount,
		once: true
	})
	const techsInView = useInView(techsRef, {
		amount: amount,
		once: true
	})

	useEffect(() => {
		if (window.innerWidth < 375) setAmount(0.3)
	})

	return (
		<div className="wrapper">
			<Landing />

			<hr />

			<Explanations />

			<hr />

			<section ref={advsRef} className={styles.advantages}>
				<h2 className="heading">Преимущества</h2>

				<ul className={styles.list}>
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

			<section ref={techsRef} className={styles.technologies}>
				<h2 className="heading">Технологии</h2>

				<ul className={styles.list}>
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
