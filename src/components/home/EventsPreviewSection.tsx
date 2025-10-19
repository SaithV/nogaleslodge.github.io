import { motion } from 'framer-motion'
import { fadeUp } from '@/lib/motion'
import events from '@/content/events.json'
import { Link } from 'react-router-dom'
import { Card, CardContent, CardHeader, CardFooter } from '@/components/ui/card'

export function EventsPreviewSection({ title, cta }: { title: string; cta: string }) {
  const upcoming = [...events].sort((a,b)=> new Date(a.dateStart).getTime()-new Date(b.dateStart).getTime()).slice(0,3)
  return (
    <section aria-labelledby="events-heading" className="container section">
      <div className="flex items-center justify-between">
        <motion.h2 id="events-heading" variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} className="h2-tight">{title}</motion.h2>
        <Link to="/events" className="text-primary underline">{cta}</Link>
      </div>
      <div className="mt-6 grid md:grid-cols-3 gap-6">
        {upcoming.map((e) => (
          <motion.div key={e.id} initial={{opacity:0,y:10}} whileInView={{opacity:1,y:0}} viewport={{once:true}}>
            <Card>
              <CardHeader className="font-medium">{e.title}</CardHeader>
              <CardContent>
                <p className="text-sm">{new Date(e.dateStart).toLocaleString()}</p>
                {e.location && <p className="text-sm text-muted-foreground">{e.location}</p>}
              </CardContent>
              <CardFooter>
                <Link className="text-primary underline" to="/events">Details</Link>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
