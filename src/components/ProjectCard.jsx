import './ProjectCard.css'
import { getTechColor } from '../utils/techColors'
import { highlightImportantWords } from '../utils/highlightWords'
import { useState, useRef } from 'react'

function ProjectCard({ project }) {
  const [isHovering, setIsHovering] = useState(false)
  const videoRef = useRef(null)

  const handleMouseEnter = () => {
    setIsHovering(true)
    if (videoRef.current && isVideo(project.media)) {
      videoRef.current.play()
    }
  }

  const handleMouseLeave = () => {
    setIsHovering(false)
    if (videoRef.current && isVideo(project.media)) {
      videoRef.current.pause()
      videoRef.current.currentTime = 0
    }
  }

  const isVideo = (url) => {
    if (!url) return false
    return url.endsWith('.mp4') || url.endsWith('.webm') || url.endsWith('.mov')
  }

  return (
    <article 
      className="project-card"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {project.media && (
        <div className="project-media">
          {isVideo(project.media) ? (
            <video 
              ref={videoRef}
              src={project.media}
              loop
              muted
              playsInline
              className="project-video"
            />
          ) : (
            <img 
              src={project.media} 
              alt={`${project.title} demo`}
              className="project-gif"
            />
          )}
        </div>
      )}

      <h3 className="project-title">{project.title}</h3>
      <p className="project-description">{highlightImportantWords(project.description)}</p>
      
      <div className="project-tags">
        {project.tags.map((tag, index) => {
          const colors = getTechColor(tag)
          return (
            <span 
              key={index} 
              className="project-tag"
              style={{
                backgroundColor: colors.bg,
                color: colors.text
              }}
            >
              {tag}
            </span>
          )
        })}
      </div>

      <div className="project-links">
        {project.github && (
          <a 
            href={project.github} 
            target="_blank" 
            rel="noopener noreferrer"
            className="project-link github-link"
          >
            GitHub →
          </a>
        )}
        {project.demo && (
          <a 
            href={project.demo} 
            target="_blank" 
            rel="noopener noreferrer"
            className="project-link"
          >
            Live Demo →
          </a>
        )}
      </div>
    </article>
  )
}

export default ProjectCard
