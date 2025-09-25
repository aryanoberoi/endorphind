import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import CustomCursor from './components/ui/SplashCursor'
import Project from './pages/Project'
import Service from './pages/Service'

function App() {
  return (

    <div className="min-h-screen flex flex-col">
    <CustomCursor SPLAT_RADIUS={0.1} />

      <div className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Project/>}/>
          <Route path="/services" element={<Service/>}/>
        </Routes>
      </div>
    </div>
  )
}

export default App
