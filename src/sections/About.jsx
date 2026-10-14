import React from 'react';
import SectionHeader from '../components/SectionHeader';
import { aboutData } from '../data/portfolioData';
import { 
  CodeIcon, 
  ShieldCheckIcon, 
  LayersIcon, 
  TerminalIcon, 
  CheckIcon
} from '../components/Icons';
import './About.css';

export default function About() {
  const getPillarIcon = (iconName) => {
    switch (iconName) {
      case 'code':
        return <CodeIcon size={22} />;
      case 'shieldCheck':
        return <ShieldCheckIcon size={22} />;
      case 'layers':
        return <LayersIcon size={22} />;
      case 'terminal':
        return <TerminalIcon size={22} />;
      default:
        return <CheckIcon size={22} />;
    }
  };

  return (
    <section id="about" className="section-wrapper about-section" aria-label="About Chamal Lakshan">
      <div className="container">
        <SectionHeader
          badge={aboutData.title}
          title={aboutData.headline}
        />

        <div className="about-grid">
          {/* Left Column: Clean Minimal Summary & Bullets */}
          <div className="about-bio-card glass-panel">
            <p className="about-intro-text">
              {aboutData.intro}
            </p>

            <ul className="about-bullets-list">
              {aboutData.bullets.map((bullet, idx) => (
                <li key={idx} className="about-bullet-item">
                  <span className="about-bullet-icon" aria-hidden="true">
                    <CheckIcon size={14} />
                  </span>
                  <span className="about-bullet-text">{bullet}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column: 4 Focus Cards (2x2 Grid) */}
          <div className="about-pillars-grid">
            {aboutData.pillars.map((pillar) => (
              <div key={pillar.id} className="pillar-card glass-panel">
                <div className="pillar-icon-box" aria-hidden="true">
                  {getPillarIcon(pillar.icon)}
                </div>
                <h3 className="pillar-title">{pillar.title}</h3>
                <p className="pillar-desc">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

