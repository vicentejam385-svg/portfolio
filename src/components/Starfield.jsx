import { useEffect, useRef } from 'react'

// Animated outer-space background: twinkling stars with scroll parallax + shooting stars
export default function Starfield() {
  const ref = useRef(null)

  useEffect(() => {
    const canvas = ref.current
    const ctx = canvas.getContext('2d')
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    let w = 0, h = 0, stars = [], shooters = [], raf = 0

    const resize = () => {
      w = window.innerWidth; h = window.innerHeight
      canvas.width = w * dpr; canvas.height = h * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      const count = Math.round((w * h) / 4200)
      stars = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        depth: Math.random() * 0.8 + 0.2,
        r: Math.random() * 1.3 + 0.3,
        phase: Math.random() * Math.PI * 2,
        speed: 0.4 + Math.random() * 1.6,
        tint: Math.random(),
      }))
    }

    const draw = (time = 0) => {
      const dark = document.documentElement.classList.contains('dark')
      ctx.clearRect(0, 0, w, h)
      const scroll = window.scrollY

      for (const s of stars) {
        const y = (((s.y - scroll * s.depth * 0.25 - time * 0.004 * s.depth) % h) + h) % h
        const twinkle = 0.35 + 0.65 * Math.abs(Math.sin(s.phase + time * 0.001 * s.speed))
        ctx.globalAlpha = dark ? twinkle : twinkle * 0.5
        ctx.fillStyle = dark ? (s.tint > 0.85 ? '#9fe9ff' : s.tint > 0.7 ? '#cdbdff' : '#ffffff') : (s.tint > 0.5 ? '#7c3aed' : '#0891b2')
        ctx.beginPath()
        ctx.arc(s.x, y, s.r * s.depth + (dark ? 0 : 0.25), 0, Math.PI * 2)
        ctx.fill()
      }

      if (!reduce && Math.random() < 0.008 && shooters.length < 2) {
        shooters.push({ x: w * (0.3 + Math.random() * 0.7), y: Math.random() * h * 0.5, vx: -(7 + Math.random() * 5), vy: 3 + Math.random() * 2.5, life: 0 })
      }
      for (const s of shooters) {
        s.x += s.vx; s.y += s.vy; s.life++
        const tailX = s.x - s.vx * 14, tailY = s.y - s.vy * 14
        const g = ctx.createLinearGradient(s.x, s.y, tailX, tailY)
        g.addColorStop(0, dark ? 'rgba(255,255,255,0.95)' : 'rgba(124,58,237,0.6)')
        g.addColorStop(1, 'rgba(255,255,255,0)')
        ctx.globalAlpha = Math.max(0, 1 - s.life / 70)
        ctx.strokeStyle = g; ctx.lineWidth = 1.8; ctx.lineCap = 'round'
        ctx.beginPath(); ctx.moveTo(s.x, s.y); ctx.lineTo(tailX, tailY); ctx.stroke()
      }
      shooters = shooters.filter((s) => s.life < 70)
      ctx.globalAlpha = 1
      if (!reduce) raf = requestAnimationFrame(draw)
    }

    resize()
    window.addEventListener('resize', resize)
    const redraw = () => reduce && draw()
    window.addEventListener('scroll', redraw, { passive: true })
    const themeWatch = new MutationObserver(redraw)
    themeWatch.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] })
    raf = requestAnimationFrame(draw)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
      window.removeEventListener('scroll', redraw)
      themeWatch.disconnect()
    }
  }, [])

  return <canvas ref={ref} className="pointer-events-none fixed inset-0 z-0 h-full w-full" aria-hidden />
}