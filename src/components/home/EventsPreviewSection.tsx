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
      <div className="mt-6 grid md:grid-cols-3 gap-3 md:gap-6">
        {upcoming.map((e, index) => (
          <motion.div
            key={e.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative"
          >
            <Card className="bg-white/80 dark:bg-slate-900/60 backdrop-blur-md rounded-2xl border border-black/5 dark:border-white/10 shadow-md hover:shadow-lg hover:scale-[1.02] transition-all duration-300 relative overflow-hidden">
              <div className="absolute left-0 top-0 h-full w-1 bg-[#C49A3A]/80 rounded-l-lg" />
              <CardHeader className="font-medium">{e.title}</CardHeader>
              <CardContent>
                <p className="text-sm">{new Date(e.dateStart).toLocaleString()}</p>
                {e.location && <p className="text-sm text-muted-foreground">{e.location}</p>}
              </CardContent>
              <CardFooter>
                <Link className="text-primary underline group-hover:underline group-hover:decoration-[#C49A3A] transition-base" to="/events">Details</Link>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
