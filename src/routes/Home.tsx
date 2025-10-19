import { SEO } from '@/components/SEO'
import home from '@/content/home.json'
import { HeroSection } from '@/components/home/HeroSection'
import { LegacySection } from '@/components/home/LegacySection'
import { CommunitySection } from '@/components/home/CommunitySection'
import { ValuesSection } from '@/components/home/ValuesSection'
import { ImpactSection } from '@/components/home/ImpactSection'
import { EventsPreviewSection } from '@/components/home/EventsPreviewSection'
import { GallerySnapshotSection } from '@/components/home/GallerySnapshotSection'
import { VisitUsSection } from '@/components/home/VisitUsSection'
import { CallToActionBanner } from '@/components/home/CallToActionBanner'

export default function Home() {
  return (
    <>
  <SEO title="Home" description={home.hero.subhead} path="/" />
  <HeroSection images={home.hero.images} headline={home.hero.headline} subhead={home.hero.subhead} />
  <LegacySection tagline={home.legacy.tagline} address={home.legacy.address} bullets={home.legacy.bullets} />
  <CommunitySection title={home.community.title} body={home.community.body} image={home.community.image} />
  <ValuesSection items={home.values.items} />
  <ImpactSection stats={home.impactStats} />
  <EventsPreviewSection title={home.eventsPreview.title} cta={home.eventsPreview.cta} />
  <GallerySnapshotSection title={home.galleryPreview.title} cta={home.galleryPreview.cta} images={home.galleryPreview.images} />
  <VisitUsSection title={home.visitUs.title} text={home.visitUs.text} cta={home.visitUs.cta} lat={home.visitUs.lat} lng={home.visitUs.lng} />
  <CallToActionBanner title={home.ctaBanner.title} primary={home.ctaBanner.primary} secondary={home.ctaBanner.secondary} />
    </>
  )
}
