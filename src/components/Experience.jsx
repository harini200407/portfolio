import { FaBriefcase, FaGraduationCap, FaCalendarAlt } from 'react-icons/fa'

const timelineData = [
  {
    id: 1,
    type: 'work',
    icon: <FaBriefcase />,
    title: 'Application Engineer',
    company: 'Padmasini Innovations Private Limited',
    date: 'May 2025 – Present',
    description: 'Key Project: Padmasini LearnForward. Developed a responsive AI-powered EdTech platform for K-12, NEET, and JEE students. Built cross-platform web and mobile applications featuring personalized learning, AI tutoring, test analytics, behavior tracking, and performance dashboards.',
    tech: ['React 19', 'Vite', 'Node.js', 'Express', 'Spring Boot', 'MongoDB', 'Redis', 'OpenAI API', 'Razorpay', 'JWT', 'CloudFront', 'KaTeX/MathJax']
  },
  {
    id: 2,
    type: 'work',
    icon: <FaBriefcase />,
    title: 'Database Intern',
    company: 'Chenosa Technology Solutions Pvt Ltd.',
    date: 'March 2025 – April 2025',
    description: 'Worked with Microsoft SQL Server to develop SQL queries, manage databases, perform data operations, and support database maintenance activities.',
    tech: ['Microsoft SQL Server', 'SQL']
  },
  {
    id: 3,
    type: 'edu',
    icon: <FaGraduationCap />,
    title: 'Bachelor of Technology (IT)',
    company: 'Jeppiaar Engineering College, Chennai',
    date: 'Graduated',
    description: 'CGPA: 7.9/10'
  }
]

export default function Experience() {
  return (
    <section id="experience" className="experience-section">
      <div className="wrap">
        <div className="sec-head">
          <div className="sec-eyebrow">My Journey</div>
          <div className="sec-title">Experience & <span>Education</span></div>
        </div>

        <div className="timeline-container-single">
          <div className="timeline-track-single">
            {timelineData.map((item, index) => (
              <div 
                className="timeline-item-single" 
                key={item.id} 
                data-aos="fade-up"
                data-aos-delay={index * 150} // Cascading animation transition
              >
                <div className={`timeline-dot-icon ${item.type === 'edu' ? 'edu-bg' : 'work-bg'}`}>
                  {item.icon}
                </div>
                <div className="timeline-content-single">
                  <div className="timeline-date-single">
                    <FaCalendarAlt /> {item.date}
                  </div>
                  <h4>{item.title}</h4>
                  <span className="timeline-company-single">{item.company}</span>
                  <p className={item.type === 'edu' ? 'edu-score' : ''}>{item.description}</p>
                  {item.tech && (
                    <div className="timeline-tech">
                      {item.tech.map((t, idx) => (
                        <span key={idx} className="tech-pill">{t}</span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
