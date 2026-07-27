import { FaStar, FaQuoteLeft, FaArrowRight, FaDownload, FaGithub, FaLinkedinIn, FaRegEnvelope } from 'react-icons/fa6'
import profileImg from '../assets/mine-removebg-preview.png'
import resumePdf from '../assets/Harini Resume  (2).pdf'

export default function Hero() {
  return (
    <section className="hero-redesigned" id="home">
      {/* Background Semicircle */}
      <div className="hero-semicircle" data-aos="zoom-in" data-aos-duration="1500"></div>

      <div className="hero-content-wrapper">
        
        {/* Giant Overlapping Typography */}
        <div className="hero-giant-text" data-aos="fade-down" data-aos-duration="1000">
          <h1 className="hero-title">
            I'm <span className="highlight-coral">Harini</span>,
          </h1>
          <p className="hero-mobile-tagline">
            End-to-End Application Development — Frontend • Backend • APIs • Database • Deployment
          </p>
          <h2 className="hero-subtitle">Full Stack Developer</h2>
        </div>

        {/* Center Stage: Profile Image & Glass Pill */}
        <div className="hero-main-stage" data-aos="fade-up" data-aos-duration="1200">
          <img src={profileImg} alt="Harini B" className="hero-portrait-img" />
          
          {/* Glass Capsule Buttons */}
          <div className="hero-glass-pill">
            <a href="#projects" className="pill-btn primary">
              Projects <FaArrowRight />
            </a>
            <a href={resumePdf} download="Harini_Resume.pdf" className="pill-btn secondary">
              Hire me
            </a>
          </div>
        </div>

        {/* Floating Left: Intro Quote */}
        <div className="hero-floating-left" data-aos="fade-right" data-aos-duration="1400" data-aos-delay="300">
          {/* Social Icons moved here above the quote */}
          <div className="hero-social-icons">
            <a href="https://github.com/harini" target="_blank" rel="noreferrer"><FaGithub /></a>
            <a href="https://linkedin.com/in/harini" target="_blank" rel="noreferrer"><FaLinkedinIn /></a>
            <a href="mailto:harini@example.com"><FaRegEnvelope /></a>
          </div>

          <FaQuoteLeft className="quote-icon" />
          <p>
            <strong>Design. Develop. Deploy.</strong> <br />
            Building end-to-end web applications <br />
            with performance, scalability, and <br />
            innovation at the core.
          </p>
        </div>

        {/* Floating Right: Experience Stats */}
        <div className="hero-floating-right" data-aos="fade-left" data-aos-duration="1400" data-aos-delay="300">
          <div className="stars-row">
            <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
          </div>
          <div className="exp-number">1+ Years</div>
          <div className="exp-label">Experience</div>
        </div>

      </div>
    </section>
  )
}
