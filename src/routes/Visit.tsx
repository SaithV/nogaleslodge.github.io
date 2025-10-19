import { SEO } from '@/components/SEO'
import { useNavigate } from 'react-router-dom'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'

const position: [number, number] = [31.364532, -110.931843]

// Fix default icon path for Leaflet in Vite
const icon = new L.Icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
})

export default function Visit() {
  const navigate = useNavigate()
  return (
    <section className="container section">
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 bg-white text-black px-3 py-2 rounded">Skip to main content</a>
      <SEO title="Visit" path="/visit" />
      <div className="flex items-center justify-between">
        <button onClick={() => navigate('/')} className="rounded-md border border-white/20 px-3 py-1.5 hover:bg-white/10 focus-visible:ring-2">← Back to Home</button>
        <nav aria-label="Breadcrumb" className="text-sm text-muted-foreground">
          <ol className="flex gap-2">
            <li><a href="/">Home</a></li>
            <li aria-hidden>›</li>
            <li aria-current="page">Visit Us</li>
          </ol>
        </nav>
      </div>
      <h1 id="main" className="h2-tight mt-6">Visit Us</h1>
      <p>1620 N Royal Rd, Nogales, AZ 85621</p>
      <div className="mt-6 h-96 w-full rounded-xl overflow-hidden">
        <MapContainer {...({ center: position, zoom: 15, scrollWheelZoom: false, dragging: window.innerWidth < 640 ? false : true, tap: window.innerWidth < 640 ? false : true, className: 'h-full w-full' } as any)}>
          <TileLayer {...({ attribution: '© OpenStreetMap contributors', url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' } as any)} />
          <Marker {...({ position, icon } as any)}>
            <Popup>Nogales Lodge #11<br/>1620 N Royal Rd</Popup>
          </Marker>
        </MapContainer>
      </div>
      <div className="mt-3">
        <a className="underline text-primary" href={`https://www.google.com/maps?q=${position[0]},${position[1]}`} target="_blank" rel="noreferrer">Open full map</a>
      </div>
    </section>
  )
}
