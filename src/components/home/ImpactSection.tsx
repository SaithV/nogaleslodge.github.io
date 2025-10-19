import { motion } from 'framer-motion'
import { fadeUp } from '@/lib/motion'
import AnimatedStat from '@/components/ui/AnimatedStat'

export function ImpactSection({ stats }: { stats: { label: string; value: string }[] }) {
  return (
    <section aria-labelledby="impact-heading" className="section bg-gradient-to-b from-[#0E2235] to-[#15324F]">
      <div className="container">
        <motion.h2 id="impact-heading" variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} className="h2-tight text-white">Our Impact</motion.h2>
        <div className="mt-8 grid sm:grid-cols-3 gap-3 md:gap-6">
          {stats.map((s, i) => {
            const end = parseInt(s.value.replace(/\D/g, '')) || 0
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 px-6 py-8 text-white shadow-inner transition-base hover:-translate-y-0.5 hover:shadow-[0_0_0_1px_rgba(255,255,255,0.15),0_10px_30px_rgba(0,0,0,0.2)]"
              >
                <AnimatedStat end={end} label={s.label} />
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
