import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import useEmblaCarousel from 'embla-carousel-react'
import { useCallback, useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import Typewriter from 'typewriter-effect'
import { Link } from 'react-router-dom'

type Props = { images: string[]; headline: string; subhead: string }
const BASE = import.meta.env.BASE_URL

export function HeroSection({ images, headline, subhead }: Props) {
  const [viewportRef, embla] = useEmblaCarousel({ loop: true, align: 'start', duration: 20 })
  const { ref: inViewRef, inView } = useInView({ threshold: 0.3, triggerOnce: false })
  const [play, setPlay] = useState(false)
  const [twKey, setTwKey] = useState(0)
  const prefersReduced = useReducedMotion()
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], [0, prefersReduced ? 0 : 28])
  const setRefs = useCallback((node: HTMLDivElement | null) => { viewportRef(node); inViewRef(node as any) }, [viewportRef, inViewRef])
  useEffect(() => {
    if (inView) { setTimeout(() => { setTwKey((k) => k + 1); setPlay(true) }, 150) } else { setPlay(false) }
  }, [inView])
  useEffect(() => {
    if (!embla) return
    const onSelect = () => { setPlay(false); setTimeout(() => { setTwKey((k) => k + 1); setPlay(true) }, 400) }
    embla.on('select', onSelect); embla.on('reInit', onSelect)
    return () => { embla.off('select', onSelect); embla.off('reInit', onSelect) }
  }, [embla])
  useEffect(() => {
    const onResize = () => { setPlay(false); setTimeout(() => { setTwKey((k) => k + 1); setPlay(true) }, 250) }
    window.addEventListener('resize', onResize)
    window.addEventListener('orientationchange', onResize)
    return () => { window.removeEventListener('resize', onResize); window.removeEventListener('orientationchange', onResize) }
  }, [])
  return (
    <section aria-labelledby="hero-heading" className="relative overflow-hidden min-h-[80vh] md:min-h-[90vh]">
      <div className="embla" ref={setRefs}>
        <div className="embla__container flex">
          {images.map((src, i) => (
            <div className="embla__slide relative min-w-0 flex-[0_0_100%] min-h-[80vh] md:min-h-[90vh]" key={i}>
              <motion.div style={{ y }} className="absolute inset-0">
                <img
                  src={`${BASE}${src}`}
                  alt=""
                  className="h-full w-full object-cover object-top md:object-center"
                  loading={i === 0 ? 'eager' : 'lazy'}
                  decoding="async"
                />
              </motion.div>
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0E2235]/80 via-[#0E2235]/50 to-transparent" />
              <div className="absolute inset-x-0 bottom-12 container text-white">
                <motion.h1 id="hero-heading" initial={{opacity:0,y:10}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:.6}} className="h1-tight text-shadow-strong">{headline}</motion.h1>
                <motion.div initial={{opacity:0,y:10}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:.1,duration:.6}} className="mt-4 inline-block bg-gradient-to-r from-[#0E2235]/60 to-black/40 text-white px-4 py-2 rounded-2xl backdrop-blur-sm border border-white/10 shadow-inner" aria-live="polite">
                  {play ? (
                    <Typewriter key={twKey} options={{ delay: 35, cursor: '|' }} onInit={(tw) => tw.typeString(subhead).start()} />
                  ) : (
                    <span className="opacity-0">{subhead}</span>
                  )}
                </motion.div>
                <div className="mt-6 flex gap-3">
                  <Link to="/join" className="glass text-white px-5 py-3 rounded-xl hover:scale-[1.02] transition-base border-white/30">Join Us</Link>
                  <Link to="/visit" className="bg-white/15 text-white px-5 py-3 rounded-xl hover:bg-white/25 transition-base border border-white/20">Visit Us</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
