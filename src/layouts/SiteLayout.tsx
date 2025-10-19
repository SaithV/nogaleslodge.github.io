import { Link, NavLink, Outlet } from 'react-router-dom'
import { Toaster } from '@/components/ui/toaster'
import { useTranslation } from 'react-i18next'
import { SEO } from '@/components/SEO'

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
  return (
    <div className="min-h-screen flex flex-col">
      <SEO />
      <header className="sticky top-0 z-40 bg-primary text-primary-foreground">
        <nav className="container flex items-center justify-between py-3">
          <Link className="font-serif text-xl" to="/">{t('siteName')}</Link>
          <ul className="hidden md:flex items-center gap-6">
            <li><NavLink to="/" className={({isActive})=> isActive? 'underline' : ''}>{nav.home}</NavLink></li>
            <li><NavLink to="/about" className={({isActive})=> isActive? 'underline' : ''}>{nav.about}</NavLink></li>
            <li><NavLink to="/officers" className={({isActive})=> isActive? 'underline' : ''}>{nav.officers}</NavLink></li>
            <li><NavLink to="/events" className={({isActive})=> isActive? 'underline' : ''}>{nav.events}</NavLink></li>
            <li><NavLink to="/gallery" className={({isActive})=> isActive? 'underline' : ''}>{nav.gallery}</NavLink></li>
            <li><NavLink to="/visit" className={({isActive})=> isActive? 'underline' : ''}>{nav.visit}</NavLink></li>
            <li><NavLink to="/join" className={({isActive})=> isActive? 'underline' : ''}>{nav.join}</NavLink></li>
            <li><NavLink to="/contact" className={({isActive})=> isActive? 'underline' : ''}>{nav.contact}</NavLink></li>
            <li><NavLink to="/resources" className={({isActive})=> isActive? 'underline' : ''}>{nav.resources}</NavLink></li>
            <li><LanguageToggle /></li>
          </ul>
        </nav>
      </header>
      <main id="root" className="flex-1">
        <Outlet />
      </main>
      <footer className="mt-auto border-t">
        <div className="container py-6 text-sm">© {new Date().getFullYear()} {t('siteName')} — {t('footer.rights')}</div>
      </footer>
      <Toaster />
    </div>
  )
}
