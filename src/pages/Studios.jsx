import Navbar from "../components/ui/Navbar";
import Footer from "../components/ui/Footer";
import Studios from "../components/Projects/Studios/Studios";
import JsonLd from "../components/seo/JsonLd";

const studiosSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Studios — Endorphind",
  description:
    "Discover Endorphind Studios — our creative production arm delivering films, brand stories, and immersive digital content.",
  url: "https://endorphind.com/studios",
  isPartOf: { "@id": "https://endorphind.com/#website" },
};

export default function Project() {
  return (
    <div className="min-h-screen flex flex-col">
      <JsonLd data={studiosSchema} />
      <div className="w-screen">
        <Navbar />
        <div className="min-h-screen">
          <Studios />
        </div>
        <Footer />
      </div>
    </div>
  );
}
