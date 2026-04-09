import { motion } from "framer-motion";
import { Brain, Workflow, Server } from "lucide-react";

const highlights = [
  { icon: Brain, title: "AI & LLM Integration", desc: "Production-grade LLM pipelines with RAG, vector search, and intelligent agents." },
  { icon: Workflow, title: "Workflow Automation", desc: "End-to-end automation with n8n, Zapier, and custom API orchestration." },
  { icon: Server, title: "Scalable Backends", desc: "FastAPI & Flask backends powering real-time AI-driven applications." },
];

const AboutSection = () => (
  <section id="about" className="py-24 px-6">
    <div className="container max-w-5xl">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          About <span className="text-gradient-cyan">Me</span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-3xl mb-12 leading-relaxed">
          I'm an AI Engineer passionate about building intelligent, production-ready systems.
          From RAG-powered assistants to WhatsApp sales bots with CRM integration, I specialize
          in turning cutting-edge AI research into real-world solutions that drive business value.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6">
        {highlights.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className="p-6 rounded-xl bg-card border-glow hover:glow-cyan transition-shadow duration-300"
          >
            <item.icon className="w-8 h-8 text-primary mb-4" />
            <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;
