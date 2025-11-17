"use client"

import { motion } from "framer-motion"
import React from "react"

export const MotionDiv = motion.div

export const fadeInUp = {
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, ease: [0.22, 0.8, 0.12, 1] },
}

export const staggerContainer = {
  initial: { opacity: 0 },
  animate: (i = 1) => ({
    opacity: 1,
    transition: { staggerChildren: 0.08 * i, delayChildren: 0.06 },
  }),
}

export const fadeIn = (delay = 0) => ({
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { delay, duration: 0.5, ease: "easeOut" },
})
