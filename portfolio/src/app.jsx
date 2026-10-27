import React from 'react';
import Navbar from './components/navbar.jsx';
import Hero from './components/hero.jsx';
import About from './components/About.jsx';
import Skills from './components/skills.jsx';
import Projects from './components/projects.jsx';
import Experience from './components/experience.jsx';
import Resume from './components/resume.jsx';
import Contact from './components/contact.jsx';

function App() {
  return (
    <div className="min-h-screen text-slate-200 relative bg-[#050510]">
      <Navbar />
      <main className="relative">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Resume />
        <Contact />
      </main>
    </div>
  );
}

export default App;