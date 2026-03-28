import BackgroundLayout from './components/ui/BackgroundLayout'
import Footer from './components/ui/Footer'
import AboutUs from './components/AboutUs'
import Studios from './components/Projects/Studios/Studios'
import Projects from './components/Projects/Projects'
import WebProjects from './components/Projects/WebProjects/WebProjects'
import Service from './pages/Service'
import Teams from './components/Teams'
import Aryan from './pages/Aryan'
import { Analytics } from "@vercel/analytics/react"

function App() {
  return (
    <div className="flex flex-col w-full text-white bg-[#0b0812]">
      <Analytics />
      {/* Main Single Page Content Wrapped in Layout */}
      <BackgroundLayout>
        <div className="fixed top-4 left-4 z-50">
          <a href="/">
            <img src="/logoendorphind.png" alt="Endorphind Logo" className="h-16 md:h-24 w-auto object-contain cursor-pointer" />
          </a>
        </div>
        <main className="flex flex-col w-full min-h-screen pt-24">
          <section id="about" className="py-8">
            <AboutUs />
          </section>
          <section id="studios" className="py-8">
            <Studios />
          </section>
          <section id="projects" className="py-8">
            <Projects />
          </section>
          <section id="services" className="py-8">
            <Service />
          </section>
          <section id="team" className="py-8">
            <Teams />
          </section>
        </main>
        <Footer />
      </BackgroundLayout>
    </div>
  )
}

export default App
