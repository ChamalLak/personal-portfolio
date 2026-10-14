import React from 'react';
import { GraduationCapIcon, CheckIcon } from './Icons';
import './EducationCard.css';

export default function EducationCard({ item, index }) {
  const { degree, institution, period, badge, description, modules } = item;

  return (
    <div className="education-timeline-item">
      {/* Timeline Node marker */}
      <div className="timeline-marker" aria-hidden="true">
        <div className="timeline-dot">
          <GraduationCapIcon size={16} />
        </div>
        <div className="timeline-line"></div>
      </div>

      {/* Timeline Card */}
      <div className="timeline-content glass-panel">
        <div className="timeline-header">
          <div>
            <div className="timeline-badge-wrap">
              <span className="timeline-badge">{badge}</span>
              <span className="timeline-period">{period}</span>
            </div>
            <h3 className="timeline-degree">{degree}</h3>
            <p className="timeline-institution">{institution}</p>
          </div>
        </div>

        <p className="timeline-description">{description}</p>

        {modules && modules.length > 0 && (
          <div className="timeline-modules">
            <span className="modules-label">Key Focus Areas & Coursework:</span>
            <div className="modules-grid">
              {modules.map((mod, i) => (
                <span key={i} className="module-pill">
                  <CheckIcon size={12} className="module-check" />
                  {mod}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
