"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const skills = [
  "Next.js",
  "TypeScript",
  "React",
  "Node.js",
  "MongoDB",
  "Tailwind CSS",
];

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden flex items-center justify-center px-4 sm:px-6 py-24">
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-1/2 -translate-x-1/2 h-100 w-100 sm:h-125 sm:w-125 rounded-full bg-violet-600/20 blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{
            opacity: 1,
            scale: 1,
            y: [0, -8, 0],
          }}
          transition={{
            opacity: { duration: 0.6 },
            scale: { duration: 0.6 },
            y: {
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
          className="relative mx-auto mb-8"
        >
          <div className="absolute inset-0 rounded-full bg-violet-600/30 blur-3xl scale-125" />

          <div className="relative mx-auto h-32 w-32 sm:h-40 sm:w-40 md:h-52 md:w-52 overflow-hidden rounded-full border border-white/10">
            <Image
              src="/projects/profile.jpg"
              alt="Afnan Cheranthodika"
              width={100}
              height={100}
              property="true"
              className="object-cover h-full w-full rounded-full"
            />
          </div>
        </motion.div>

        {/* Tag */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-4 text-sm sm:text-base font-medium text-violet-400"
        >
          Full Stack Developer
        </motion.p>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight text-white leading-tight"
        >
          Afnan
          <br />
          Cheranthodika
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-5 max-w-2xl mx-auto px-2 text-sm sm:text-base md:text-lg text-zinc-400 leading-7"
        >
          Building scalable SaaS applications and modern web experiences
          using Next.js, TypeScript, MongoDB and the MERN Stack.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-8 flex flex-col sm:flex-row justify-center gap-4"
        >
          <a
            href="#projects"
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-violet-600 hover:bg-violet-700 transition text-white font-medium inline-flex items-center justify-center gap-2"
          >
            View Projects
            <ArrowRight size={18} />
          </a>

          <a
            href="#contact"
            className="w-full sm:w-auto px-6 py-3 rounded-xl border border-white/10 hover:border-white/30 transition text-white text-center"
          >
            Contact Me
          </a>
        </motion.div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-10 flex flex-wrap justify-center gap-2 sm:gap-3 px-2"
        >
          {skills.map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs sm:text-sm text-zinc-300"
            >
              {skill}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}