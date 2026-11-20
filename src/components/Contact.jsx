import { motion } from 'motion/react'
import { Mail, Phone, Briefcase, MapPin, BookOpen, ArrowUp, Send } from 'lucide-react'
import { contact, profile, sources } from '../data/portfolio'
import { Heading, Reveal } from './ui'

// Small brand icons
const Facebook = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M13.5 21v-7.5h2.5l.4-3h-2.9V8.6c0-.9.3-1.5 1.5-1.5h1.6V4.4c-.3 0-1.2-.1-2.3-.1-2.3 0-3.8 1.4-3.8 3.9v2.3H8v3h2.5V21h3z" />
  </svg>
)
const Instagram = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </svg>
)
const GitHub = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 2a10 10 0 0 0-3.2 19.5c.5.1.7-.2.7-.5v-1.7c-2.8.6-3.4-1.3-3.4-1.3-.4-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.5 2.3 1.1 2.9.8.1-.6.3-1.1.6-1.3-2.2-.3-4.6-1.1-4.6-5 0-1.1.4-2 1-2.7-.1-.3-.4-1.3.1-2.7 0 0 .8-.3 2.7 1a9.4 9.4 0 0 1 5 0c1.9-1.3 2.7-1 2.7-1 .5 1.4.2 2.4.1 2.7.6.7 1 1.6 1 2.7 0 3.9-2.4 4.7-4.6 5 .4.3.7.9.7 1.9V21c0 .3.2.6.7.5A10 10 0 0 0 12 2z" />
  </svg>
)

