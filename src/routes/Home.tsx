import { SEO } from '@/components/SEO'
import { Button } from '@/components/ui/button'
import { useTranslation } from 'react-i18next'

export default function Home() {
  const { t } = useTranslation('common')
  return (
    <section className="relative">
      <SEO title={t('nav.home')} path="/" />
      <div className="container py-16">
        <h1 className="text-4xl md:text-5xl font-serif">{t('hero.title')}</h1>
        <p className="mt-4 text-lg">{t('hero.subtitle')}</p>
        <div className="mt-8 flex gap-4">
          <Button variant="primary">{t('hero.visit')}</Button>
          <Button variant="outline">{t('hero.join')}</Button>
        </div>
      </div>
    </section>
  )
}
