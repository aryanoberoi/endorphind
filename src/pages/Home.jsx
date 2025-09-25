import Navbar from "../components/ui/Navbar";
import Footer from "../components/ui/Footer";
import AboutUs from "../components/AboutUs";
import Teams from "../components/Teams";
import ScrollVideoPlayer from "@/components/ScrollVideoPlayer";

export default function Home() {
  return (
    <div
      className="min-h-screen flex flex-col"
      style={{ backgroundImage: "url('bg.jpg')", backgroundSize: "cover" }}
    >
      <div className="w-screen">
        <Navbar />
        <main className="min-h-[82vh] flex flex-col justify-center">
        {/* Main content of the home page goes here */}
        {/* <img src="asset2.png" alt="Logo1" className="w-1/3 h-1/3 mx-auto" /> */}
        <ScrollVideoPlayer/>
        </main>
        <div className="min-h-[82vh] flex flex-col justify-center" >
          <AboutUs/>
        </div>
        {/* <div className="min-h-[82vh] flex flex-col justify-center" >
          <Teams/>
        </div> */}
        
        <Footer />
      </div>

    </div>
  );
}
