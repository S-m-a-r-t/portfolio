import React from 'react';
import { motion } from 'framer-motion';
import { PROJECTS } from '../constants';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-secondary/20 rounded-full blur-[120px] -z-10"></div>

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">
            Featured <span className="text-primary">Projects</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }} 
              whileHover={{ y: -10, boxShadow: "0 20px 50px -12px rgba(0, 242, 255, 0.1)" }}
              className="glass rounded-2xl p-8 border border-white/10 flex flex-col group"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 rounded-xl bg-white/5 text-primary group-hover:scale-110 transition-transform duration-300">
                  {project.icon && <project.icon size={28} />}
                </div>

                <div className="flex gap-3">
                  <a href={project.github} className="text-gray-500 hover:text-white transition-colors">
                    <Github size={20} />
                  </a>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h3>

              <p className="text-gray-400 mb-6 flex-grow">
                {project.description}
              </p>

              {project.features && (
                <div className="mb-6 space-y-2">
                  {project.features.map((feat) => (
                    <div key={feat} className="flex items-center gap-2 text-sm text-gray-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                      {feat}
                    </div>
                  ))}
                </div>
              )}

              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs font-mono px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;