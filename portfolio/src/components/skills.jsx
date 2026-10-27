import React from 'react';
import { motion } from 'framer-motion';
import { SKILLS } from '../constants.jsx';

const Skills = () => {
  const groups = [
    { key: 'languages', items: SKILLS.find((s) => s.title.includes('Languages'))?.skills || [], label: 'Languages' },
    { key: 'frameworks', items: SKILLS.find((s) => s.title.includes('Frameworks'))?.skills || [], label: 'Frameworks & Libraries' },
    { key: 'tools', items: SKILLS.find((s) => s.title.includes('Tools'))?.skills || [], label: 'Tools & Platforms' },
    { key: 'domains', items: SKILLS.find((s) => s.title.includes('Domains'))?.skills || [], label: 'Domains' },
  ];

  return (
    <section id="skills" className="section-shell relative">
      <div className="absolute inset-x-0 top-0 h-px divider-glow" />
      <div className="absolute -right-40 top-20 h-[380px] w-[380px] rounded-full bg-primary/10 blur-[170px]" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-10">
        <div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-1.5 text-xs uppercase tracking-[0.6em] text-slate-500">
              Arsenal
            </div>
            <h2 className="font-heading text-[clamp(2.8rem,8vw,6.5rem)] font-semibold leading-[0.92] tracking-[-0.07em] text-white">
              Technical
              <br />
              <span className="text-gradient">capabilities</span>
            </h2>
            <p className="mt-6 max-w-2xl text-lg text-slate-300">
              A focused stack across intelligent systems, data workflows, and modern web engineering.
            </p>
          </div>
          <div className="flex items-center gap-3 text-sm text-slate-500">
            <div className="h-px w-12 bg-gradient-to-r from-secondary/70 to-transparent" />
            <span className="uppercase tracking-[0.5em]">Pragmatic & scalable</span>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {groups.map((group, index) => (
            <motion.div
              key={group.key}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, ease: [0.25, 0.8, 0.25, 1], delay: index * 0.06 }}
              className="relative overflow-hidden rounded-[30px] border border-white/10 bg-gradient-to-br from-white/[0.015] to-white/[0.01]"
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              <div className="flex flex-col gap-6 p-7 sm:p-9">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-mono text-xs uppercase tracking-[0.5em] text-slate-500">Group</p>
                    <h3 className="mt-2 font-heading text-2xl font-semibold tracking-[-0.04em] text-white sm:text-3xl">
                      {group.label}
                    </h3>
                  </div>
                  <span className="rounded-full border border-white/10 px-3 py-1 text-xs uppercase tracking-[0.4em] text-slate-500">
                    {group.items.length}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-white/10 px-4 py-1.5 text-sm text-slate-200 transition-colors duration-300 hover:border-primary/50 hover:text-white"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
