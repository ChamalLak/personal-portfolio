import React, { useState, useEffect } from 'react';
import { navLinks, personalData } from '../data/portfolioData';
import ThemeToggle from './ThemeToggle';
import { MenuIcon, CloseIcon, DownloadIcon } from './Icons';
import Button from './Button';
import './Navbar.css';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [scrollProgress, setScrollProgress] = useState(0);

  // Handle sticky navbar background and scroll progress on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Calculate scroll progress percentage
      const totalScrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScrollHeight > 0) {
        setScrollProgress((window.scrollY / totalScrollHeight) * 100);
      }

      // Section spy to highlight active link
      const sections = navLinks.map(link => document.getElementById(link.id));
      const scrollPos = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sec = sections[i];
        if (sec && sec.offsetTop <= scrollPos) {
          setActiveSection(navLinks[i].id);
          return;
        }
      }
      if (window.scrollY < 200) {
        setActiveSection('');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on Esc key or resize
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    const handleResize = () => {
      if (window.innerWidth > 768 && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('resize', handleResize);
    };
  }, [mobileMenuOpen]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header className={`navbar-header ${isScrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container navbar-container">
        {/* Signature Brand Logo */}
        <a href="#" className="navbar-brand" aria-label="Chamal Lakshan Home">
          <img
            src="/logo-signature.png"
            alt={personalData.name}
            className="navbar-brand-logo"
          />
        </a>

        {/* Desktop Navigation Links */}
        <nav className="navbar-nav desktop-nav" aria-label="Main Navigation">
          <ul className="nav-list">
            {navLinks.map((link) => (
              <li key={link.id} className="nav-item">
                <a
                  href={`#${link.id}`}
                  className={`nav-link ${activeSection === link.id ? 'nav-link-active' : ''}`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right Actions: Theme Toggle & Quick CTA */}
        <div className="navbar-actions desktop-actions">
          <ThemeToggle />
          <Button
            href={personalData.resumeUrl || "/cv.pdf"}
            download="Chamal_Lakshan_CV.pdf"
            variant="ghost"
            size="sm"
            icon={<DownloadIcon size={15} />}
          >
            CV
          </Button>
          <Button
            href="#contact"
            variant="outline"
            size="sm"
          >
            Get in Touch
          </Button>
        </div>

        {/* Mobile Hamburger & Controls */}
        <div className="navbar-mobile-toggle">
          <ThemeToggle />
          <button
            type="button"
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          >
            {mobileMenuOpen ? <CloseIcon size={24} /> : <MenuIcon size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <div 
        className={`mobile-drawer ${mobileMenuOpen ? 'mobile-drawer-open' : ''}`}
        aria-hidden={!mobileMenuOpen}
      >
        <div className="mobile-drawer-backdrop" onClick={closeMenu}></div>
        <div className="mobile-drawer-content">
          <nav aria-label="Mobile Navigation">
            <ul className="mobile-nav-list">
              {navLinks.map((link) => (
                <li key={link.id} className="mobile-nav-item">
                  <a
                    href={`#${link.id}`}
                    className={`mobile-nav-link ${activeSection === link.id ? 'mobile-nav-link-active' : ''}`}
                    onClick={closeMenu}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="mobile-drawer-footer">
            <Button
              href={personalData.resumeUrl || "/cv.pdf"}
              download="Chamal_Lakshan_CV.pdf"
              variant="outline"
              size="md"
              icon={<DownloadIcon size={18} />}
              className="w-full"
              style={{ marginBottom: '10px' }}
            >
              Download CV
            </Button>
            <Button
              href="#contact"
              variant="primary"
              size="md"
              onClick={closeMenu}
              className="w-full"
            >
              Contact Chamal
            </Button>
          </div>
        </div>
      </div>

      {/* Sleek Cyan Top Progress Line */}
      <div className="navbar-scroll-progress-wrap" aria-hidden="true">
        <div 
          className="navbar-scroll-progress-bar" 
          style={{ width: `${scrollProgress}%` }} 
        />
      </div>
    </header>
  );
}
