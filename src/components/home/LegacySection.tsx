import { motion } from 'framer-motion'
import { fadeUp } from '@/lib/motion'
import { Card, CardContent } from '@/components/ui/card'

export function LegacySection({ tagline, address, bullets }: { tagline: string; address: string; bullets: string[] }) {
  return (
    <section aria-labelledby="legacy-heading" className="section bg-[radial-gradient(circle_at_top_left,#f8f6f3,#f3f0ea)]">
      <div className="container">
        <motion.h2 id="legacy-heading" variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} className="h2-tight">Our Legacy</motion.h2>
        <div className="mt-6 grid md:grid-cols-2 gap-3 md:gap-6">
          <motion.div initial={{opacity:0,y:10}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:.6}} className="space-y-2 md:space-y-3">
            <p className="text-lg font-medium">{tagline}</p>
            <p className="text-sm text-muted-foreground">{address}</p>
          </motion.div>
          <div className="grid gap-3 md:gap-6">
            {bullets.map((b, i) => (
              <motion.div key={i} initial={{opacity:0,y:10}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*0.05}}>
                <Card>
                  <CardContent className="p-4 md:p-5 flex items-start gap-3">
                    <span aria-hidden className="mt-1 inline-block size-2 rounded-full bg-[#C49A3A] shadow-[0_0_0_3px_rgba(196,154,58,0.15)]" />
                    <span>{b}</span>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
