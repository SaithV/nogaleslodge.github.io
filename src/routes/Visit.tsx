import { SEO } from '@/components/SEO'
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
  return (
    <section className="container py-12">
      <SEO title="Visit" path="/visit" />
      <h1 className="text-3xl font-serif mb-6">Visit Us</h1>
      <p>1620 N Royal Rd, Nogales, AZ 85621</p>
      <div className="mt-6 h-96 w-full rounded-xl overflow-hidden">
        <MapContainer {...({ center: position, zoom: 15, scrollWheelZoom: false, className: 'h-full w-full' } as any)}>
          <TileLayer {...({ attribution: '© OpenStreetMap contributors', url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' } as any)} />
          <Marker {...({ position, icon } as any)}>
            <Popup>Nogales Lodge #11<br/>1620 N Royal Rd</Popup>
          </Marker>
        </MapContainer>
      </div>
    </section>
  )
}
