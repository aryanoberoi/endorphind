import Navbar from "../components/ui/Navbar";
import Footer from "../components/ui/Footer";
import WebProjects from "../components/Projects/WebProjects/WebProjects";
import JsonLd from "../components/seo/JsonLd";

const webProjectsSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Web Projects — Endorphind",
  description:
    "Browse Endorphind's web development projects — modern, responsive, and AI-powered web applications.",
  url: "https://endorphind.com/webprojects",
  isPartOf: { "@id": "https://endorphind.com/#website" },
};

export default function Project() {
  return (
    <div className="min-h-screen flex flex-col">
      <JsonLd data={webProjectsSchema} />
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
