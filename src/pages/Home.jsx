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
          {/* Main content of the home page goes here */}
          {/* <img src="asset2.png" alt="Logo1" className="w-1/3 h-1/3 mx-auto" /> */}
          {/* <ScrollVideoPlayer/> */}

          <div style={{ width: '100%', height: '600px', position: 'relative' }}>
            <Particles
              particleColors={['#ffffff', '#ffffff']}
              particleCount={600}
              particleSpread={10}
              speed={0.1}
              particleBaseSize={100}
              moveParticlesOnHover={true}
              alphaParticles={false}
              disableRotation={false}
            />
          </div>
          


        </main>
        <div className="min-h-[82vh] flex flex-col justify-center" >
          <AboutUs />
        </div>
        {/* <div className="min-h-[82vh] flex flex-col justify-center" >
          <Teams/>
        </div> */}

        <Footer />
      </div>

    </div>
  );
}
