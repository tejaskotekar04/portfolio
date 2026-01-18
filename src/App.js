import { HashRouter } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import Experience from './pages/Experience/Experience';
import Projects from './pages/Projects/Projects';
import Skills from './pages/Skills/Skills';
import Contact from './pages/Contacts/Contacts';
import './App.css';

function App() {
  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';

    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <HashRouter>
      <Navbar />
      <main className="main-content">
        <div id="home" className="section">
          <Home />
        </div>
        <div id="experience" className="section">
          <Experience />
        </div>
        <div id="projects" className="section">
          <Projects />
        </div>
        <div id="skills" className="section">
          <Skills />
        </div>
        <div id="contact" className="section">
          <Contact />
        </div>
      </main>
    </HashRouter>
  );
}

export default App;