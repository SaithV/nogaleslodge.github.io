import { Suspense, lazy } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { fadeUp } from '@/lib/motion'

const Map = lazy(() => import('@/components/maps/InlineMap'))

export function VisitUsSection({ title, text, cta, lat, lng }: { title: string; text: string; cta: string; lat: number; lng: number }) {
  return (
    <section aria-labelledby="visit-heading" className="section bg-muted/30">
      <div className="container grid md:grid-cols-2 gap-8 items-center">
        <div>
          <motion.h2 id="visit-heading" variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} className="h2-tight">{title}</motion.h2>
          <p className="mt-3 lede">{text}</p>
          <Link to="/visit" className="inline-block mt-6 text-primary underline">{cta}</Link>
        </div>
        <motion.div initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true}}>
          <div className="soft-card">
            <Suspense fallback={<div className="h-80 w-full bg-muted rounded-2xl" aria-label="Loading map" />}> 
              <Map lat={lat} lng={lng} />
            </Suspense>
          </div>
          <p className="mt-2 text-sm text-muted-foreground">1620 N Royal Rd, Nogales AZ</p>
        </motion.div>
      </div>
    </section>
  )
}
