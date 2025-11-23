import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import Scene from './Scene';

const Hero = () => {

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden pt-20">
      <Scene/>
      <div className="container mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-left"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-2 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-md mb-6"
          >
            <span className="text-primary font-medium tracking-wide text-sm">
              GDG Co-Lead 2025-26
            </span>
          </motion.div>

          <h1 className="font-heading font-bold text-5xl md:text-7xl leading-tight mb-6 text-white">
            Hi, I'm <br />
            <span className="text-gradient">Akshat Saini</span>
            <span className="animate-pulse">👋</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-lg leading-relaxed">
            BTech CSE student passionate about full-stack development, AI/ML, and building real-world
            products. I’ve led GDG management, contributed to cloud tech communities, and built
            projects like HungerX and a hand sign language AI. I love creating impactful solutions
            and growing through developer communities.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="px-8 py-4 rounded-xl bg-primary text-black font-bold flex items-center gap-2 hover:bg-white transition-all shadow-[0_0_20px_rgba(0,242,255,0.3)] hover:shadow-[0_0_30px_rgba(0,242,255,0.5)]"
            >
              View Projects <ArrowRight size={20} />
            </a>

            <a
              href="#contact"
              className="px-8 py-4 rounded-xl glass text-white font-bold flex items-center gap-2 hover:bg-white/10 transition-all border border-white/20"
            >
              Contact Me
            </a>
          </div>
        </motion.div>

        {/* Right side animated decoration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="hidden md:flex justify-center items-center relative"
        >
          <div className="w-[400px] h-[400px] relative">
            <div className="absolute inset-0 rounded-full border border-primary/20 animate-[spin_10s_linear_infinite]"></div>
            <div className="absolute inset-4 rounded-full border border-secondary/20 animate-[spin_15s_linear_infinite_reverse]"></div>
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-secondary/5 rounded-full blur-3xl"></div>

            {/* Floating Cards */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute top-10 right-0 glass p-4 rounded-xl border-l-4 border-primary"
            >
              <span className="text-gray-300 font-mono text-sm">git commit -m "Init"</span>
            </motion.div>

            <motion.div
              animate={{ y: [0, 15, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-20 -left-10 glass p-4 rounded-xl border-l-4 border-secondary"
            >
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="text-gray-300 font-mono text-sm">System Online</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-gray-500">
        <Download className="w-6 h-6 rotate-90 opacity-50" />
      </div>
    </section>
  );
};

export default Hero;