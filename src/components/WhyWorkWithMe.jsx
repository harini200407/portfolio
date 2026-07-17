import { useState, useEffect } from 'react'
import { FaCheck, FaRocket, FaShieldAlt, FaLightbulb, FaBriefcase, FaUserCheck, FaCode, FaCloud, FaHandshake } from 'react-icons/fa'

const swapSlides = [
  {
    id: 'work',
    tabLabel: 'Why Work With Me?',
    eyebrow: 'Technical Execution & Mindset',
    title: 'Precision Engineering &',
    highlight: 'Modern Tech Stack',
    desc: 'I bring deep full-stack proficiency combined with AI integration experience to build systems that scale gracefully and perform impeccably.',
    items: [
      { icon: <FaCode />, title: 'Clean & Maintainable Code', desc: 'Strict adherence to DRY principles, modular component architecture, and self-documenting logic.' },
      { icon: <FaRocket />, title: 'AI-Integrated Platforms', desc: 'Hands-on expertise embedding OpenAI APIs, automated workflows, and smart media processing.' },
      { icon: <FaCloud />, title: 'Scalable Cloud Deployment', desc: 'Proven track record hosting robust applications across AWS EC2/S3, Vercel, and Render.' },
      { icon: <FaShieldAlt />, title: 'Bulletproof Security & REST', desc: 'Secure JWT authentication, robust data validation, and clean RESTful API endpoints.' },
    ]
  },
  {
    id: 'hire',
    tabLabel: 'Why Hire Me?',
    eyebrow: 'Business Impact & Professional Edge',
    title: 'Proven Results &',
    highlight: 'Rapid Execution',
    desc: 'I bridge the gap between engineering feasibility and business goals, ensuring high-value delivery, fast debugging, and strong ROI from day one.',
    items: [
      { icon: <FaBriefcase />, title: '1+ Year Production Experience', desc: 'Battle-tested experience delivering real-world applications and solving production-grade challenges.' },
      { icon: <FaCheck />, title: 'Rapid Bug Resolution & ROI', desc: 'Fast debugging bottlenecks and optimizing application load times for superior user retention.' },
      { icon: <FaLightbulb />, title: 'Self-Driven & Fast Learner', desc: 'Quickly mastering new frameworks, AI libraries, and cloud tools to keep your product ahead.' },
      { icon: <FaHandshake />, title: 'Agile Delivery & Reliability', desc: 'Consistent sprint execution, proactive progress updates, and dependable delivery timelines.' },
    ]
  },
  {
    id: 'strengths',
    tabLabel: 'Core Advantages',
    eyebrow: 'Collaboration & Culture Fit',
    title: 'Seamless Communication &',
    highlight: 'Proactive Ownership',
    desc: 'Great software is built by clear thinkers who collaborate effectively across design, product requirements, and backend engineering.',
    items: [
      { icon: <FaUserCheck />, title: 'Client-Centric Communication', desc: 'Translating complex technical architecture into clear, actionable business options and milestones.' },
      { icon: <FaCheck />, title: 'Cross-Functional Teamwork', desc: 'Thriving in collaborative environments with Git workflows, peer reviews, and shared ownership.' },
      { icon: <FaCode />, title: 'Thorough Documentation', desc: 'Writing clear API specs, comprehensive READMEs, and code comments for effortless onboarding.' },
      { icon: <FaRocket />, title: 'Passion for Innovation', desc: 'Relentless curiosity and dedication to elevating every project beyond baseline expectations.' },
    ]
  }
]

export default function WhyWorkWithMe() {
  const [activeIdx, setActiveIdx] = useState(0)
  const [isFading, setIsFading] = useState(false)
  const [isPaused, setIsPaused] = useState(false)

  // Auto swap slide every 5.5 seconds unless paused by mouse hover
  useEffect(() => {
    if (isPaused) return

    const timer = setInterval(() => {
      handleSwap((activeIdx + 1) % swapSlides.length)
    }, 5500)

    return () => clearInterval(timer)
  }, [activeIdx, isPaused])

  const handleSwap = (nextIdx) => {
    if (nextIdx === activeIdx || isFading) return
    setIsFading(true)
    setTimeout(() => {
      setActiveIdx(nextIdx)
      setIsFading(false)
    }, 350)
  }

  const currentSlide = swapSlides[activeIdx]

  return (
    <section className="why-sec" id="why-work-with-me">
      <div 
        className="wrap"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="sec-head">
          <div className="sec-eyebrow">Interactive Value Showcase</div>
          <div className="sec-title">Why Work <span>&amp; Hire Me?</span></div>
          <p className="sec-subtitle">Watch the content auto-swap below or select any tab to explore my core technical &amp; business advantages.</p>
        </div>

        {/* Interactive Swapping Tab Bar */}
        <div className="why-tabs-bar">
          {swapSlides.map((slide, idx) => (
            <button
              key={slide.id}
              className={`why-tab-btn ${activeIdx === idx ? 'active' : ''}`}
              onClick={() => handleSwap(idx)}
            >
              <span className="tab-label">{slide.tabLabel}</span>
              {activeIdx === idx && (
                <span className="tab-progress-bar">
                  <span className={`tab-progress-fill ${isPaused ? 'paused' : ''}`}></span>
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Swapping Content Area (Fades Out & In smoothly) */}
        <div className={`why-swap-stage ${isFading ? 'fade-out' : 'fade-in'}`}>
          <div className="why-slide-header">
            <span className="slide-eyebrow">{currentSlide.eyebrow}</span>
            <h3 className="slide-title">
              {currentSlide.title} <span>{currentSlide.highlight}</span>
            </h3>
            <p className="slide-desc">{currentSlide.desc}</p>
          </div>

          <div className="why-cards-grid">
            {currentSlide.items.map((item, idx) => (
              <div className="why-feature-card" key={idx}>
                <div className="feature-ic-wrap">
                  {item.icon}
                </div>
                <div className="feature-txt">
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
