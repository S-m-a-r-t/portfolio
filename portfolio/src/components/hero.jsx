import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown, Sparkles } from 'lucide-react';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.12,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.8, 0.25, 1] } },
};

const Hero = () => {
  return (
    <section className="relative flex min-h-screen w-full items-center overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-grid opacity-[0.18]" />
        <div className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-primary/10 blur-[160px]" />
        <div className="absolute bottom-[-30%] right-[-10%] h-[620px] w-[620px] rounded-full bg-secondary/12 blur-[190px]" />
        <div className="noise-overlay absolute inset-0" />
      </div>

      <div className="container relative z-10 mx-auto grid max-w-[1380px] items-center gap-12 px-4 pt-28 pb-20 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:px-10">
        <motion.div variants={container} initial="hidden" animate="show" className="relative">
          <motion.div variants={item} className="mb-8 flex flex-wrap items-center gap-3">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.01] px-4 py-1.5 text-xs uppercase tracking-[0.5em] text-slate-400">
              <Sparkles className="h-3.5 w-3.5 text-primary" />
              <span>AI/ML · Full-Stack · Engineering</span>
            </div>
            <div className="inline-flex items-center rounded-full border border-primary/30 px-4 py-1.5 text-xs uppercase tracking-[0.5em] text-primary">
              GDG Co-Lead · 2025–26
            </div>
          </motion.div>

          <motion.div variants={item}>
            <p className="mb-4 font-mono text-sm uppercase tracking-[0.8em] text-slate-500">Hello, I&apos;m</p>
            <h1 className="font-heading text-[clamp(3.5rem,12vw,11rem)] font-semibold leading-[0.9] tracking-[-0.08em] text-white">
              Akshat
              <br />
              <span className="text-gradient">Saini</span>
            </h1>
          </motion.div>

          <motion.p
            variants={item}
            className="mt-8 max-w-xl text-lg leading-relaxed text-slate-300 sm:text-xl"
          >
            I design and build pragmatic AI/ML systems and full-stack products with a bias for clarity, performance, and real impact.
            Leading developer communities has sharpened how I ship ideas from first commit to something people actually use.
          </motion.p>

          <motion.div variants={item} className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#projects"
              className="group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-full px-8 py-3.5 text-sm font-medium uppercase tracking-[0.4em] text-white"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-primary/80 to-secondary/70" />
              <span className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <span className="absolute inset-0 bg-gradient-to-r from-primary to-secondary blur-xl" />
              </span>
              <span className="relative flex items-center gap-3">
                View selected work
                <ArrowRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1.5" />
              </span>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-white/15 px-8 py-3.5 text-sm font-medium uppercase tracking-[0.4em] text-slate-300 transition-colors duration-500 hover:border-primary/60 hover:text-white"
            >
              Get in touch
            </a>
          </motion.div>

          <motion.div variants={item} className="mt-12 flex flex-wrap items-center gap-6 text-sm text-slate-500">
            <div className="flex items-center gap-3">
              <div className="h-px w-10 bg-gradient-to-r from-primary/70 to-transparent" />
              <span className="uppercase tracking-[0.5em]">Pragmatic engineering</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="h-px w-10 bg-gradient-to-r from-secondary/70 to-transparent" />
              <span className="uppercase tracking-[0.5em]">Community-led</span>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.25, 0.8, 0.25, 1], delay: 0.2 }}
          className="relative hidden lg:block"
        >
          <div className="absolute -top-16 right-10 h-72 w-72 rounded-full bg-primary/10 blur-[140px]" />
          <div className="absolute -bottom-20 left-10 h-80 w-80 rounded-full bg-secondary/12 blur-[160px]" />
          <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-gradient-to-br from-white/[0.02] to-white/[0.01] shadow-panel">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
            <div className="relative grid gap-0">
              <div className="flex items-center justify-between border-b border-white/5 px-8 py-6">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-primary/80" />
                  <span className="h-2 w-2 rounded-full bg-secondary/80" />
                  <span className="h-2 w-2 rounded-full bg-white/30" />
                </div>
                <span className="font-mono text-xs uppercase tracking-[0.6em] text-slate-500">portfolio.dev</span>
              </div>
              <div className="grid gap-6 px-8 py-10">
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.6em] text-slate-500">Focus areas</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {['Applied ML', 'RAG Systems', 'Graph Databases', 'React/Next.js', 'Node.js', 'Cloud'].map((tag) => (
                      <span key={tag} className="rounded-full border border-white/10 px-4 py-1.5 text-sm text-slate-300">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="rounded-3xl border border-white/5 bg-white/[0.01] p-6">
                    <p className="font-mono text-xs uppercase tracking-[0.6em] text-slate-500">Current role</p>
                    <p className="mt-3 text-lg text-white">Google Developer Group On Campus · Co-Lead</p>
                    <p className="mt-2 text-sm text-slate-400">Leading strategy, events, and a team of 70–80 members.</p>
                  </div>
                  <div className="rounded-3xl border border-white/5 bg-white/[0.01] p-6">
                    <p className="font-mono text-xs uppercase tracking-[0.6em] text-slate-500">Approach</p>
                    <p className="mt-3 text-lg text-white">Clarity over complexity</p>
                    <p className="mt-2 text-sm text-slate-400">Intentional interfaces, measurable outcomes, and clean systems.</p>
                  </div>
                </div>
                <div className="rounded-3xl border border-white/5 bg-white/[0.01] p-6">
                  <p className="font-mono text-xs uppercase tracking-[0.6em] text-slate-500">Signature</p>
                  <p className="mt-4 font-heading text-2xl leading-tight text-white sm:text-3xl">
                    Building tools that bridge data, intelligence, and people.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="flex flex-col items-center gap-2 text-slate-500">
          <span className="font-mono text-[10px] uppercase tracking-[0.8em]">Scroll</span>
          <ChevronDown className="h-4 w-4 animate-float-slow" />
        </div>
      </div>
    </section>
  );
};

export default Hero;