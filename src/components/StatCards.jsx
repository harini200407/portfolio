import { getStatImage } from '../utils/assetFetcher.js'
import statExpDefault from '../assets/stats/stat-exp.svg'
import statProjectsDefault from '../assets/stats/stat-projects.svg'
import statClientsDefault from '../assets/stats/stat-clients.svg'
import statCodeDefault from '../assets/stats/stat-code.svg'

const statsData = [
  {
    id: 'exp',
    title: '1+ Years',
    subtitle: 'Experience',
    desc: 'Production Application & Full Stack Engineering',
    defaultImg: statExpDefault,
    gradient: 'linear-gradient(135deg, #4F46E5, #7C3AED)',
  },
  {
    id: 'projects',
    title: '5 Projects',
    subtitle: 'Completed',
    desc: 'AI Platforms, Payroll & Management Systems',
    defaultImg: statProjectsDefault,
    gradient: 'linear-gradient(135deg, #FB7185, #F59E0B)',
  },
  {
    id: 'clients',
    title: '99% Rating',
    subtitle: 'Satisfaction',
    desc: 'High-quality deliverables & seamless UI/UX',
    defaultImg: statClientsDefault,
    gradient: 'linear-gradient(135deg, #34D399, #059669)',
  },
  {
    id: 'code',
    title: 'Clean Code',
    subtitle: 'Scalable Architecture',
    desc: 'REST APIs, Node.js, React 19 & Cloud Ops',
    defaultImg: statCodeDefault,
    gradient: 'linear-gradient(135deg, #38BDF8, #4F46E5)',
  },
]

export default function StatCards() {
  return (
    <section className="stats-section">
      <div className="wrap">
        <div className="stats-grid">
          {statsData.map((s) => {
            // Fetch dynamically uploaded asset from src/assets/stats/ if present, fallback to default
            const dynamicImg = getStatImage(s.id) || s.defaultImg
            return (
              <div className="stat-card-box" key={s.id}>
                <div className="stat-img-wrap" style={{ background: s.gradient }}>
                  <img src={dynamicImg} alt={s.title} className="stat-img" />
                </div>
                <div className="stat-body">
                  <div className="stat-title">{s.title}</div>
                  <div className="stat-subtitle">{s.subtitle}</div>
                  <p className="stat-desc">{s.desc}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
