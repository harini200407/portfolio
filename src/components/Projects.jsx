import { FaGraduationCap, FaVideo, FaDatabase, FaRobot } from 'react-icons/fa'
import { FaMoneyCheckDollar, FaBuildingUser, FaArrowRight, FaCloudArrowUp } from 'react-icons/fa6'
import { getProjectImage } from '../utils/assetFetcher.js'

import padmasiniImg from '../assets/projects/padmasini.svg'
import payrollImg from '../assets/projects/payroll.svg'
import hostelImg from '../assets/projects/hostel.svg'
import lipsyncImg from '../assets/projects/lipsync.svg'
import sqlImg from '../assets/projects/sql.svg'
import portfolioImg from '../assets/projects/portfolio.svg'

const projects = [
  {
    id: 'padmasini',
    title: 'Padmasini LearnForward',
    desc: 'AI-powered EdTech platform with tutoring, real-time analytics & interactive dashboards.',
    tags: ['React 19', 'Node.js', 'OpenAI', 'EdTech'],
    icon: <FaGraduationCap />,
    gradient: 'linear-gradient(135deg,#4F46E5,#7C3AED)',
    link: 'https://padmasini.com/Learnforward/',
    defaultImg: padmasiniImg,
  },
  {
    id: 'payroll',
    title: 'Payroll Management System',
    desc: 'Automated salary processing, disbursement calculation & comprehensive employee management suite.',
    tags: ['React.js', 'Express', 'MongoDB', 'FinTech'],
    icon: <FaMoneyCheckDollar />,
    gradient: 'linear-gradient(135deg,#FB7185,#F59E0B)',
    link: '#',
    defaultImg: payrollImg,
  },
  {
    id: 'hostel',
    title: 'Hostel Management System',
    desc: 'Admin & student portals with automated attendance checking, Node-Cron alerts and fee tracking.',
    tags: ['MERN', 'Multer', 'Node-Cron', 'Portal'],
    icon: <FaBuildingUser />,
    gradient: 'linear-gradient(135deg,#34D399,#4F46E5)',
    link: '#',
    defaultImg: hostelImg,
  },
  {
    id: 'lipsync',
    title: 'AI Lip Sync Integration Studio',
    desc: 'AI-based lip sync and speech synchronization pipeline tailored for educational video content.',
    tags: ['Python', 'AI Tools', 'Video Processing'],
    icon: <FaVideo />,
    gradient: 'linear-gradient(135deg,#7C3AED,#FB7185)',
    link: '#',
    defaultImg: lipsyncImg,
  },
  {
    id: 'sql',
    title: 'SQL Database Ops & Maintenance',
    desc: 'Query development, latency optimization & production database maintenance at Chenosa Tech.',
    tags: ['MSSQL', 'Data Ops', 'Query Tuning'],
    icon: <FaDatabase />,
    gradient: 'linear-gradient(135deg,#F59E0B,#34D399)',
    link: '#',
    defaultImg: sqlImg,
  },
  {
    id: 'portfolio',
    title: 'Modern Glassmorphic Portfolio',
    desc: 'This site — dynamically engineered with React & Vite, custom asset loaders & responsive UI/UX.',
    tags: ['React', 'Vite', 'Dynamic Assets'],
    icon: <FaRobot />,
    gradient: 'linear-gradient(135deg,#4F46E5,#34D399)',
    link: '#',
    defaultImg: portfolioImg,
  },
]

export default function Projects() {
  return (
    <section id="projects" className="projects-sec">
      <div className="wrap">
        <div className="sec-head">
          <div className="sec-eyebrow">Recent Work</div>
          <div className="sec-title">Featured <span>Projects</span></div>
          <p className="sec-sub">
            Built from scratch to solve real-world problems using modern tech stacks.
          </p>
        </div>

        <div className="proj-grid">
          {projects.map((p) => {
            // Dynamically check if a user uploaded an image matching this project id in src/assets/projects/
            const previewImg = getProjectImage(p.id) || p.defaultImg
            return (
              <div className="proj-card" key={p.id}>
                <div className="proj-img-preview" style={{ background: p.gradient }}>
                  <img src={previewImg} alt={p.title} className="proj-main-img" />
                  <div className="proj-icon-badge">{p.icon}</div>
                </div>
                <div className="proj-body">
                  <div className="proj-title">{p.title}</div>
                  <div className="proj-desc">{p.desc}</div>
                  <div className="proj-tags">
                    {p.tags.map((t) => (
                      <span className="tag" key={t}>{t}</span>
                    ))}
                  </div>
                  <a className="proj-link" href={p.link} target="_blank" rel="noreferrer">
                    Explore Project <FaArrowRight />
                  </a>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
