import { Link, NavLink, Outlet } from 'react-router-dom'
import { Toaster } from '@/components/ui/toaster'
import { useTranslation } from 'react-i18next'
import { SEO } from '@/components/SEO'
import { useEffect, useState } from 'react'

function LanguageToggle() {
  const { i18n } = useTranslation()
  const current = i18n.language.startsWith('es') ? 'es' : 'en'
  const toggle = () => {
    const next = current === 'en' ? 'es' : 'en'
    i18n.changeLanguage(next)
    localStorage.setItem('lng', next)
  }
  return (
    <button onClick={toggle} aria-label="Toggle language" className="text-sm underline">
      {current === 'en' ? 'ES' : 'EN'}
    </button>
  )
}

export default function SiteLayout() {
  const { t } = useTranslation('common')
  const nav = t('nav', { returnObjects: true }) as Record<string, string>
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 6)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return (
    <div className="min-h-screen flex flex-col">
      <SEO />
      <header className={`sticky top-0 z-50 bg-[rgba(14,34,53,.65)] backdrop-blur-md border-b border-white/10 transition-shadow ${scrolled ? 'shadow-[0_6px_20px_rgba(0,0,0,.18)]' : 'shadow-[0_1px_10px_rgba(0,0,0,.15)]'}`}>
        <nav className={`container flex items-center justify-between transition-all ${scrolled ? 'py-2' : 'py-3'}`}>
          <Link className="font-serif text-xl" to="/">{t('siteName')}</Link>
          <ul className="hidden md:flex items-center gap-6 text-white/90">
            <li><NavLink to="/" className={({isActive})=> `hover:text-gold/90 ${isActive ? 'underline underline-offset-4 decoration-gold' : ''}`}>{nav.home}</NavLink></li>
            <li><NavLink to="/about" className={({isActive})=> `hover:text-gold/90 ${isActive ? 'underline underline-offset-4 decoration-gold' : ''}`}>{nav.about}</NavLink></li>
            <li><NavLink to="/officers" className={({isActive})=> `hover:text-gold/90 ${isActive ? 'underline underline-offset-4 decoration-gold' : ''}`}>{nav.officers}</NavLink></li>
            <li><NavLink to="/events" className={({isActive})=> `hover:text-gold/90 ${isActive ? 'underline underline-offset-4 decoration-gold' : ''}`}>{nav.events}</NavLink></li>
            <li><NavLink to="/gallery" className={({isActive})=> `hover:text-gold/90 ${isActive ? 'underline underline-offset-4 decoration-gold' : ''}`}>{nav.gallery}</NavLink></li>
            <li><NavLink to="/visit" className={({isActive})=> `hover:text-gold/90 ${isActive ? 'underline underline-offset-4 decoration-gold' : ''}`}>{nav.visit}</NavLink></li>
            <li><NavLink to="/join" className={({isActive})=> `hover:text-gold/90 ${isActive ? 'underline underline-offset-4 decoration-gold' : ''}`}>{nav.join}</NavLink></li>
            <li><NavLink to="/contact" className={({isActive})=> `hover:text-gold/90 ${isActive ? 'underline underline-offset-4 decoration-gold' : ''}`}>{nav.contact}</NavLink></li>
            <li><NavLink to="/resources" className={({isActive})=> `hover:text-gold/90 ${isActive ? 'underline underline-offset-4 decoration-gold' : ''}`}>{nav.resources}</NavLink></li>
            <li><LanguageToggle /></li>
          </ul>
        </nav>
      </header>
      <main id="root" className="flex-1">
        <Outlet />
      </main>
      <footer className="mt-auto bg-[#112a42] border-t border-white/10 text-white/90">
        <div className="container py-6 text-sm">© {new Date().getFullYear()} {t('siteName')} — {t('footer.rights')}</div>
      </footer>
      <Toaster />
    </div>
  )
}
