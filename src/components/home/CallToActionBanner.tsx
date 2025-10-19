import { Link } from 'react-router-dom'

export function CallToActionBanner({ title, primary, secondary }: { title: string; primary: string; secondary: string }) {
  return (
  <section aria-labelledby="cta-heading" className="section bg-secondary text-secondary-foreground">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-6">
        <h2 id="cta-heading" className="text-2xl md:text-3xl font-serif">{title}</h2>
        <div className="flex gap-3">
          <Link to="/join" className="bg-primary text-primary-foreground rounded-md px-5 py-2">{primary}</Link>
          <Link to="/visit" className="rounded-md px-5 py-2 border border-primary/40">{secondary}</Link>
        </div>
      </div>
    </section>
  )
}
