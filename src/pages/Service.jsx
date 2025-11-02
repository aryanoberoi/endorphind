
import LogoLoop from '../components/LogoLoop';
import { SiReact, SiTypescript, SiTailwindcss, SiJavascript, SiPython, SiFastapi, SiFlask, SiAdobecreativecloud, SiLangchain, SiVercel, SiOpenai, SiOpencv, SiOllama, SiGooglegemini, SiN8N, SiAdobe } from 'react-icons/si';

const imageLogos = [
  { src: "/Logos/comfy.png", alt: "ComfyUI", href: "https://comfyui.org" }
];

const techLogos = [
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
  { node: <SiJavascript />, title: "JavaScript", href: "https://www.javascript.com" },
  { node: <SiPython />, title: "Python", href: "https://www.python.org" },
  { node: <SiFastapi />, title: "FastAPI", href: "https://fastapi.tiangolo.com" },
  { node: <SiFlask />, title: "Flask", href: "https://flask.palletsprojects.com" },
  { node: <SiAdobe />, title: "Adobe Creative Cloud", href: "https://www.adobe.com/creativecloud" },
  { node: <SiLangchain />, title: "LangChain", href: "https://www.langchain.com" },
  { node: <SiVercel />, title: "Vercel", href: "https://vercel.com" },
  { node: <SiOpenai />, title: "OpenAI", href: "https://openai.com" },
  { node: <SiOpencv />, title: "OpenCV", href: "https://opencv.org" },
  { node: <SiOllama />, title: "Ollama", href: "https://ollama.com" },
  { node: <SiGooglegemini />, title: "Google Gemini", href: "https://gemini.google.com" },
  { node: <SiN8N />, title: "N8N", href: "https://n8n.io" },
];

export default function Service() {
  return (
    <div>
      {/* Add ASCII text at the very top */}
      <div className="flex justify-center mt-5 mb-8">
      </div>
      <div className="w-screen">
        <div>
          <h2 className="text-4xl font-bold text-center mb-7" style={{ color: '#DE9F3A', fontFamily: "robit, sans-serif" }}>
            Our stack
          </h2>
          <div style={{ height: '110px', position: 'relative', overflow: 'hidden', maxWidth: '100vw' }}>
            <LogoLoop
              logos={[...techLogos, ...imageLogos]}
              speed={120}
              direction="left"
              logoHeight={48}
              gap={40}
              pauseOnHover={false}
              scaleOnHover
              fadeOut
              fadeOutColor="#ffffff"
              ariaLabel="Technology partners"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
