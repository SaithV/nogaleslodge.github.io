import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'

export function LegacySection({ tagline, address, bullets }: { tagline: string; address: string; bullets: string[] }) {
  return (
    <section aria-labelledby="legacy-heading" className="container py-16">
      <motion.h2 id="legacy-heading" initial={{opacity:0,y:10}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:.5}} className="text-3xl md:text-4xl font-serif">Our Legacy</motion.h2>
      <div className="mt-6 grid md:grid-cols-2 gap-6">
        <motion.div initial={{opacity:0,y:10}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:.6}} className="space-y-3">
          <p className="text-lg font-medium">{tagline}</p>
          <p className="text-sm text-muted-foreground">{address}</p>
        </motion.div>
        <div className="grid gap-4">
          {bullets.map((b, i) => (
            <motion.div key={i} initial={{opacity:0,y:10}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*0.05}}>
              <Card><CardContent className="p-5">{b}</CardContent></Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
