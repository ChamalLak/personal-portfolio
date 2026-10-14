import React from 'react';
import './SectionHeader.css';

export default function SectionHeader({
  badge,
  title,
  subtitle,
  align = 'center', // 'center' | 'left'
  className = ''
}) {
  return (
    <div className={`section-header section-header-${align} ${className}`}>
      {badge && <span className="section-eyebrow">{badge}</span>}
      <h2 className="section-title">{title}</h2>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </div>
  );
}
