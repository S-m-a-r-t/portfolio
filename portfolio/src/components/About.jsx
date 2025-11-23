import React from 'react';
import { motion } from 'framer-motion';
import { User, GraduationCap, Briefcase } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="text-primary">Me</span>
          </h2>
          <div className="h-1 w-20 bg-secondary rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Card 1: Personal */}
          <motion.div
            whileHover={{ y: -10 }}
            className="glass p-8 rounded-2xl border-t border-white/10 relative overflow-hidden group"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-transparent transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            <User className="w-10 h-10 text-primary mb-6" />
            <h3 className="text-2xl font-heading font-bold text-white mb-4">Who I Am</h3>
            <p className="text-gray-400 leading-relaxed">
              I’m a Computer Science Engineering student at Bennett University, passionate about AI, Cloud Computing, and Full-Stack Development. I enjoy turning ideas into scalable products.
            </p>
          </motion.div>

          {/* Card 2: Leadership */}
          <motion.div
            whileHover={{ y: -10 }}
            className="glass p-8 rounded-2xl border-t border-white/10 relative overflow-hidden group"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-secondary to-transparent transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            <Briefcase className="w-10 h-10 text-secondary mb-6" />
            <h3 className="text-2xl font-heading font-bold text-white mb-4">Leadership</h3>
            <p className="text-gray-400 leading-relaxed">
              As Google Developer Groups (GDG) Co-Lead (2025-26) and former Management Lead, I organize events, manage PR, and help hundreds of students explore technology.
            </p>
          </motion.div>

          {/* Card 3: Vision */}
          <motion.div
            whileHover={{ y: -10 }}
            className="glass p-8 rounded-2xl border-t border-white/10 relative overflow-hidden group"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-pink-500 to-transparent transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            <GraduationCap className="w-10 h-10 text-pink-500 mb-6" />
            <h3 className="text-2xl font-heading font-bold text-white mb-4">Vision</h3>
            <p className="text-gray-400 leading-relaxed">
              I aim to build technology that makes life easier—not just smarter. Solving real-world problems using clean, efficient design and engineering is my drive.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;