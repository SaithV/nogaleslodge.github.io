import { motion } from 'framer-motion'
import useEmblaCarousel from 'embla-carousel-react'
import { useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'

type Props = { images: string[]; headline: string; subhead: string }
const BASE = import.meta.env.BASE_URL

export function HeroSection({ images, headline, subhead }: Props) {
  const [ref, api] = useEmblaCarousel({ loop: true, duration: 20 })
  useEffect(() => { if (!api) return; const id = setInterval(() => api.scrollNext(), 6000); return () => clearInterval(id) }, [api])
  return (
    <section aria-labelledby="hero-heading" className="relative overflow-hidden">
      <div className="embla" ref={ref}>
        <div className="embla__container flex">
          {images.map((src, i) => (
            <div className="embla__slide relative min-w-0 flex-[0_0_100%]" key={i}>
              <img src={`${BASE}${src}`} alt="" className="h-[70vh] w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
              <div className="absolute inset-x-0 bottom-12 container text-white">
                <motion.h1 id="hero-heading" initial={{opacity:0,y:10}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:.6}} className="text-4xl md:text-6xl font-serif drop-shadow-xl">{headline}</motion.h1>
                <motion.p initial={{opacity:0,y:10}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:.1,duration:.6}} className="mt-3 text-lg md:text-xl opacity-95">{subhead}</motion.p>
                <div className="mt-6 flex gap-3">
                  <Button asChild variant="primary"><Link to="/join">Join Us</Link></Button>
                  <Button asChild variant="outline"><Link to="/visit">Visit Us</Link></Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
