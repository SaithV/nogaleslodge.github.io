import { motion } from 'framer-motion'
import { fadeUp } from '@/lib/motion'

const BASE = import.meta.env.BASE_URL

export function CommunitySection({ title, body, image }: { title: string; body: string; image: string }) {
  return (
    <section aria-labelledby="community-heading" className="section bg-[linear-gradient(180deg,rgba(247,244,239,.9),rgba(247,244,239,.6))]">
      <div className="container grid md:grid-cols-2 gap-8 items-center">
        <motion.div initial={{opacity:0,y:10}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:.6}}>
          <motion.h2 id="community-heading" variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} className="h2-tight">{title}</motion.h2>
          <p className="mt-4 lede">{body}</p>
        </motion.div>
        <motion.figure initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true}} transition={{duration:.7}} className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition border">
          <img src={`${BASE}${image}`} alt="Nogales and Lodge" className="w-full h-72 object-contain bg-white" loading="lazy" />
        </motion.figure>
      </div>
    </section>
  )
}
