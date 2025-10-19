import { motion } from 'framer-motion'
import { fadeUp } from '@/lib/motion'
import useEmblaCarousel from 'embla-carousel-react'
import { Link } from 'react-router-dom'

const BASE = import.meta.env.BASE_URL

export function GallerySnapshotSection({ title, cta, images }: { title: string; cta: string; images: string[] }) {
  const [ref] = useEmblaCarousel({ loop: true })
  return (
    <section aria-labelledby="gallery-heading" className="container section">
      <div className="flex items-center justify-between">
        <motion.h2 id="gallery-heading" variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} className="h2-tight">{title}</motion.h2>
        <Link to="/gallery" className="text-primary underline">{cta}</Link>
      </div>
      <motion.div initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true}} className="embla mt-6" ref={ref}>
        <div className="embla__container flex gap-3 overflow-x-auto snap-x snap-mandatory -mx-2 px-2 pb-2">
          {images.map((src, i) => (
            <div key={i} className="embla__slide snap-start shrink-0 w-[80%] sm:w-[48%] md:w-[32%] aspect-[16/10]">
              <div className="group relative h-full rounded-2xl overflow-hidden shadow-lg hover:scale-[1.03] transition-base">
                <img src={`${BASE}${src}`} alt="Gallery snapshot" className="block w-full h-full object-cover" loading="lazy" decoding="async" />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/40 to-transparent" />
                {/* Optional caption slot: fade-in on hover */}
                <div className="pointer-events-none absolute inset-x-0 bottom-0 p-3 text-white/90 opacity-0 group-hover:opacity-100 transition-base">
                  {/* caption text could go here */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
