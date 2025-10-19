import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'

const icon = new L.Icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  iconSize: [25, 41], iconAnchor: [12, 41], popupAnchor: [1, -34], shadowSize: [41, 41],
})

export default function InlineMap({ lat, lng }: { lat: number; lng: number }) {
  const center: [number, number] = [lat, lng]
  return (
    <div className="h-80 w-full rounded-2xl overflow-hidden border">
      <MapContainer {...({ center, zoom: 15, scrollWheelZoom: false, className: 'h-full w-full' } as any)}>
        <TileLayer {...({ attribution: '© OpenStreetMap contributors', url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' } as any)} />
        <Marker {...({ position: center, icon } as any)}>
          <Popup>Nogales Lodge #11<br/>1620 N Royal Rd</Popup>
        </Marker>
      </MapContainer>
    </div>
  )
}
