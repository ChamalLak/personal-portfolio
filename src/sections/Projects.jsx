import React, { useState } from 'react';
import SectionHeader from '../components/SectionHeader';
import ProjectCard from '../components/ProjectCard';
import { projectsData } from '../data/portfolioData';
import { GithubIcon, ExternalLinkIcon } from '../components/Icons';
import './Projects.css';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');

  // Compute available categories dynamically so no empty tabs exist
  const uniqueCategories = Array.from(new Set(projectsData.map((p) => p.category)));
  const showFilters = uniqueCategories.length > 1;

  const filteredProjects =
    activeFilter === 'all'
      ? projectsData
      : projectsData.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="section-wrapper projects-section" aria-label="Featured Projects">
      {/* Background Subtle Ambient Cyan Glow */}
      <div className="projects-ambient-glow" aria-hidden="true" />

      <div className="container">
        {/* Section Header */}
        <SectionHeader
          badge="PORTFOLIO &amp; WORK"
          title="FEATURED PROJECTS"
          subtitle="A display of my work across Software Development, QA Automation, and Industrial Systems"
        />

        {/* Dynamic Category Filter Bar (Only shown if multiple categories exist) */}
        {showFilters && (
          <div className="projects-filter-bar" role="tablist" aria-label="Filter projects">
            <button
              type="button"
              role="tab"
              aria-selected={activeFilter === 'all'}
              className={`project-tab-btn ${activeFilter === 'all' ? 'project-tab-active' : ''}`}
              onClick={() => setActiveFilter('all')}
            >
              All Projects ({projectsData.length})
            </button>
            {uniqueCategories.map((cat) => (
              <button
                key={cat}
                type="button"
                role="tab"
                aria-selected={activeFilter === cat}
                className={`project-tab-btn ${activeFilter === cat ? 'project-tab-active' : ''}`}
                onClick={() => setActiveFilter(cat)}
              >
                {cat} ({projectsData.filter((p) => p.category === cat).length})
              </button>
            ))}
          </div>
        )}

        {/* Project Grid / Showcase Container */}
        <div
          className={`projects-grid ${filteredProjects.length === 1 ? 'projects-grid-single' : ''}`}
          role="region"
          aria-label="Projects list"
        >
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Bottom Notice on Git Repository & Upcoming Projects */}
        <div className="projects-footer-cta">
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
