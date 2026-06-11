"use client";

import { motion } from "framer-motion";
import SectionTitle from "./section-title";

export default function About() {
  return (
    <section
      id="about"
      className="py-32 px-6"
    >
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          title="About Me"
          subtitle="Who I Am"
        />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto"
        >
          <div className="rounded-3xl border border-white/10 bg-white/3 p-8 md:p-12">
            <p className="text-zinc-300 leading-8 text-lg">
              I'm Afnan, a self-taught Full Stack Developer
              from Kerala, India.
            </p>

            <p className="text-zinc-400 leading-8 mt-6">
              I specialize in building scalable web
              applications using MERN Stack, Next.js,
              TypeScript and MongoDB.
            </p>

            <p className="text-zinc-400 leading-8 mt-6">
              Over the past few years, I have built
              e-commerce applications, SaaS products,
              authentication systems and modern web
              interfaces focused on performance and user
              experience.
            </p>

            <p className="text-zinc-400 leading-8 mt-6">
              My goal is to become a world-class software
              engineer while creating products that solve
              real-world problems.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}