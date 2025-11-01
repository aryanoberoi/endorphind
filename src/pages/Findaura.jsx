import Navbar from "../components/ui/Navbar";
import Footer from "../components/ui/Footer";
import Findaura from "../components/Findaura";

export default function Home() {
  return (
    <div
      className="min-h-screen flex flex-col"
      style={{  backgroundColor: "black" , backgroundSize: "cover" }}

    >

      <div className="w-screen">
        <Navbar />
        <main className="min-h-[82vh] flex flex-col justify-center">

          <div>
                      <Findaura />
          </div>
         


        </main>

      <Footer />
      </div>

    </div>
  );
}
