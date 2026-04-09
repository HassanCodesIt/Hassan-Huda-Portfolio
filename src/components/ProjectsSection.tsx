import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "RAG Study Assistant",
    subtitle: "AI-Powered PDF Learning Platform",
    desc: "AI-powered study assistant that ingests PDF documents, extracts content, and enables contextual question-answering using RAG pipelines.",
    tech: ["FastAPI", "HuggingFace", "ChromaDB", "Groq LLM"],
    github: "https://github.com/HassanCodesIt",
  },
  {
    title: "AI Journalism Platform",
    subtitle: "Automated News Intelligence",
    desc: "Flask-based web app that automates news scraping, summarization, and Q&A from online news sources. Users can chat directly with summarized news content.",
    tech: ["Flask", "newspaper3k", "feedparser", "LLaMA 3"],
    github: "https://github.com/HassanCodesIt",
  },
  {
    title: "AI Recruitment System",
    subtitle: "HR Management Platform",
    desc: "End-to-end AI recruitment platform that receives resumes via IMAP email, parses profiles, matches jobs automatically with NLP ranking, and provides dashboards with analytics.",
    tech: ["NLP", "PostgreSQL", "FastAPI", "Resume Parsing"],
    github: "https://github.com/HassanCodesIt",
  },
  {
    title: "WhatsApp AI Sales Bot",
    subtitle: "Production Sales Automation",
    desc: "Production-grade WhatsApp sales bot for GJ Global IT Ventures featuring Groq LLM, conversation state management, Zoho CRM integration, and lead qualification flows.",
    tech: ["WhatsApp Cloud API", "Groq LLM", "Zoho CRM", "n8n", "FastAPI"],
    github: "https://github.com/HassanCodesIt",
  },
  {
    title: "Parking Space Detection",
    subtitle: "Computer Vision System",
    desc: "Intelligent system using computer vision and machine learning to monitor real-time parking availability via a web-based interface.",
    tech: ["YOLOv8", "OpenCV", "TensorFlow Lite", "Python"],
    github: "https://github.com/HassanCodesIt",
  },
];

const ProjectsSection = () => (
  <section id="projects" className="py-24 px-6">
    <div className="container max-w-5xl">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-4xl font-bold mb-12"
      >
        Featured <span className="text-gradient-cyan">Projects</span>
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group p-6 rounded-xl bg-card border-glow hover:glow-cyan transition-all duration-300 flex flex-col"
          >
            <div className="flex items-start justify-between mb-3">
              <div>
                <h3 className="text-lg font-bold">{project.title}</h3>
                <p className="text-sm text-primary font-medium">{project.subtitle}</p>
              </div>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:bg-muted transition-colors text-muted-foreground hover:text-primary"
                aria-label={`GitHub link for ${project.title}`}
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">
              {project.desc}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="px-2.5 py-1 rounded-md bg-muted text-xs font-medium text-muted-foreground"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
