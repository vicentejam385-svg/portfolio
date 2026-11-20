import { motion } from 'motion/react'
import { FileText, BarChart3, Presentation, Palette, Rocket, HeartHandshake, ExternalLink, Globe, Code2 } from 'lucide-react'
import { projects } from '../data/portfolio'
import { Section, Heading, Pill, Stagger, item } from './ui'

const cat = {
  Research: FileText,
  Infographic: BarChart3,
  Presentation: Presentation,
  Creative: Palette,
  'School project': Rocket,
  Community: HeartHandshake,
}

const shortUrl = (url) => url.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '')

// Screenshot shown inside a small browser window
function BrowserPreview({ p }) {
  return (
    <div className="relative bg-panel p-3 pb-0">
      <div className="overflow-hidden rounded-t-xl border border-b-0 border-line bg-base">
        <div className="flex items-center gap-2 border-b border-line px-3 py-2">
          <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
          {p.link && (
            <span className="ml-2 flex min-w-0 flex-1 items-center gap-1.5 truncate rounded-full bg-line/60 px-3 py-0.5 text-xs text-muted">
              <Globe size={12} className="shrink-0" /> {shortUrl(p.link)}
            </span>
          )}
        </div>
        <div className="aspect-[2/1] overflow-hidden">
          <img src={p.image} alt={`Screenshot of ${p.title}`} loading="lazy"
            className="h-full w-full object-cover object-left-top transition duration-[1.2s] group-hover:scale-105" />
        </div>
      </div>
      <span className="absolute bottom-3 right-6 rounded-full bg-black/60 px-3 py-1 text-xs font-semibold text-white backdrop-blur">{[p.category, p.year].filter(Boolean).join(' · ')}</span>
    </div>
  )
}

function CosmicCover({ p, i }) {
  const Icon = cat[p.category] || Rocket
  return (
    <div className="relative h-52 overflow-hidden">
      <div className="bg-cosmic absolute inset-0 opacity-90 transition duration-700 group-hover:scale-110" />
      <div className="absolute -right-10 -top-10 h-48 w-48 rounded-full border border-white/25" />
      <div className="animate-orbit absolute right-4 top-4 h-28 w-28 rounded-full border border-dashed border-white/40">
        <span className="absolute -top-1.5 left-1/2 h-3 w-3 rounded-full bg-white shadow-[0_0_12px_white]" />
      </div>
      <Icon size={56} strokeWidth={1.4} className="absolute right-10 top-10 text-white transition duration-500 group-hover:-translate-y-2 group-hover:rotate-6" />
      <span className="absolute bottom-5 left-5 font-display text-7xl font-bold text-white/20">{String(i + 1).padStart(2, '0')}</span>
      <span className="absolute bottom-5 right-5 rounded-full bg-black/25 px-3 py-1 text-sm font-semibold text-white backdrop-blur">{[p.category, p.year].filter(Boolean).join(' · ')}</span>
    </div>
  )
}

export default function Projects() {
  return (
    <Section id="projects">
      <Heading number={5} title="Work samples & projects" lead="My best outputs: quality over quantity." />
      <Stagger className={`grid gap-6 md:grid-cols-2 ${projects.length > 2 ? 'lg:grid-cols-3' : ''}`} gap={0.15}>
        {projects.map((p, i) => (
          <motion.article key={p.title} variants={item} className="glass glow-hover group flex flex-col overflow-hidden rounded-3xl">
            {p.link ? (
              <a href={p.link} target="_blank" rel="noreferrer" aria-label={`Open ${p.title}`} className="relative block">
                {p.image ? <BrowserPreview p={p} /> : <CosmicCover p={p} i={i} />}
                <span className="absolute inset-0 grid place-items-center bg-black/0 transition group-hover:bg-black/35">
                  <span className="flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-black opacity-0 shadow-lg transition group-hover:opacity-100">
                    Open project <ExternalLink size={16} />
                  </span>
                </span>
              </a>
            ) : p.image ? <BrowserPreview p={p} /> : <CosmicCover p={p} i={i} />}
            <div className="flex flex-1 flex-col p-7">
              <h3 className="text-2xl font-bold leading-snug">{p.title}</h3>
              <p className="mt-1 text-sm font-semibold text-glow">My role: {p.role}</p>
              <p className="mt-4 leading-relaxed text-muted">{p.description}</p>
              {p.tools.length > 0 && <div className="mt-5 flex flex-wrap gap-2">{p.tools.map((t) => <Pill key={t} className="text-xs">{t}</Pill>)}</div>}
              {(p.link || p.code) && (
                <div className="mt-auto flex flex-wrap gap-3 pt-6">
                  {p.link && (
                    <a href={p.link} target="_blank" rel="noreferrer"
                      className="bg-cosmic inline-flex h-11 items-center gap-2 rounded-full px-5 text-sm font-semibold text-white shadow-lg shadow-glow/30 transition hover:scale-105">
                      Visit project <ExternalLink size={16} />
                    </a>
                  )}
                  {p.code && (
                    <a href={p.code} target="_blank" rel="noreferrer"
                      className="inline-flex h-11 items-center gap-2 rounded-full border border-line px-5 text-sm font-semibold transition hover:border-glow hover:text-glow">
                      <Code2 size={16} /> View code
                    </a>
                  )}
                </div>
              )}
            </div>
          </motion.article>
        ))}
      </Stagger>
    </Section>
  )
}