import React, { useState } from 'react';
import { CheckIcon, SendIcon } from './Icons';
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
  const [submitError, setSubmitError] = useState(null);

  const FORMSPREE_ENDPOINT =
    import.meta.env.VITE_FORMSPREE_ENDPOINT || 'https://formspree.io/f/xgaojryj';

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
      errs.message = 'Please write your message.';
    } else if (formData.message.trim().length < 8) {
      errs.message = 'Message must be at least 8 characters long.';
    }
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
    if (submitError) {
      setSubmitError(null);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message
        })
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        const data = await response.json().catch(() => ({}));
        if (data.errors && data.errors.length > 0) {
          setSubmitError(data.errors.map((err) => err.message).join(', '));
        } else {
          setSubmitError('Failed to send message. Please try again or reach out directly via email.');
        }
      }
    } catch (err) {
      setSubmitError('Network error. Please check your connection or send an email directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setFormData({ name: '', email: '', subject: '', message: '' });
    setErrors({});
    setSubmitted(false);
    setSubmitError(null);
  };

  if (submitted) {
    return (
      <div className="contact-success-state" role="status" aria-live="polite">
        <div className="success-icon-wrap">
          <CheckIcon size={32} />
        </div>
        <h3 className="success-title">Message Sent Successfully!</h3>
        <p className="success-desc">
          Thank you, <strong>{formData.name}</strong>! Your message has been sent directly to Chamal's inbox. I'll get back to you as soon as possible.
        </p>
        <div className="success-actions">
          <button
            type="button"
            onClick={handleReset}
            className="success-btn-primary"
          >
            Send Another Message
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="contact-form" noValidate>
      {/* 2-Column Name & Email Row */}
      <div className="form-grid-2">
        <div className="form-group">
          <label htmlFor="contact-name" className="form-label">
            Name <span className="required-star">*</span>
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            autoComplete="name"
            value={formData.name}
            onChange={handleChange}
            className={`form-input ${errors.name ? 'input-error' : ''}`}
            placeholder="Your name"
            aria-invalid={!!errors.name}
            required
          />
          {errors.name && <span className="error-message">{errors.name}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="contact-email" className="form-label">
            Email <span className="required-star">*</span>
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            value={formData.email}
            onChange={handleChange}
            className={`form-input ${errors.email ? 'input-error' : ''}`}
            placeholder="Your email"
            aria-invalid={!!errors.email}
            required
          />
          {errors.email && <span className="error-message">{errors.email}</span>}
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
          required
        />
        {errors.subject && <span className="error-message">{errors.subject}</span>}
      </div>

      {/* Message Textarea */}
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
          placeholder="Write your message here..."
          aria-invalid={!!errors.message}
          required
        ></textarea>
        {errors.message && <span className="error-message">{errors.message}</span>}
      </div>

      {submitError && (
        <div className="contact-server-error" role="alert">
          <p>{submitError}</p>
          {recipientEmail && (
            <p className="error-fallback-link">
              Or email directly: <a href={`mailto:${recipientEmail}`}>{recipientEmail}</a>
            </p>
          )}
        </div>
      )}

      {/* Full-Width Send Message Button (Lakruwan & Naveen style) */}
      <button
        type="submit"
        className="contact-submit-btn"
        disabled={isSubmitting}
      >
        <span>{isSubmitting ? 'Sending Message...' : 'Send Message'}</span>
        <SendIcon size={18} />
      </button>
    </form>
  );
}
