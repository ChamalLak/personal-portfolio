import React from 'react';
import { personalData, navLinks } from '../data/portfolioData';
import {
  GithubIcon,
  LinkedinIcon,
  MailIcon,
  ArrowUpIcon
} from '../components/Icons';
import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="portfolio-footer" role="contentinfo">
      <div className="container footer-container">
        {/* Main Top Row: Brand (Logo + Name + Tag) | Statement | Navigation Links & Top */}
        <div className="footer-main-row">
          {/* Left: Brand using navigation signature logo with Chamal Lakshan and PORTFOLIO SITE badge */}
          <div className="footer-brand">
            <a href="#" className="footer-brand-link" aria-label="Chamal Lakshan Home">
              <img
                src="/logo-signature.png"
                alt={personalData.name}
                className="footer-brand-logo"
              />
            </a>
            <div className="footer-brand-info">
              <span className="footer-brand-name">{personalData.name}</span>
              <span className="footer-tag-badge">PORTFOLIO SITE</span>
            </div>
          </div>


          {/* Right: Quick Navigation Links + Back to Top Button */}
          <div className="footer-nav-group">
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

            <button
              type="button"
              className="footer-top-btn"
              onClick={scrollToTop}
              aria-label="Scroll back to top of page"
              title="Back to top"
            >
              <span>Top</span>
              <ArrowUpIcon size={14} />
            </button>
          </div>
        </div>

        {/* Bottom Sub-row: Copyright & Social Links */}
        <div className="footer-bottom-row">
          <p className="footer-copyright">
            © {currentYear} {personalData.name}. All rights reserved.
          </p>

          {/* Social Icons on Bottom Row */}
          <div className="footer-social-group">
            <a
              href={personalData.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-btn"
              aria-label="GitHub Profile"
              title="GitHub"
            >
              <GithubIcon size={17} />
            </a>
            <a
              href={personalData.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-btn"
              aria-label="LinkedIn Profile"
              title="LinkedIn"
            >
              <LinkedinIcon size={17} />
            </a>
            <a
              href="#contact"
              className="footer-social-btn"
              aria-label="Contact Section"
              title="Send Email / Message"
            >
              <MailIcon size={17} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
