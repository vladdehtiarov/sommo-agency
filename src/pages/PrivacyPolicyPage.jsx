import { motion } from 'framer-motion';
import './LegalPage.css';

export const PrivacyPolicyPage = () => {
  return (
    <div className="legal-page">
      <div className="legal-bg">
        <div className="legal-gradient" />
      </div>

      <div className="container">
        <motion.div
          className="legal-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="section-eyebrow">Legal</span>
          <h1 className="legal-title">Privacy Policy</h1>
          <p className="legal-updated">Last updated: December 30, 2024</p>

          <div className="legal-body">
            <section>
              <h2>1. Introduction</h2>
              <p>
                Sommo Agency ("we," "our," or "us") respects your privacy and is committed to protecting 
                your personal data. This privacy policy explains how we collect, use, disclose, and 
                safeguard your information when you visit our website or use our services.
              </p>
            </section>

            <section>
              <h2>2. Information We Collect</h2>
              <h3>Personal Information</h3>
              <p>We may collect the following types of personal information:</p>
              <ul>
                <li>Name and contact information (email address, phone number)</li>
                <li>Company name and job title</li>
                <li>Project details and requirements you share with us</li>
                <li>Payment and billing information</li>
                <li>Communication preferences</li>
              </ul>

              <h3>Automatically Collected Information</h3>
              <p>When you visit our website, we may automatically collect:</p>
              <ul>
                <li>IP address and device information</li>
                <li>Browser type and version</li>
                <li>Pages visited and time spent on our website</li>
                <li>Referring website or source</li>
              </ul>
            </section>

            <section>
              <h2>3. How We Use Your Information</h2>
              <p>We use the collected information to:</p>
              <ul>
                <li>Provide, maintain, and improve our services</li>
                <li>Respond to your inquiries and project requests</li>
                <li>Send you relevant updates and marketing communications (with your consent)</li>
                <li>Process payments and manage your account</li>
                <li>Analyze website usage and improve user experience</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2>4. Information Sharing</h2>
              <p>
                We do not sell, trade, or rent your personal information to third parties. 
                We may share your information only in the following circumstances:
              </p>
              <ul>
                <li><strong>Service Providers:</strong> With trusted third-party vendors who assist us in operating our business</li>
                <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
                <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
                <li><strong>With Your Consent:</strong> When you explicitly agree to the sharing</li>
              </ul>
            </section>

            <section>
              <h2>5. Data Security</h2>
              <p>
                We implement appropriate technical and organizational measures to protect your personal 
                data against unauthorized access, alteration, disclosure, or destruction. However, no 
                method of transmission over the Internet is 100% secure, and we cannot guarantee 
                absolute security.
              </p>
            </section>

            <section>
              <h2>6. Data Retention</h2>
              <p>
                We retain your personal information only for as long as necessary to fulfill the purposes 
                outlined in this privacy policy, unless a longer retention period is required or permitted 
                by law.
              </p>
            </section>

            <section>
              <h2>7. Your Rights</h2>
              <p>Depending on your location, you may have the following rights:</p>
              <ul>
                <li>Access your personal data</li>
                <li>Correct inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Object to or restrict processing</li>
                <li>Data portability</li>
                <li>Withdraw consent at any time</li>
              </ul>
              <p>
                To exercise these rights, please contact us at{' '}
                <a href="mailto:hello@sommo-agency.com">hello@sommo-agency.com</a>.
              </p>
            </section>

            <section>
              <h2>8. Cookies</h2>
              <p>
                Our website may use cookies and similar tracking technologies to enhance your browsing 
                experience. You can control cookie preferences through your browser settings.
              </p>
            </section>

            <section>
              <h2>9. Third-Party Links</h2>
              <p>
                Our website may contain links to third-party websites. We are not responsible for the 
                privacy practices of these external sites and encourage you to review their privacy policies.
              </p>
            </section>

            <section>
              <h2>10. Children's Privacy</h2>
              <p>
                Our services are not directed to individuals under the age of 18. We do not knowingly 
                collect personal information from children.
              </p>
            </section>

            <section>
              <h2>11. Changes to This Policy</h2>
              <p>
                We may update this privacy policy from time to time. We will notify you of any changes 
                by posting the new policy on this page and updating the "Last updated" date.
              </p>
            </section>

            <section>
              <h2>12. Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us:
              </p>
              <ul>
                <li>Email: <a href="mailto:hello@sommo-agency.com">hello@sommo-agency.com</a></li>
                <li>LinkedIn: <a href="https://www.linkedin.com/company/sommo-agency/" target="_blank" rel="noopener noreferrer">Sommo Agency</a></li>
              </ul>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

