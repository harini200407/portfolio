import { 
  FaReact, FaNodeJs, FaJs, FaJava, FaPython, FaAws, FaHtml5, FaCss3Alt, 
  FaDatabase, FaChartBar, FaFileExcel, FaGitAlt, FaGithub, FaKey, 
  FaNetworkWired, FaTools, FaRobot, FaBrain, FaCloud, FaServer 
} from 'react-icons/fa'
import { 
  SiTailwindcss, SiVite, SiExpress, SiMongodb, SiMysql, SiPostgresql, 
  SiVercel, SiRender, SiRedis, SiOpenaigym 
} from 'react-icons/si'

const skillCategories = [
  {
    title: 'Frontend',
    badge: 'UI & Web',
    skills: [
      { name: 'React.js', icon: <FaReact />, color: '#61DAFB' },
      { name: 'HTML5', icon: <FaHtml5 />, color: '#E34F26' },
      { name: 'CSS3', icon: <FaCss3Alt />, color: '#1572B6' },
      { name: 'JavaScript', icon: <FaJs />, color: '#F7DF1E' },
      { name: 'Tailwind CSS', icon: <SiTailwindcss />, color: '#06B6D4' },
      { name: 'Vite', icon: <SiVite />, color: '#646CFF' },
    ]
  },
  {
    title: 'Backend',
    badge: 'Server Logic',
    skills: [
      { name: 'Node.js', icon: <FaNodeJs />, color: '#3C873A' },
      { name: 'Express.js', icon: <SiExpress />, color: '#A8B4CE' },
      { name: 'Java', icon: <FaJava />, color: '#E76F00' },
      { name: 'Python', icon: <FaPython />, color: '#3776AB' },
    ]
  },
  {
    title: 'Database',
    badge: 'Data Storage',
    skills: [
      { name: 'MongoDB', icon: <SiMongodb />, color: '#47A248' },
      { name: 'MySQL', icon: <SiMysql />, color: '#4479A1' },
      { name: 'PostgreSQL', icon: <SiPostgresql />, color: '#336791' },
      { name: 'Microsoft SQL Server', icon: <FaDatabase />, color: '#CC292B' },
    ]
  },
  {
    title: 'Cloud & Deployment',
    badge: 'DevOps & Hosting',
    skills: [
      { name: 'AWS EC2', icon: <FaAws />, color: '#FF9900' },
      { name: 'AWS S3', icon: <FaCloud />, color: '#F97316' },
      { name: 'Vercel', icon: <SiVercel />, color: '#E2E8F0' },
      { name: 'Render', icon: <SiRender />, color: '#46E3B7' },
      { name: 'CloudFront', icon: <FaServer />, color: '#3B82F6' },
    ]
  },
  {
    title: 'Tools & Technologies',
    badge: 'Workflow & Security',
    skills: [
      { name: 'Git', icon: <FaGitAlt />, color: '#F05032' },
      { name: 'GitHub', icon: <FaGithub />, color: '#F8FAFC' },
      { name: 'Power BI', icon: <FaChartBar />, color: '#F2C811' },
      { name: 'Excel', icon: <FaFileExcel />, color: '#217346' },
      { name: 'JWT Authentication', icon: <FaKey />, color: '#FB7185' },
      { name: 'REST APIs', icon: <FaNetworkWired />, color: '#38BDF8' },
      { name: 'Redis', icon: <SiRedis />, color: '#DC382D' },
      { name: 'Multer', icon: <FaTools />, color: '#34D399' },
    ]
  },
  {
    title: 'AI',
    badge: 'Intelligence & Media',
    skills: [
      { name: 'OpenAI API Integration', icon: <SiOpenaigym />, color: '#10A37F' },
      { name: 'AI Lip Sync', icon: <FaRobot />, color: '#A855F7' },
      { name: 'Python Media Processing', icon: <FaBrain />, color: '#EC4899' },
    ]
  }
]

export default function Skills() {
  return (
    <section id="skills">
      <div className="wrap">
        <div className="sec-head">
          <div className="sec-eyebrow">My Expertise</div>
          <div className="sec-title">Technical <span>Skills</span></div>
        </div>

        <div className="skills-categorized-grid">
          {skillCategories.map((cat) => (
            <div className="skill-category-card" key={cat.title}>
              <div className="skill-cat-header">
                <h3>{cat.title}</h3>
                <span className="skill-cat-badge">{cat.badge}</span>
              </div>

              <div className="cat-skills-wrap">
                {cat.skills.map((s) => (
                  <div className="skill-chip" key={s.name}>
                    <span className="skill-chip-ic" style={{ color: s.color }}>
                      {s.icon}
                    </span>
                    <span className="skill-chip-name">{s.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
