import { Routes, Route, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Project from './pages/Project'
import Service from './pages/Service'
import WebProjects from "./pages/WebProjects"
import Studios from "./pages/Studios"
import Teams from "./pages/Team"
import BackgroundLayout from './components/ui/BackgroundLayout'
import FindauraLanding from './findaura/Landing'
import FindauraHome from './findaura/Home'
import Aryan from './pages/Aryan'
import InteractivePage from './pages/InteractivePage'
import { Analytics } from "@vercel/analytics/react"

const STANDALONE_ROUTES = ['/interactive']

function App() {
  const location = useLocation()
  const isStandalone = STANDALONE_ROUTES.some(r => location.pathname.startsWith(r))

  return (
    <>
      <Analytics />
      {isStandalone ? (
        <Routes>
          <Route path="/interactive" element={<InteractivePage />} />
        </Routes>
      ) : (
        <BackgroundLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Project />} />
            <Route path="/services" element={<Service />} />
            <Route path="/studios" element={<Studios />} />
            <Route path="/webprojects" element={<WebProjects />} />
            <Route path="/team" element={<Teams />} />

            {/* Findaura Routes */}
            <Route path="/findaura" element={<FindauraLanding />} />
            <Route path="/findaura/home" element={<FindauraHome />} />

            <Route path="/aryan" element={<Aryan />} />
          </Routes>
        </BackgroundLayout>
      )}
    </>
  )
}

export default App
