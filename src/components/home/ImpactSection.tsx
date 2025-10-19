import { motion } from 'framer-motion'

export function ImpactSection({ stats }: { stats: { label: string; value: string }[] }) {
  return (
    <section aria-labelledby="impact-heading" className="py-16 bg-primary text-primary-foreground">
      <div className="container">
        <h2 id="impact-heading" className="text-3xl md:text-4xl font-serif">Our Impact</h2>
        <div className="mt-8 grid sm:grid-cols-3 gap-6">
          {stats.map((s, i) => (
            <motion.div key={i} initial={{opacity:0,y:10}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*0.05}} className="rounded-2xl bg-white/10 p-6">
              <p className="text-4xl font-serif">{s.value}</p>
              <p className="text-sm opacity-90">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
