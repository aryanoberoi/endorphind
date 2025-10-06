import Navbar from "../components/ui/Navbar";
import Footer from "../components/ui/Footer";
import Projects from "../components/Projects/Projects"


export default function Project() {
  return (
    <div
      className="min-h-screen flex flex-col"
    >
      <div className="w-screen">
        <Navbar />
        <div className="bg-transparent text-gray-200 flex flex-col items-center py-16 px-6 space-y-20">
          <Projects />
        </div>
        <Footer />
      </div>
    </div>
  );
}
