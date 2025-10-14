import Navbar from "../components/ui/Navbar";
import Footer from "../components/ui/Footer";
import AboutUs from "../components/AboutUs";
import Teams from "../components/Teams";
import ScrollVideoPlayer from "@/components/ScrollVideoPlayer";
import Particles from "@/components/ui/Particles";

export default function Home() {
  return (
    <div
      className="min-h-screen flex flex-col"
      style={{  backgroundColor: "black" , backgroundSize: "cover" }}

    >

      <div className="w-screen">
        <Navbar />
        <main className="min-h-[82vh] flex flex-col justify-center">
          <div style={{ width: '100%', height: '600px', position: 'relative', backgroundColor: '#070A0D' }}>
            {/* <Particles
              particleColors={['#E33D22','#C57E1B', '#ED9907']}
              particleCount={7500}
              particleSpread={10}
              speed={0.05}
              particleBaseSize={27}
              moveParticlesOnHover={false}
              alphaParticles={false}
              disableRotation={true}
            /> */}
                      <AboutUs />
          </div>
         


        </main>

      <Footer />
      </div>

    </div>
  );
}
