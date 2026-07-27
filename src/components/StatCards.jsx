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

import { useState, useEffect, useRef } from 'react';

function CountUp({ text }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  
  // Extract leading numbers and suffix (e.g., "99% Rating" -> 99, "% Rating")
  const match = text.match(/^(\d+)(.*)$/);
  const targetNumber = match ? parseInt(match[1], 10) : NaN;
  const suffix = match ? match[2] : text;

  useEffect(() => {
    if (isNaN(targetNumber)) return;
    
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          let startTimestamp = null;
          const duration = 2000; // 2 seconds animation
          
          const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            
            // easeOutExpo for a smooth slow-down effect
            const easeOut = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
            setCount(Math.floor(easeOut * targetNumber));
            
            if (progress < 1) {
              window.requestAnimationFrame(step);
            } else {
              setCount(targetNumber);
            }
          };
          
          window.requestAnimationFrame(step);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [targetNumber]);

  if (isNaN(targetNumber)) {
    return <span ref={ref}>{text}</span>;
  }
  
  return <span ref={ref}>{count}{suffix}</span>;
}

export default function StatCards() {
  return (
    <section className="stats-section">
      <div className="wrap">
        <div className="stats-grid">
          {statsData.map((s) => {
            const dynamicImg = getStatImage(s.id) || s.defaultImg
            return (
              <div className="stat-card-box" key={s.id}>
                <div className="stat-img-wrap" style={{ background: s.gradient }}>
                  <img src={dynamicImg} alt={s.title} className="stat-img" />
                </div>
                <div className="stat-body">
                  <div className="stat-title">
                    <CountUp text={s.title} />
                  </div>
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
