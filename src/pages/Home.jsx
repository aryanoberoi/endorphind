import Navbar from "../components/ui/Navbar";
import Footer from "../components/ui/Footer";
import AboutUs from "../components/AboutUs";
import Studios from "../components/Projects/Studios/Studios";
import Projects from "../components/Projects/Projects";
import Service from "./Service";
import JsonLd from "../components/seo/JsonLd";

const homeSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://endorphind.com/#webpage",
  url: "https://endorphind.com",
  name: "Endorphind — Creative AI & Wellness Studio",
  description:
    "A pioneering creative and wellness company at the intersection of art, storytelling, AI, and technology. We build AI applications and intelligent digital experiences.",
  isPartOf: { "@id": "https://endorphind.com/#website" },
  about: { "@id": "https://endorphind.com/#organization" },
};

export default function Home() {
  return (
    <div>
      <JsonLd data={homeSchema} />

      <div className="w-screen">
        <Navbar />
        <main className="min-h-[82vh] flex flex-col justify-center">
          <div>
            <AboutUs />
          </div>

          <Studios />
          <div>
            <Projects />
          </div>
          <div>
            <Service />
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
}
