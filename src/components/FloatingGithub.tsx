import { Github } from "lucide-react";
import { motion } from "framer-motion";

const FloatingGithub = () => (
  <motion.a
    href="https://github.com/HassanCodesIt"
    target="_blank"
    rel="noopener noreferrer"
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay: 1, duration: 0.4 }}
    className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center glow-cyan hover:scale-110 transition-transform duration-200"
    aria-label="GitHub Profile"
  >
    <Github className="w-5 h-5" />
  </motion.a>
);

export default FloatingGithub;
