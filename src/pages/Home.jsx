import Navbar from "../components/ui/Navbar";
import Footer from "../components/ui/Footer";
import AboutUs from "../components/AboutUs";

export default function Home() {
  return (
    <div>

      <div className="w-screen">
        <Navbar />
        <main className="min-h-[82vh] flex flex-col justify-center">
          <div>
                      <AboutUs />
          </div>
         


        </main>

      <Footer />
      </div>

    </div>
  );
}
