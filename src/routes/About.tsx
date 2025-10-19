import { SEO } from '@/components/SEO'

export default function About() {
  return (
    <section className="container py-12">
      <SEO title="About" path="/about" />
      <h1 className="text-3xl font-serif mb-6">About Freemasonry</h1>
      <p className="max-w-3xl">Information about Freemasonry and our Lodge history will go here.</p>
    </section>
  )
}
