import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 relative bg-gradient-to-b from-[#030014] to-black">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6">
              Let's <span className="text-primary">Connect</span>
            </h2>
            <p className="text-gray-400 mb-10 text-lg max-w-md">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4 text-gray-300 group">
                <div className="p-3 glass rounded-lg text-secondary group-hover:text-white group-hover:bg-secondary transition-all">
                  <MapPin size={24} />
                </div>
                <span className="text-lg">Greater Noida, India</span>
              </div>
              
              <a href="tel:+919460618268" className="flex items-center gap-4 text-gray-300 group">
                <div className="p-3 glass rounded-lg text-secondary group-hover:text-white group-hover:bg-secondary transition-all">
                  <Phone size={24} />
                </div>
                <span className="text-lg">+91 9460618268</span>
              </a>

              <a href="mailto:akshat12.saini@gmail.com" className="flex items-center gap-4 text-gray-300 group">
                <div className="p-3 glass rounded-lg text-secondary group-hover:text-white group-hover:bg-secondary transition-all">
                  <Mail size={24} />
                </div>
                <span className="text-lg">akshat12.saini@gmail.com</span>
              </a>
            </div>

            <div className="flex gap-6 mt-12">
              <a
                href="https://github.com/S-m-a-r-t"
                target="_blank"
                rel="noreferrer"
                className="p-4 glass rounded-full text-white hover:bg-primary hover:text-black transition-all"
              >
                <Github size={24} />
              </a>
              <a
                href="https://linkedin.com/in/akshat-saini-626142255/"
                target="_blank"
                rel="noreferrer"
                className="p-4 glass rounded-full text-white hover:bg-[#0077b5] transition-all"
              >
                <Linkedin size={24} />
              </a>
            </div>
          </motion.div>

          {/* Right: Decorative Quote Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-20 blur-3xl rounded-full"></div>
            <div className="glass p-10 rounded-3xl border border-white/10 relative z-10 text-center">
              <h3 className="text-2xl font-heading font-bold text-white mb-6">
                "I am driven and curious builder who constantly pushes forward, even when doubt or pressure tries to slow me down."
              </h3>
              <div className="w-16 h-1 bg-primary mx-auto rounded-full mb-4"></div>
              <p className="text-gray-400 font-mono text-sm">Akshat Saini</p>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <div className="mt-20 pt-8 border-t border-white/5 text-center text-gray-600 text-sm">
          <p>© {new Date().getFullYear()} Akshat Saini. All rights reserved.</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;