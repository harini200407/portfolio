import { useState, useEffect } from 'react'
import { FaPaperPlane, FaBars, FaTimes, FaUser, FaCode, FaBriefcase, FaStar, FaAward, FaEnvelope } from 'react-icons/fa'
import logoImg from '../assets/logo.png'
import resumePdf from '../assets/Harini Resume  (2).pdf'

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', 'dark')
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="wrap nav-wrap">
          <a href="#home" className="logo" style={{ display: 'flex', alignItems: 'center' }}>
            <img src={logoImg} alt="Logo" style={{ height: '40px', width: 'auto' }} />
          </a>

          <div className="nav-center">
            <div className="navlinks">
              <a href="#about" className="nav-item"><FaUser className="nav-ic" /> About</a>
              <a href="#skills" className="nav-item"><FaCode className="nav-ic" /> Skills</a>
              <a href="#projects" className="nav-item"><FaBriefcase className="nav-ic" /> Projects</a>
              <a href="#why-work-with-me" className="nav-item"><FaStar className="nav-ic" /> Why Me</a>
              <a href="#certifications" className="nav-item"><FaAward className="nav-ic" /> Credentials</a>
              <a href="#contact" className="nav-item"><FaEnvelope className="nav-ic" /> Contact</a>
            </div>
          </div>

          <div className="nav-right">
            <div className="status-badge">
              <span className="pulse-dot"></span>
              <span>Available for hire</span>
            </div>

            <a className="btn primary desktop-resume-btn" href={resumePdf} download="Harini_Resume.pdf">
              <FaPaperPlane /> Resume
            </a>

            <button
              className="mobile-toggle"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle navigation menu"
            >
              {mobileOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      <div className={`mobile-overlay ${mobileOpen ? 'open' : ''}`} onClick={() => setMobileOpen(false)} />
      <div className={`mobile-drawer ${mobileOpen ? 'open' : ''}`}>
        <div className="drawer-header">
          <div className="logo" style={{ display: 'flex', alignItems: 'center' }}>
            <img src={logoImg} alt="Logo" style={{ height: '40px', width: 'auto' }} />
          </div>
          <button className="mobile-toggle" onClick={() => setMobileOpen(false)}>
            <FaTimes />
          </button>
        </div>
        
        <div className="drawer-links">
          <a href="#about" onClick={() => setMobileOpen(false)}><FaUser className="nav-ic" /> About Me</a>
          <a href="#skills" onClick={() => setMobileOpen(false)}><FaCode className="nav-ic" /> Technical Skills</a>
          <a href="#projects" onClick={() => setMobileOpen(false)}><FaBriefcase className="nav-ic" /> Featured Projects</a>
          <a href="#why-work-with-me" onClick={() => setMobileOpen(false)}><FaStar className="nav-ic" /> Why Work With Me</a>
          <a href="#certifications" onClick={() => setMobileOpen(false)}><FaAward className="nav-ic" /> Credentials &amp; Certs</a>
          <a href="#contact" onClick={() => setMobileOpen(false)}><FaEnvelope className="nav-ic" /> Contact &amp; Hire</a>
        </div>

        <div className="drawer-footer">
          <div className="status-badge drawer-status">
            <span className="pulse-dot"></span>
            <span>Available for immediate start</span>
          </div>
          <a className="btn primary drawer-btn" href={resumePdf} download="Harini_Resume.pdf" onClick={() => setMobileOpen(false)}>
            <FaPaperPlane /> Download Resume
          </a>
        </div>
      </div>
    </>
  )
}
