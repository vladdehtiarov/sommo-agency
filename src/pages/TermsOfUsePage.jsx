import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';
import './LegalPage.css';

export const TermsOfUsePage = () => {
  return (
    <div className="legal-page">
      <SEO
        title="Terms of Use"
        description="Read Sommo Agency's Terms of Use. Understand the terms and conditions for using our no-code, low-code, and AI development services."
        keywords="terms of use, terms and conditions, service agreement, legal terms"
        url="/terms-of-use"
        noindex={false}
      />
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
          <h1 className="legal-title">Terms of Use</h1>
          <p className="legal-updated">Last updated: December 30, 2024</p>

          <div className="legal-body">
            <section>
              <h2>1. Acceptance of Terms</h2>
              <p>
                By accessing and using the Sommo Agency website and services, you accept and agree to be 
                bound by these Terms of Use. If you do not agree to these terms, please do not use our 
                services.
              </p>
            </section>

            <section>
              <h2>2. Services Description</h2>
              <p>
                Sommo Agency provides no-code, low-code, and AI development services, including but not 
                limited to:
              </p>
              <ul>
                <li>Web and mobile application development</li>
                <li>No-code solutions using platforms like Bubble, WeWeb, FlutterFlow</li>
                <li>Low-code development and customization</li>
                <li>AI integration and automation</li>
                <li>Workflow automation using Zapier, Make, and custom APIs</li>
                <li>Consulting and technical advisory services</li>
              </ul>
            </section>

            <section>
              <h2>3. User Responsibilities</h2>
              <p>When using our services, you agree to:</p>
              <ul>
                <li>Provide accurate and complete information</li>
                <li>Maintain the confidentiality of any account credentials</li>
                <li>Use our services only for lawful purposes</li>
                <li>Not infringe upon the intellectual property rights of others</li>
                <li>Not transmit any harmful, offensive, or illegal content</li>
                <li>Comply with all applicable laws and regulations</li>
              </ul>
            </section>

            <section>
              <h2>4. Intellectual Property</h2>
              <h3>Our Content</h3>
              <p>
                All content on this website, including text, graphics, logos, images, and software, is the 
                property of Sommo Agency or its licensors and is protected by intellectual property laws.
              </p>

              <h3>Client Work</h3>
              <p>
                Unless otherwise specified in a separate agreement, upon full payment, clients receive 
                ownership rights to the custom work developed specifically for their project. Third-party 
                tools, platforms, and pre-existing code remain subject to their respective licenses.
              </p>
            </section>

            <section>
              <h2>5. Project Engagement</h2>
              <p>
                All project engagements are subject to a separate Service Agreement that outlines:
              </p>
              <ul>
                <li>Scope of work and deliverables</li>
                <li>Timeline and milestones</li>
                <li>Pricing and payment terms</li>
                <li>Revision policies</li>
                <li>Ownership and licensing terms</li>
              </ul>
              <p>
                The Service Agreement takes precedence over these Terms of Use in case of any conflict.
              </p>
            </section>

            <section>
              <h2>6. Payment Terms</h2>
              <p>
                Payment terms are specified in individual Service Agreements. Generally:
              </p>
              <ul>
                <li>A deposit may be required before project commencement</li>
                <li>Payments are due according to the agreed milestone schedule</li>
                <li>Late payments may result in project suspension</li>
                <li>All fees are non-refundable unless otherwise stated</li>
              </ul>
            </section>

            <section>
              <h2>7. Confidentiality</h2>
              <p>
                We treat all client information as confidential. We will not disclose your business 
                information, project details, or any proprietary data to third parties without your 
                consent, except as required by law.
              </p>
            </section>

            <section>
              <h2>8. Limitation of Liability</h2>
              <p>
                To the maximum extent permitted by law, Sommo Agency shall not be liable for:
              </p>
              <ul>
                <li>Any indirect, incidental, special, or consequential damages</li>
                <li>Loss of profits, data, or business opportunities</li>
                <li>Damages arising from third-party platforms or services</li>
                <li>Issues resulting from client-provided content or specifications</li>
              </ul>
              <p>
                Our total liability shall not exceed the amount paid for the specific service giving 
                rise to the claim.
              </p>
            </section>

            <section>
              <h2>9. Warranty Disclaimer</h2>
              <p>
                Our services are provided "as is" without warranties of any kind, either express or 
                implied. We do not guarantee that our services will be uninterrupted, error-free, or 
                meet your specific requirements beyond the agreed scope.
              </p>
              <p>
                For project-specific warranties, refer to your Service Agreement.
              </p>
            </section>

            <section>
              <h2>10. Third-Party Platforms</h2>
              <p>
                Our services often utilize third-party platforms (Bubble, Zapier, Make, etc.). 
                Your use of these platforms is subject to their respective terms of service. We are 
                not responsible for changes, outages, or limitations imposed by these platforms.
              </p>
            </section>

            <section>
              <h2>11. Termination</h2>
              <p>
                We reserve the right to terminate or suspend access to our services at our discretion, 
                without notice, for conduct that we believe violates these Terms of Use or is harmful 
                to other users or our business.
              </p>
            </section>

            <section>
              <h2>12. Governing Law</h2>
              <p>
                These Terms of Use shall be governed by and construed in accordance with the laws of 
                Ukraine. Any disputes arising from these terms shall be resolved in the courts of Ukraine.
              </p>
            </section>

            <section>
              <h2>13. Changes to Terms</h2>
              <p>
                We reserve the right to modify these Terms of Use at any time. Changes will be effective 
                immediately upon posting to this page. Your continued use of our services after any 
                changes constitutes acceptance of the new terms.
              </p>
            </section>

            <section>
              <h2>14. Contact Information</h2>
              <p>
                For questions about these Terms of Use, please contact us:
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

