import React, { useState } from 'react';
import { personalData } from '../data/portfolioData';
import Button from '../components/Button';
import {
  ArrowRightIcon,
  MailIcon,
  GithubIcon,
  LinkedinIcon,
  DownloadIcon
} from '../components/Icons';
import './Hero.css';

export default function Hero() {
  const [photoSrc, setPhotoSrc] = useState(personalData.avatarImage);

  // File upload handler allowing user to preview their personal photo instantly
  const handlePhotoSelect = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setPhotoSrc(url);
    }
  };

  return (
    <section id="hero" className="hero-section" aria-label="Introduction">
      <div className="container hero-container">
        {/* Left Side: Clean Content & CTAs */}
        <div className="hero-content">
          {/* Top Status Badge */}
          <div className="hero-status-pill" role="status">
            <span className="status-indicator">
              <span className="status-ping"></span>
              <span className="status-dot"></span>
            </span>
            <span className="status-text">{personalData.status}</span>
          </div>

          {/* Small Greeting Text */}
          <span className="hero-greeting">Hello, I'm</span>

          {/* Main Name (Large Bold Title) */}
          <h1 className="hero-name">
            <span className="text-gradient">{personalData.name}</span>
          </h1>

          {/* Primary Subtitle / Role */}
          <p className="hero-subtitle">
            {personalData.headline}
          </p>

          {/* University Line */}
          <p className="hero-institution">
            {personalData.institutionInfo}
          </p>

          {/* Short Bio (Max 2 clean lines) */}
          <p className="hero-summary">
            {personalData.shortBio}
          </p>

          {/* Main Action Buttons */}
          <div className="hero-actions">
            <Button
              href="#projects"
              variant="primary"
              size="lg"
              icon={<ArrowRightIcon size={18} />}
              iconPosition="right"
            >
              Explore Projects
            </Button>

            <Button
              href={personalData.resumeUrl || "/cv.pdf"}
              download="Chamal_Lakshan_CV.pdf"
              variant="outline"
              size="lg"
              icon={<DownloadIcon size={18} />}
            >
              Download CV
            </Button>

            <Button
              href="#contact"
              variant="secondary"
              size="lg"
              icon={<MailIcon size={18} />}
            >
              Contact Me
            </Button>
          </div>

          {/* Minimal Social Links */}
          <div className="hero-social-links">
            <span className="social-label">Connect:</span>
            <a
              href={personalData.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-social-btn"
              aria-label="GitHub Profile"
            >
              <GithubIcon size={16} />
              <span>GitHub</span>
            </a>
            <a
              href={personalData.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-social-btn"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon size={16} />
              <span>LinkedIn</span>
            </a>
            <a
              href="#contact"
              className="hero-social-btn"
              aria-label="Contact Section"
            >
              <MailIcon size={16} />
              <span>Email</span>
            </a>
          </div>
        </div>

        {/* Right Side: Blue Brush Stroke & Photo Slot (No circle badge, No black box!) */}
        <div className="hero-visual">
          <div className="hero-art-stage">
            {/* Ambient Cyan/Indigo Glow */}
            <div className="hero-art-glow" aria-hidden="true"></div>

            {/* Subtle Vector Contour Lines in Upper Right */}
            <svg
              className="hero-contour-lines"
              viewBox="0 0 320 220"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path d="M 20,200 C 110,160 180,95 310,40" stroke="rgba(56, 189, 248, 0.4)" strokeWidth="1.5" />
              <path d="M 45,210 C 135,170 205,105 330,55" stroke="rgba(99, 102, 241, 0.35)" strokeWidth="1.5" />
              <path d="M 70,220 C 160,180 230,115 350,70" stroke="rgba(56, 189, 248, 0.3)" strokeWidth="1.5" />
              <path d="M 95,230 C 185,190 255,125 370,85" stroke="rgba(99, 102, 241, 0.25)" strokeWidth="1.5" />
            </svg>

            {/* 100% Transparent Blue Brush Stroke Graphic (NO black box!) */}
            <div className="hero-brush-backdrop" aria-hidden="true">
              <img
                src="/brush-stroke.png?v=4"
                alt=""
                className="hero-brush-img"
              />
            </div>

            {/* Photo Slot: Displays uploaded photo or clean interactive placeholder */}
            <div className="hero-photo-slot">
              {photoSrc ? (
                <div className="hero-photo-active">
                  <img
                    src={photoSrc}
                    alt={personalData.name}
                    className="hero-person-cutout"
                    onError={() => setPhotoSrc(null)}
                  />
                  {/* Floating quick change control */}
                  <label className="photo-change-btn" title="Change photo">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handlePhotoSelect}
                      className="hidden-file-input"
                    />
                    <span>Change Photo</span>
                  </label>
                </div>
              ) : (
                <label className="hero-photo-picker" title="Upload your portrait photo">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handlePhotoSelect}
                    className="hidden-file-input"
                  />
                  <div className="picker-card">
                    <span className="picker-monogram">{personalData.initials}</span>
                    <span className="picker-title">+ Add Your Photo</span>
                    <span className="picker-hint">PNG or JPG cutout</span>
                  </div>
                </label>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
