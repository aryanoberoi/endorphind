import Navbar from "../components/ui/Navbar";
import Footer from "../components/ui/Footer";
import Projects from "../components/Projects/Projects"


export default function Project() {
  return (
    <div
      className="min-h-screen flex flex-col"
      style={{ backgroundImage: "url('/bg.jpg')", backgroundSize: "cover" }} // Corrected path
    >
      <div className="w-screen">
        <Navbar />
        <div className="min-h-[82vh] flex flex-col justify-center" >
          <Projects />
        </div>
        <Footer />
      </div>
    </div>
  );
}
