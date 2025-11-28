import React from 'react';
import Navbar from './components/navbar';
import About from  './components/about';
import Projects from './components/Projects';
import Contact from './components/contact';
import Experience from './components/experience';
import Hero from './components/hero';
import Skills from './components/skills';

function App() {
  return (
    <div className="min-h-screen text-slate-200 selection:bg-primary selection:text-black relative">
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
    </div>
  );
}

export default App;