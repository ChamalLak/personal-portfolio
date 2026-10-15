import React, { useState } from 'react';
import SectionHeader from '../components/SectionHeader';
import {
  coreSkillsData,
  programmingLanguages,
  techStackLogos,
  experienceData
} from '../data/portfolioData';
import {
  CodeIcon,
  BriefcaseIcon,
  ShieldCheckIcon,
  DatabaseIcon,
  LayersIcon,
  CheckIcon
} from '../components/Icons';
import './Skills.css';

export default function Skills() {
  const [activeTab, setActiveTab] = useState('skills'); // 'skills' | 'experience'

  const getSubSectionIcon = (iconName) => {
    switch (iconName) {
      case 'shieldCheck':
        return <ShieldCheckIcon size={20} />;
      case 'database':
        return <DatabaseIcon size={20} />;
      default:
        return <CodeIcon size={20} />;
    }
  };

  return (
    <section id="skills" className="section-wrapper skills-section" aria-label="Skills and Experience">
      {/* Background Cyan Ambient Glow */}
      <div className="skills-ambient-glow" aria-hidden="true" />

      <div className="container">
        {/* Section Header */}
        <div className="skills-header-wrap">
          <SectionHeader
            badge="EXPERTISE &amp; BACKGROUND"
            title={
              <>
                Skills &amp; <span className="text-cyan-gradient">Experience</span>
              </>
            }
            subtitle="Technical expertise, developer toolchains, and hands-on project &amp; academic experience."
          />

          {/* Interactive Dual-Mode Capsule Switcher (Lakruwan & Theekshana inspired) */}
          <div className="skills-tab-switcher" role="tablist" aria-label="Skills and Experience Switcher">
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === 'skills'}
              className={`skills-switcher-btn ${activeTab === 'skills' ? 'switcher-active' : ''}`}
              onClick={() => setActiveTab('skills')}
            >
              <CodeIcon size={16} />
              <span>Skills</span>
            </button>

            <button
              type="button"
              role="tab"
              aria-selected={activeTab === 'experience'}
              className={`skills-switcher-btn ${activeTab === 'experience' ? 'switcher-active' : ''}`}
              onClick={() => setActiveTab('experience')}
            >
              <BriefcaseIcon size={16} />
              <span>Experience</span>
            </button>
          </div>
        </div>

        {/* ===================================================================
            TAB 1: SKILLS VIEW (LAKRUWAN 3-COLUMN CARDS + THEEKSHANA TECH STRIP)
            =================================================================== */}
        {activeTab === 'skills' && (
          <div className="skills-tab-content tab-fade-in" role="tabpanel" aria-label="Skills Overview">
            {/* Sub-Section 1: Core Technical Competencies */}
            <div className="skills-sub-group">
              <div className="sub-group-header">
                <span className="sub-group-icon-badge" aria-hidden="true">
                  <ShieldCheckIcon size={18} />
                </span>
                <h3 className="sub-group-title">Core Engineering Competencies</h3>
              </div>

              <div className="core-skills-grid">
                {coreSkillsData.map((category) => (
                  <div key={category.id} className="core-skill-card">
                    <div className="core-card-header">
                      <div className="core-card-icon" aria-hidden="true">
                        {getSubSectionIcon(category.icon)}
                      </div>
                      <h4 className="core-card-title">{category.title}</h4>
                    </div>

                    <ul className="core-skill-points">
                      {category.points.map((point, idx) => (
                        <li key={idx} className="core-point-item">
                          <span className="core-bullet-dot" aria-hidden="true" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Sub-Section 2: Programming Languages */}
            <div className="skills-sub-group">
              <div className="sub-group-header">
                <span className="sub-group-icon-badge" aria-hidden="true">
                  <CodeIcon size={18} />
                </span>
                <h3 className="sub-group-title">Programming Languages</h3>
              </div>

              <div className="languages-grid">
                {programmingLanguages.map((lang, idx) => (
                  <div key={idx} className="language-card">
                    <div className="language-header">
                      <h4 className="language-name">{lang.name}</h4>
                    </div>
                    <p className="language-focus">{lang.focus}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Sub-Section 3: Frameworks, Tools & Technologies (Theekshana Style) */}
            <div className="skills-sub-group">
              <div className="sub-group-header">
                <span className="sub-group-icon-badge" aria-hidden="true">
                  <LayersIcon size={18} />
                </span>
                <h3 className="sub-group-title">Frameworks &amp; Testing Toolchains</h3>
              </div>

              <div className="tech-logos-grid" aria-label="Frameworks and tools list">
                {techStackLogos.map((tool, idx) => (
                  <div key={idx} className="tech-logo-pill">
                    <span className="tech-logo-name">{tool.name}</span>
                    <span className="tech-logo-tag">{tool.tag}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ===================================================================
            TAB 2: EXPERIENCE VIEW (LAKRUWAN CARDS + THEEKSHANA DETAILS)
            =================================================================== */}
        {activeTab === 'experience' && (
          <div className="experience-tab-content tab-fade-in" role="tabpanel" aria-label="Professional Experience">
            <div className="experience-cards-list">
              {experienceData.map((exp) => (
                <div key={exp.id} className="experience-card">
                  {/* Card Header: Role, Org, and Duration Pill */}
                  <div className="exp-card-header">
                    <div className="exp-role-group">
                      <h3 className="exp-role-title">{exp.role}</h3>
                      <span className="exp-organization">{exp.organization}</span>
                    </div>

                    <div className="exp-badge-group">
                      <span className="exp-period-pill">{exp.period}</span>
                    </div>
                  </div>

                  {/* Card Body: 2 Columns (Responsibilities + Skills Gained) */}
                  <div className="exp-card-body">
                    {/* Left: Responsibilities */}
                    <div className="exp-col-responsibilities">
                      <h4 className="exp-section-label">Key Responsibilities &amp; Contributions</h4>
                      <ul className="exp-responsibilities-list">
                        {exp.responsibilities.map((resp, idx) => (
                          <li key={idx} className="exp-resp-item">
                            <CheckIcon size={15} className="resp-check-icon" />
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Right: Skills Gained */}
                    <div className="exp-col-skills">
                      <h4 className="exp-section-label">Skills &amp; Technologies Applied</h4>
                      <div className="exp-skills-tags">
                        {exp.skillsGained.map((skill, idx) => (
                          <span key={idx} className="exp-skill-pill">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
