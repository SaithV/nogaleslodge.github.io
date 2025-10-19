import { motion } from 'framer-motion'

const BASE = import.meta.env.BASE_URL

export function CommunitySection({ title, body, image }: { title: string; body: string; image: string }) {
  return (
    <section aria-labelledby="community-heading" className="bg-muted/30 py-16">
      <div className="container grid md:grid-cols-2 gap-8 items-center">
        <motion.div initial={{opacity:0,y:10}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:.6}}>
          <h2 id="community-heading" className="text-3xl md:text-4xl font-serif">{title}</h2>
          <p className="mt-4 text-lg leading-relaxed">{body}</p>
        </motion.div>
        <motion.figure initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true}} transition={{duration:.7}} className="rounded-2xl overflow-hidden shadow-soft border">
          <img src={`${BASE}${image}`} alt="Nogales and Lodge" className="w-full h-72 object-contain bg-white" loading="lazy" />
        </motion.figure>
      </div>
    </section>
  )
}
