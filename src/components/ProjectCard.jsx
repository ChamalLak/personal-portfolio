import React from 'react';
import { GithubIcon, ExternalLinkIcon, CheckIcon, CodeIcon, ShieldCheckIcon } from './Icons';
import './ProjectCard.css';

export default function ProjectCard({ project }) {
  const {
    title,
    category,
    shortDescription,
    keyPoints,
    techStack,
    githubUrl,
    demoUrl,
    isPlaceholder
  } = project;

  const isQA = category.toLowerCase().includes('quality');

  return (
    <article className="project-card glass-panel">
      {/* Visual Header / Mockup Banner Placeholder */}
      <div className="project-card-banner">
        <div className="project-banner-pattern" aria-hidden="true">
          <div className="project-banner-badge">
            {isQA ? <ShieldCheckIcon size={28} /> : <CodeIcon size={28} />}
          </div>
          <span className="project-category-badge">{category}</span>
        </div>
        {isPlaceholder && (
          <span className="project-placeholder-tag" title="Project architecture & code placeholder">
            Featured Spec
          </span>
        )}
      </div>

      {/* Card Content Body */}
      <div className="project-card-body">
        <h3 className="project-card-title">{title}</h3>
        <p className="project-card-description">{shortDescription}</p>

        {/* Highlights */}
        {keyPoints && keyPoints.length > 0 && (
          <ul className="project-highlights-list">
            {keyPoints.map((point, index) => (
              <li key={index} className="project-highlight-item">
                <CheckIcon size={14} className="highlight-check-icon" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        )}

        {/* Tech Stack Tags */}
        <div className="project-tech-tags" aria-label="Technologies used">
          {techStack.map((tech, index) => (
            <span key={index} className="tech-tag">
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Card Footer Actions */}
      <div className="project-card-footer">
        {githubUrl ? (
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="project-action-link github-action"
            aria-label={`View ${title} source on GitHub`}
          >
            <GithubIcon size={16} />
            <span>Source Code</span>
            <span className="action-hint">[GitHub]</span>
          </a>
        ) : (
          <span className="project-action-disabled">
            <GithubIcon size={16} /> Source Available on Request
          </span>
        )}

        {demoUrl ? (
          <a
            href={demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="project-action-link demo-action"
            aria-label={`Open live demonstration of ${title}`}
          >
            <span>Live Demo</span>
            <ExternalLinkIcon size={14} />
          </a>
        ) : (
          <span className="project-action-disabled demo-pending">
            <span>Live Preview</span>
            <span className="action-hint">[Local / In Dev]</span>
          </span>
        )}
      </div>
    </article>
  );
}
