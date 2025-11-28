import React from 'react';
import Navbar from './components/navbar.jsx';
import About from  './components/About.jsx';
import Projects from './components/projects.jsx';
import Contact from './components/contact.jsx';
import Experience from './components/experience.jsx';
import Hero from './components/hero.jsx';
import Skills from './components/skills.jsx';

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