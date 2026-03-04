import './TechStack.css'
import { 
  SiJavascript,
  SiPython,
  SiC,
  SiReact, 
  SiVite, 
  SiNodedotjs,
  SiGit,
  SiNpm,
  SiTypescript,
  SiNextdotjs
} from 'react-icons/si'
import { FaJava } from 'react-icons/fa'
import { VscCode } from 'react-icons/vsc'

function TechStack() {
  return (
    <section id="tech-stack" className="tech-stack-section">
      <h2 className="section-title">Tech Stack</h2>
      <div className="tech-stack-grid">
        <div className="tech-category">
          <h3 className="category-title">Languages</h3>
          <div className="tech-items tech-items-icons">
            <span className="tech-item tech-icon" title="JavaScript">
              <span className="tech-icon-image"><SiJavascript /></span>
              <span className="tech-icon-name">JavaScript</span>
            </span>
            <span className="tech-item tech-icon" title="Python">
              <span className="tech-icon-image"><SiPython /></span>
              <span className="tech-icon-name">Python</span>
            </span>
            <span className="tech-item tech-icon" title="C">
              <span className="tech-icon-image"><SiC /></span>
              <span className="tech-icon-name">C</span>
            </span>
            <span className="tech-item tech-icon" title="Java">
              <span className="tech-icon-image"><FaJava /></span>
              <span className="tech-icon-name">Java</span>
            </span>
          </div>
        </div>
        
        <div className="tech-category">
          <h3 className="category-title">Frameworks & Libraries</h3>
          <div className="tech-items tech-items-icons">
            <span className="tech-item tech-icon" title="React">
              <span className="tech-icon-image"><SiReact /></span>
              <span className="tech-icon-name">React</span>
            </span>
            <span className="tech-item tech-icon" title="Vite">
              <span className="tech-icon-image"><SiVite /></span>
              <span className="tech-icon-name">Vite</span>
            </span>
            <span className="tech-item tech-icon" title="Node.js">
              <span className="tech-icon-image"><SiNodedotjs /></span>
              <span className="tech-icon-name">Node.js</span>
            </span>
          </div>
        </div>
        
        <div className="tech-category">
          <h3 className="category-title">Tools & Technologies</h3>
          <div className="tech-items tech-items-icons">
            <span className="tech-item tech-icon" title="Git">
              <span className="tech-icon-image"><SiGit /></span>
              <span className="tech-icon-name">Git</span>
            </span>
            <span className="tech-item tech-icon" title="VS Code">
              <span className="tech-icon-image"><VscCode /></span>
              <span className="tech-icon-name">VS Code</span>
            </span>
            <span className="tech-item tech-icon" title="npm">
              <span className="tech-icon-image"><SiNpm /></span>
              <span className="tech-icon-name">npm</span>
            </span>
          </div>
        </div>
        
        <div className="tech-category">
          <h3 className="category-title">Currently Learning</h3>
          <div className="tech-items tech-items-icons">
            <span className="tech-item tech-icon learning" title="TypeScript">
              <span className="tech-icon-image"><SiTypescript /></span>
              <span className="tech-icon-name">TypeScript</span>
            </span>
            <span className="tech-item tech-icon learning" title="Next.js">
              <span className="tech-icon-image"><SiNextdotjs /></span>
              <span className="tech-icon-name">Next.js</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TechStack
