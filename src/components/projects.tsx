"use client";

import { motion } from "framer-motion";
import SectionTitle from "./section-title";
import ProjectCard from "./project-card";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-32 px-6"
    >
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          title="Featured Projects"
          subtitle="My Work"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
              }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}