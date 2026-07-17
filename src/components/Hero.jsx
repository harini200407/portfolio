import { FaGithub, FaLinkedinIn, FaRegEnvelope, FaPhone, FaDownload, FaReact, FaBolt } from 'react-icons/fa6'
import profileImg from '../assets/mine-removebg-preview.png'

export default function Hero() {
  return (
    <section className="hero" id="home">
      {/* Background Ambient Glow Orbs & Dot Matrix Canvas */}
      <div className="hero-canvas-lights">
        <div className="hero-orb orb-primary"></div>
        <div className="hero-orb orb-secondary"></div>
        <div className="hero-grid-overlay"></div>
      </div>

      <div className="wrap">
        {/* Left Column: Bold Typography & Action Center */}
        <div className="hero-content">
          <div className="hero-status-pill">
            <span className="live-pulse-dot"></span>
            <span>Welcome to My Digital Studio</span>
          </div>

          <div className="eyebrow">Hello, I'm</div>
          <h1 className="hero-title">
            Harini <span className="hero-gradient-text"></span>
          </h1>
          <div className="role-tag">Full Stack Developer &amp; Application Engineer</div>

          <p className="desc">
           Building Scalable Web Applications with AI Integration

I develop modern, high-performance web applications using the MERN Stack, Java, Python, and SQL. With experience in AI-powered EdTech platforms, cloud deployment, and full-stack development, I enjoy creating solutions that deliver real business value.
          </p>

          <div className="hero-btns">
            <a className="btn primary glow-btn" href="/resume.pdf" download>
              <FaDownload className="btn-ic" /> Download Resume
            </a>
            <a className="btn ghost" href="#contact">
              <FaRegEnvelope className="btn-ic" /> Let's Connect
            </a>
          </div>

          <div className="hero-socials-wrap">
            <span className="socials-label">Follow My Work:</span>
            <div className="socials">
              <a className="social-ic" href="https://github.com/harinihr" target="_blank" rel="noreferrer" aria-label="GitHub"><FaGithub /></a>
              <a className="social-ic" href="https://linkedin.com/in/harini-b-ba5254320" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedinIn /></a>
              <a className="social-ic" href="mailto:hariniee0722@gmail.com" aria-label="Email"><FaRegEnvelope /></a>
              <a className="social-ic" href="tel:+917200167069" aria-label="Phone"><FaPhone /></a>
            </div>
          </div>
        </div>

        {/* Right Column: Monumental Portrait Stage (Bigger Image, Open 3D Portal, No Confining Box) */}
        <div className="hero-monument-stage">
          {/* Concentric Neon Portal Rings behind the portrait */}
          <div className="portal-ring portal-ring-outer"></div>
          <div className="portal-ring portal-ring-inner"></div>
          <div className="portal-pedestal-glow"></div>

          {/* Large Hero Portrait standing tall and unconfined */}
          <div className="monument-portrait-wrap">
            <img 
              src={profileImg} 
              alt="Harini B — Full Stack Developer & Application Engineer" 
              className="monument-img" 
            />
          </div>

          {/* Floating Glassmorphic Experience Cards */}
          <div className="monument-badge badge-top-left">
            <span className="live-dot-pulse"></span>
            <div className="badge-txt">
              <strong>1+ Year Experience</strong>
              <small>Production Ready</small>
            </div>
          </div>

          <div className="monument-badge badge-mid-right">
            <span className="badge-icon-cyan"><FaReact /></span>
            <div className="badge-txt">
              <strong>React 19 &amp; Node.js</strong>
              <small>Modern Web Stack</small>
            </div>
          </div>

          <div className="monument-badge badge-bottom-left">
            <span className="badge-icon-purple"><FaBolt /></span>
            <div className="badge-txt">
              <strong>AI Web Architect</strong>
              <small>Intelligent Apps</small>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
