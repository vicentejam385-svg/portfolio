import { useEffect, useRef, useState } from 'react'
import { motion, useInView, animate } from 'motion/react'

const ease = [0.22, 1, 0.36, 1]

// Fades + rises + un-blurs into view when scrolled to
export function Reveal({ children, delay = 0, y = 32, className = '' }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y, filter: 'blur(8px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.8, delay, ease }}
    >
      {children}
    </motion.div>
  )
}

// Children appear one after another
export function Stagger({ children, className = '', gap = 0.1 }) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-60px' }}
      variants={{ hidden: {}, show: { transition: { staggerChildren: gap } } }}
    >
      {children}
    </motion.div>
  )
}

export const item = {
  hidden: { opacity: 0, y: 36, scale: 0.96 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.7, ease } },
}

export function Section({ id, children, className = '' }) {
  return (
    <section id={id} className={`relative px-5 py-20 sm:px-8 md:py-28 ${className}`}>
      <div className="mx-auto max-w-6xl">{children}</div>
    </section>
  )
}

export function Heading({ number, title, lead }) {
  return (
    <Reveal className="mb-12 max-w-3xl md:mb-16">
      <p className="mb-4 inline-flex items-center gap-3 text-sm font-semibold text-glow">
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping-soft absolute inset-0 rounded-full bg-glow" />
          <span className="relative h-2.5 w-2.5 rounded-full bg-glow" />
        </span>
        Section {number}
      </p>
      <h2 className="text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl">{title}</h2>
      {lead && <p className="mt-5 text-lg text-muted">{lead}</p>}
      <motion.span
        className="bg-cosmic mt-6 block h-1 rounded-full"
        initial={{ width: 0 }}
        whileInView={{ width: 96 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.3, ease }}
      />
    </Reveal>
  )
}

export function Card({ className = '', children, hover = true }) {
  return <div className={`glass rounded-3xl p-6 ${hover ? 'glow-hover' : ''} ${className}`}>{children}</div>
}

export function Pill({ children, className = '' }) {
  return (
    <span className={`inline-flex items-center rounded-full border border-line bg-glow/10 px-3 py-1 text-sm font-medium text-ink transition hover:border-glow hover:bg-glow/20 ${className}`}>
      {children}
    </span>
  )
}

// Number that counts up when it scrolls into view
export function CountUp({ value, decimals = 0, className = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  const [v, setV] = useState(0)
  useEffect(() => {
    if (!inView) return
    const c = animate(0, value, { duration: 1.6, ease, onUpdate: setV })
    return () => c.stop()
  }, [inView, value])
  return <span ref={ref} className={className}>{v.toFixed(decimals)}</span>
}