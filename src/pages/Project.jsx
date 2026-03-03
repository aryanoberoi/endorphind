import Navbar from "../components/ui/Navbar";
import Footer from "../components/ui/Footer";
import Projects from "../components/Projects/Projects";
import JsonLd from "../components/seo/JsonLd";

const projectsSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Projects — Endorphind",
  description:
    "Explore Endorphind's portfolio of AI applications, creative technology projects, and intelligent digital experiences.",
  url: "https://endorphind.com/projects",
  isPartOf: { "@id": "https://endorphind.com/#website" },
};

export default function Project() {
  return (
    <div className="min-h-screen flex flex-col">
      <JsonLd data={projectsSchema} />
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
