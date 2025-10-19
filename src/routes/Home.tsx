import { SEO } from '@/components/SEO'
import { useTranslation } from 'react-i18next'
import { Hero } from '@/components/Hero'

export default function Home() {
  const { t } = useTranslation('common')
  return (
    <>
      <SEO title={t('nav.home')} path="/" />
      <Hero />
      <section className="container py-12 grid sm:grid-cols-3 gap-6">
        <div className="rounded-2xl bg-card shadow-soft p-6">
          <p className="text-3xl font-serif">1910</p>
          <p className="text-sm text-muted-foreground">Founded</p>
        </div>
        <div className="rounded-2xl bg-card shadow-soft p-6">
          <p className="text-3xl font-serif">#11</p>
          <p className="text-sm text-muted-foreground">Lodge Number</p>
        </div>
        <div className="rounded-2xl bg-card shadow-soft p-6">
          <p className="text-3xl font-serif">AZ</p>
          <p className="text-sm text-muted-foreground">Grand Lodge of Arizona</p>
        </div>
      </section>
    </>
  )
}
