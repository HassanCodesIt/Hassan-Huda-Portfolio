import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    role: "AI-ML Intern",
    company: "GJ Global IT Ventures",
    type: "Onsite",
    period: "Sep 2025 – Present",
    desc: "Working on production-grade AI systems: RAG-based PDF study assistant, AI-powered journalism platform, automated recruitment system using LLMs, NLP, and scalable backend architectures.",
  },
  {
    role: "Machine Learning Intern",
    company: "Acura Software Solutions",
    type: "Remote",
    period: "Sep 2023 – Feb 2024",
    desc: "Developed AI-Based Parking Slot Detection and Management System.",
  },
];

const ExperienceSection = () => (
  <section id="experience" className="py-24 px-6 bg-surface">
    <div className="container max-w-5xl">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-4xl font-bold mb-12"
      >
        Work <span className="text-gradient-purple">Experience</span>
      </motion.h2>

      <div className="space-y-8">
        {experiences.map((exp, i) => (
          <motion.div
            key={exp.role}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className="flex gap-4"
          >
            <div className="flex-shrink-0 mt-1">
              <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center border-glow">
                <Briefcase className="w-5 h-5 text-primary" />
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold">{exp.role}</h3>
              <p className="text-primary text-sm font-medium mb-1">
                {exp.company} · {exp.type}
              </p>
              <p className="text-muted-foreground text-xs mb-2">{exp.period}</p>
              <p className="text-muted-foreground text-sm leading-relaxed">{exp.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ExperienceSection;
