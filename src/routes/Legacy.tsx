import { SEO } from '@/components/SEO'
import legacy from '@/content/legacy.json'

export default function Legacy() {
  return (
    <section className="container section">
      <SEO title="Legacy" path="/legacy" />
      <h1 className="h2-tight">Our Legacy in Nogales</h1>
      <p className="mt-2 text-sm text-muted-foreground">{legacy.address}</p>
      <div className="mt-6 grid md:grid-cols-2 gap-8">
        <div className="space-y-4">
          {legacy.legacy_long.map((p, i) => (
            <p key={i} className="lede">{p}</p>
          ))}
        </div>
        <aside className="soft-card p-6">
          <h2 className="text-xl font-medium">Timeline</h2>
          <ol className="mt-4 space-y-3">
            {legacy.timeline.map((t, i) => (
              <li key={i} className="border-l-2 border-gold/50 pl-3">
                <div className="text-sm text-muted-foreground">{t.year}</div>
                <div className="font-medium">{t.title}</div>
                <div className="text-sm text-muted-foreground">{t.desc}</div>
              </li>
            ))}
          </ol>
        </aside>
      </div>
    </section>
  )
}
