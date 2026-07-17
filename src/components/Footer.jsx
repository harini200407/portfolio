import { FaGithub, FaLinkedinIn, FaRegEnvelope, FaPhone, FaArrowUp, FaPaperPlane } from 'react-icons/fa'
import { FaLocationDot, FaHeart } from 'react-icons/fa6'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="enhanced-footer">
      {/* Top CTA Banner */}
      <div className="wrap">
        <div className="footer-cta-card">
          <div className="cta-text">
            <div className="sec-eyebrow" style={{ color: '#F8FAFC' }}>Ready To Collaborate?</div>
            <h3>Let's Build Something <span>Exceptional</span> Together</h3>
            <p>Whether you need an AI-powered web platform, scalable backend systems, or a sleek frontend, I'm ready to bring your vision to life.</p>
          </div>
          <div className="cta-actions">
            <a href="#contact" className="btn primary cta-btn">
              Get In Touch <FaPaperPlane />
            </a>
            <a href="mailto:hariniee0722@gmail.com" className="btn ghost cta-btn-secondary">
              <FaRegEnvelope /> Email Me Directly
            </a>
          </div>
        </div>

        {/* Main Columns */}
        <div className="footer-main-grid">
          <div className="footer-col brand-col">
            <a href="#" className="logo footer-logo">
              Harini<span>.</span>
            </a>
            <p className="footer-bio">
              Application Engineer &amp; Full Stack Developer specialized in React 19, Node.js, MERN stack, and AI-driven integrations. Passionate about translating complex requirements into clean, production-grade software.
            </p>
            <div className="footer-location">
              <FaLocationDot /> Based in Chennai, India · Open for Remote &amp; On-site Roles
            </div>
          </div>

          <div className="footer-col">
            <h4>Quick Navigation</h4>
            <ul className="footer-links">
              <li><a href="#about">About Me</a></li>
              <li><a href="#skills">Tech Stack &amp; Skills</a></li>
              <li><a href="#projects">Featured Projects</a></li>
              <li><a href="#certifications">Certifications</a></li>
              <li><a href="#contact">Contact &amp; Hire</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Core Expertise</h4>
            <ul className="footer-links">
              <li><span>AI-Powered Web Platforms</span></li>
              <li><span>Automated Management Systems</span></li>
              <li><span>MERN &amp; REST API Development</span></li>
              <li><span>MSSQL &amp; MongoDB Data Ops</span></li>
              <li><span>Responsive UI/UX Engineering</span></li>
            </ul>
          </div>

          <div className="footer-col contact-col">
            <h4>Connect &amp; Reach Out</h4>
            <div className="footer-contact-item">
              <FaRegEnvelope /> <span>hariniee0722@gmail.com</span>
            </div>
            <div className="footer-contact-item">
              <FaPhone /> <span>+91 72001 67069</span>
            </div>
            <div className="footer-socials">
              <a href="https://github.com/harinihr" target="_blank" rel="noreferrer" aria-label="GitHub"><FaGithub /></a>
              <a href="https://linkedin.com/in/harini-b-ba5254320" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedinIn /></a>
              <a href="mailto:hariniee0722@gmail.com" aria-label="Email"><FaRegEnvelope /></a>
              <a href="tel:+917200167069" aria-label="Phone"><FaPhone /></a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="footer-bottom">
          <div className="copy-text">
            © {new Date().getFullYear()} Harini B. All rights reserved.
          </div>
          <button className="back-to-top-btn" onClick={scrollToTop} aria-label="Scroll to top">
            <span>Back to Top</span>
            <FaArrowUp />
          </button>
        </div>
      </div>
    </footer>
  )
}
