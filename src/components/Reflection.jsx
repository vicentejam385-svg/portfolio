import { motion } from 'motion/react'
import { Quote } from 'lucide-react'
import { reflection } from '../data/portfolio'
import { Section, Heading, Reveal } from './ui'

export default function Reflection() {
  return (
    <Section id="reflection">
      <Heading number={7} title="Reflection" />
      <div className="grid gap-12 lg:grid-cols-[1fr_1.7fr]">
        <Reveal>
          <div className="lg:sticky lg:top-32">
            <motion.div initial={{ scale: 0, rotate: -45 }} whileInView={{ scale: 1, rotate: 0 }} viewport={{ once: true }} transition={{ type: 'spring', stiffness: 150, damping: 12 }}
              className="bg-cosmic grid h-16 w-16 place-items-center rounded-2xl text-white shadow-lg shadow-glow/30">
              <Quote size={30} />
            </motion.div>
            <p className="mt-6 font-display text-2xl font-bold leading-snug sm:text-3xl">
              How has preparing for Work Immersion helped me understand my career goals and future professional responsibilities?
            </p>
          </div>
        </Reveal>
        <article className="glass relative rounded-3xl p-7 md:p-10">
          <span className="bg-cosmic absolute left-0 top-10 bottom-10 w-1 rounded-full" />
          <div className="space-y-6 text-lg leading-relaxed">
            {reflection.map((p, i) => (
              <motion.p key={i} initial={{ opacity: 0, y: 24, filter: 'blur(6px)' }} whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                viewport={{ once: true, margin: '-40px' }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}>
                {p}
              </motion.p>
            ))}
          </div>
        </article>
      </div>
    </Section>
  )
}