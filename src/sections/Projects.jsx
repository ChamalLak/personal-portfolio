import React, { useState } from 'react';
import SectionHeader from '../components/SectionHeader';
import ProjectCard from '../components/ProjectCard';
import { projectsData } from '../data/portfolioData';
import './Projects.css';

export default function Projects() {
  const [filter, setFilter] = useState('all');

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'Software Development', label: 'Software Development' },
    { id: 'Quality Assurance', label: 'Quality Assurance' }
  ];

  const filteredProjects = filter === 'all'
    ? projectsData
    : projectsData.filter(p => p.category === filter);

  return (
    <section id="projects" className="section-wrapper projects-section" aria-label="Projects">
      <div className="container">
        <SectionHeader
          badge="PORTFOLIO & WORK"
          title="Featured Projects & Technical Case Studies"
          subtitle="Curated software applications and QA verification collections reflecting coursework and practical development interests."
        />

        {/* Project Filter Controls */}
        <div className="projects-filter-bar" role="tablist" aria-label="Project Category Filter">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              role="tab"
              aria-selected={filter === cat.id}
              className={`project-tab-btn ${filter === cat.id ? 'project-tab-active' : ''}`}
              onClick={() => setFilter(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Responsive Grid with Consistent Card Heights */}
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Notice on Project Links & Placeholders */}
        <div className="projects-notice-box glass-panel">
          <span className="notice-badge">Notice</span>
          <p className="notice-text">
            Project cards above represent practical software engineering and QA case studies aligned with the BSc Industrial Information Technology curriculum. GitHub repository links can be updated directly in <code>src/data/portfolioData.js</code>.
          </p>
        </div>
      </div>
    </section>
  );
}
