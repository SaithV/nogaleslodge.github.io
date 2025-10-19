import { motion } from 'framer-motion'
import useEmblaCarousel from 'embla-carousel-react'
import { Link } from 'react-router-dom'

const BASE = import.meta.env.BASE_URL

export function GallerySnapshotSection({ title, cta, images }: { title: string; cta: string; images: string[] }) {
  const [ref] = useEmblaCarousel({ loop: true })
  return (
    <section aria-labelledby="gallery-heading" className="container py-16">
      <div className="flex items-center justify-between">
        <h2 id="gallery-heading" className="text-3xl md:text-4xl font-serif">{title}</h2>
        <Link to="/gallery" className="text-primary underline">{cta}</Link>
      </div>
      <motion.div initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true}} className="embla mt-6" ref={ref}>
        <div className="embla__container flex gap-4">
          {images.map((src, i) => (
            <div key={i} className="embla__slide min-w-0 flex-[0_0_70%] md:flex-[0_0_33%]">
              <img src={`${BASE}${src}`} alt="Gallery snapshot" className="h-64 w-full object-cover rounded-2xl border shadow-soft" loading="lazy" />
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
