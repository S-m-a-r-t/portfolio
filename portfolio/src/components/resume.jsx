import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Download } from 'lucide-react';

const RESUME_PATH = '/resume.pdf';

const Resume = () => {
  return (
    <section id="resume" className="section-shell relative">
      <div className="absolute inset-x-0 top-0 h-px divider-glow" />
      <div className="absolute -right-32 top-10 h-[360px] w-[360px] rounded-full bg-primary/10 blur-[160px]" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-10">
        <div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-1.5 text-xs uppercase tracking-[0.6em] text-slate-500">
              Credentials
            </div>
            <h2 className="font-heading text-[clamp(2.8rem,8vw,6.5rem)] font-semibold leading-[0.92] tracking-[-0.07em] text-white">
              Resume
              <br />
              <span className="text-gradient">at a glance</span>
            </h2>
            <p className="mt-6 max-w-2xl text-lg text-slate-300">
              A clean overview of education, skills, projects, and leadership — ready to share or download.
            </p>
          </div>
          <div className="flex items-center gap-3 text-sm text-slate-500">
            <div className="h-px w-12 bg-gradient-to-r from-primary/70 to-transparent" />
            <span className="uppercase tracking-[0.5em]">PDF available</span>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.9, ease: [0.25, 0.8, 0.25, 1] }}
          className="relative overflow-hidden rounded-[36px] border border-white/10 bg-gradient-to-br from-white/[0.02] to-white/[0.01]"
        >
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
          <div className="grid gap-10 p-8 sm:p-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:p-12">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.6em] text-slate-500">Document</p>
              <h3 className="mt-4 font-heading text-[clamp(2rem,5vw,4rem)] leading-[1.02] tracking-[-0.05em] text-white">
                Akshat Saini — Technical Profile
              </h3>
              <p className="mt-6 max-w-xl text-lg text-slate-300">
                Focused on applied AI/ML, full-stack engineering, and developer community leadership with a track record of building practical products.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href={RESUME_PATH}
                  download="Akshat_Saini_Resume.pdf"
                  className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full px-7 py-3 text-sm uppercase tracking-[0.4em] text-white"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-primary/80 to-secondary/70" />
                  <span className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    <span className="absolute inset-0 bg-gradient-to-r from-primary to-secondary blur-xl" />
                  </span>
                  <span className="relative flex items-center gap-3">
                    <Download className="h-4 w-4" />
                    Download PDF
                  </span>
                </a>
                <a
                  href={RESUME_PATH}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-3 rounded-full border border-white/15 px-7 py-3 text-sm uppercase tracking-[0.4em] text-slate-300 transition-colors duration-500 hover:border-primary/60 hover:text-white"
                >
                  Open in new tab
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-x-6 -top-10 h-40 rounded-full bg-primary/10 blur-[120px]" />
              <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-[#060913]">
                <div className="flex items-center justify-between border-b border-white/5 px-6 py-4">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-white/20" />
                    <span className="h-2 w-2 rounded-full bg-white/20" />
                    <span className="h-2 w-2 rounded-full bg-white/20" />
                  </div>
                  <span className="font-mono text-xs uppercase tracking-[0.5em] text-slate-600">akshat-saini-resume.pdf</span>
                </div>
                <div className="grid gap-3 px-6 py-8">
                  <div className="h-2 w-1/3 rounded-full bg-gradient-to-r from-primary/60 to-transparent" />
                  <div className="mt-4 grid gap-2">
                    <div className="h-2 w-4/5 rounded-full bg-white/12" />
                    <div className="h-2 w-3/5 rounded-full bg-white/10" />
                    <div className="h-2 w-2/5 rounded-full bg-white/8" />
                  </div>
                  <div className="mt-6 grid grid-cols-2 gap-3">
                    <div className="h-20 rounded-2xl border border-white/5 bg-white/[0.01]" />
                    <div className="h-20 rounded-2xl border border-white/5 bg-white/[0.01]" />
                  </div>
                  <div className="mt-3 h-28 rounded-2xl border border-white/5 bg-gradient-to-br from-primary/8 to-transparent" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;
