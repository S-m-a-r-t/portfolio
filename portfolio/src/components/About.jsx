import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="section-shell relative">
      <div className="absolute inset-x-0 top-0 h-px divider-glow" />
      <div className="absolute right-[-20%] top-10 h-[420px] w-[420px] rounded-full bg-primary/10 blur-[180px]" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-1.5 text-xs uppercase tracking-[0.6em] text-slate-500">
              Profile
            </div>
            <h2 className="font-heading text-[clamp(2.8rem,8vw,6rem)] font-semibold leading-[0.92] tracking-[-0.07em] text-white">
              A builder who
              <br />
              <span className="text-gradient">connects systems</span>
            </h2>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-slate-300">
              I&apos;m a Computer Science Engineering student at Bennett University, working at the intersection of AI/ML, cloud, and full-stack development. I care about turning ideas into reliable, human-centered products.
            </p>
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-white/10 p-6">
                <p className="font-mono text-xs uppercase tracking-[0.5em] text-slate-500">Focus</p>
                <p className="mt-3 text-lg text-white">Pragmatic applied intelligence</p>
                <p className="mt-2 text-sm text-slate-400">From data pipelines to intuitive interfaces.</p>
              </div>
              <div className="rounded-3xl border border-white/10 p-6">
                <p className="font-mono text-xs uppercase tracking-[0.5em] text-slate-500">Leadership</p>
                <p className="mt-3 text-lg text-white">GDG Co-Lead · BC3</p>
                <p className="mt-2 text-sm text-slate-400">Mentoring, organizing, and growing communities.</p>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, ease: [0.25, 0.8, 0.25, 1] }}
            className="relative overflow-hidden rounded-[36px] border border-white/10 bg-gradient-to-br from-white/[0.02] to-white/[0.01]"
          >
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
            <div className="grid gap-10 p-8 sm:p-10 lg:p-12">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.6em] text-slate-500">Approach</p>
                <p className="mt-4 font-heading text-[clamp(2rem,5vw,4rem)] leading-[1.05] tracking-[-0.05em] text-white">
                  "I aim to build technology that makes life easier — not just smarter."
                </p>
              </div>
              <div className="grid gap-6 md:grid-cols-3">
                <div>
                  <p className="text-4xl font-heading text-white">01</p>
                  <p className="mt-3 text-lg text-white">Clarity</p>
                  <p className="mt-2 text-sm text-slate-400">Intentional design and minimal complexity.</p>
                </div>
                <div>
                  <p className="text-4xl font-heading text-white">02</p>
                  <p className="mt-3 text-lg text-white">Craft</p>
                  <p className="mt-2 text-sm text-slate-400">Thoughtful details that compound over time.</p>
                </div>
                <div>
                  <p className="text-4xl font-heading text-white">03</p>
                  <p className="mt-3 text-lg text-white">Impact</p>
                  <p className="mt-2 text-sm text-slate-400">Solving real problems with measurable value.</p>
                </div>
              </div>
              <div className="flex flex-wrap items-center justify-between gap-4 border-t border-white/5 pt-6">
                <p className="text-sm text-slate-400">Based in Greater Noida, India · Open to collaborations</p>
                <div className="flex items-center gap-3">
                  <div className="h-px w-10 bg-gradient-to-r from-primary/70 to-transparent" />
                  <span className="font-mono text-xs uppercase tracking-[0.5em] text-slate-500">Always learning</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;