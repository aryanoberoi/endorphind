import Navbar from "../components/ui/Navbar";
import Footer from "../components/ui/Footer";
import Teams from "../components/Teams";
import JsonLd from "../components/seo/JsonLd";

const teamSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "Team — Endorphind",
  description:
    "Meet the team behind Endorphind — video producers, editors, cinematographers, scriptwriters, motion graphics artists, and full-stack developers.",
  url: "https://endorphind.com/team",
  isPartOf: { "@id": "https://endorphind.com/#website" },
  about: { "@id": "https://endorphind.com/#organization" },
};

export default function Project() {
  return (
    <div className="min-h-screen flex flex-col">
      <JsonLd data={teamSchema} />
      <div className="w-screen">
        <Navbar />
        <div className="min-h-[82vh] flex flex-col justify-center">
          <Teams />
        </div>
        <Footer />
      </div>
    </div>
  );
}
