import React from 'react';
import SectionHeader from '../components/SectionHeader';
import { aboutData, personalData } from '../data/portfolioData';
import { 
  CodeIcon, 
  ShieldCheckIcon, 
  LayersIcon, 
  TerminalIcon, 
  GraduationCapIcon,
  CheckIcon
} from '../components/Icons';
import './About.css';

export default function About() {
  const getPillarIcon = (iconName) => {
    switch (iconName) {
      case 'code':
        return <CodeIcon size={24} />;
      case 'shieldCheck':
        return <ShieldCheckIcon size={24} />;
      case 'layers':
        return <LayersIcon size={24} />;
      case 'terminal':
        return <TerminalIcon size={24} />;
      default:
        return <CheckIcon size={24} />;
    }
  };

  return (
    <section id="about" className="section-wrapper about-section" aria-label="About Chamal Lakshan">
      <div className="container">
        <SectionHeader
          badge="ABOUT ME"
          title="Engineering Mindset & Quality-Driven Delivery"
          subtitle="A dedicated undergraduate merging software development principles with industrial system disciplines."
        />

        <div className="about-grid">
          {/* Left Bio Card */}
          <div className="about-bio-card glass-panel">
            <div className="about-education-callout">
              <div className="callout-icon-wrap" aria-hidden="true">
                <GraduationCapIcon size={24} />
              </div>
              <div className="callout-text">
                <span className="callout-degree">BSc (Hons) in Industrial Information Technology</span>
                <span className="callout-uni">{personalData.university}</span>
              </div>
            </div>

            <div className="about-text-content">
              {aboutData.paragraphs.map((p, idx) => (
                <p key={idx} className="about-paragraph">
                  {p}
                </p>
              ))}
            </div>

            <div className="about-quick-specs">
              <div className="spec-item">
                <span className="spec-label">Target Roles</span>
                <span className="spec-val">Software Engineer Intern / QA Intern</span>
              </div>
              <div className="spec-item">
                <span className="spec-label">Location</span>
                <span className="spec-val">Sri Lanka (Available for On-site / Remote)</span>
              </div>
            </div>
          </div>

          {/* Right Core Pillars */}
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
