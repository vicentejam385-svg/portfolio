import { useState } from 'react'
import { motion } from 'motion/react'
import { ChevronDown } from 'lucide-react'
import { profile } from '../data/portfolio'

const ease = [0.22, 1, 0.36, 1]

function OrbitPhoto() {
  const [failed, setFailed] = useState(false)
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.7, rotate: -10 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{ duration: 1.2, ease, delay: 0.2 }}
      className="relative mx-auto aspect-square w-[min(80vw,420px)]"
    >
      {/* glow */}
      <div className="bg-cosmic absolute inset-[18%] rounded-full opacity-40 blur-3xl" />
      {/* outer orbit with planet */}
      <div className="animate-orbit-slow absolute inset-0 rounded-full border border-dashed border-line">
        <span className="absolute left-1/2 top-0 h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-amber-300 to-orange-500 shadow-[0_0_20px_rgba(251,191,36,.7)]" />
        <span className="absolute bottom-[14%] left-[3%] h-3 w-3 rounded-full bg-nova shadow-[0_0_14px_var(--c-nova)]" />
      </div>
      {/* inner orbit with moon */}
      <div className="animate-orbit absolute inset-[9%] rounded-full border border-glow/30">
        <span className="absolute right-[6%] top-[14%] h-4 w-4 rounded-full bg-glow shadow-[0_0_18px_var(--c-glow)]" />
        <span className="absolute bottom-0 left-1/2 h-2.5 w-2.5 -translate-x-1/2 translate-y-1/2 rounded-full bg-ink/70" />
      </div>
      {/* photo */}
      <div className="animate-float absolute inset-[17%]">
        <div className="bg-cosmic h-full w-full rounded-full p-[3px] shadow-2xl">
          <div className="h-full w-full overflow-hidden rounded-full bg-panel">
            {!failed ? (
              <img src={profile.photo} alt={`Professional photo of ${profile.name}`} onError={() => setFailed(true)} className="h-full w-full object-cover" />
            ) : (
              <div className="grid h-full w-full place-items-center font-display text-6xl font-bold text-muted">{profile.initials}</div>
            )}
          </div>
        </div>
      </div>
      {/* floating badge */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.1, duration: 0.8, ease }}
        className="glass absolute bottom-[6%] right-0 flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold shadow-lg sm:right-[-4%]"
      >
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping-soft absolute inset-0 rounded-full bg-emerald-400" />
          <span className="relative h-2.5 w-2.5 rounded-full bg-emerald-400" />
        </span>
        Open for OJT
      </motion.div>
    </motion.div>
  )
}

export default function Hero() {
  const words = profile.name.split(' ')
  return (
    <section id="profile" className="relative flex min-h-[100svh] flex-col items-center justify-center px-5 pb-16 pt-28 text-center sm:px-8">
      <OrbitPhoto />

      <h1 className="mt-10 text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
        {words.map((w, i) => (
          <motion.span key={i} className={`mr-[0.25em] inline-block last:mr-0 ${i === words.length - 1 ? 'text-cosmic' : ''}`}
            initial={{ opacity: 0, y: 60, rotateX: -60 }} animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 0.9, delay: 0.5 + i * 0.12, ease }}>
            {w}
          </motion.span>
        ))}
      </h1>

      <motion.a href="#resume" aria-label="Scroll down" className="mt-14 grid h-12 w-12 place-items-center rounded-full border border-line text-muted hover:text-glow"
        initial={{ opacity: 0 }} animate={{ opacity: 1, y: [0, 8, 0] }} transition={{ opacity: { delay: 1.4 }, y: { repeat: Infinity, duration: 2 } }}>
        <ChevronDown />
      </motion.a>
    </section>
  )
}