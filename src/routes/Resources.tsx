import { SEO } from '@/components/SEO'
import links from '@/content/links.json'

export default function Resources() {
  return (
    <section className="container py-12">
      <SEO title="Resources" path="/resources" />
      <h1 className="text-3xl font-serif mb-6">Resources</h1>
      <ul className="list-disc pl-6 space-y-2">
        {links.map((l, i) => (
          <li key={i}><a className="text-primary underline" href={l.url} target="_blank" rel="noreferrer noopener">{l.label}</a></li>
        ))}
      </ul>
    </section>
  )
}
