import { useState, useEffect } from 'react';
import './Navbar.css';

function Navbar() {
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['home', 'experience', 'projects', 'skills', 'certifications', 'contact'];
            const scrollPosition = window.scrollY + 100;

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const offsetTop = element.offsetTop;
                    const offsetHeight = element.offsetHeight;

                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <button onClick={() => scrollToSection('home')} className="nav-button">
                    Tejas Kotekar
                </button>
            </div>
            <ul className="navbar-links">
                <li>
                    <button
                        onClick={() => scrollToSection('home')}
                        className={`nav-button ${activeSection === 'home' ? 'active' : ''}`}
                    >
                        Home
                    </button>
                </li>
                <li>
                    <button
                        onClick={() => scrollToSection('experience')}
                        className={`nav-button ${activeSection === 'experience' ? 'active' : ''}`}
                    >
                        Experience
                    </button>
                </li>
                <li>
                    <button
                        onClick={() => scrollToSection('projects')}
                        className={`nav-button ${activeSection === 'projects' ? 'active' : ''}`}
                    >
                        Projects
                    </button>
                </li>
                <li>
                    <button
                        onClick={() => scrollToSection('skills')}
                        className={`nav-button ${activeSection === 'skills' ? 'active' : ''}`}
                    >
                        Skills
                    </button>
                </li>
                <li>
                    <button
                        onClick={() => scrollToSection('certifications')}
                        className={`nav-button ${activeSection === 'certifications' ? 'active' : ''}`}
                    >
                        Certifications
                    </button>
                </li>
                <li>
                    <button
                        onClick={() => scrollToSection('contact')}
                        className={`nav-button ${activeSection === 'contact' ? 'active' : ''}`}
                    >
                        Contact
                    </button>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;