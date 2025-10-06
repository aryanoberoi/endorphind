import Navbar from "../components/ui/Navbar";
import Footer from "../components/ui/Footer";
import Services from "../components/Services"

export default function Project() {
  return (
    <div
      className="min-h-screen flex flex-col"
    >
      <div className="w-screen">
        <Navbar />
        <div className="min-h-[82vh] flex flex-col justify-center" >
          <Services/>
        </div>
        <Footer />
      </div>

    </div>
  );
}
