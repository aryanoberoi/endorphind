import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import CustomCursor from './components/ui/SplashCursor'
import Project from './pages/Project'
import Service from './pages/Service'
import WebProjects from "./pages/WebProjects"
import Studios from "./pages/Studios"
import Teams from "./pages/Team"
import BackgroundLayout from './components/ui/BackgroundLayout'
import Findaura from './pages/Findaura'
import Aryan from './pages/Aryan'
function App() {
  return (
        <BackgroundLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Project />} />
            <Route path="/services" element={<Service />} />
            <Route path="/studios" element={<Studios />} />
            <Route path="/webprojects" element={<WebProjects />} />
            <Route path="/teams" element={<Teams />} />
            <Route path="/findaura" element={<Findaura />} />
            <Route path="/aryan" element={<Aryan />} />
          </Routes>
        </BackgroundLayout>
  )
}

export default App
