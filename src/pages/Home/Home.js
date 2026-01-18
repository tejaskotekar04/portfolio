import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import './Home.css';

function Home() {
    const education = [
        {
            degree: 'B.E. in Computer Engineering',
            institution: 'University of Mumbai - Terna Engineering College',
            score: 'CGPA: 8.14',
            year: '2021 - 2025'
        },
        {
            degree: '12th - HSC (Science)',
            institution: 'Pace Junior Science College',
            score: 'Percentage: 91.83%', // Replace with your actual percentage
            year: '2021' // Replace with your year
        },
        {
            degree: '10th - CBSE',
            institution: 'Ryan International School, Sanpada',
            score: 'Percentage: 91.8%', // Replace with your actual percentage
            year: '2019' // Replace with your year
        }
    ];

    return (
        <section className="home">
            <div className="home-content">
                <p className="greeting">Hello, I'm</p>
                <h1 className="name">Tejas Kotekar</h1>
                <h2 className="title">Software Engineer</h2>
                <p className="bio">
                    Computer Engineering graduate passionate about artificial intelligence, backend development,
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

                <div className="education-section">
                    <h3 className="education-title">Education</h3>
                    {education.map((edu, index) => (
                        <div key={index} className="education-card">
                            <p className="degree">{edu.degree}</p>
                            <p className="institution">{edu.institution}</p>
                            <div className="education-details">
                                <span className="score">{edu.score}</span>
                                <span className="year">{edu.year}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Home;