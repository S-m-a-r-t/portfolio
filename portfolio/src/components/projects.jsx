import React from 'react';
import { motion } from 'framer-motion';
import { PROJECTS } from '../constants.jsx';
import { ArrowUpRight, Github } from 'lucide-react';

const Projects = () => {
  const featured = PROJECTS.slice(0, 2);
  const rest = PROJECTS.slice(2);

  return (
    <section id="projects" className="section-shell relative">
      <div className="absolute inset-x-0 top-0 h-px divider-glow" />
      <div className="absolute -left-40 top-1/4 h-[420px] w-[420px] rounded-full bg-secondary/12 blur-[180px]" />
      <div className="absolute -right-32 bottom-0 h-[380px] w-[380px] rounded-full bg-primary/10 blur-[170px]" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-10">
        <div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-1.5 text-xs uppercase tracking-[0.6em] text-slate-500">
              Selected work
            </div>
            <h2 className="font-heading text-[clamp(2.8rem,8vw,6.5rem)] font-semibold leading-[0.92] tracking-[-0.07em] text-white">
              Projects built with
              <br />
              <span className="text-gradient">intent</span>
            </h2>
            <p className="mt-6 max-w-2xl text-lg text-slate-300">
              A curated selection of applied AI/ML, data engineering, and full-stack builds — focused on solving concrete problems with clean architecture.
            </p>
          </div>
          <div className="flex items-center gap-3 text-sm text-slate-500">
            <div className="h-px w-12 bg-gradient-to-r from-primary/70 to-transparent" />
            <span className="uppercase tracking-[0.5em]">Case-driven</span>
          </div>
        </div>

        <div className="grid gap-6 lg:gap-8">
          {featured.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.9, ease: [0.25, 0.8, 0.25, 1], delay: index * 0.08 }}
              className="group relative overflow-hidden rounded-[36px] border border-white/10 bg-gradient-to-br from-white/[0.02] via-transparent to-white/[0.01] shadow-panel"
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
              <div className="absolute -top-40 right-0 h-80 w-80 rounded-full bg-primary/10 blur-[160px] transition-opacity duration-700 group-hover:opacity-80" />
              <div className="relative grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
                <div className="flex h-full flex-col justify-between p-8 sm:p-10 lg:p-12">
                  <div>
                    <div className="mb-6 flex flex-wrap items-center gap-3">
                      <span className="rounded-full border border-primary/40 px-4 py-1.5 text-xs uppercase tracking-[0.5em] text-primary">Featured</span>
                      <span className="rounded-full border border-white/10 px-4 py-1.5 text-xs uppercase tracking-[0.5em] text-slate-500">0{index + 1}</span>
                    </div>
                    <h3 className="font-heading text-[clamp(2.4rem,6vw,5rem)] font-semibold leading-[0.95] tracking-[-0.06em] text-white">
                      {project.title}
                    </h3>
                    <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-300">
                      {project.description}
                    </p>
                  </div>
                  <div className="mt-10 flex flex-wrap items-center gap-3">
                    {project.tech.slice(0, 5).map((tech) => (
                      <span key={tech} className="rounded-full border border-white/10 px-3 py-1 text-sm text-slate-300">
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 5 && (
                      <span className="rounded-full border border-white/10 px-3 py-1 text-sm text-slate-500">
                        +{project.tech.length - 5}
                      </span>
                    )}
                  </div>
                  <div className="mt-10 flex flex-wrap items-center gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="group/cta relative inline-flex items-center gap-3 overflow-hidden rounded-full border border-white/15 px-6 py-2.5 text-sm uppercase tracking-[0.4em] text-white transition-colors duration-500 hover:border-primary/70"
                    >
                      <span className="absolute inset-0 bg-gradient-to-r from-primary/15 to-secondary/10 opacity-0 transition-opacity duration-500 group-hover/cta:opacity-100" />
                      <span className="relative flex items-center gap-3">
                        <Github className="h-4 w-4" />
                        View repository
                        <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover/cta:translate-x-1" />
                      </span>
                    </a>
                  </div>
                </div>
                <div className="relative flex h-full items-center justify-center p-6 sm:p-10 lg:p-12">
                  <div className="relative w-full max-w-lg">
                    <div className="absolute -inset-x-6 -top-10 h-40 rounded-full bg-primary/10 blur-[120px]" />
                    <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-[#060913] shadow-[0_80px_160px_-120px_rgba(34,211,238,0.4)]">
                      <div className="flex items-center justify-between border-b border-white/5 px-6 py-4">
                        <div className="flex items-center gap-2">
                          <span className="h-2 w-2 rounded-full bg-white/20" />
                          <span className="h-2 w-2 rounded-full bg-white/20" />
                          <span className="h-2 w-2 rounded-full bg-white/20" />
                        </div>
                        <span className="font-mono text-xs uppercase tracking-[0.5em] text-slate-600">{project.title.toLowerCase().replace(/\s+/g, '-')}.app</span>
                      </div>
                      <div className="grid gap-4 px-6 py-8">
                        <div className="grid gap-3">
                          <div className="h-2 w-2/5 rounded-full bg-gradient-to-r from-primary/60 to-transparent" />
                          <div className="h-2 w-4/5 rounded-full bg-white/10" />
                          <div className="h-2 w-3/5 rounded-full bg-white/10" />
                        </div>
                        <div className="mt-6 grid grid-cols-2 gap-3">
                          <div className="h-24 rounded-2xl border border-white/5 bg-gradient-to-br from-primary/10 to-transparent" />
                          <div className="h-24 rounded-2xl border border-white/5 bg-gradient-to-br from-secondary/10 to-transparent" />
                          <div className="col-span-2 h-32 rounded-2xl border border-white/5 bg-white/[0.01]" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:gap-8">
          {rest.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, ease: [0.25, 0.8, 0.25, 1], delay: index * 0.06 }}
              className="group relative flex h-full flex-col overflow-hidden rounded-[30px] border border-white/10 bg-gradient-to-br from-white/[0.015] to-white/[0.01] transition-colors duration-500 hover:border-primary/40"
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              <div className="relative flex flex-1 flex-col p-7 sm:p-8">
                <div className="mb-6 flex items-start justify-between gap-4">
                  <div>
                    <p className="font-mono text-xs uppercase tracking-[0.5em] text-slate-500">Project</p>
                    <h3 className="mt-3 font-heading text-3xl font-semibold tracking-[-0.05em] text-white sm:text-4xl">
                      {project.title}
                    </h3>
                  </div>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-slate-300 transition-all duration-500 hover:-translate-y-1 hover:border-primary/60 hover:text-white"
                    aria-label="Project repository"
                  >
                    <Github className="h-4 w-4" />
                  </a>
                </div>
                <p className="text-base leading-relaxed text-slate-300">
                  {project.description}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span key={tech} className="rounded-full border border-white/10 px-3 py-1 text-sm text-slate-400">
                      {tech}
                    </span>
                  ))}
                </div>
                {project.features && (
                  <ul className="mt-6 space-y-2 text-sm text-slate-400">
                    {project.features.slice(0, 3).map((feat) => (
                      <li key={feat} className="flex items-start gap-2">
                        <span className="mt-2 h-1 w-1 rounded-full bg-primary/70" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;