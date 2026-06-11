"use client";

import { ArrowUpRight} from "lucide-react";
import { FaGithub as Github } from "react-icons/fa";
import { motion } from "framer-motion";

type Props = {
  title: string;
  description: string;
  tech: string[];
  github: string;
  live: string;
};

export default function ProjectCard({
  title,
  description,
  tech,
  github,
  live,
}: Props) {
  return (
    <motion.div
      whileHover={{
        y: -8,
      }}
      className="rounded-3xl border border-white/10 bg-white/3 p-8 transition"
    >
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-white">
          {title}
        </h3>

        <p className="text-zinc-400 mt-4 leading-7">
          {description}
        </p>
      </div>

      <div className="flex flex-wrap gap-2 mb-8">
        {tech.map((item) => (
          <span
            key={item}
            className="px-3 py-1 rounded-full text-sm border border-white/10 bg-white/5 text-zinc-300"
          >
            {item}
          </span>
        ))}
      </div>

      <div className="flex items-center gap-4">
        <a
          href={github}
          target="_blank"
          className="flex items-center gap-2 text-zinc-300 hover:text-white"
        >
          <Github size={18} />
          Code
        </a>

        <a
          href={live}
          target="_blank"
          className="flex items-center gap-2 text-violet-400 hover:text-violet-300"
        >
          Live Demo
          <ArrowUpRight size={18} />
        </a>
      </div>
    </motion.div>
  );
}