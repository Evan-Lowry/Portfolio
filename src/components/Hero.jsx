import './Hero.css'

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-name">Evan Lowry</h1>
        <p className="hero-title">Honours Math Student @ University of Waterloo</p>
        <p className="hero-description">
          First-year math student who learns by <span className="highlight">building</span>. I'm drawn to the challenge of <span className="highlight-green">implementing algorithms from scratch</span> and creating software <span className="highlight-orange">from first principles</span>. I believe the best way to understand something is to build it yourself.
        </p>
        <div className="hero-actions">
          <a href="/Resume.pdf" target="_blank" rel="noopener noreferrer" className="resume-button">
            Download Resume
          </a>
        </div>
      </div>
      <div className="hero-image-container">
        <img 
          src="/headshot.jpeg" 
          alt="Evan Lowry" 
          className="hero-image"
        />
      </div>
    </section>
  )
}

export default Hero
