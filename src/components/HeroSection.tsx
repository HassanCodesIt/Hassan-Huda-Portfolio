import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, ArrowDown } from "lucide-react";

const roles = [
  "AI Engineer",
  "LLM Integration Specialist",
  "AI Workflow Automation Expert",
];

const HeroSection = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setText(current.slice(0, text.length + 1));
          if (text.length + 1 === current.length) {
            setTimeout(() => setIsDeleting(true), 1800);
          }
        } else {
          setText(current.slice(0, text.length - 1));
          if (text.length === 0) {
            setIsDeleting(false);
            setRoleIndex((prev) => (prev + 1) % roles.length);
          }
        }
      },
      isDeleting ? 40 : 80
    );
    return () => clearTimeout(timeout);
  }, [text, isDeleting, roleIndex]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center bg-grid overflow-hidden"
    >
      {/* Ambient glows */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-primary/10 blur-[120px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-accent/10 blur-[120px] animate-pulse-glow" />

      <div className="container relative z-10 text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border-glow bg-muted/50 mb-8">
            <MapPin className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">
              Palakkad, Kerala, India
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-4">
            <span className="text-foreground">Hassan</span>{" "}
            <span className="text-gradient-cyan">Huda</span>
          </h1>

          <div className="h-12 md:h-14 flex items-center justify-center mb-8">
            <span className="text-xl md:text-2xl lg:text-3xl text-muted-foreground font-light">
              {text}
              <span className="inline-block w-0.5 h-6 md:h-8 bg-primary ml-1 animate-pulse-glow" />
            </span>
          </div>

          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Building intelligent systems that automate workflows, integrate LLMs
            into production, and turn complex data into actionable insights.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="mailto:hassanhudapalakkad@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity glow-cyan"
            >
              <Mail className="w-4 h-4" />
              Get in Touch
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border text-foreground font-medium hover:bg-muted transition-colors"
            >
              View Projects
              <ArrowDown className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
