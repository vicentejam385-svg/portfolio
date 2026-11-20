import { motion } from 'motion/react'
import { User, GraduationCap, Wrench, Trophy, BadgeCheck, Target, Flag, CheckCircle2 } from 'lucide-react'
import { resume, profile } from '../data/portfolio'
import { Section, Heading, Card, Pill, Stagger, item } from './ui'

function Block({ icon: Icon, title, children }) {
  return (
    <motion.div variants={item}>
      <Card>
        <h3 className="mb-5 flex items-center gap-3 text-lg font-bold">
          <span className="grid h-10 w-10 place-items-center rounded-2xl bg-glow/15 text-glow"><Icon size={20} /></span>
          {title}
        </h3>
        {children}
      </Card>
    </motion.div>
  )
}

const List = ({ items }) => (
  <ul className="space-y-3">
    {items.map((i) => (
      <li key={i} className="flex gap-3 leading-relaxed">
        <span className="bg-cosmic mt-2 h-2 w-2 shrink-0 rounded-full" />{i}
      </li>
    ))}
  </ul>
)

export default function Resume() {
  return (
    <Section id="resume">
      <Heading number={2} title="Resume / Curriculum Vitae" lead="A quick summary of who I am, where I study and what I can do." />

      {/* About me + career objective */}
      <Stagger className="mb-6 grid gap-6 md:grid-cols-2">
        <Block icon={User} title="About me">
          <p className="text-lg leading-relaxed">{profile.intro}</p>
        </Block>
        <Block icon={Target} title="Career objective">
          <p className="text-lg leading-relaxed">{profile.objective}</p>
        </Block>
      </Stagger>

      {/* Work immersion goals */}
      <Stagger className="mb-6">
        <Block icon={Flag} title="Work immersion goals">
          <Stagger className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3" gap={0.08}>
            {profile.immersionGoals.map((g, i) => (
              <motion.div key={g} variants={item} className="flex items-center gap-3 rounded-2xl border border-line bg-base/40 p-4">
                <span className="bg-cosmic grid h-9 w-9 shrink-0 place-items-center rounded-xl font-display text-sm font-bold text-white">{i + 1}</span>
                <span className="leading-snug">{g}</span>
              </motion.div>
            ))}
            {profile.immersionGoals.length % 3 === 2 && (
              <motion.div variants={item} className="hidden items-center justify-center gap-2 rounded-2xl border border-dashed border-line p-4 text-muted lg:flex">
                <CheckCircle2 size={18} className="text-glow" /> Ready for launch
              </motion.div>
            )}
          </Stagger>
        </Block>
      </Stagger>

      <div className="grid gap-6 lg:grid-cols-3">
        <Stagger className="space-y-6">
          <Block icon={User} title="Personal information">
            <dl className="space-y-4">
              {resume.personal.map(([k, v]) => (
                <div key={k} className="grid gap-0.5">
                  <dt className="text-xs font-semibold uppercase tracking-wider text-muted">{k}</dt>
                  <dd className="break-words font-medium">{v}</dd>
                </div>
              ))}
            </dl>
          </Block>
        </Stagger>

        <Stagger className="space-y-6">
          <Block icon={GraduationCap} title="Educational background">
            <ol className="relative space-y-8 border-l-2 border-line pl-7">
              {resume.education.map((e, i) => (
                <motion.li key={e.level} className="relative"
                  initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 + i * 0.15, duration: 0.6 }}>
                  <span className="absolute -left-[37px] top-1 grid h-5 w-5 place-items-center rounded-full bg-base">
                    <span className="bg-cosmic h-3 w-3 rounded-full shadow-[0_0_12px_var(--c-glow)]" />
                  </span>
                  <p className="text-sm font-semibold text-glow">{e.years}</p>
                  <p className="mt-1 font-display text-lg font-bold leading-snug">{e.level}</p>
                  <p className="text-muted">{e.school}</p>
                  {e.detail && <p className="text-sm text-muted">{e.detail}</p>}
                  {e.note && <p className="mt-1 text-sm font-medium">{e.note}</p>}
                </motion.li>
              ))}
            </ol>
          </Block>
          <Block icon={Wrench} title="Skills">
            <Stagger className="flex flex-wrap gap-2" gap={0.05}>
              {resume.skills.map((s) => <motion.span key={s} variants={item}><Pill>{s}</Pill></motion.span>)}
            </Stagger>
          </Block>
        </Stagger>

        <Stagger className="space-y-6">
          {resume.achievements.length > 0 && <Block icon={Trophy} title="Achievements"><List items={resume.achievements} /></Block>}
          {resume.certifications.length > 0 && <Block icon={BadgeCheck} title="Certifications"><List items={resume.certifications} /></Block>}
        </Stagger>
      </div>
    </Section>
  )
}