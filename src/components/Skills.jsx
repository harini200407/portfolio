import { 
  FaReact, FaNodeJs, FaJs, FaJava, FaPython, FaAws, FaHtml5, FaCss3Alt, 
  FaDatabase, FaChartBar, FaFileExcel, FaGitAlt, FaGithub, FaKey, 
  FaNetworkWired, FaTools, FaRobot, FaBrain, FaCloud, FaServer, FaCode, FaTable, FaLaptopCode
} from 'react-icons/fa'
import { 
  SiTailwindcss, SiVite, SiExpress, SiMongodb, SiMysql, SiPostgresql, 
  SiVercel, SiRender, SiRedis, SiOpenaigym 
} from 'react-icons/si'

const skillCategories = [
  {
    title: 'FrontEnd',
    icon: <FaLaptopCode />,
    subCategories: [
      {
        title: 'Basics',
        color: '#6366F1', // Indigo
        icon: <FaHtml5 />,
        items: [
          { name: 'HTML5', icon: <FaHtml5 />, color: '#E34F26' },
          { name: 'CSS3', icon: <FaCss3Alt />, color: '#1572B6' },
          { name: 'JavaScript', icon: <FaJs />, color: '#F7DF1E' }
        ]
      },
      {
        title: 'Frameworks',
        color: '#8B5CF6', // Purple
        icon: <FaReact />,
        items: [
          { name: 'React.js', icon: <FaReact />, color: '#61DAFB' },
          { name: 'Vite', icon: <SiVite />, color: '#646CFF' }
        ]
      },
      {
        title: 'Styles',
        color: '#3B82F6', // Blue
        icon: <SiTailwindcss />,
        items: [
          { name: 'Tailwind CSS', icon: <SiTailwindcss />, color: '#06B6D4' }
        ]
      }
    ]
  },
  {
    title: 'BackEnd',
    icon: <FaServer />,
    subCategories: [
      {
        title: 'Core',
        color: '#3B82F6', // Blue
        icon: <FaNodeJs />,
        items: [
          { name: 'Node.js', icon: <FaNodeJs />, color: '#3C873A' },
          { name: 'Express.js', icon: <SiExpress />, color: '#A8B4CE' }
        ]
      },
      {
        title: 'Languages',
        color: '#0EA5E9', // Sky Blue
        icon: <FaCode />,
        items: [
          { name: 'Java', icon: <FaJava />, color: '#E76F00' },
          { name: 'Python', icon: <FaPython />, color: '#3776AB' }
        ]
      },
      {
        title: 'APIs',
        color: '#10B981', // Emerald
        icon: <FaNetworkWired />,
        items: [
          { name: 'REST APIs', icon: <FaNetworkWired />, color: '#38BDF8' },
          { name: 'JWT Auth', icon: <FaKey />, color: '#FB7185' },
          { name: 'Multer', icon: <FaTools />, color: '#34D399' }
        ]
      }
    ]
  },
  {
    title: 'DataBase',
    icon: <FaDatabase />,
    subCategories: [
      {
        title: 'RDBMS',
        color: '#2563EB', // Royal Blue
        icon: <FaTable />,
        items: [
          { name: 'MySQL', icon: <SiMysql />, color: '#4479A1' },
          { name: 'PostgreSQL', icon: <SiPostgresql />, color: '#336791' },
          { name: 'MS SQL', icon: <FaDatabase />, color: '#CC292B' }
        ]
      },
      {
        title: 'No SQL',
        color: '#3B82F6', // Blue
        icon: <SiMongodb />,
        items: [
          { name: 'MongoDB', icon: <SiMongodb />, color: '#47A248' },
          { name: 'Redis', icon: <SiRedis />, color: '#DC382D' }
        ]
      },
      {
        title: 'Analytics',
        color: '#0284C7', // Light Blue
        icon: <FaChartBar />,
        items: [
          { name: 'Power BI', icon: <FaChartBar />, color: '#F2C811' },
          { name: 'Excel', icon: <FaFileExcel />, color: '#217346' }
        ]
      }
    ]
  },
  {
    title: 'DevOps & AI',
    icon: <FaCloud />,
    subCategories: [
      {
        title: 'Infrastructure',
        color: '#10B981', // Emerald
        icon: <FaAws />,
        items: [
          { name: 'AWS EC2', icon: <FaAws />, color: '#FF9900' },
          { name: 'AWS S3', icon: <FaCloud />, color: '#F97316' },
          { name: 'CloudFront', icon: <FaServer />, color: '#3B82F6' }
        ]
      },
      {
        title: 'Deployment',
        color: '#14B8A6', // Teal
        icon: <SiVercel />,
        items: [
          { name: 'Vercel', icon: <SiVercel />, color: '#E2E8F0' },
          { name: 'Render', icon: <SiRender />, color: '#46E3B7' },
          { name: 'GitHub', icon: <FaGithub />, color: '#F8FAFC' }
        ]
      },
      {
        title: 'AI Models',
        color: '#8B5CF6', // Purple
        icon: <FaRobot />,
        items: [
          { name: 'OpenAI API', icon: <SiOpenaigym />, color: '#10A37F' },
          { name: 'AI Lip Sync', icon: <FaRobot />, color: '#A855F7' },
          { name: 'Python Media', icon: <FaBrain />, color: '#EC4899' }
        ]
      }
    ]
  }
]

export default function Skills() {
  return (
    <section id="skills" className="skills-tree-section">
      <div className="wrap">
        <div className="sec-head">
          <div className="sec-eyebrow">My Expertise</div>
          <div className="sec-title">Technical <span>Skills</span></div>
        </div>

        {/* The top connecting line structure will be built with CSS pseudo-elements relative to this container */}
        <div className="skills-tree-container">
          {skillCategories.map((cat) => (
            <div className="tree-column" key={cat.title}>
              {/* Top Category Icon & Title */}
              <div className="tree-col-header">
                <div className="tree-col-icon-box">
                  {cat.icon}
                </div>
                <h4>{cat.title}</h4>
              </div>

              {/* Sub Categories */}
              <div className="tree-subcats-wrap">
                {cat.subCategories.map((sub) => (
                  <div className="tree-subcat-card" key={sub.title}>
                    <div 
                      className="tree-subcat-header" 
                      style={{ backgroundColor: sub.color }}
                    >
                      <span className="tree-subcat-ic">{sub.icon}</span>
                      <span>{sub.title}</span>
                    </div>
                    <ul className="tree-subcat-list">
                      {sub.items.map((item) => (
                        <li key={item.name}>
                          <span className="skill-item-ic" style={{ color: item.color }}>
                            {item.icon}
                          </span> 
                          {item.name}
                        </li>
                      ))}
                    </ul>
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
