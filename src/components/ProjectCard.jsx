import React, { useState } from 'react';
import { GithubIcon, ExternalLinkIcon, LockIcon } from './Icons';
import './ProjectCard.css';

export default function ProjectCard({ project }) {
  const {
    title,
    category,
    status = 'Completed',
    isPrivate = true,
    thumbnail,
    shortDescription,
    techStack = [],
    githubUrl,
    demoUrl
  } = project;

  const [showPrivateNotice, setShowPrivateNotice] = useState(false);
  const isCompleted = status.toLowerCase() === 'completed';

  const handleGithubClick = (e) => {
    if (isPrivate) {
      // If private repo, show a helpful non-intrusive notice explaining repository status
      setShowPrivateNotice(true);
      setTimeout(() => setShowPrivateNotice(false), 4500);
    }
  };

  return (
    <article className="project-card">
      {/* Thumbnail Image Container with Status Badge Overlay */}
      <div className="project-thumbnail-wrapper">
        <img
          src={thumbnail || '/projects/smart-plate.jpg'}
          alt={`${title} mockup`}
          className="project-thumbnail-img"
          loading="lazy"
        />

        {/* Status Badge: Solid Green for Completed, Orange for In Progress (Matches Lakruwan's) */}
        <span
          className={`project-status-badge ${
            isCompleted ? 'status-completed' : 'status-in-progress'
          }`}
        >
          {status}
        </span>

        {/* Private Repo Indicator */}
        {isPrivate && (
          <span className="project-private-badge" title="Source code is in a private repository">
            <LockIcon size={12} />
            <span>Private Repo</span>
          </span>
        )}
      </div>

      {/* Card Content Body - Clean, spacious, NO cluttered bullet points */}
      <div className="project-card-body">
        {/* Category Label in Cyan Accent */}
        <span className="project-category-label">{category}</span>

        {/* Bold Prominent Title */}
        <h3 className="project-card-title">{title}</h3>

        {/* Short 2-line Description */}
        <p className="project-card-description">{shortDescription}</p>

        {/* Tech Stack Pills */}
        <div className="project-tech-tags" aria-label="Technologies used">
          {techStack.map((tech, idx) => (
            <span key={idx} className="tech-pill">
              {tech}
            </span>
          ))}
        </div>

        {/* Bottom Action: Full-width vibrant button matching Lakruwan's & Naveen's */}
        <div className="project-card-actions">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleGithubClick}
              className="project-full-btn btn-github-accent"
              aria-label={`View ${title} on GitHub`}
            >
              <GithubIcon size={18} />
              <span>GitHub</span>
              {isPrivate && <LockIcon size={14} className="btn-lock-icon" />}
            </a>
          )}

          {demoUrl && (
            <a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="project-full-btn btn-demo-accent"
              aria-label={`View live demo for ${title}`}
            >
              <ExternalLinkIcon size={16} />
              <span>Live Demo</span>
            </a>
          )}
        </div>

        {/* Non-intrusive Private Repo Toast Notice */}
        {showPrivateNotice && (
          <div className="private-repo-toast" role="status">
            <span>🔒 This repository is currently private on GitHub. Source code &amp; walkthrough are available upon request.</span>
          </div>
        )}
      </div>
    </article>
  );
}
