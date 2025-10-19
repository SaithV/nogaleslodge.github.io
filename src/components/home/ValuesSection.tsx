import { motion } from 'framer-motion'
import { fadeUp } from '@/lib/motion'
import { Handshake, HeartHandshake, Scale, BookOpen } from 'lucide-react'

const icons: Record<string, any> = {
  morality: BookOpen,
  justice: Scale,
  charity: HeartHandshake,
  truth: Handshake,
}

export function ValuesSection({ items }: { items: { title: string; subtitle: string; value: string }[] }) {
  return (
    <section aria-labelledby="values-heading" className="container section">
  <motion.h2 id="values-heading" variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} className="h2-tight">Our Values</motion.h2>
      <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-6">
        {items.map((v, i) => {
          const Icon = icons[v.value] ?? Handshake
          return (
            <motion.div key={i} initial={{opacity:0,y:10}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*0.05}} className="group bg-white/60 dark:bg-slate-900/50 backdrop-blur-md border border-black/5 dark:border-white/5 rounded-2xl p-3 md:p-6 hover:shadow-lg hover:scale-[1.03] active:scale-[0.98] transition-base will-change-transform text-center">
              <div className="mx-auto size-10 rounded-xl bg-gold/20 flex items-center justify-center">
                <motion.div variants={fadeUp} whileInView="show" viewport={{ once: true }}>
                  <Icon className="h-5 w-5 md:h-6 md:w-6 text-[#C49A3A] animate-pulse-slow" aria-hidden />
                </motion.div>
              </div>
              <h3 className="mt-3 text-base md:text-lg font-semibold">{v.title}</h3>
              <p className="text-xs md:text-sm text-slate-500">{v.subtitle}</p>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
