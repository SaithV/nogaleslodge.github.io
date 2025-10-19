import { useEffect, useMemo, useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'

const icon = new L.Icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  iconSize: [25, 41], iconAnchor: [12, 41], popupAnchor: [1, -34], shadowSize: [41, 41],
})

interface InlineMapProps {
  lat: number
  lng: number
  heightClass?: string // default h-80
  interactiveMobile?: boolean // default false
}

export default function InlineMap({ lat, lng, heightClass = 'h-80', interactiveMobile = false }: InlineMapProps) {
  const center: [number, number] = [lat, lng]
  const [isMobile, setIsMobile] = useState<boolean>(() => (typeof window !== 'undefined' ? window.innerWidth < 640 : false))
  useEffect(() => {
    const onResize = () => setIsMobile(typeof window !== 'undefined' ? window.innerWidth < 640 : false)
    window.addEventListener('resize', onResize)
    window.addEventListener('orientationchange', onResize)
    return () => {
      window.removeEventListener('resize', onResize)
      window.removeEventListener('orientationchange', onResize)
    }
  }, [])

  const [interactive, setInteractive] = useState<boolean>(() => (isMobile ? interactiveMobile : true))
  useEffect(() => {
    setInteractive(isMobile ? interactiveMobile : true)
  }, [isMobile, interactiveMobile])

  const gestures = useMemo(() => {
    if (isMobile && !interactive) {
      return { dragging: false, touchZoom: false, tap: false }
    }
    return { dragging: true, touchZoom: true, tap: true }
  }, [isMobile, interactive])

  return (
    <div className={`${heightClass} w-full rounded-2xl overflow-hidden relative`}>
      {!interactive && isMobile && (
        <button
          type="button"
          onClick={() => setInteractive(true)}
          className="absolute z-[1] bottom-3 right-3 rounded-lg bg-white/90 px-3 py-1.5 text-xs shadow hover:shadow-md border border-black/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C49A3A]"
          aria-label="Tap to interact with the map"
        >
          Tap to interact
        </button>
      )}
      <MapContainer
        {...({ center, zoom: 15, scrollWheelZoom: false, className: 'h-full w-full', ...gestures } as any)}
      >
        <TileLayer
          {...({ attribution: '\u00a9 OpenStreetMap contributors', url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' } as any)}
        />
        <Marker {...({ position: center, icon } as any)}>
          <Popup>Nogales Lodge #11<br/>1620 N Royal Rd</Popup>
        </Marker>
      </MapContainer>
    </div>
  )
}
