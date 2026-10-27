import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, ArrowUpRight } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="relative overflow-hidden pt-24 pb-12 sm:pt-32">
      <div className="absolute inset-x-0 top-0 h-px divider-glow" />
      <div className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-primary/10 blur-[190px]" />
      <div className="absolute bottom-[-30%] right-[-10%] h-[560px] w-[560px] rounded-full bg-secondary/12 blur-[200px]" />
      <div className="noise-overlay absolute inset-0" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-1.5 text-xs uppercase tracking-[0.6em] text-slate-500">
              Contact
            </div>
            <h2 className="font-heading text-[clamp(3rem,10vw,8rem)] font-semibold leading-[0.9] tracking-[-0.08em] text-white">
              Let&apos;s build
              <br />
              <span className="text-gradient">something considered</span>
            </h2>
            <p className="mt-8 max-w-xl text-lg text-slate-300">
              Open to discussing new projects, product ideas, AI/ML collaborations, or opportunities to create meaningful technology together.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="mailto:akshat12.saini@gmail.com"
                className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full px-8 py-3.5 text-sm uppercase tracking-[0.4em] text-white"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-primary/80 to-secondary/70" />
                <span className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <span className="absolute inset-0 bg-gradient-to-r from-primary to-secondary blur-xl" />
                </span>
                <span className="relative flex items-center gap-3">
                  <Mail className="h-4 w-4" />
                  Email me
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" />
                </span>
              </a>
              <a
                href="tel:+919460618268"
                className="inline-flex items-center gap-3 rounded-full border border-white/15 px-8 py-3.5 text-sm uppercase tracking-[0.4em] text-slate-300 transition-colors duration-500 hover:border-primary/60 hover:text-white"
              >
                <Phone className="h-4 w-4" />
                Call
              </a>
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
            <div className="grid gap-6 p-8 sm:p-10">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.6em] text-slate-500">Details</p>
                <h3 className="mt-3 font-heading text-2xl font-semibold tracking-[-0.04em] text-white">Direct connections</h3>
              </div>
              <div className="grid gap-3">
                <a href="mailto:akshat12.saini@gmail.com" className="group flex items-center justify-between rounded-2xl border border-white/5 px-5 py-4 transition-colors duration-500 hover:border-primary/40">
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-primary">
                      <Mail className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-white">akshat12.saini@gmail.com</p>
                      <p className="text-sm text-slate-500">Primary</p>
                    </div>
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-slate-500 transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white" />
                </a>
                <a href="tel:+919460618268" className="group flex items-center justify-between rounded-2xl border border-white/5 px-5 py-4 transition-colors duration-500 hover:border-primary/40">
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-primary">
                      <Phone className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-white">+91 9460618268</p>
                      <p className="text-sm text-slate-500">Mobile</p>
                    </div>
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-slate-500 transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white" />
                </a>
                <div className="flex items-center gap-4 rounded-2xl border border-white/5 px-5 py-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-primary">
                    <MapPin className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-white">Greater Noida, India</p>
                    <p className="text-sm text-slate-500">Location</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="https://github.com/S-m-a-r-t"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm text-slate-300 transition-colors duration-500 hover:border-primary/50 hover:text-white"
                >
                  <Github className="h-4 w-4" />
                  GitHub
                </a>
                <a
                  href="https://linkedin.com/in/akshat-saini-626142255/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm text-slate-300 transition-colors duration-500 hover:border-primary/50 hover:text-white"
                >
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 text-center text-sm text-slate-500 sm:flex-row sm:text-left">
          <p>© {new Date().getFullYear()} Akshat Saini. All rights reserved.</p>
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs uppercase tracking-[0.5em]">Designed with intention</span>
            <div className="h-px w-10 bg-gradient-to-r from-primary/70 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;