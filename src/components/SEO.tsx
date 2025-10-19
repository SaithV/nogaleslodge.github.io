import { Helmet } from 'react-helmet-async'

type SEOProps = {
  title?: string
  description?: string
  path?: string
  jsonLd?: object | object[]
}

const SITE_URL = 'https://saithv.github.io/nogaleslodge.github.io'
const DEFAULT_TITLE = 'Nogales Lodge #11, F&AM'
const DEFAULT_DESC = 'Freemasonry in Nogales, Arizona — Brotherhood, Relief, and Truth.'
const DEFAULT_IMAGE = `${SITE_URL}/assets/images/logo.png`

export function SEO({ title, description, path = '/', jsonLd }: SEOProps) {
  const fullTitle = title ? `${title} | Nogales Lodge #11` : DEFAULT_TITLE
  const url = `${SITE_URL}${path}`
  const desc = description ?? DEFAULT_DESC
  const baseLd: object[] = [
    {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Nogales Lodge #11, F&AM',
      legalName: 'Nogales Lodge No. 11, Free & Accepted Masons',
      url: SITE_URL,
      logo: DEFAULT_IMAGE,
      sameAs: [
        'https://www.facebook.com',
        'https://azmason.org',
      ],
      address: {
        '@type': 'PostalAddress',
        streetAddress: '1620 N Royal Rd',
        addressLocality: 'Nogales',
        addressRegion: 'AZ',
        postalCode: '85621',
        addressCountry: 'US',
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Place',
      name: 'Nogales Lodge #11',
      image: DEFAULT_IMAGE,
      address: {
        '@type': 'PostalAddress',
        streetAddress: '1620 N Royal Rd',
        addressLocality: 'Nogales',
        addressRegion: 'AZ',
        postalCode: '85621',
        addressCountry: 'US',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 31.364532,
        longitude: -110.931843,
      },
    },
  ]
  const ld = [...baseLd, ...(Array.isArray(jsonLd) ? jsonLd : jsonLd ? [jsonLd] : [])]
  return (
    <Helmet prioritizeSeoTags>
      <title>{fullTitle}</title>
      <link rel="canonical" href={url} />
      <meta name="description" content={desc} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={desc} />
      <meta property="og:image" content={DEFAULT_IMAGE} />
      <meta property="og:url" content={url} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={desc} />
      <meta name="twitter:image" content={DEFAULT_IMAGE} />
      {ld.map((obj, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(obj) }} />
      ))}
    </Helmet>
  )
}
