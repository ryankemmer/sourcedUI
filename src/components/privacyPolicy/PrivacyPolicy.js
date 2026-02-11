import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './PrivacyPolicy.css';

function PrivacyPolicy() {
  useEffect(() => {
    document.body.style.backgroundColor = '#0a0a0a';
    document.body.style.color = '#f5f0eb';
    return () => {
      document.body.style.backgroundColor = '';
      document.body.style.color = '';
    };
  }, []);

  return (
    <div className="privacy-page">
      {/* Navigation */}
      <nav className="pp-nav">
        <div className="pp-nav-inner">
          <Link to="/" className="pp-nav-logo">sourced</Link>
          <Link to="/" className="pp-nav-back">Back to Home</Link>
        </div>
      </nav>

      <main className="privacy">
        <header className="privacy-hero">
          <span className="pp-eyebrow">Legal</span>
          <h1 className="privacy-title">Privacy Policy</h1>
          <p className="privacy-meta">
            <span>Last Updated: October 25, 2025</span>
            <span className="meta-sep">&bull;</span>
            <span>Effective Date: October 25, 2025</span>
          </p>
        </header>

        <section id="intro" className="policy-card">
          <p>
            Thank you for using SourcedFinds.com (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;). This Privacy Policy explains how we collect,
            use, and protect your information when you use our application, which connects to your Pinterest
            account to generate a personalized feed of Poshmark listings (&ldquo;Service&rdquo;).
          </p>
        </section>

        <section id="info-we-collect" className="policy-card">
          <h2>1. Information We Collect</h2>

          <h3>a. Information You Provide to Us</h3>
          <ul>
            <li>
              <strong>Account Information:</strong> When you sign up or log in, we may collect your name, email
              address, and any other information you provide during registration.
            </li>
            <li>
              <strong>Pinterest Authorization:</strong> When you connect your Pinterest account, we receive access
              tokens and permissions that allow us to view your public and private boards, pins, and related
              metadata (e.g., board titles, pin descriptions, and image URLs).
            </li>
            <li>
              <strong>User Preferences:</strong> We may collect data about your selected boards, search filters, and
              any customizations you make in the app.
            </li>
          </ul>

          <h3>b. Information Collected Automatically</h3>
          <ul>
            <li>
              <strong>Usage Data:</strong> We automatically collect information about how you use the app (e.g.,
              session duration, clicks, pages viewed, interactions).
            </li>
            <li>
              <strong>Device and Technical Data:</strong> We may collect your device type, operating system, IP
              address, browser type, and app version for analytics and performance optimization.
            </li>
          </ul>

          <h3>c. Third-Party Data</h3>
          <p>
            We may retrieve product data, listing details, and images from Poshmark&rsquo;s public APIs or listings.
            We do not collect or store your Poshmark credentials.
          </p>
        </section>

        <section id="how-we-use" className="policy-card">
          <h2>2. How We Use Your Information</h2>
          <ul className="dash-list">
            <li>Generate a personalized feed of listings based on your Pinterest content.</li>
            <li>Improve and customize your app experience.</li>
            <li>Analyze app performance and user engagement.</li>
            <li>Communicate with you (e.g., updates, support, or important notices).</li>
            <li>Comply with legal obligations or enforce our Terms of Service.</li>
          </ul>
        </section>

        <section id="sharing" className="policy-card">
          <h2>3. Data Sharing and Disclosure</h2>
          <p>We do not sell your personal data.</p>
          <p>We may share limited data with:</p>
          <ul>
            <li>
              <strong>Service Providers:</strong> Trusted third parties that help operate, maintain, or improve our
              Service (e.g., analytics providers, cloud storage).
            </li>
            <li>
              <strong>Legal Authorities:</strong> If required by law or to protect rights, property, or safety.
            </li>
          </ul>
          <p>We may also share anonymized or aggregated data that does not identify you personally.</p>
        </section>

        <section id="third-party" className="policy-card">
          <h2>4. Third-Party Services</h2>
          <ul className="dash-list">
            <li>Our app interacts with third-party platforms like Pinterest and Poshmark.</li>
            <li>Your use of these platforms is subject to their respective privacy policies and terms.</li>
            <li>We only access Pinterest data as permitted by Pinterest&rsquo;s API and OAuth authorization.</li>
            <li>We do not control or store data collected by Pinterest or Poshmark directly.</li>
          </ul>
        </section>

        <section id="retention" className="policy-card">
          <h2>5. Data Retention</h2>
          <p>
            We retain your personal information only for as long as necessary to provide the Service, comply with
            legal obligations, resolve disputes, or enforce agreements. You may request deletion of your data at
            any time (see Section 8).
          </p>
        </section>

        <section id="security" className="policy-card">
          <h2>6. Data Security</h2>
          <p>
            We implement reasonable administrative, technical, and physical safeguards to protect your data.
            However, no online service can guarantee absolute security.
          </p>
        </section>

        <section id="children" className="policy-card">
          <h2>7. Children&rsquo;s Privacy</h2>
          <p>
            Our Service is not intended for individuals under 13 years of age (or the age required by local law).
            We do not knowingly collect data from children.
          </p>
        </section>

        <section id="rights" className="policy-card">
          <h2>8. Your Rights and Choices</h2>
          <p>Depending on your location, you may have rights to:</p>
          <ul>
            <li>Access, correct, or delete your personal information.</li>
            <li>Withdraw consent for data processing.</li>
            <li>Export your data in a portable format.</li>
          </ul>
          <p>
            To exercise these rights, contact us at: <strong>ryankemmer77@gmail.com</strong>
          </p>
        </section>

        <section id="intl" className="policy-card">
          <h2>9. International Data Transfers</h2>
          <p>
            Your information may be transferred and processed outside your country of residence, where privacy
            laws may differ. We take steps to ensure appropriate protections are in place.
          </p>
        </section>

        <section id="changes" className="policy-card">
          <h2>10. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy periodically. The latest version will always be available within
            the app or on our website. Continued use of the Service after changes means you accept the updated
            policy.
          </p>
        </section>

        <section id="contact" className="policy-card">
          <h2>11. Contact Us</h2>
          <p>If you have questions or concerns about this Privacy Policy or our data practices, please contact us at:</p>
          <ul className="contact-list">
            <li><strong>ryankemmer77@gmail.com</strong></li>
            <li><strong>SourcedFinds.com</strong></li>
          </ul>
        </section>
      </main>

      <footer className="pp-footer">
        <div className="pp-footer-inner">
          <span className="pp-footer-brand">sourced</span>
          <Link to="/" className="pp-footer-link">Back to Home</Link>
        </div>
      </footer>
    </div>
  );
}

export default PrivacyPolicy;
