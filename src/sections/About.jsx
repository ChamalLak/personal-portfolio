import React from 'react';
import { aboutData, personalData } from '../data/portfolioData';
import {
  CodeIcon,
  ShieldCheckIcon,
  DatabaseIcon,
  LayersIcon,
  TerminalIcon
} from '../components/Icons';
import './About.css';

export default function About() {
  const getHighlightIcon = (iconName) => {
    switch (iconName) {
      case 'code':
        return <CodeIcon size={20} />;
      case 'shieldCheck':
        return <ShieldCheckIcon size={20} />;
      case 'database':
        return <DatabaseIcon size={20} />;
      case 'layers':
        return <LayersIcon size={20} />;
      default:
        return <TerminalIcon size={20} />;
    }
  };

  return (
    <section id="about" className="section-wrapper about-section" aria-label="About Chamal Lakshan">
      {/* Background Ambient Cyan Glow */}
      <div className="about-ambient-glow" aria-hidden="true" />

      <div className="container">
        {/* Main 2-Column Showcase */}
        <div className="about-container">
          {/* Left Column: Circular Portrait with Glowing Neon Cyan Halo (Inspired by Lakruwan) */}
          <div className="about-visual-col">
            <div className="about-avatar-wrapper">
              <div className="about-avatar-halo" aria-hidden="true" />
              <div className="about-avatar-ring">
                <img
                  src={aboutData.avatarImage || personalData.avatarImage || "/profile.png"}
                  alt={personalData.name}
                  className="about-avatar-img"
                />
              </div>

              {/* Status pill beneath the portrait */}
              <div className="about-floating-badge" role="status">
                <span className="about-status-dot" aria-hidden="true" />
                <span className="about-badge-text">Industrial IT • UWU</span>
              </div>
            </div>
          </div>

          {/* Right Column: Bio Narrative, Roles & Highlights */}
          <div className="about-content-col">
            {/* Small Eyebrow Label */}
            <span className="about-eyebrow">{aboutData.title}</span>

            {/* Main Title: About Me */}
            <h2 className="about-main-title">
              About <span className="text-cyan-gradient">Me</span>
            </h2>

            {/* Sub-headline / Role */}
            <h3 className="about-subheadline">{aboutData.headline}</h3>

            {/* Narrative Paragraphs */}
            <div className="about-narrative">
              {aboutData.paragraphs.map((p, idx) => (
                <p key={idx} className="about-paragraph">
                  {p}
                </p>
              ))}
            </div>

            {/* Highlights Grid (2x2 with Icons, inspired by Lakruwan) */}
            <div className="about-highlights-grid">
              {aboutData.highlights.map((item) => (
                <div key={item.id} className="about-highlight-card">
                  <div className="about-icon-box" aria-hidden="true">
                    {getHighlightIcon(item.icon)}
                  </div>
                  <div className="about-highlight-details">
                    <h4 className="highlight-card-title">{item.title}</h4>
                    <span className="highlight-card-sub">{item.description}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Horizontal Tech Pill Strip (Inspired by Naveen's Portfolio) */}
        <div className="about-tech-strip-container">
          <span className="tech-strip-title">Core Technologies &amp; Testing Tools</span>
          <div className="about-tech-strip" aria-label="Core technologies">
            {aboutData.techStrip.map((tech, idx) => (
              <span key={idx} className="about-tech-pill">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
