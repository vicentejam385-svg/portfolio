import { motion } from 'motion/react'
import { MessageSquare, Users, Flag, Lightbulb, Laptop, Code2, Database, Cpu, BookOpen, Braces, Network, Zap, Clock, ShieldCheck, Shuffle } from 'lucide-react'
import { skills } from '../data/portfolio'
import { Section, Heading, Stagger, item } from './ui'

const iconFor = (name) => {
  const n = name.toLowerCase()
  if (n.includes('commun')) return MessageSquare
  if (n.includes('team')) return Users
  if (n.includes('lead')) return Flag
  if (n.includes('problem')) return Lightbulb
  if (n.includes('learn')) return BookOpen
  if (n.includes('responsib')) return ShieldCheck
  if (n.includes('time')) return Clock
  if (n.includes('adapt')) return Shuffle
  if (n.includes('network')) return Network
  if (n.includes('electric')) return Zap
  if (n.includes('web') || n.includes('html')) return Code2
  if (n.includes('database') || n.includes('sql')) return Database
  if (n.includes('php') || n.includes('java') || n.includes('python')) return Braces
  if (n.includes('digital')) return Laptop
  return Cpu
}
const labels = ['', 'Beginner', 'Developing', 'Proficient', 'Advanced', 'Expert']

function SkillCard({ s }) {
  const Icon = iconFor(s.name)
  const pct = (s.level / 5) * 100
  return (
    <motion.div variants={item} className="glass glow-hover group flex flex-col rounded-3xl p-6">
      <div className="flex items-start justify-between gap-3">
        <span className="bg-cosmic grid h-12 w-12 place-items-center rounded-2xl text-white shadow-lg shadow-glow/20 transition duration-500 group-hover:rotate-12 group-hover:scale-110">
          <Icon size={22} />
        </span>
        <span className="rounded-full border border-line px-3 py-1 text-xs font-semibold text-glow">{labels[s.level]}</span>
      </div>
      <h4 className="mt-5 text-lg font-bold">{s.name}</h4>
      <div className="mt-3 h-2 overflow-hidden rounded-full bg-line" role="meter" aria-valuemin={1} aria-valuemax={5} aria-valuenow={s.level} aria-label={`${s.name} level`}>
        <motion.div className="bg-cosmic relative h-full rounded-full"
          initial={{ width: 0 }} whileInView={{ width: `${pct}%` }} viewport={{ once: true }} transition={{ duration: 1.4, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}>
          <span className="absolute right-0 top-1/2 h-3 w-3 -translate-y-1/2 translate-x-1/2 rounded-full bg-white shadow-[0_0_10px_var(--c-glow)]" />
        </motion.div>
      </div>
      <p className="mt-4 text-sm leading-relaxed text-muted">{s.evidence}</p>
    </motion.div>
  )
}

export default function Skills() {
  return (
    <Section id="skills">
      <Heading number={3} title="Skills showcase" lead="Each skill is backed by something I have actually done." />
      <h3 className="mb-6 flex items-center gap-3 text-xl font-bold"><span className="h-px w-8 bg-glow" /> Soft skills</h3>
      <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{skills.soft.map((s) => <SkillCard key={s.name} s={s} />)}</Stagger>
      <h3 className="mb-6 mt-16 flex items-center gap-3 text-xl font-bold"><span className="h-px w-8 bg-nova" /> Technical &amp; industry-related skills</h3>
      <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{skills.technical.map((s) => <SkillCard key={s.name} s={s} />)}</Stagger>
    </Section>
  )
}