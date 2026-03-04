import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="footer-text">© 2026 Evan Lowry</p>
        <div className="footer-links">
          <a 
            href="https://github.com/evan-lowry" 
            target="_blank" 
            rel="noopener noreferrer"
            className="footer-link"
          >
            GitHub
          </a>
          <a 
            href="https://www.linkedin.com/in/ealowry/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="footer-link"
          >
            LinkedIn
          </a>
          <a 
            href="mailto:elowry@uwaterloo.ca"
            className="footer-link"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
