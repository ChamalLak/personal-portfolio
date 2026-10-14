import React from 'react';
import { 
  CodeIcon, 
  ShieldCheckIcon, 
  DatabaseIcon, 
  TerminalIcon, 
  LayersIcon 
} from './Icons';
import './SkillCard.css';

export default function SkillCard({ category }) {
  const { id, title, description, skills } = category;

  const getCategoryIcon = (catId) => {
    switch (catId) {
      case 'programming':
        return <CodeIcon size={24} />;
      case 'quality-assurance':
        return <ShieldCheckIcon size={24} />;
      case 'databases':
        return <DatabaseIcon size={24} />;
      case 'tools':
        return <TerminalIcon size={24} />;
      default:
        return <LayersIcon size={24} />;
    }
  };

  return (
    <div className="skill-card glass-panel">
      <div className="skill-card-header">
        <div className="skill-card-icon-wrap" aria-hidden="true">
          {getCategoryIcon(id)}
        </div>
        <div>
          <h3 className="skill-card-title">{title}</h3>
          <p className="skill-card-desc">{description}</p>
        </div>
      </div>

      <div className="skill-card-items">
        {skills.map((skill, index) => (
          <div key={index} className="skill-item">
            <div className="skill-item-info">
              <span className="skill-name">{skill.name}</span>
              {skill.tag && <span className="skill-tag">{skill.tag}</span>}
            </div>
            <span className="skill-level">{skill.level}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