const clean = (url) => url.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '')
// Show only the username part of a profile link (e.g. github.com/name -> name)
const handle = (url) => clean(url).split('/').slice(1).join('/').replace(/^in\//, '') || clean(url)

// Contacts orbiting around the photo like planets
function ContactOrbit({ items }) {

  const n = items.length
  return (
    <div className="group/orbit relative mx-auto my-10 aspect-square w-[min(84vw,540px)]">
      {/* glow */}
      <div className="bg-cosmic absolute inset-[25%] rounded-full opacity-30 blur-3xl" />
      {/* rings */}
      <div className="absolute inset-[8%] rounded-full border border-dashed border-line" />
      <div className="animate-orbit absolute inset-[22%] rounded-full border border-glow/30">
        <span className="absolute right-[8%] top-[12%] h-2.5 w-2.5 rounded-full bg-glow shadow-[0_0_12px_var(--c-glow)]" />
      </div>

      {/* center planet */}
      <div className="animate-float absolute inset-[34%]">
        <div className="relative grid h-full w-full place-items-center rounded-full bg-[radial-gradient(circle_at_30%_30%,var(--c-glow),var(--c-nova)_60%,var(--c-base))] text-center text-white shadow-[0_0_60px_-10px_var(--c-glow)]">
          {/* planet ring */}
          <span className="absolute left-1/2 top-1/2 h-[30%] w-[150%] -translate-x-1/2 -translate-y-1/2 -rotate-12 rounded-[50%] border-2 border-white/30" />
          <span className="relative z-10 text-white [text-shadow:0_1px_8px_rgba(0,0,0,.45)]">
            <Send size={26} className="mx-auto drop-shadow" />
            <span className="mt-1 block font-display text-sm font-bold text-white sm:text-[16px]">Let&apos;s connect</span>
          </span>
        </div>
      </div>

      {/* spinning layer that carries the contact planets */}
      <div className="absolute inset-[8%] [animation:spin_60s_linear_infinite] group-hover/orbit:[animation-play-state:paused]">
        {items.map(({ icon: Icon, label, value, href }, i) => {
          const angle = (i / n) * 2 * Math.PI - Math.PI / 2
          const left = 50 + 50 * Math.cos(angle)
          const top = 50 + 50 * Math.sin(angle)
          const planet = (
            <>
              <span className="bg-cosmic grid h-12 w-12 place-items-center rounded-full text-white shadow-[0_0_22px_-2px_var(--c-glow)] ring-4 ring-base transition duration-300 group-hover/planet:scale-125 sm:h-14 sm:w-14">
                <Icon size={20} />
              </span>
              <span className="absolute left-1/2 top-full mt-2 -translate-x-1/2 whitespace-nowrap text-center">
                <span className="block text-[11px] font-semibold uppercase tracking-wider text-glow">{label}</span>
                <span className="hidden text-sm font-medium text-ink sm:block">{value}</span>
              </span>
            </>
          )
          return (
            <motion.div key={label}
              className="absolute -translate-x-1/2 -translate-y-1/2"
              style={{ left: `${left}%`, top: `${top}%` }}
              initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 160, damping: 14, delay: 0.2 + i * 0.12 }}>
              {/* counter-spin keeps icons and text upright */}
              <div className="[animation:spin-rev_60s_linear_infinite] group-hover/orbit:[animation-play-state:paused]">
                {href ? (
                  <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer"
                    aria-label={`${label}: ${value}`} title={`Open ${label}`}
                    className="group/planet relative block">
                    {planet}
                  </a>
                ) : (
                  <div className="relative">{planet}</div>
                )}
              </div>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}

export default function Contact() {
  const items = [
    { icon: Mail, label: 'Email', value: contact.email, href: contact.email && `https://mail.google.com/mail/?view=cm&to=${contact.email}` },
    { icon: Phone, label: 'Mobile', value: contact.phone, href: contact.phone && `tel:${contact.phone.replace(/\s/g, '')}` },
    { icon: Facebook, label: 'Facebook', value: contact.facebook && (contact.facebook.includes('profile.php') ? profile.name : handle(contact.facebook)), href: contact.facebook },
    { icon: Instagram, label: 'Instagram', value: contact.instagram && '@' + handle(contact.instagram), href: contact.instagram },
    { icon: GitHub, label: 'GitHub', value: contact.github && handle(contact.github), href: contact.github },
    { icon: Briefcase, label: 'LinkedIn', value: contact.linkedin && handle(contact.linkedin), href: contact.linkedin },
    { icon: MapPin, label: 'Location', value: contact.address },
  ].filter((i) => i.value)

  return (
    <footer id="contact" className="relative overflow-hidden px-5 pt-24 sm:px-8 md:pt-32">
      {/* planet horizon */}
      <div className="pointer-events-none absolute left-1/2 top-[70%] h-[900px] w-[1600px] -translate-x-1/2 rounded-[50%] border-t border-glow/50 bg-gradient-to-b from-glow/10 to-transparent shadow-[0_-30px_80px_-20px_var(--c-glow)]" aria-hidden />

      <div className="relative mx-auto max-w-6xl">
        <Heading number={8} title="Let's work together" lead="I am available for OJT / Work Immersion placement. Click any planet to reach me." />

        <ContactOrbit items={items} />

        {/* on phones the orbit only shows labels, so list the details here too */}
        <ul className="mx-auto mt-6 grid max-w-sm gap-2 text-sm sm:hidden">
          {items.map(({ label, value, href }) => (
            <li key={label} className="glass flex justify-between gap-3 rounded-xl px-4 py-2.5">
              <span className="text-muted">{label}</span>
              {href ? <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" className="truncate font-semibold text-glow">{value}</a> : <span className="truncate font-semibold">{value}</span>}
            </li>
          ))}
        </ul>

        <Reveal className="mt-24">
          <div className="glass rounded-3xl p-7">
            <h3 className="flex items-center gap-2 text-lg font-bold"><BookOpen size={20} className="text-glow" /> Sources &amp; credits</h3>
            <ul className="mt-4 grid gap-2 text-sm text-muted md:grid-cols-2">
              {sources.map((s) => <li key={s} className="flex gap-2"><span className="bg-cosmic mt-2 h-1.5 w-1.5 shrink-0 rounded-full" />{s}</li>)}
            </ul>
          </div>
        </Reveal>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-line py-8 text-sm text-muted sm:flex-row">
          <p>© {new Date().getFullYear()} {profile.name} · Digital Portfolio · {profile.school}</p>
          <a href="#profile" className="group inline-flex items-center gap-2 rounded-full border border-line px-4 py-2 font-medium transition hover:border-glow hover:text-glow">
            Back to top <ArrowUp size={16} className="transition group-hover:-translate-y-1" />
          </a>
        </div>
      </div>
    </footer>
  )
}