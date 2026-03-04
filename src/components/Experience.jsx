import './Experience.css'
import { experience } from '../data/experience'

function Experience() {
  return (
    <section id="experience" className="experience-section">
      <h2 className="section-title">Experience</h2>
      <div className="timeline">
        {experience.map((item) => (
          <div key={item.id} className={`timeline-item ${item.current ? 'current' : ''}`}>
            <div className="timeline-marker"></div>
            <div className="timeline-content">
              <div className="timeline-header">
                <h3 className="timeline-role">{item.role}</h3>
                <span className="timeline-period">{item.period}</span>
              </div>
              <p className="timeline-organization">{item.organization}</p>
              <p className="timeline-description">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Experience
