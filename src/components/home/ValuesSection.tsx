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
      <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map((v, i) => {
          const Icon = icons[v.value] ?? Handshake
          return (
            <motion.div key={i} initial={{opacity:0,y:10}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*0.05}} className="group soft-card p-6 hover:shadow-xl hover:-translate-y-0.5 transition will-change-transform">
              <div className="w-12 h-12 rounded-xl bg-gold/20 flex items-center justify-center">
                <Icon className="h-6 w-6 text-secondary" aria-hidden />
              </div>
              <h3 className="mt-3 text-xl font-medium">{v.title}</h3>
              <p className="text-sm text-muted-foreground">{v.subtitle}</p>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
