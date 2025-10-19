import { motion } from 'framer-motion'
import useEmblaCarousel from 'embla-carousel-react'
import { useEffect } from 'react'
import Typewriter from 'typewriter-effect'
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
              <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-[#0E2235]/40" />
              <div className="absolute inset-x-0 bottom-12 container text-white">
                <motion.h1 id="hero-heading" initial={{opacity:0,y:10}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:.6}} className="h1-tight drop-shadow-[0_2px_10px_rgba(0,0,0,.35)]">{headline}</motion.h1>
                <motion.div initial={{opacity:0,y:10}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:.1,duration:.6}} className="mt-4 inline-block bg-black/45 text-white px-4 py-2 rounded-xl backdrop-blur-sm border border-white/10 shadow-md">
                  <Typewriter
                    options={{
                      strings: [subhead],
                      autoStart: true,
                      loop: false,
                      delay: 35,
                      cursor: '|',
                    }}
                  />
                </motion.div>
                <div className="mt-6 flex gap-3">
                  <Link to="/join" className="glass text-white px-5 py-3 rounded-xl hover:scale-[1.02] transition border-white/30">Join Us</Link>
                  <Link to="/visit" className="bg-white/15 text-white px-5 py-3 rounded-xl hover:bg-white/25 transition border border-white/20">Visit Us</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
