import { motion } from 'motion/react'
import { Building2, MapPin, Plus, Minus, Crown, Scale } from 'lucide-react'
import { companies, criteria, recommendationReason } from '../data/portfolio'
import { Section, Heading, Stagger, item, Reveal, CountUp } from './ui'

const weighted = (c) => criteria.reduce((sum, k) => sum + (c.scores[k.key] * k.weight) / 100, 0)

export default function Evaluation() {
  const ranked = companies.map((c) => ({ ...c, total: weighted(c) })).sort((a, b) => b.total - a.total)
  const best = ranked[0]

  return (
    <Section id="evaluation">
      <Heading number={6} title="Company & HTE evaluation" lead="How I compared my top three Host Training Establishments and chose where to apply." />

      {/* Top 3 companies */}
      <h3 className="mb-6 flex items-center gap-3 text-xl font-bold"><span className="h-px w-8 bg-glow" /> Top 3 target companies</h3>
      <Stagger className="grid gap-6 md:grid-cols-3" gap={0.15}>
        {ranked.map((c, i) => (
          <motion.article key={c.name} variants={item}
            className={`glass glow-hover relative flex flex-col rounded-3xl p-6 ${c === best ? 'border-glow/70 shadow-[0_0_40px_-12px_var(--c-glow)]' : ''}`}>
            {c === best && (
              <span className="bg-cosmic absolute -top-3.5 right-6 inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-bold text-white shadow-lg">
                <Crown size={14} /> Top choice
              </span>
            )}
            <div className="flex items-center gap-4">
              <span className={`grid h-12 w-12 shrink-0 place-items-center rounded-2xl font-display text-lg font-bold ${c === best ? 'bg-cosmic text-white' : 'bg-line text-ink'}`}>{i + 1}</span>
              <div className="min-w-0">
                <h4 className="text-lg font-bold leading-tight">{c.name}</h4>
                <p className="text-sm text-muted">{c.industry}</p>
              </div>
            </div>
            <p className="mt-4 flex items-center gap-1.5 text-sm text-muted"><MapPin size={15} className="text-glow" /> {c.address}</p>
            <p className="mt-3 leading-relaxed">{c.why}</p>
            <div className="mt-5 space-y-2 border-t border-line pt-5 text-sm">
              {c.pros.map((p) => <p key={p} className="flex gap-2"><Plus size={16} className="mt-0.5 shrink-0 text-emerald-500" />{p}</p>)}
              {c.cons.map((p) => <p key={p} className="flex gap-2 text-muted"><Minus size={16} className="mt-0.5 shrink-0 text-rose-500" />{p}</p>)}
            </div>
            <div className="mt-auto pt-6">
              <div className="flex items-baseline justify-between">
                <span className="text-sm text-muted">Weighted score</span>
                <span className="font-display text-2xl font-bold"><CountUp value={c.total} decimals={2} /><span className="text-sm text-muted"> / 5</span></span>
              </div>
              <div className="mt-2 h-2 overflow-hidden rounded-full bg-line">
                <motion.div className="bg-cosmic h-full rounded-full" initial={{ width: 0 }} whileInView={{ width: `${(c.total / 5) * 100}%` }} viewport={{ once: true }} transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }} />
              </div>
            </div>
          </motion.article>
        ))}
      </Stagger>

      {/* Criteria */}
      <h3 className="mb-6 mt-20 flex items-center gap-3 text-xl font-bold"><Scale size={22} className="text-nova" /> Evaluation criteria</h3>
      <Stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5" gap={0.08}>
        {criteria.map((k) => (
          <motion.div key={k.key} variants={item} className="glass glow-hover rounded-3xl p-5">
            <p className="text-cosmic font-display text-4xl font-bold"><CountUp value={k.weight} />%</p>
            <p className="mt-2 font-bold">{k.name}</p>
            <p className="mt-1 text-sm leading-relaxed text-muted">{k.description}</p>
          </motion.div>
        ))}
      </Stagger>
      <p className="mt-4 text-sm text-muted">Scoring: 1 = poor, 3 = fair, 5 = excellent. Weighted score = Σ (score × weight).</p>

      {/* Comparative table */}
      <h3 className="mb-6 mt-20 flex items-center gap-3 text-xl font-bold"><span className="h-px w-8 bg-glow" /> Comparative analysis table</h3>
      <Reveal>
        <div className="glass overflow-x-auto rounded-3xl">
          <table className="w-full min-w-[680px] text-left">
            <thead>
              <tr className="border-b border-line">
                <th className="px-6 py-5 text-sm font-semibold text-muted">Criteria (weight)</th>
                {ranked.map((c) => (
                  <th key={c.name} className={`px-6 py-5 text-right font-display font-bold ${c === best ? 'text-glow' : ''}`}>{c.name}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {criteria.map((k, r) => {
                const max = Math.max(...ranked.map((c) => c.scores[k.key]))
                return (
                  <motion.tr key={k.key} className="border-b border-line/60 transition hover:bg-glow/5"
                    initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: r * 0.08, duration: 0.5 }}>
                    <td className="px-6 py-4 font-medium">{k.name} <span className="text-muted">({k.weight}%)</span></td>
                    {ranked.map((c) => (
                      <td key={c.name} className="px-6 py-4 text-right tabular-nums">
                        <span className={`inline-grid h-9 w-9 place-items-center rounded-xl font-bold ${c.scores[k.key] === max ? 'bg-cosmic text-white shadow-md shadow-glow/30' : 'text-muted'}`}>{c.scores[k.key]}</span>
                      </td>
                    ))}
                  </motion.tr>
                )
              })}
            </tbody>
            <tfoot>
              <tr className="bg-glow/5">
                <td className="px-6 py-5 font-display font-bold">Weighted score (out of 5)</td>
                {ranked.map((c) => (
                  <td key={c.name} className={`px-6 py-5 text-right font-display text-2xl font-bold tabular-nums ${c === best ? 'text-cosmic' : ''}`}>
                    <CountUp value={c.total} decimals={2} />
                  </td>
                ))}
              </tr>
            </tfoot>
          </table>
        </div>
      </Reveal>

      {/* Recommendation */}
      <Reveal className="mt-20">
        <div className="relative overflow-hidden rounded-3xl border border-glow/40 p-8 md:p-12">
          <div className="bg-cosmic absolute inset-0 opacity-15" />
          <div className="animate-orbit-slow absolute -right-24 -top-24 h-72 w-72 rounded-full border border-dashed border-glow/40">
            <span className="absolute bottom-6 left-6 h-4 w-4 rounded-full bg-nova shadow-[0_0_16px_var(--c-nova)]" />
          </div>
          <div className="relative grid gap-8 md:grid-cols-[auto_minmax(0,1fr)] md:items-center">
            <motion.div className="bg-cosmic grid h-24 w-24 place-items-center rounded-3xl text-white shadow-2xl shadow-glow/40"
              initial={{ rotate: -20, scale: 0.6 }} whileInView={{ rotate: 0, scale: 1 }} viewport={{ once: true }} transition={{ type: 'spring', stiffness: 120, damping: 12 }}>
              <Building2 size={44} />
            </motion.div>
            <div>
              <p className="text-sm font-semibold text-glow">Final recommendation</p>
              <h3 className="mt-2 text-3xl font-bold leading-tight sm:text-4xl">{best.name}</h3>
              <p className="mt-1 text-lg text-muted">Weighted score: <span className="font-bold text-ink">{best.total.toFixed(2)} / 5</span></p>
              <p className="mt-4 max-w-3xl leading-relaxed">{recommendationReason}</p>
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  )
}