import { Route, Routes } from 'react-router-dom'
import SiteLayout from '@/layouts/SiteLayout'

function Home() {
  return (
    <section className="relative">
      <div className="container py-16">
        <h1 className="text-4xl md:text-5xl font-serif">Nogales Lodge #11</h1>
        <p className="mt-4 text-lg">Welcome. Site is under modernization.</p>
      </div>
    </section>
  )
}

export default function App() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
  )
}
