import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const devicon = (name: string) => `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${name}/${name}-original.svg`;
const simple = (name: string) => `https://cdn.simpleicons.org/${name}`;
const ghAvatar = (id: number) => `https://avatars.githubusercontent.com/u/${id}?s=40`;

type LogoItem = { type: "img"; src: string; alt: string } | { type: "badge"; label: string };

interface Project {
  title: string;
  subtitle: string;
  desc: string;
  tech: string[];
  logos: LogoItem[];
  github?: string;
}

const projects: Project[] = [
  {
    title: "RAG Study Assistant",
    subtitle: "AI-Powered PDF Learning Platform",
    desc: "A PDF-based RAG system that lets students upload study materials and ask natural language questions. Extracts, chunks, embeds PDFs and queries them using semantic search.",
    tech: ["FastAPI", "ChromaDB", "HuggingFace", "Groq LLM", "LangChain", "Python"],
    logos: [
      { type: "img", src: devicon("python"), alt: "Python" },
      { type: "img", src: simple("fastapi"), alt: "FastAPI" },
      { type: "badge", label: "🤗 HuggingFace" },
      { type: "img", src: simple("groq"), alt: "Groq" },
      { type: "img", src: ghAvatar(107516996), alt: "ChromaDB" },
    ],
    github: "https://github.com/HassanCodesIt/RAG-Study-Assistant",
  },
  {
    title: "AI Recruitment System",
    subtitle: "End-to-End HR Platform",
    desc: "End-to-end recruitment platform that auto-fetches CVs via IMAP, parses with LLMs and NER, deduplicates profiles, and semantically ranks candidates against job descriptions. Includes dashboards, analytics, and predictive recommendations.",
    tech: ["Python", "Groq LLM", "Spacy", "Sentence Transformers", "PostgreSQL", "Streamlit"],
    logos: [
      { type: "img", src: devicon("python"), alt: "Python" },
      { type: "img", src: devicon("postgresql"), alt: "PostgreSQL" },
      { type: "badge", label: "Streamlit" },
      { type: "img", src: simple("groq"), alt: "Groq" },
      { type: "img", src: ghAvatar(17332350), alt: "spaCy" },
    ],
    github: "https://github.com/HassanCodesIt/Recruitment-management-system",
  },
  {
    title: "AI Email Customer Support Agent",
    subtitle: "Zero-Code Automation",
    desc: "Fully automated email support agent built as an n8n workflow. Monitors inbox via IMAP, generates professional replies using Groq LLaMA 3.1, and sends responses via SMTP — zero code, zero manual effort.",
    tech: ["n8n", "Groq LLM", "LLaMA 3.1", "IMAP", "SMTP"],
    logos: [
      { type: "img", src: simple("n8n"), alt: "n8n" },
      { type: "img", src: simple("groq"), alt: "Groq" },
      { type: "img", src: simple("meta"), alt: "LLaMA" },
    ],
    github: "https://github.com/HassanCodesIt/Email-Customer-support-Agent",
  },
  {
    title: "AI-Powered Journalism Platform",
    subtitle: "News Intelligence System",
    desc: "Flask web app that scrapes BBC World RSS feeds, extracts full article text, summarizes content using LLaMA 3, and lets users chat with news articles via natural language Q&A.",
    tech: ["Flask", "Python", "LLaMA 3", "newspaper3k", "feedparser"],
    logos: [
      { type: "img", src: devicon("python"), alt: "Python" },
      { type: "img", src: devicon("flask"), alt: "Flask" },
      { type: "img", src: simple("meta"), alt: "Meta (LLaMA)" },
      { type: "badge", label: "🤗 HuggingFace" },
    ],
    github: "https://github.com/HassanCodesIt/AI-powered-journalism",
  },
  {
    title: "Corn Leaf Disease Detection",
    subtitle: "Deep Learning Vision",
    desc: "YOLOv8 deep learning model trained on 4,924 images to detect 7 corn leaf diseases in real-time. Includes a FastAPI web app, webcam inference support, and one-click Render deployment.",
    tech: ["YOLOv8", "FastAPI", "Python", "OpenCV", "Roboflow", "JavaScript"],
    logos: [
      { type: "img", src: devicon("python"), alt: "Python" },
      { type: "img", src: simple("fastapi"), alt: "FastAPI" },
      { type: "img", src: ghAvatar(26833433), alt: "YOLOv8" },
      { type: "img", src: simple("opencv"), alt: "OpenCV" },
    ],
    github: "https://github.com/HassanCodesIt/corn-leaf-disease-detection",
  },
  {
    title: "Assignment Evaluation Assistant",
    subtitle: "AI Grading Tool",
    desc: "AI-powered assistant that automatically evaluates student assignments, providing structured feedback and scores using LLM-based analysis.",
    tech: ["Python", "LLM", "FastAPI"],
    logos: [
      { type: "img", src: devicon("python"), alt: "Python" },
      { type: "img", src: simple("fastapi"), alt: "FastAPI" },
      { type: "img", src: simple("groq"), alt: "Groq" },
    ],
    github: "https://github.com/HassanCodesIt/Assignment-Evaluation-Assistant",
  },
  {
    title: "Parking Space Detection",
    subtitle: "Computer Vision System",
    desc: "Computer vision system that detects and monitors real-time parking space availability from camera feeds with a web-based management interface.",
    tech: ["YOLOv8", "OpenCV", "TensorFlow Lite", "Python"],
    logos: [
      { type: "img", src: devicon("python"), alt: "Python" },
      { type: "img", src: devicon("tensorflow"), alt: "TensorFlow" },
      { type: "badge", label: "OpenCV" },
    ],
  },
];

const LogoIcon = ({ item }: { item: LogoItem }) => {
  if (item.type === "img") {
    return (
      <img
        src={item.src}
        alt={item.alt}
        className="w-6 h-6 object-contain"
        loading="lazy"
        onError={(e) => {
          (e.currentTarget as HTMLImageElement).style.display = "none";
        }}
      />
    );
  }
  return (
    <span className="px-2 py-0.5 rounded-md bg-primary/15 text-primary text-[10px] font-semibold whitespace-nowrap">
      {item.label}
    </span>
  );
};

const ProjectsSection = () => (
  <section id="projects" className="py-24 px-6">
    <div className="container max-w-6xl">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-4xl font-bold mb-12"
      >
        Featured <span className="text-gradient-cyan">Projects</span>
      </motion.h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="group p-6 rounded-xl bg-card border-glow hover:glow-cyan transition-all duration-300 flex flex-col"
          >
            <div className="mb-3">
              <h3 className="text-lg font-bold">{project.title}</h3>
              <p className="text-sm text-primary font-medium">{project.subtitle}</p>
            </div>

            <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">
              {project.desc}
            </p>

            {/* Tech tags */}
            <div className="flex flex-wrap gap-1.5 mb-4">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="px-2 py-0.5 rounded-md bg-muted text-[11px] font-medium text-muted-foreground"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Logo row */}
            <div className="flex items-center gap-2 mb-4 flex-wrap">
              {project.logos.map((logo, li) => (
                <LogoIcon key={li} item={logo} />
              ))}
            </div>

            {/* GitHub button */}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-muted text-sm font-medium text-foreground hover:text-primary hover:bg-muted/80 transition-colors self-start"
              >
                <ExternalLink className="w-4 h-4" />
                View on GitHub
              </a>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
