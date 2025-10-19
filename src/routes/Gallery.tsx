import { SEO } from '@/components/SEO'
import gallery from '@/content/gallery.json'

export default function Gallery() {
  const album = gallery.albums[0]
  return (
    <section className="container py-12">
      <SEO title="Gallery" path="/gallery" />
      <h1 className="text-3xl font-serif mb-6">{album.title}</h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        {album.media.map((m, i) => (
          <figure key={i} className="rounded-xl overflow-hidden border">
            <img src={m.src} alt={m.alt} loading="lazy" className="w-full h-48 object-cover" />
            {m.caption && <figcaption className="p-2 text-sm text-center">{m.caption}</figcaption>}
          </figure>
        ))}
      </div>
    </section>
  )
}
