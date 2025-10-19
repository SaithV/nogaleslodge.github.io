import { useInView } from 'react-intersection-observer'
import { useEffect, useState } from 'react'

export default function AnimatedStat({ end, label }: { end: number; label: string }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.4 })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!inView) return
    let start = 0
    const duration = 1500
    const increment = end / (duration / 16)
    const timer = setInterval(() => {
      start += increment
      if (start >= end) {
        start = end
        clearInterval(timer)
      }
      setCount(Math.floor(start))
    }, 16)
    return () => clearInterval(timer)
  }, [inView, end])

  return (
    <div ref={ref} className="flex flex-col items-center text-white">
      <span className="text-4xl md:text-5xl font-bold">{count}+</span>
      <p className="text-sm text-white/70">{label}</p>
    </div>
  )
}
