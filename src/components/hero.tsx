"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute top-40 left-1/2 -translate-x-1/2 h-87.5 w-87.5 rounded-full bg-violet-600/20 blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-violet-400 font-medium mb-4"
        >
          Full Stack Developer
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-5xl md:text-7xl font-bold tracking-tight text-white"
        >
          AFNAN
          <br />
          CHERANTHODIKA
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="mt-6 text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto"
        >
          I build modern web applications using MERN Stack, Next.js and
          TypeScript with a focus on performance, scalability and user
          experience.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="px-6 py-3 rounded-xl bg-violet-600 hover:bg-violet-700 transition text-white font-medium flex items-center gap-2"
          >
            View Projects
            <ArrowRight size={18} />
          </a>

          <a
            href="#contact"
            className="px-6 py-3 rounded-xl border border-zinc-700 hover:border-zinc-500 transition text-white"
          >
            Contact Me
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
          className="mt-14 flex flex-wrap justify-center gap-3"
        >
          {[
            "Next.js",
            "TypeScript",
            "React",
            "Node.js",
            "MongoDB",
            "Tailwind CSS",
          ].map((skill) => (
            <span
              key={skill}
              className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-zinc-300 text-sm"
            >
              {skill}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}





