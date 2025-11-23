import React from 'react';
import { motion } from 'framer-motion';
import { EXPERIENCE } from '../constants';
import { Calendar } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-black/20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="text-secondary">Journey</span>
          </h2>
        </motion.div>

        <div className="relative border-l-2 border-white/10 ml-3 md:ml-6 space-y-12">
          {EXPERIENCE.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative pl-8 md:pl-12"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-black border-2 border-primary shadow-[0_0_10px_rgba(0,242,255,0.5)]"></div>

              <div className="glass p-6 md:p-8 rounded-2xl border border-white/10 hover:border-primary/30 transition-all">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                  <div>
                    <h3 className="text-2xl font-bold text-white">{exp.role}</h3>
                    <p className="text-primary font-medium text-lg">{exp.organization}</p>
                  </div>

                  <div className="flex items-center gap-2 text-gray-400 bg-white/5 px-3 py-1 rounded-full w-fit">
                    <Calendar size={16} />
                    <span className="text-sm font-mono">{exp.period}</span>
                  </div>
                </div>

                <ul className="space-y-3 mt-4">
                  {exp.details.map((detail, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2.5 shrink-0"></span>
                      <span className="leading-relaxed">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;