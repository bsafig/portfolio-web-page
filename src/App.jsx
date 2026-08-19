import { Routes, Route, Navigate, useParams } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Vouch from './pages/projects/Vouch.jsx'
import VouchMonitor from './pages/projects/VouchMonitor.jsx'
import ClocklessMutex from './pages/projects/ClocklessMutex.jsx'
import TerminalMon from './pages/projects/TerminalMon.jsx'
import Spotigang from './pages/projects/Spotigang.jsx'
import Frc2996 from './pages/projects/Frc2996.jsx'
import MlDemo from './pages/projects/MlDemo.jsx'

// slug (from src/data/projects.js) -> detail page component.
const PROJECT_PAGES = {
  vouch: Vouch,
  'vouch-monitor': VouchMonitor,
  'clockless-mutex': ClocklessMutex,
  terminalmon: TerminalMon,
  spotigang: Spotigang,
  frc2996: Frc2996,
  'ml-demo': MlDemo,
}

function ProjectRoute() {
  const { slug } = useParams()
  const Page = PROJECT_PAGES[slug]
  return Page ? <Page /> : <Navigate to="/" replace />
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects/:slug" element={<ProjectRoute />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
