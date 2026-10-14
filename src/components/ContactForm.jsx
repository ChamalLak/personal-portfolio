import React, { useState } from 'react';
import { MailIcon, CheckIcon } from './Icons';
import Button from './Button';
import './ContactForm.css';

export default function ContactForm({ recipientEmail }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Please provide your name.';
    if (!formData.email.trim()) {
      errs.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email address.';
    }
    if (!formData.subject.trim()) errs.subject = 'Please provide a subject.';
    if (!formData.message.trim()) {
      errs.message = 'Please provide your message.';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Message must be at least 10 characters long.';
    }
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);

    // Simulate reliable client-side submission & prepare mailto link
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setFormData({ name: '', email: '', subject: '', message: '' });
    setErrors({});
    setSubmitted(false);
  };

  const mailtoUrl = `mailto:${recipientEmail}?subject=${encodeURIComponent(
    formData.subject || 'Portfolio Inquiry'
  )}&body=${encodeURIComponent(
    `From: ${formData.name} (${formData.email})\n\n${formData.message}`
  )}`;

  return (
    <div className="contact-form-container glass-panel">
      {submitted ? (
        <div className="contact-success-state" role="status" aria-live="polite">
          <div className="success-icon-wrap">
            <CheckIcon size={32} />
          </div>
          <h3 className="success-title">Message Prepared!</h3>
          <p className="success-desc">
            Thank you, <strong>{formData.name}</strong>. Because this is a static client portfolio, you can also launch your local email client directly with this message prefilled.
          </p>
          <div className="success-actions">
            <Button
              href={mailtoUrl}
              variant="primary"
              size="md"
              icon={<MailIcon size={16} />}
            >
              Open in Email App
            </Button>
            <Button
              variant="outline"
              size="md"
              onClick={handleReset}
            >
              Send Another Note
            </Button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="contact-form" noValidate>
          <div className="form-row">
            {/* Name Field */}
            <div className="form-group">
              <label htmlFor="contact-name" className="form-label">
                Your Name <span className="required-star">*</span>
              </label>
              <input
                id="contact-name"
                name="name"
                type="text"
                autoComplete="name"
                value={formData.name}
                onChange={handleChange}
                className={`form-input ${errors.name ? 'input-error' : ''}`}
                placeholder="e.g. Alex Morgan"
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? 'name-error' : undefined}
                required
              />
              {errors.name && (
                <span id="name-error" className="error-message">
                  {errors.name}
                </span>
              )}
            </div>

            {/* Email Field */}
            <div className="form-group">
              <label htmlFor="contact-email" className="form-label">
                Your Email <span className="required-star">*</span>
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                autoComplete="email"
                value={formData.email}
                onChange={handleChange}
                className={`form-input ${errors.email ? 'input-error' : ''}`}
                placeholder="e.g. alex@company.com"
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? 'email-error' : undefined}
                required
              />
              {errors.email && (
                <span id="email-error" className="error-message">
                  {errors.email}
                </span>
              )}
            </div>
          </div>

          {/* Subject Field */}
          <div className="form-group">
            <label htmlFor="contact-subject" className="form-label">
              Subject <span className="required-star">*</span>
            </label>
            <input
              id="contact-subject"
              name="subject"
              type="text"
              value={formData.subject}
              onChange={handleChange}
              className={`form-input ${errors.subject ? 'input-error' : ''}`}
              placeholder="e.g. Internship Opportunity / QA Inquiry"
              aria-invalid={!!errors.subject}
              aria-describedby={errors.subject ? 'subject-error' : undefined}
              required
            />
            {errors.subject && (
              <span id="subject-error" className="error-message">
                {errors.subject}
              </span>
            )}
          </div>

          {/* Message Field */}
          <div className="form-group">
            <label htmlFor="contact-message" className="form-label">
              Message <span className="required-star">*</span>
            </label>
            <textarea
              id="contact-message"
              name="message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              className={`form-textarea ${errors.message ? 'input-error' : ''}`}
              placeholder="Tell me about your team, role expectations, or how we might work together..."
              aria-invalid={!!errors.message}
              aria-describedby={errors.message ? 'message-error' : undefined}
              required
            ></textarea>
            {errors.message && (
              <span id="message-error" className="error-message">
                {errors.message}
              </span>
            )}
          </div>

          <div className="form-submit-row">
            <Button
              type="submit"
              variant="primary"
              size="lg"
              disabled={isSubmitting}
              icon={<MailIcon size={18} />}
            >
              {isSubmitting ? 'Processing...' : 'Send Message'}
            </Button>
            <span className="form-note">
              Direct inquiries can also be sent via email or LinkedIn.
            </span>
          </div>
        </form>
      )}
    </div>
  );
}
