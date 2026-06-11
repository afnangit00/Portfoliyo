"use client";

import { motion } from "framer-motion";
import { Mail, ArrowRight } from "lucide-react";
import { FaGithub as Github, FaLinkedin as Linkedin } from "react-icons/fa";
import SectionTitle from "./section-title";

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionTitle title="Let's Work Together" subtitle="Contact Me" />

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl border border-white/10 bg-white/3 p-10 md:p-16 text-center"
        >
          <h3 className="text-3xl font-bold text-white">
            Have a project in mind?
          </h3>

          <p className="text-zinc-400 mt-4 max-w-2xl mx-auto">
            I'm currently open to freelance projects, remote opportunities and
            full-time roles. Let's build something amazing together.
          </p>

          <a
            href="https://www.bilalagency.in/"
            className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-violet-600 hover:bg-violet-700 transition text-white"
          >
            Visite My Services
            <ArrowRight size={18} />
          </a>

          <div className="flex justify-center gap-8 mt-10">
            <a
              href="mailto:afnancheranthodika@gmail.com"
              className="text-zinc-400 hover:text-white transition"
            >
              <Mail size={24} />
            </a>

            <a
              href="https://github.com/afnangit00"
              target="_blank"
              className="text-zinc-400 hover:text-white transition"
            >
              <Github size={24} />
            </a>

            <a
              href="https://www.linkedin.com/in/afnan-lux-32397431b/"
              target="_blank"
              className="text-zinc-400 hover:text-white transition"
            >
              <Linkedin size={24} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
