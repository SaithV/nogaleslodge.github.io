import { motion } from 'framer-motion'
import { fadeUp } from '@/lib/motion'
import { Link } from 'react-router-dom'

const BASE = import.meta.env.BASE_URL

export function GallerySnapshotSection({ title, cta, images }: { title: string; cta: string; images: string[] }) {
  return (
    <section aria-labelledby="gallery-heading" className="container section">
      <div className="flex items-center justify-between">
        <motion.h2 id="gallery-heading" variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} className="h2-tight">{title}</motion.h2>
        <Link to="/gallery" className="text-primary underline">{cta}</Link>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-6"
      >
        <div
          className="flex gap-3 overflow-x-auto snap-x snap-mandatory -mx-2 px-2 pb-2"
          role="region"
          aria-label="Gallery preview"
        >
          {images.map((src, i) => (
            <figure
              key={i}
              className="snap-start shrink-0 basis-[80%] sm:basis-[48%] md:basis-[32%] aspect-[16/10]"
            >
              <div className="group relative h-full rounded-2xl overflow-hidden shadow-lg hover:scale-[1.03] transition-base">
                <img
                  src={`${BASE}${src}`}
                  alt="Gallery snapshot"
                  loading="lazy"
                  decoding="async"
                  className="block w-full h-full object-cover size-full [contain-intrinsic-size:256px_160px]"
                />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/40 to-transparent" />
                <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 p-3 text-white/90 opacity-0 group-hover:opacity-100 transition-base" />
              </div>
            </figure>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
