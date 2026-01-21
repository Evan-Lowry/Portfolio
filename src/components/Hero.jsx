import './Hero.css'

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-name">Evan Lowry</h1>
        <p className="hero-title">Honours Math Student @ University of Waterloo</p>
        <p className="hero-description">
          Building projects to learn and grow. Passionate about creating clean, functional software.
        </p>
        <div className="hero-actions">
          <a href="/Resume.pdf" download className="resume-button">
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
