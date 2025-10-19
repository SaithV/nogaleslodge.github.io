export const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.21, 0.47, 0.32, 0.99] } },
}

export const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
}
