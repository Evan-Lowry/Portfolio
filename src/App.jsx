import Header from './components/Header'
import Hero from './components/Hero'
import Experience from './components/Experience'
import TechStack from './components/TechStack'
import ProjectsGrid from './components/ProjectsGrid'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <Experience />
        <TechStack />
        <ProjectsGrid />
      </main>
      <Footer />
    </div>
  )
}

export default App
