import { FaGraduationCap, FaLocationDot, FaBriefcase, FaRegEnvelope } from 'react-icons/fa6'
import aboutImg from '../assets/about_-removebg-preview.png'

const facts = [
  { icon: <FaGraduationCap />, label: 'Degree', value: 'B.Tech, IT' },
  { icon: <FaLocationDot />, label: 'Location', value: 'Chennai, India' },
  { icon: <FaBriefcase />, label: 'Experience', value: '1+ Year' },
  { icon: <FaRegEnvelope />, label: 'Email', value: 'hariniee0722@gmail.com' },
]

export default function About() {
  return (
    <section id="about" className="alt about-sec">
      <div className="wrap">
        <div className="about-grid">
          {/* Portrait Showcase Stage */}
          <div className="about-art-showcase">
            <div className="about-glow-aura"></div>
            <div className="about-img-frame">
              <img src={aboutImg} alt="Harini B — Application Engineer" className="about-portrait-img" />
            </div>
            <div className="about-floating-badge">
              <span className="live-pulse-dot"></span>
              <div className="badge-txt-wrap">
                <strong>Dedicated Application Engineer</strong>
                <small>Scalable Web Platforms &amp; AI</small>
              </div>
            </div>
          </div>

          {/* About Text Content */}
          <div className="about-text">
            <div className="sec-eyebrow" style={{ textAlign: 'left' }}>Get To Know</div>
            <div className="sec-title" style={{ textAlign: 'left', marginBottom: 20 }}>
              About <span>Me</span>
            </div>
            <p>
              I'm Harini, an Application Engineer passionate about building scalable, high-performance, and user-focused web applications.
            </p>
            <p>
              Over the past year, I've contributed to live products including AI-powered EdTech platforms, payroll systems, and management portals. My expertise spans responsive frontend engineering, robust backend APIs, database architecture, cloud deployment, and AI integration.
            </p>
            <p>
              I thrive on solving real-world challenges through clean code architecture, intuitive user interfaces, and reliable backend services. I continuously explore state-of-the-art technologies to craft superior digital experiences.
            </p>
            <div className="about-facts">
              {facts.map((f) => (
                <div className="fact" key={f.label}>
                  {f.icon}
                  <div>
                    <div className="flabel">{f.label}</div>
                    <div className="fval">{f.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
