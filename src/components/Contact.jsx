import { useRef, useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion, useInView, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';
import './Contact.css';

// EmailJS Configuration from environment variables
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

// Custom Toast Component
const Toast = ({ message, type, onClose }) => {
  return (
    <motion.div
      className={`toast toast-${type}`}
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 20, scale: 0.9 }}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="toast-icon">
        {type === 'success' ? (
          <svg viewBox="0 0 24 24" fill="none">
            <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
            <path d="M12 8V12M12 16H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        )}
      </div>
      <div className="toast-content">
        <span className="toast-title">{type === 'success' ? 'Success!' : 'Oops!'}</span>
        <span className="toast-message">{message}</span>
      </div>
      <button className="toast-close" onClick={onClose} aria-label="Close">
        <svg viewBox="0 0 24 24" fill="none">
          <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      </button>
    </motion.div>
  );
};

export const Contact = () => {
  const sectionRef = useRef(null);
  const formRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    budget: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState(null);

  const showToast = (message, type) => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 5000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Check if EmailJS is configured
    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY ||
        EMAILJS_SERVICE_ID === 'YOUR_SERVICE_ID' ||
        EMAILJS_SERVICE_ID === 'your_service_id') {
      console.warn('EmailJS not configured. Please set environment variables.');
      // Simulate success for demo/development
      await new Promise(resolve => setTimeout(resolve, 1000));
      showToast("Thank you! We'll be in touch within 24 hours.", 'success');
      setFormState({ name: '', email: '', budget: '', message: '' });
      setIsSubmitting(false);
      return;
    }

    try {
      // EmailJS send
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          name: formState.name,
          email: formState.email,
          title: `Project Inquiry - Budget: ${formState.budget}`,
          budget: formState.budget,
          message: formState.message,
        },
        EMAILJS_PUBLIC_KEY
      );

      showToast("Thank you! We'll be in touch within 24 hours.", 'success');
      setFormState({ name: '', email: '', budget: '', message: '' });
    } catch (error) {
      console.error('EmailJS Error:', error);
      showToast('Something went wrong. Please try again or email us directly at hello@sommo.io', 'error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const budgetOptions = [
    { value: '5k-20k', label: '$5K - $20K' },
    { value: '20k-50k', label: '$20K - $50K' },
    { value: '50k-100k', label: '$50K - $100K' },
    { value: '100k+', label: '$100K+' },
  ];

  return (
    <section ref={sectionRef} id="contact" className="contact">
      {/* Toast Notification */}
      <AnimatePresence>
        {toast && (
          <Toast
            message={toast.message}
            type={toast.type}
            onClose={() => setToast(null)}
          />
        )}
      </AnimatePresence>

      {/* Background decorations */}
      <div className="contact-bg">
        <div className="contact-gradient-orb orb-1" />
        <div className="contact-gradient-orb orb-2" />
        <div className="contact-grid-bg" />
      </div>

      <div className="container">
        <div className="contact-content">
          {/* Left side - Text */}
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="section-eyebrow">Let's Work Together</span>
            <h2 className="contact-headline">
              Ready to build
              <br />
              <span className="text-gradient">something amazing?</span>
            </h2>
            <p className="contact-description">
              Share your project details and we'll get back to you within 24 hours 
              with a realistic estimate and insights on how we can bring your 
              vision to life.
            </p>

            <div className="contact-details">
              <a href="mailto:hello@sommo.io" className="contact-link" data-cursor="Email">
                <span className="contact-link-icon">
                  <svg viewBox="0 0 24 24" fill="none">
                    <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M22 6L12 13L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                <span>hello@sommo.io</span>
              </a>

              <div className="contact-social">
                <a href="https://ua.linkedin.com/company/sommo-io" target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="LinkedIn" data-cursor="LinkedIn">
                  <svg viewBox="0 0 24 24" fill="none">
                    <path d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M6 9H2V21H6V9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="4" cy="4" r="2" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </a>
                <a href="https://dribbble.com/sommoteam" target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="Dribbble" data-cursor="Dribbble">
                  <svg viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                    <path d="M8.56 2.75C12.93 8.78 14.58 12.17 16.59 20.47M19.13 5.09C15.41 9.44 10.19 10.75 2.25 10.94M21.75 12.84C18.25 11.91 15.12 12.02 12.35 13.13C9.58 14.24 7.18 16.33 5.14 19.41" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
                <a href="https://www.youtube.com/@sommo_io" target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="YouTube" data-cursor="YouTube">
                  <svg viewBox="0 0 24 24" fill="none">
                    <path d="M22.54 6.42C22.4212 5.94541 22.1793 5.51057 21.8387 5.15941C21.498 4.80824 21.0708 4.55318 20.6 4.42C18.88 4 12 4 12 4C12 4 5.12 4 3.4 4.46C2.92925 4.59318 2.50198 4.84824 2.16135 5.19941C1.82072 5.55057 1.57879 5.98541 1.46 6.46C1.14522 8.20556 0.991243 9.97631 1.00001 11.75C0.988783 13.537 1.14277 15.3213 1.46 17.08C1.59098 17.5398 1.83831 17.9581 2.17814 18.2945C2.51798 18.6308 2.93884 18.8738 3.4 19C5.12 19.46 12 19.46 12 19.46C12 19.46 18.88 19.46 20.6 19C21.0708 18.8668 21.498 18.6118 21.8387 18.2606C22.1793 17.9094 22.4212 17.4746 22.54 17C22.8524 15.2676 23.0063 13.5103 23 11.75C23.0112 9.96295 22.8573 8.1787 22.54 6.42Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right side - Form */}
          <motion.div
            className="contact-form-wrapper"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <form ref={formRef} className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  placeholder="John Smith"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  placeholder="john@company.com"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="budget">Project Budget</label>
                <select
                  id="budget"
                  name="budget"
                  value={formState.budget}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>Select a range</option>
                  {budgetOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">Project Details</label>
                <textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project..."
                  rows={4}
                  required
                />
              </div>

              <button
                type="submit"
                className={`submit-btn ${isSubmitting ? 'submitting' : ''}`}
                disabled={isSubmitting}
                data-cursor="Send"
              >
                {isSubmitting ? (
                  <>
                    <span className="spinner" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <svg viewBox="0 0 24 24" fill="none">
                      <path d="M22 2L11 13M22 2L15 22L11 13M22 2L2 9L11 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
