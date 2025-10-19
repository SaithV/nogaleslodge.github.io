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
        <div className="embla__container flex gap-4">
          {images.map((src, i) => (
            <div key={i} className="embla__slide min-w-0 flex-[0_0_70%] md:flex-[0_0_33%]">
              <div className="relative rounded-2xl overflow-hidden shadow-lg">
                <img src={`${BASE}${src}`} alt="Gallery snapshot" className="h-64 w-full object-cover transition duration-500 hover:scale-[1.04] will-change-transform" loading="lazy" />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
