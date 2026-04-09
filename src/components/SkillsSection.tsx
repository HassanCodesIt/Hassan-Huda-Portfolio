import { motion } from "framer-motion";

const skillGroups = [
  { category: "Languages", skills: ["Python"] },
  { category: "AI / ML", skills: ["LangChain", "Groq LLM", "HuggingFace", "OpenAI", "TensorFlow Lite", "YOLOv8", "Scikit-learn", "spaCy", "OpenCV"] },
  { category: "Databases", skills: ["PostgreSQL", "ChromaDB", "MySQL"] },
  { category: "Backend", skills: ["FastAPI", "Flask"] },
  { category: "Frontend", skills: ["React"] },
  { category: "Automation", skills: ["n8n", "Zapier"] },
  { category: "Integrations", skills: ["WhatsApp Cloud API", "Zoho CRM", "IMAP", "RAG Pipelines", "Vector Search"] },
];

const SkillsSection = () => (
  <section id="skills" className="py-24 px-6 bg-surface">
    <div className="container max-w-5xl">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-4xl font-bold mb-12"
      >
        Tech <span className="text-gradient-purple">Stack</span>
      </motion.h2>

      <div className="space-y-8">
        {skillGroups.map((group, gi) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.4, delay: gi * 0.08 }}
          >
            <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">
              {group.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill, si) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: gi * 0.05 + si * 0.03 }}
                  className="px-4 py-2 rounded-lg bg-muted text-foreground text-sm font-medium border-glow hover:glow-cyan transition-shadow duration-300 cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;
