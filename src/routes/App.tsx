import { Route, Routes } from 'react-router-dom'
import SiteLayout from '@/layouts/SiteLayout'
import Home from '@/routes/Home'
import About from '@/routes/About'
import Officers from '@/routes/Officers'
import Events from '@/routes/Events'
import Gallery from '@/routes/Gallery'
import Visit from '@/routes/Visit'
import Join from '@/routes/Join'
import Contact from '@/routes/Contact'
import Resources from '@/routes/Resources'
import Privacy from '@/routes/Privacy'
import Terms from '@/routes/Terms'
import Legacy from '@/routes/Legacy'

export default function App() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="/officers" element={<Officers />} />
  <Route path="/events" element={<Events />} />
  <Route path="/gallery" element={<Gallery />} />
  <Route path="/visit" element={<Visit />} />
  <Route path="/join" element={<Join />} />
  <Route path="/contact" element={<Contact />} />
  <Route path="/resources" element={<Resources />} />
  <Route path="/privacy" element={<Privacy />} />
  <Route path="/terms" element={<Terms />} />
  <Route path="/legacy" element={<Legacy />} />
      </Route>
    </Routes>
  )
}
