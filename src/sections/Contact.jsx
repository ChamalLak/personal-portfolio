import React, { useState } from 'react';
import SectionHeader from '../components/SectionHeader';
import ContactForm from '../components/ContactForm';
import { contactInfo, personalData } from '../data/portfolioData';
import { 
  MailIcon, 
  GithubIcon, 
  LinkedinIcon, 
  CheckIcon 
} from '../components/Icons';
import './Contact.css';

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contactInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="section-wrapper contact-section" aria-label="Contact Chamal Lakshan">
      {/* Background Cyan Ambient Glow */}
      <div className="contact-ambient-glow" aria-hidden="true" />

      <div className="container">
        {/* Section Header */}
        <div className="contact-header-wrap reveal-on-scroll">
          <SectionHeader
            badge="GET IN TOUCH"
            title={
              <>
                Let's <span className="text-cyan-gradient">Connect</span>
              </>
            }
            subtitle={contactInfo.subtext}
          />
        </div>

        {/* Centered Sleek Contact Card (Lakruwan & Naveen Madhawa Inspired) */}
        <div className="contact-centered-wrapper reveal-on-scroll delay-1">
          <div className="contact-card">
            {/* The Form */}
            <ContactForm recipientEmail={contactInfo.email} />

            {/* Direct Social & Email Quick Connect Bar */}
            <div className="contact-direct-channels">
              <span className="direct-channels-label">Or connect directly via</span>
              <div className="direct-channels-list">
                <a
                  href={contactInfo.linkedin || personalData.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="direct-channel-pill"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinIcon size={15} />
                  <span>LinkedIn</span>
                  <span className="pill-arrow">↗</span>
                </a>

                <a
                  href={contactInfo.github || personalData.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="direct-channel-pill"
                  aria-label="GitHub Profile"
                >
                  <GithubIcon size={15} />
                  <span>GitHub</span>
                  <span className="pill-arrow">↗</span>
                </a>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="direct-channel-pill email-pill"
                  title="Copy email to clipboard"
                  aria-label="Copy email address"
                >
                  {copied ? <CheckIcon size={14} /> : <MailIcon size={14} />}
                  <span>{copied ? 'Copied!' : 'Email'}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
