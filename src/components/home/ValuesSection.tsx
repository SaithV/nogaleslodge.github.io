import { motion } from 'framer-motion'
import { Handshake, HeartHandshake, Scale, BookOpen } from 'lucide-react'

const icons: Record<string, any> = {
  morality: BookOpen,
  justice: Scale,
  charity: HeartHandshake,
  truth: Handshake,
}

export function ValuesSection({ items }: { items: { title: string; subtitle: string; value: string }[] }) {
  return (
    <section aria-labelledby="values-heading" className="container py-16">
      <h2 id="values-heading" className="text-3xl md:text-4xl font-serif">Our Values</h2>
      <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map((v, i) => {
          const Icon = icons[v.value] ?? Handshake
          return (
            <motion.div key={i} initial={{opacity:0,y:10}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*0.05}} className="group rounded-2xl border bg-card p-6 shadow-soft hover:shadow-lg hover:-translate-y-0.5 transition">
              <Icon className="h-8 w-8 text-secondary" aria-hidden />
              <h3 className="mt-3 text-xl font-medium">{v.title}</h3>
              <p className="text-sm text-muted-foreground">{v.subtitle}</p>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
