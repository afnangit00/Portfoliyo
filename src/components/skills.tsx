"use client";

import { motion } from "framer-motion";
import SectionTitle from "./section-title";

const skills = [
  "MERN Stack",
  "Next.js",
  "TypeScript",
  "MongoDB",
  "REST APIs",
  "Git & GitHub",
];

export default function Skills() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          title="Skills"
          subtitle="Core Technologies"
        />

        <div className="grid md:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                delay: index * 0.1,
              }}
              className="rounded-2xl border border-white/10 bg-white/3 p-6 hover:border-violet-500/50 transition"
            >
              <h3 className="text-xl font-semibold text-white">
                {skill}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}