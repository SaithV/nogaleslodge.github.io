import { SEO } from '@/components/SEO'

export default function Visit() {
  return (
    <section className="container py-12">
      <SEO title="Visit" path="/visit" />
      <h1 className="text-3xl font-serif mb-6">Visit Us</h1>
      <p>1620 N Royal Rd, Nogales, AZ 85621</p>
      <div aria-label="Map placeholder" className="mt-6 h-80 w-full bg-muted rounded-xl" />
    </section>
  )
}
