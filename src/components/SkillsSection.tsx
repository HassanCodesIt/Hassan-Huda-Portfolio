import { motion } from "framer-motion";

const devicon = (name: string) => `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${name}/${name}-original.svg`;
const simple = (name: string) => `https://cdn.simpleicons.org/${name}`;
const ghAvatar = (id: number) => `https://avatars.githubusercontent.com/u/${id}?s=40`;

type SkillItem = { name: string; logo?: string; badge?: string };

const skillGroups: { category: string; skills: SkillItem[] }[] = [
  {
    category: "AI / LLM",
    skills: [
      { name: "Groq", logo: ghAvatar(7464134) },
      { name: "LangChain", logo: simple("langchain") },
      { name: "HuggingFace", badge: "🤗 HuggingFace" },
      { name: "OpenAI", logo: simple("openai") },
      { name: "LLaMA", logo: simple("meta") },
    ],
  },
  {
    category: "ML / Computer Vision",
    skills: [
      { name: "TensorFlow", logo: devicon("tensorflow") },
      { name: "Scikit-learn", logo: simple("scikitlearn") },
      { name: "YOLOv8", logo: ghAvatar(26833451) },
      { name: "OpenCV", logo: simple("opencv") },
      { name: "spaCy", logo: simple("spacy") },
    ],
  },
  {
    category: "Backend & Frameworks",
    skills: [
      { name: "Python", logo: devicon("python") },
      { name: "FastAPI", logo: simple("fastapi") },
      { name: "Flask", logo: devicon("flask") },
    ],
  },
  {
    category: "Databases & Vector Storage",
    skills: [
      { name: "PostgreSQL", logo: devicon("postgresql") },
      { name: "MySQL", logo: devicon("mysql") },
      { name: "ChromaDB", logo: "https://raw.githubusercontent.com/chroma-core/chroma/main/docs/mintlify/images/favicon.svg" },
    ],
  },
  {
    category: "Automation & Workflow",
    skills: [
      { name: "n8n", logo: simple("n8n") },
      { name: "Zapier", logo: simple("zapier") },
    ],
  },
];

const SkillTag = ({ skill }: { skill: SkillItem }) => (
  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-muted text-foreground text-sm font-medium border-glow hover:glow-cyan transition-shadow duration-300 cursor-default">
    {skill.logo ? (
      <img
        src={skill.logo}
        alt={skill.name}
        className="w-5 h-5 object-contain"
        loading="lazy"
        onError={(e) => {
          (e.currentTarget as HTMLImageElement).style.display = "none";
        }}
      />
    ) : (
      <span className="px-1.5 py-0.5 rounded bg-primary/15 text-primary text-[10px] font-bold leading-none">
        {skill.badge}
      </span>
    )}
    {skill.name}
  </span>
);

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
              {group.skills.map((skill) => (
                <SkillTag key={skill.name} skill={skill} />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;
