import { SEO } from '@/components/SEO'
import { Link, useNavigate } from 'react-router-dom'
import InlineMap from '@/components/maps/InlineMap'

const position: [number, number] = [31.364532, -110.931843]

export default function Visit() {
  const navigate = useNavigate()
  return (
    <section className="container">
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 bg-white text-black px-3 py-2 rounded">Skip to main content</a>
      <SEO title="Visit" path="/visit" />
      <main id="main" className="section container mx-auto px-4 pb-[env(safe-area-inset-bottom)]">
        <div className="flex items-center justify-between">
          <button onClick={() => navigate('/')} className="rounded-md border border-white/20 px-3 py-1.5 hover:bg-white/10 focus-visible:ring-2">← Back to Home</button>
          <nav aria-label="Breadcrumb" className="text-sm text-muted-foreground">
            <ol className="flex gap-2">
              <li><Link to="/">Home</Link></li>
              <li aria-hidden>›</li>
              <li aria-current="page">Visit Us</li>
            </ol>
          </nav>
        </div>
        <h1 className="h2-tight mb-1 mt-6">Visit Us</h1>
        <p className="text-[15px] text-slate-600">1620 N Royal Rd, Nogales, AZ 85621</p>
        <div className="mt-6">
          <div className="soft-card overflow-hidden">
            <div className="aspect-[4/3] md:aspect-[3/2]">
              <InlineMap lat={position[0]} lng={position[1]} heightClass="h-full" />
            </div>
          </div>
          <div className="mt-3 flex flex-wrap gap-2">
            <a className="rounded-xl border border-black/10 bg-white/90 px-3 py-2 text-sm hover:shadow-sm" href={`https://www.google.com/maps?q=${position[0]},${position[1]}`} target="_blank" rel="noreferrer">Open in Maps</a>
            <a className="rounded-xl border border-black/10 bg-white/90 px-3 py-2 text-sm hover:shadow-sm" href={`https://www.google.com/maps/dir/?api=1&destination=${position[0]},${position[1]}`} target="_blank" rel="noreferrer">Directions</a>
          </div>
        </div>
        <hr className="my-6 border-black/5" />
      </main>
    </section>
  )
}
