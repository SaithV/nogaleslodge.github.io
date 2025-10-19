import { SEO } from '@/components/SEO'
import about from '@/content/about.json'

export default function About() {
  return (
    <section className="container section">
      <SEO title="About" path="/about" />
      <h1 className="h2-tight">About Nogales Lodge #11</h1>
      <div className="mt-6 space-y-4 max-w-3xl">
        {about.about_intro.map((p, i) => (
          <p key={i} className="lede">{p}</p>
        ))}
      </div>
      <div className="mt-10 grid md:grid-cols-2 gap-8 items-start">
        <div>
          <h2 className="text-xl font-medium">Nogales, Arizona</h2>
          <p className="mt-3 lede">{about.nogales_context}</p>
        </div>
        <aside className="soft-card p-6">
          <h2 className="text-xl font-medium">Our Values</h2>
          <ul className="mt-4 space-y-3">
            {about.values.map((v, i) => (
              <li key={i} className="rounded-xl p-3 border">
                <div className="font-medium">{v.title} <span className="text-sm text-muted-foreground">— {v.subtitle}</span></div>
                <div className="text-sm text-muted-foreground">{v.desc}</div>
              </li>
            ))}
          </ul>
        </aside>
      </div>
      <div className="mt-10">
        <h2 className="text-xl font-medium">Visiting & Traveling Brothers</h2>
        <p className="mt-3 lede">{about.visit_traveling_brothers}</p>
      </div>
    </section>
  )
}
