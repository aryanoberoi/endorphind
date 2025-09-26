import Navbar from "../components/ui/Navbar";
import Footer from "../components/ui/Footer";
import Services from "../components/Services"

export default function Project() {
  return (
    <div
      className="min-h-screen flex flex-col"
      style={{ backgroundImage: "url('bg.jpg')", backgroundSize: "cover" }}
    >
      <div className="w-screen">
        <Navbar />
        <div className="min-h-screen">
      <Services />
    </div>
        <Footer />
      </div>

    </div>
  );
}
