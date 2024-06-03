"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

export default function Template({ children }: { children: ReactNode }) {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ delay: 0.35 }}
		>
			{children}
		</motion.div>
	)
}
