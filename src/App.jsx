import React from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import { useScrollReveal } from './hooks/useScrollReveal';
import './App.css';

export default function App() {
  useScrollReveal();

  return (
    <div className="portfolio-app">
      {/* Accessibility Skip Link */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      {/* Global Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main id="main-content" tabIndex="-1">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}
