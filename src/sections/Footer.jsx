import React from 'react';
import { personalData, navLinks } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon, MailIcon, ArrowUpIcon } from '../components/Icons';
import './Footer.css';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="portfolio-footer" role="contentinfo">
      <div className="container footer-container">
        {/* Top Footer Row */}
        <div className="footer-top">
          <div className="footer-brand">
            <span className="footer-monogram">{personalData.initials}</span>
            <div className="footer-brand-text">
              <span className="footer-name">{personalData.name}</span>
              <span className="footer-role">{personalData.headline}</span>
            </div>
          </div>

          {/* Quick Nav Links */}
          <nav className="footer-nav" aria-label="Footer Navigation">
            <ul className="footer-nav-list">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a href={`#${link.id}`} className="footer-nav-link">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Back to top button */}
          <button
            type="button"
            className="footer-top-btn"
            onClick={scrollToTop}
            aria-label="Scroll back to top of page"
            title="Back to top"
          >
            <span>Top</span>
            <ArrowUpIcon size={16} />
          </button>
        </div>

        <div className="footer-divider"></div>

        {/* Bottom Footer Row */}
        <div className="footer-bottom">
          <p className="footer-copyright">
            © {currentYear} {personalData.name}. Built with React & Vite. Recruiter-friendly portfolio.
          </p>

          <div className="footer-social-links">
            <a
              href={personalData.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-link"
              aria-label="GitHub Profile"
            >
              <GithubIcon size={18} />
            </a>
            <a
              href={personalData.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-link"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon size={18} />
            </a>
            <a
              href="#contact"
              className="footer-social-link"
              aria-label="Contact Section"
            >
              <MailIcon size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
