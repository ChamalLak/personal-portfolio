import React, { useState } from 'react';
import SectionHeader from '../components/SectionHeader';
import SkillCard from '../components/SkillCard';
import { skillCategories } from '../data/portfolioData';
import './Skills.css';

export default function Skills() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filterOptions = [
    { id: 'all', label: 'All Competencies' },
    { id: 'programming', label: 'Languages' },
    { id: 'web-development', label: 'Web Dev' },
    { id: 'quality-assurance', label: 'QA & Testing' },
    { id: 'databases', label: 'Databases' },
    { id: 'tools', label: 'Tools' },
  ];

  const displayedCategories = activeFilter === 'all'
    ? skillCategories
    : skillCategories.filter(cat => cat.id === activeFilter);

  return (
    <section id="skills" className="section-wrapper skills-section" aria-label="Technical Skills">
      <div className="container">
        <SectionHeader
          badge="TECHNICAL SKILLS"
          title="Core Technologies & Methodologies"
          subtitle="A structured overview of programming languages, web stacks, quality engineering practices, and developer tooling."
        />

        {/* Filter Pills */}
        <div className="skills-filter-nav" role="tablist" aria-label="Skills Category Filter">
          {filterOptions.map((opt) => (
            <button
              key={opt.id}
              type="button"
              role="tab"
              aria-selected={activeFilter === opt.id}
              className={`filter-pill ${activeFilter === opt.id ? 'filter-pill-active' : ''}`}
              onClick={() => setActiveFilter(opt.id)}
            >
              {opt.label}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="skills-cards-grid">
          {displayedCategories.map((category) => (
            <SkillCard key={category.id} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
}
