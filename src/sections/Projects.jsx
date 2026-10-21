import React from 'react';
import SectionHeader from '../components/SectionHeader';
import ProjectCard from '../components/ProjectCard';
import { projectsData } from '../data/portfolioData';
import { GithubIcon, ExternalLinkIcon } from '../components/Icons';
import './Projects.css';

export default function Projects() {
  return (
    <section id="projects" className="section-wrapper projects-section" aria-label="Featured Projects">
      {/* Background Subtle Ambient Cyan Glow */}
      <div className="projects-ambient-glow" aria-hidden="true" />

      <div className="container">
        {/* Section Header */}
        <div className="reveal-on-scroll">
          <SectionHeader
            badge="PORTFOLIO &amp; WORK"
            title={
              <>
                Featured <span className="text-cyan-gradient">Projects</span>
              </>
            }
            subtitle="A display of my work across Software Development, QA Automation, and Industrial Systems"
          />
        </div>

        {/* Project Grid / Showcase Container */}
        <div
          className={`projects-grid reveal-on-scroll delay-1 ${projectsData.length === 1 ? 'projects-grid-single' : ''}`}
          role="region"
          aria-label="Projects list"
        >
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Bottom Notice on Git Repository & Upcoming Projects */}
        <div className="projects-footer-cta reveal-on-scroll delay-2">
          <div className="cta-content">
            <span className="cta-badge">Engineering &amp; Source Code</span>
            <p className="cta-text">
              Source code repositories and upcoming project commits are managed on GitHub. For access to private repositories or technical walkthroughs, feel free to reach out directly.
            </p>
          </div>
          <a
            href="https://github.com/ChamalLak"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-github-btn"
            aria-label="Visit Chamal's GitHub Profile"
          >
            <GithubIcon size={18} />
            <span>Visit GitHub Profile</span>
            <ExternalLinkIcon size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}
