import Navbar from "../components/ui/Navbar";
import Footer from "../components/ui/Footer";
import WebProjects from "../components/Projects/WebProjects/WebProjects";

export default function Project() {
  return (
    <div
      className="min-h-screen flex flex-col"
    >
      <div className="w-screen">
        <Navbar />
        <div className="min-h-screen">
      <WebProjects />
    </div>
        <Footer />
      </div>

    </div>
  );
}
