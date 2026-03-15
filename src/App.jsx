import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Home from './pages/Home.jsx'
import Rebranding from './pages/Rebranding.jsx'
import FeeManagement from './pages/FeeManagement.jsx'
import CustomFields from './pages/CustomFields.jsx'
import AIPrototyping from './pages/AIPrototyping.jsx'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/case-study/rebranding" element={<Rebranding />} />
        <Route path="/case-study/fee-management" element={<FeeManagement />} />
        <Route path="/case-study/custom-fields" element={<CustomFields />} />
        <Route path="/case-study/ai-prototyping" element={<AIPrototyping />} />
      </Routes>
    </BrowserRouter>
  )
}
