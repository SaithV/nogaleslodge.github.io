import useEmblaCarousel from 'embla-carousel-react'
import { useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'

const slides = [
  { src: '/nogaleslodge.github.io/assets/images/carousel/image1.jpg', title: 'Freemasonry', subtitle: 'Brotherly Love • Relief • Truth' },
  { src: '/nogaleslodge.github.io/assets/images/carousel/image2.jpg', title: 'Brotherhood', subtitle: 'Fellowship and Service' },
  { src: '/nogaleslodge.github.io/assets/images/carousel/image3.jpg', title: 'Community', subtitle: 'Serving God, Family, Country, Neighbors, Self' },
]

export function Hero() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, duration: 20 })
  useEffect(() => {
    if (!emblaApi) return
    const id = setInterval(() => emblaApi.scrollNext(), 6000)
    return () => clearInterval(id)
  }, [emblaApi])

  return (
    <section className="relative overflow-hidden">
      <div className="embla" ref={emblaRef}>
        <div className="embla__container flex">
          {slides.map((s, i) => (
            <div className="embla__slide relative min-w-0 flex-[0_0_100%]" key={i} aria-label={`Slide ${i+1}`}>
              <img src={s.src} alt="" className="h-[60vh] md:h-[70vh] w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
              <div className="absolute inset-0 pointer-events-none" aria-hidden>
                <div className="smoke" />
              </div>
              <div className="absolute inset-x-0 bottom-10 md:bottom-16 container text-white">
                <h1 className="text-3xl md:text-5xl font-serif drop-shadow-lg">{s.title}</h1>
                <p className="mt-2 md:text-lg opacity-95 drop-shadow">{s.subtitle}</p>
                <div className="mt-6 flex gap-3">
                  <Button asChild variant="primary"><Link to="/visit">Visit Us</Link></Button>
                  <Button asChild variant="outline"><Link to="/join">Join Us</Link></Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        .smoke { position:absolute; inset:0; }
        .smoke::before, .smoke::after {
          content:""; position:absolute; inset:-20%;
          background: radial-gradient(50% 50% at 50% 50%, rgba(255,255,255,0.06), transparent 60%),
                      radial-gradient(40% 40% at 20% 30%, rgba(255,255,255,0.05), transparent 60%),
                      radial-gradient(30% 30% at 80% 70%, rgba(255,255,255,0.04), transparent 60%);
          filter: blur(30px);
          animation: drift 30s linear infinite;
        }
        .smoke::after { animation-duration: 38s; animation-direction: reverse; opacity: .8; }
        @keyframes drift { from { transform: translate3d(-5%, -3%, 0) scale(1.1); } to { transform: translate3d(5%, 3%, 0) scale(1.1); } }
      `}</style>
    </section>
  )
}
