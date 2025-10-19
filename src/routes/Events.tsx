import { SEO } from '@/components/SEO'
import { Card, CardContent, CardHeader, CardFooter } from '@/components/ui/card'
import events from '@/content/events.json'

function toICS(e: (typeof events)[number]) {
  const dt = (s?: string) => (s ? s.replace(/[-:]/g, '').replace(/\.\d+Z$/, 'Z') : '')
  const lines = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Nogales Lodge #11//EN',
    'BEGIN:VEVENT',
    `UID:${e.id}@nogaleslodge11`,
    `DTSTAMP:${dt(new Date().toISOString())}`,
    `DTSTART:${dt(e.dateStart)}`,
    e.dateEnd ? `DTEND:${dt(e.dateEnd)}` : undefined,
    `SUMMARY:${e.title}`,
    e.location ? `LOCATION:${e.location}` : undefined,
    e.description ? `DESCRIPTION:${e.description}` : undefined,
    'END:VEVENT',
    'END:VCALENDAR',
  ].filter(Boolean)
  return new Blob([lines.join('\r\n')], { type: 'text/calendar;charset=utf-8' })
}

export default function Events() {
  return (
    <section className="container py-12">
      <SEO title="Events" path="/events" />
      <h1 className="text-3xl font-serif mb-6">Events</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {events.map((e) => (
          <Card key={e.id}>
            <CardHeader className="font-medium">{e.title}</CardHeader>
            <CardContent>
              <p className="text-sm">{new Date(e.dateStart).toLocaleString()}</p>
              {e.location && <p className="text-sm text-muted-foreground">{e.location}</p>}
              {e.description && <p className="mt-2 text-sm">{e.description}</p>}
            </CardContent>
            <CardFooter>
              <button
                className="text-primary underline"
                onClick={() => {
                  const blob = toICS(e)
                  const url = URL.createObjectURL(blob)
                  const a = document.createElement('a')
                  a.href = url
                  a.download = `${e.title}.ics`
                  a.click()
                  URL.revokeObjectURL(url)
                }}
              >
                Add to Calendar (.ics)
              </button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
}
