import React, { useState, useEffect } from 'react';
import { Menu, X, Command } from 'lucide-react';
import { NAV_ITEMS } from '../constants.jsx';
import { motion, AnimatePresence } from 'framer-motion';
import CommandPalette from './CommandPalette.jsx';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [paletteOpen, setPaletteOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    const handleKeyDown = (event) => {
      const isMeta = event.metaKey || event.ctrlKey;
      if (isMeta && event.key.toLowerCase() === 'k') {
        event.preventDefault();
        setPaletteOpen((prev) => !prev);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <nav
        className={`fixed left-0 top-0 z-50 w-full transition-all duration-500 ${
          scrolled
            ? 'border-b border-white/5 bg-[#050510]/90 py-3 shadow-[0_40px_80px_-60px_rgba(34,211,238,0.25)] backdrop-blur-2xl'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="container mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-10">
          <a href="#" className="group flex items-center gap-2.5">
            <div className="relative">
              <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-primary/40 to-secondary/30 opacity-0 blur-lg transition-opacity duration-500 group-hover:opacity-100" />
              <div className="relative rounded-full border border-white/10 bg-white/[0.01] px-2.5 py-1.5">
                <span className="font-mono text-[10px] uppercase tracking-[0.6em] text-slate-400">AS</span>
              </div>
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-heading text-sm font-semibold tracking-[0.4em] text-white sm:text-base">
                AKSHAT
              </span>
              <span className="mt-1 font-mono text-[9px] uppercase tracking-[0.8em] text-slate-500">
                SAINI
              </span>
            </div>
          </a>

          <div className="hidden items-center gap-1 rounded-full border border-white/5 bg-white/[0.01] px-1 py-1 backdrop-blur-xl md:flex">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="group relative rounded-full px-4 py-2 text-sm text-slate-300 transition-colors duration-300 hover:text-white"
              >
                <span className="relative z-10">{item.label}</span>
                <span className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </a>
            ))}
            <div className="mx-2 h-5 w-px bg-white/10" />
            <button
              type="button"
              onClick={() => setPaletteOpen((prev) => !prev)}
              className="inline-flex items-center gap-2 rounded-full px-3 py-2 text-xs font-medium uppercase tracking-[0.4em] text-slate-400 transition-colors duration-300 hover:text-white"
              aria-label="Open command palette"
            >
              <Command className="h-3.5 w-3.5" />
              <span className="hidden lg:inline">⌘K</span>
            </button>
            <a
              href="#contact"
              className="relative ml-1 overflow-hidden rounded-full border border-primary/40 px-5 py-2 text-sm font-medium text-white transition-all duration-300 hover:border-primary/80"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-primary/15 to-secondary/15" />
              <span className="relative">Start a conversation</span>
            </a>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <button
              type="button"
              onClick={() => setPaletteOpen((prev) => !prev)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-slate-300 transition-colors hover:text-white"
              aria-label="Open command palette"
            >
              <Command className="h-4 w-4" />
            </button>
            <button
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white transition-colors hover:border-primary/60"
              onClick={toggleMenu}
              aria-label="Toggle navigation"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="overflow-hidden border-b border-white/5 bg-[#050510]/95 backdrop-blur-2xl md:hidden"
            >
              <div className="flex flex-col gap-1 px-4 py-4">
                {NAV_ITEMS.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="rounded-xl px-3 py-3 text-base text-slate-200 transition-colors hover:bg-white/[0.01]"
                  >
                    {item.label}
                  </a>
                ))}
                <a
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="mt-2 rounded-xl border border-primary/40 bg-gradient-to-r from-primary/10 to-secondary/10 px-3 py-3 text-center text-base text-white"
                >
                  Start a conversation
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <CommandPalette open={paletteOpen} setOpen={setPaletteOpen} />
    </>
  );
};

export default Navbar;