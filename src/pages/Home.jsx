import Navbar from "../components/ui/Navbar";
import Footer from "../components/ui/Footer";
import AboutUs from "../components/AboutUs";
import Studios from "../components/Projects/Studios/Studios";
import Projects from "../components/Projects/Projects";
import Service from "./Service";

export default function Home() {
  return (
    <div>

      <div className="w-screen">
        <Navbar />
        <main className="min-h-[82vh] flex flex-col justify-center">
          <div>
                      <AboutUs />
          </div>
         
  <Studios />
   <div>
    <Projects />
    </div>
    <div>
      <Service />
    </div>
        </main>

      <Footer />
      </div>

    </div>
  );
}
