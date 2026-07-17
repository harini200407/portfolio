import { FaCertificate, FaLayerGroup, FaPython, FaFileExcel } from 'react-icons/fa'
import { FaCloud, FaChartSimple } from 'react-icons/fa6'

const certs = [
  { icon: <FaCertificate />, label: 'Oracle Certified Foundation Associate' },
  { icon: <FaLayerGroup />, label: 'MERN Stack Developer' },
  { icon: <FaPython />, label: 'Python Programming' },
  { icon: <FaFileExcel />, label: 'Microsoft Excel' },
  { icon: <FaCloud />, label: 'IBM SkillsBuild' },
  { icon: <FaChartSimple />, label: 'Power BI Job Simulation' },
]

export default function Certifications() {
  return (
    <section className="alt">
      <div className="wrap">
        <div className="sec-head">
          <div className="sec-eyebrow">Credentials</div>
          <div className="sec-title">Certifications</div>
        </div>
        <div className="cert-grid">
          {certs.map((c) => (
            <div className="cert-card" key={c.label}>
              <div className="cert-ic">{c.icon}</div>
              <span>{c.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
