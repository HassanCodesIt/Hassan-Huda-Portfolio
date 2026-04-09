import { motion } from "framer-motion";
import { Mail, Linkedin, Github, MapPin } from "lucide-react";

const links = [
  { icon: Mail, label: "Email", href: "mailto:hassanhudapalakkad@gmail.com", text: "hassanhudapalakkad@gmail.com" },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/hassan-huda/", text: "linkedin.com/in/hassan-huda" },
  { icon: Github, label: "GitHub", href: "https://github.com/HassanCodesIt", text: "github.com/HassanCodesIt" },
];

const ContactSection = () => (
  <section id="contact" className="py-24 px-6 bg-surface">
    <div className="container max-w-5xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Let's <span className="text-gradient-mixed">Connect</span>
        </h2>
        <p className="text-muted-foreground text-lg">
          Open to opportunities, collaborations, and interesting AI projects.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="max-w-lg mx-auto space-y-4"
      >
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target={link.label !== "Email" ? "_blank" : undefined}
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-4 rounded-xl bg-card border-glow hover:glow-cyan transition-all duration-300 group"
          >
            <link.icon className="w-5 h-5 text-primary" />
            <div>
              <p className="text-sm text-muted-foreground">{link.label}</p>
              <p className="text-foreground font-medium group-hover:text-primary transition-colors">
                {link.text}
              </p>
            </div>
          </a>
        ))}

        <div className="flex items-center gap-4 p-4 rounded-xl bg-card border-glow">
          <MapPin className="w-5 h-5 text-primary" />
          <div>
            <p className="text-sm text-muted-foreground">Location</p>
            <p className="text-foreground font-medium">Palakkad, Kerala, India</p>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default ContactSection;
