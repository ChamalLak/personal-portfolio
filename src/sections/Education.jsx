import React from 'react';
import SectionHeader from '../components/SectionHeader';
import EducationCard from '../components/EducationCard';
import { educationData } from '../data/portfolioData';
import './Education.css';

export default function Education() {
  return (
    <section id="education" className="section-wrapper education-section" aria-label="Education and Academics">
      <div className="container">
        <SectionHeader
          badge="ACADEMIC BACKGROUND"
          title="Education & Formal Training"
          subtitle="A structured overview of degree qualifications, academic coursework, and engineering foundations."
        />

        <div className="education-timeline-container">
          {educationData.map((item, index) => (
            <EducationCard key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
