import React from 'react';
import { motion } from 'framer-motion';
import { EXPERIENCE } from '../constants.jsx';

const Experience = () => {
  return (
    <section id="experience" className="section-shell relative">
      <div className="absolute inset-x-0 top-0 h-px divider-glow" />
      <div className="absolute -left-40 top-1/3 h-[420px] w-[420px] rounded-full bg-secondary/12 blur-[190px]" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-10">
        <div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-1.5 text-xs uppercase tracking-[0.6em] text-slate-500">
              Journey
            </div>
            <h2 className="font-heading text-[clamp(2.8rem,8vw,6.5rem)] font-semibold leading-[0.92] tracking-[-0.07em] text-white">
              Experience &
              <br />
              <span className="text-gradient">leadership</span>
            </h2>
            <p className="mt-6 max-w-2xl text-lg text-slate-300">
              Building communities while shipping technical work — focused on scale, structure, and people.
            </p>
          </div>
          <div className="flex items-center gap-3 text-sm text-slate-500">
            <div className="h-px w-12 bg-gradient-to-r from-primary/70 to-transparent" />
            <span className="uppercase tracking-[0.5em]">Intentional growth</span>
          </div>
        </div>

        <div className="relative">
          <div className="absolute left-4 top-0 hidden h-full w-px bg-gradient-to-b from-primary/40 via-white/10 to-transparent md:left-1/2 md:block" />
          <div className="grid gap-8">
            {EXPERIENCE.map((exp, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.9, ease: [0.25, 0.8, 0.25, 1], delay: index * 0.08 }}
                className={`relative grid gap-6 md:grid-cols-[1fr_auto_1fr] md:items-start ${index % 2 === 1 ? 'md:[&>div:first-child]:order-3' : ''}`}
              >
                <div className="hidden md:block" />
                <div className="relative hidden items-center justify-center md:flex">
                  <div className="absolute h-3 w-3 rounded-full bg-primary shadow-[0_0_0_12px_rgba(34,211,238,0.08)]" />
                </div>
                <div className="relative overflow-hidden rounded-[30px] border border-white/10 bg-gradient-to-br from-white/[0.015] to-white/[0.01]">
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                  <div className="flex flex-col gap-6 p-7 sm:p-9">
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <p className="font-mono text-xs uppercase tracking-[0.5em] text-slate-500">{exp.period}</p>
                        <h3 className="mt-3 font-heading text-2xl font-semibold tracking-[-0.04em] text-white sm:text-3xl">
                          {exp.role}
                        </h3>
                        <p className="mt-2 text-lg text-primary">{exp.organization}</p>
                      </div>
                    </div>
                    <ul className="grid gap-3">
                      {exp.details.map((detail, i) => (
                        <li key={i} className="flex items-start gap-3 text-base text-slate-300">
                          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary/70" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;