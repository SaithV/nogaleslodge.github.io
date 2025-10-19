import { Suspense, lazy } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Map = lazy(() => import('@/components/maps/InlineMap'))

export function VisitUsSection({ title, text, cta, lat, lng }: { title: string; text: string; cta: string; lat: number; lng: number }) {
  return (
    <section aria-labelledby="visit-heading" className="bg-muted/30 py-16">
      <div className="container grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 id="visit-heading" className="text-3xl md:text-4xl font-serif">{title}</h2>
          <p className="mt-3 text-lg">{text}</p>
          <Link to="/visit" className="inline-block mt-6 text-primary underline">{cta}</Link>
        </div>
        <motion.div initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true}}>
          <Suspense fallback={<div className="h-80 w-full bg-muted rounded-2xl" aria-label="Loading map" />}> 
            <Map lat={lat} lng={lng} />
          </Suspense>
        </motion.div>
      </div>
    </section>
  )
}
