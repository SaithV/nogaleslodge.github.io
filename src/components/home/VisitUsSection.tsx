import { Suspense, lazy } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { fadeUp } from '@/lib/motion'

const Map = lazy(() => import('@/components/maps/InlineMap'))

export function VisitUsSection({ title, text, cta, lat, lng }: { title: string; text: string; cta: string; lat: number; lng: number }) {
  return (
    <section aria-labelledby="visit-heading" className="section bg-[radial-gradient(circle_at_top_left,#f8f6f3,#f3f0ea)] md:bg-muted/30">
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-start px-4">
        <div>
          <motion.h2 id="visit-heading" variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} className="h2-tight text-balance">{title}</motion.h2>
          <p className="mt-2 text-base md:text-lg text-slate-700">{text}</p>
          <Link to="/visit" className="mt-4 inline-flex items-center gap-2 rounded-xl border border-black/10 bg-white/80 backdrop-blur-sm px-4 py-2 text-sm underline underline-offset-4 hover:shadow-md transition">
            {cta}
          </Link>
        </div>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
          <div className="soft-card overflow-hidden">
            <div className="aspect-[4/3] md:aspect-[3/2]">
              <Suspense fallback={<div className="h-full w-full animate-pulse rounded-2xl bg-muted" aria-label="Loading map" />}> 
                <Map lat={lat} lng={lng} heightClass="h-full" />
              </Suspense>
            </div>
          </div>
          <p className="mt-2 text-sm text-muted-foreground">1620 N Royal Rd, Nogales, AZ 85621</p>
          <div className="mt-3 flex flex-wrap gap-2">
            <a className="rounded-xl border border-black/10 bg-white/90 px-3 py-2 text-sm hover:shadow-sm" href={`https://www.google.com/maps?q=${lat},${lng}`} target="_blank" rel="noreferrer">Open in Maps</a>
            <a className="rounded-xl border border-black/10 bg-white/90 px-3 py-2 text-sm hover:shadow-sm" href={`https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`} target="_blank" rel="noreferrer">Directions</a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
