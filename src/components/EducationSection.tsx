import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const education = [
  { degree: "MCA", institution: "Lead College of Management, Palakkad", period: "2024 – 2026" },
  { degree: "BCA", institution: "University of Calicut", period: "2021 – 2024" },
];

const EducationSection = () => (
  <section id="education" className="py-24 px-6">
    <div className="container max-w-5xl">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-4xl font-bold mb-12"
      >
        Education
      </motion.h2>

      <div className="space-y-6">
        {education.map((ed, i) => (
          <motion.div
            key={ed.degree}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className="flex gap-4 p-6 rounded-xl bg-card border-glow"
          >
            <div className="flex-shrink-0">
              <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center border-glow">
                <GraduationCap className="w-5 h-5 text-accent" />
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold">{ed.degree}</h3>
              <p className="text-muted-foreground text-sm">{ed.institution}</p>
              <p className="text-muted-foreground text-xs mt-1">{ed.period}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default EducationSection;
