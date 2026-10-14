import React, { useState } from 'react';
import SectionHeader from '../components/SectionHeader';
import ContactForm from '../components/ContactForm';
import { contactInfo, personalData } from '../data/portfolioData';
import { 
  MailIcon, 
  GithubIcon, 
  LinkedinIcon, 
  MapPinIcon, 
  CopyIcon, 
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
      <div className="container">
        <SectionHeader
          badge="GET IN TOUCH"
          title="Let's Discuss Opportunities & Projects"
          subtitle={contactInfo.subtext}
        />

        <div className="contact-layout-grid">
          {/* Left Column: Direct Contact Info & Channels */}
          <div className="contact-info-column">
            <div className="contact-info-card glass-panel">
              <h3 className="contact-info-title">Contact Channels</h3>
              <p className="contact-info-desc">
                Currently welcoming internship and entry-level discussions across Software Engineering and Quality Assurance.
              </p>

              <div className="contact-channels-list">
                {/* Email Item */}
                <div className="channel-item">
                  <div className="channel-icon-box">
                    <MailIcon size={20} />
                  </div>
                  <div className="channel-content">
                    <span className="channel-label">Email Address</span>
                    <span className="channel-value">{contactInfo.emailDisplay}</span>
                  </div>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="channel-copy-btn"
                    title="Copy placeholder email to clipboard"
                    aria-label="Copy email address"
                  >
                    {copied ? <CheckIcon size={14} /> : <CopyIcon size={14} />}
                    <span>{copied ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>

                {/* LinkedIn Item */}
                <a
                  href={contactInfo.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="channel-item channel-link-item"
                >
                  <div className="channel-icon-box">
                    <LinkedinIcon size={20} />
                  </div>
                  <div className="channel-content">
                    <span className="channel-label">LinkedIn</span>
                    <span className="channel-value">Chamal Lakshan [Placeholder]</span>
                  </div>
                  <span className="channel-link-arrow">↗</span>
                </a>

                {/* GitHub Item */}
                <a
                  href={contactInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="channel-item channel-link-item"
                >
                  <div className="channel-icon-box">
                    <GithubIcon size={20} />
                  </div>
                  <div className="channel-content">
                    <span className="channel-label">GitHub</span>
                    <span className="channel-value">github.com/ChamalLak</span>
                  </div>
                  <span className="channel-link-arrow">↗</span>
                </a>

                {/* Location Item */}
                <div className="channel-item">
                  <div className="channel-icon-box">
                    <MapPinIcon size={20} />
                  </div>
                  <div className="channel-content">
                    <span className="channel-label">Location & University</span>
                    <span className="channel-value">{contactInfo.university}, {personalData.location}</span>
                  </div>
                </div>
              </div>

              {/* Status Note */}
              <div className="contact-availability-box">
                <span className="availability-dot"></span>
                <span>Ready for technical interviews and screening assessments.</span>
              </div>
            </div>
          </div>

          {/* Right Column: Accessible Contact Form */}
          <div className="contact-form-column">
            <ContactForm recipientEmail={contactInfo.email} />
          </div>
        </div>
      </div>
    </section>
  );
}
