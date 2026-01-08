import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import './Home.css';

function Home() {
    return (
        <section className="home">
            <div className="home-content">
                <p className="greeting">Hello, I'm</p>
                <h1 className="name">Tejas Kotekar</h1>
                <h2 className="title">Software Engineer</h2>
                <p className="bio">
                    Computer Engineering graduate passionate about backend development,
                    designing APIs, and building scalable web applications. I love turning complex problems
                    into clean, maintainable solutions.
                </p>

                <div className="social-links">
                    <a
                        href="https://github.com/tejaskotekar04"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-icon"
                        title="GitHub"
                    >
                        <FaGithub size={24} />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/tejas-kotekar-0302b6227/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-icon"
                        title="LinkedIn"
                    >
                        <FaLinkedin size={24} />
                    </a>
                    <a
                        href="mailto:tejaskotekar04@gmail.com"
                        className="social-icon"
                        title="Email"
                    >
                        <FaEnvelope size={24} />
                    </a>
                </div>

                <div className="education-card">
                    <h3 className="education-title">Education</h3>
                    <p className="college-name">University of Mumbai - Terna Engineering College</p>
                    <p className="degree">B.E. in Computer Engineering</p>
                    <p className="cgpa">CGPA: 8.14</p>
                </div>
            </div>
        </section>
    );
}

export default Home;