import { motion } from 'framer-motion'
import { fadeUp } from '@/lib/motion'

export function ImpactSection({ stats }: { stats: { label: string; value: string }[] }) {
  return (
    <section aria-labelledby="impact-heading" className="section bg-[#0e2235]">
      <div className="container">
  <motion.h2 id="impact-heading" variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} className="h2-tight text-white">Our Impact</motion.h2>
        <div className="mt-8 grid sm:grid-cols-3 gap-6">
          {stats.map((s, i) => (
            <motion.div key={i} initial={{opacity:0,y:10}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*0.05}} className="rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 px-6 py-8 text-white">
              <p className="text-4xl md:text-5xl font-semibold tracking-tight">{s.value}</p>
              <p className="mt-2 text-sm text-white/70">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
