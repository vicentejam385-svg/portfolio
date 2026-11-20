import { useEffect, useState } from 'react'
import { motion, AnimatePresence, useScroll, useSpring } from 'motion/react'
import { Menu, X, Sun, Moon } from 'lucide-react'
import { profile } from '../data/portfolio'

export const links = [
  ['profile', 'Profile'],
  ['resume', 'Resume'],
  ['skills', 'Skills'],
  ['achievements', 'Achievements'],
  ['projects', 'Projects'],
  ['evaluation', 'HTE'],
  ['reflection', 'Reflection'],
  ['contact', 'Contact'],
]

function ThemeToggle() {
  const [dark, setDark] = useState(() => document.documentElement.classList.contains('dark'))
  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
    try { localStorage.setItem('theme', dark ? 'dark' : 'light') } catch { /* ignore */ }
  }, [dark])
  return (
    <button
      onClick={() => setDark(!dark)}
      aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={dark ? 'Light mode' : 'Dark mode'}
      className="relative grid h-11 w-11 shrink-0 place-items-center overflow-hidden rounded-full border border-line bg-panel/60 text-ink transition hover:border-glow hover:text-glow"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={dark ? 'moon' : 'sun'}
          initial={{ y: 20, rotate: -90, opacity: 0 }}
          animate={{ y: 0, rotate: 0, opacity: 1 }}
          exit={{ y: -20, rotate: 90, opacity: 0 }}
          transition={{ duration: 0.35 }}
        >
          {dark ? <Moon size={19} /> : <Sun size={19} />}
        </motion.span>
      </AnimatePresence>
    </button>
  )
}

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('profile')
  const [scrolled, setScrolled] = useState(false)
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 25 })

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' },
    )
    links.forEach(([id]) => { const el = document.getElementById(id); if (el) io.observe(el) })
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => { io.disconnect(); window.removeEventListener('scroll', onScroll) }
  }, [])

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5"
    >
      <motion.div className="bg-cosmic fixed inset-x-0 top-0 h-[3px] origin-left" style={{ scaleX: progress }} />
      <nav className={`mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 rounded-full px-3 pl-4 transition-all duration-500 ${scrolled ? 'glass shadow-xl shadow-black/10' : 'border border-transparent'}`}>
        <a href="#profile" className="group flex min-w-0 items-center gap-3 font-display font-bold">
          <span className="bg-cosmic grid h-10 w-10 shrink-0 place-items-center rounded-full text-sm text-white transition group-hover:rotate-[360deg] group-hover:duration-700">{profile.initials}</span>
          <span className="hidden truncate sm:inline">{profile.name}</span>
        </a>

        <ul className="hidden items-center lg:flex">
          {links.map(([id, label]) => (
            <li key={id} className="relative">
              <a href={`#${id}`} className={`relative z-10 block rounded-full px-3.5 py-2 text-sm font-medium transition ${active === id ? 'text-ink' : 'text-muted hover:text-ink'}`}>
                {label}
              </a>
              {active === id && (
                <motion.span layoutId="nav-pill" className="absolute inset-0 rounded-full border border-glow/40 bg-glow/10" transition={{ type: 'spring', stiffness: 380, damping: 30 }} />
              )}
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button className="grid h-11 w-11 place-items-center rounded-full border border-line bg-panel/60 lg:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open}>
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, y: -16, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -16, scale: 0.97 }}
            transition={{ duration: 0.3 }}
            className="glass mx-auto mt-2 grid max-w-6xl gap-1 rounded-3xl p-3 lg:hidden"
          >
            {links.map(([id, label], i) => (
              <motion.li key={id} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.04 }}>
                <a href={`#${id}`} onClick={() => setOpen(false)} className={`block rounded-2xl px-4 py-3 font-medium ${active === id ? 'bg-glow/10 text-glow' : 'text-ink hover:bg-glow/5'}`}>{label}</a>
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.header>
  )
}