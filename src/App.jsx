import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import CustomCursor from './components/ui/SplashCursor'
import Project from './pages/Project'
import Service from './pages/Service'
import WebProjects from "./pages/WebProjects"
import Studios from "./pages/Studios"
import Teams from "./pages/Team"

function App() {
  return (

    <div className="min-h-screen flex flex-col">
    {/* <CustomCursor SPLAT_RADIUS={0.1} /> */}

      <div className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Project/>}/>
          <Route path="/services" element={<Service/>}/>
          <Route path="/studios" element={<Studios/>}/>
          <Route path="/webprojects" element={<WebProjects/>}/>
          <Route path="/teams" element={<Teams/>}/>
        </Routes>
      </div>
    </div>
  )
}

export default App
