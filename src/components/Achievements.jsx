import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Award, ScrollText, GraduationCap, Presentation, Medal, Satellite, ZoomIn, X } from 'lucide-react'
import { achievements } from '../data/portfolio'
import { Section, Heading, Reveal } from './ui'

const types = {
  certificate: { label: 'Certificates', one: 'Certificate', icon: ScrollText },
  award: { label: 'Awards', one: 'Award', icon: Award },
  training: { label: 'Trainings', one: 'Training', icon: GraduationCap },
  seminar: { label: 'Seminars & workshops', one: 'Seminar / workshop', icon: Presentation },
  recognition: { label: 'Academic recognitions', one: 'Academic recognition', icon: Medal },
}

// Full-screen certificate viewer
function Lightbox({ item, onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])
  return (
    <motion.div
      className="fixed inset-0 z-[100] grid place-items-center bg-black/80 p-4 backdrop-blur-sm"
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      onClick={onClose} role="dialog" aria-modal="true" aria-label={item.title}
    >
      <motion.figure
        className="relative w-full max-w-4xl"
        initial={{ scale: 0.85, y: 30, opacity: 0 }} animate={{ scale: 1, y: 0, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: 'spring', stiffness: 220, damping: 24 }}
        onClick={(e) => e.stopPropagation()}
      >
        <img src={item.image} alt={`Certificate: ${item.title}`} className="max-h-[80vh] w-full rounded-2xl bg-white object-contain shadow-2xl" />
        <figcaption className="mt-4 text-center text-white">
          <p className="font-display text-lg font-bold">{item.title}</p>
          <p className="text-sm text-white/70">{item.org} · {item.date}</p>
        </figcaption>
        <button onClick={onClose} aria-label="Close" className="absolute -right-2 -top-2 grid h-11 w-11 place-items-center rounded-full bg-white text-black shadow-lg transition hover:scale-110 sm:-right-4 sm:-top-4">
          <X size={20} />
        </button>
      </motion.figure>
    </motion.div>
  )
}

export default function Achievements() {
  const [filter, setFilter] = useState('all')
  const [open, setOpen] = useState(null)
  const shown = filter === 'all' ? achievements : achievements.filter((a) => a.type === filter)
  const count = (t) => achievements.filter((a) => a.type === t).length
  const tabs = [['all', 'All', achievements.length], ...Object.entries(types).map(([k, v]) => [k, v.label, count(k)]).filter(([, , n]) => n > 0)]

  return (
    <Section id="achievements">
      <Heading number={4} title="Academic achievements" lead="Certificates, trainings and seminars I have completed. Click a certificate to view it." />

      {achievements.length === 0 ? (
        <Reveal>
          <div className="glass flex flex-col items-center rounded-3xl px-6 py-16 text-center">
            <Satellite size={48} className="animate-float text-glow" />
            <p className="mt-5 text-xl font-bold">Achievements are being added</p>
            <p className="mt-2 max-w-md text-muted">Certificates, trainings, seminars and awards will be listed here.</p>
          </div>
        </Reveal>
      ) : (
        <>
          <Reveal className="mb-10 flex flex-wrap gap-2">
            {tabs.map(([k, label, n]) => (
              <button key={k} onClick={() => setFilter(k)}
                className={`relative h-11 rounded-full px-5 text-sm font-semibold transition ${filter === k ? 'text-white' : 'border border-line text-muted hover:border-glow hover:text-ink'}`}>
                {filter === k && <motion.span layoutId="ach-tab" className="bg-cosmic absolute inset-0 rounded-full" transition={{ type: 'spring', stiffness: 380, damping: 30 }} />}
                <span className="relative">{label} ({n})</span>
              </button>
            ))}
          </Reveal>
          <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {shown.map((a) => {
                const T = types[a.type] || types.certificate
                return (
                  <motion.article key={a.title} layout
                    initial={{ opacity: 0, scale: 0.85, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.85 }}
                    transition={{ duration: 0.45 }}
                    className="glass glow-hover group flex flex-col overflow-hidden rounded-3xl">
                    {a.image && (
                      <button onClick={() => setOpen(a)} className="relative block aspect-[4/3] w-full overflow-hidden bg-white" aria-label={`View certificate: ${a.title}`}>
                        <img src={a.image} alt={`Certificate: ${a.title}`} loading="lazy" className="h-full w-full object-contain p-2 transition duration-700 group-hover:scale-105" />
                        <span className="absolute inset-0 grid place-items-center bg-black/0 transition group-hover:bg-black/40">
                          <span className="flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-sm font-semibold text-black opacity-0 transition group-hover:opacity-100">
                            <ZoomIn size={16} /> View certificate
                          </span>
                        </span>
                      </button>
                    )}
                    <div className="flex flex-1 flex-col p-6">
                      <div className="mb-4 flex items-center justify-between gap-3">
                        <span className="inline-flex items-center gap-2 rounded-full bg-nova/15 px-3 py-1 text-xs font-semibold text-nova"><T.icon size={14} /> {T.one}</span>
                        <span className="whitespace-nowrap text-sm text-muted">{a.date}</span>
                      </div>
                      <h3 className="text-lg font-bold leading-snug">{a.title}</h3>
                      <p className="mt-1 text-sm text-muted">{a.org}</p>
                    </div>
                  </motion.article>
                )
              })}
            </AnimatePresence>
          </motion.div>
        </>
      )}

      <AnimatePresence>{open && <Lightbox item={open} onClose={() => setOpen(null)} />}</AnimatePresence>
    </Section>
  )
}