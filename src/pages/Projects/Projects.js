import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import './Projects.css';

function Projects() {
    const projects = [
        {
            name: 'Superstore Sales Dashboard',
            bullets: [
                'Processed 10K+ transactions and $2.3M+ in sales across 21 data attributes, 49 states, and a 4-year period, implementing an automated analytics pipeline with caching optimizations.',
                'Visualized insights through 6 interactive dashboards, examining 3 customer segments and multiple product categories, enabling data-driven identification of profitable products and loss-making items.',
                'Deployed the application on Streamlit Cloud, achieving 99% uptime with optimized caching and maintaining <2s dashboard load times.',
            ],
            tech: ['Python', 'Streamlit', 'Pandas'],
            github: 'https://github.com/tejaskotekar04/Superstore-Sales-Analysis',
            demo: 'https://tejaskotekar04-superstore-sales-analysis-app-vmrspb.streamlit.app/',
        },
        {
            name: 'Health Symptom Checker',
            bullets: [
                'Created an AI-powered web application using React and FastAPI, integrating Llama 3.3 70B via REST APIs to analyze 20+ patient symptoms, generating top-3 severity-ranked disease predictions with associated medical precautions.',
                'Modeled an optimized MySQL database schema and executed full CRUD operations, supporting storage and retrieval of 100+ patient records with efficient query performance.',
                'Architected a modular backend with Pydantic validation and asynchronous API calls reducing request validation errors by ~35% and improving API response efficiency by ~25%.',
            ],
            tech: ['FastAPI', 'MySQL', 'Groq AI', 'Llama 3.3 70B', 'React'],
            github: 'https://github.com/tejaskotekar04/health-symptom-checker',
            demo: null,
        },
        {
            name: 'Job Portal API',
            bullets: [
                'Engineered a Node.js and Express.js backend for a job portal, enabling core features such as job posting, user registration, authentication, and application management. ',
                'Designed 10 RESTful APIs with MongoDB schemas handling 100+ API requests/day while maintaining low-latency responses and scalable data access patterns. ',
                'Enforced security best practices including bcrypt password hashing, input validation, and role-based access control (RBAC), reducing unauthorized access risks and securing 100% of user credentials. ',
            ],
            tech: ['Node.js', 'Express.js', 'Mongoose', 'MongoDB'],
            github: 'https://github.com/tejaskotekar04/Job-Portal-Application-Backend',
            demo: 'https://job-portal-application-abxn.onrender.com/api-doc/',
        },
    ];

    return (
        <section className="projects">
            <h1 className="page-title">Projects</h1>

            <div className="projects-grid">
                {projects.map((project, index) => (
                    <div key={index} className="project-card">
                        <h3 className="project-name">{project.name}</h3>
                        <ul className="project-bullets">
                            {project.bullets.map((bullet, i) => (
                                <li key={i} className="project-bullet">{bullet}</li>
                            ))}
                        </ul>
                        <div className="tech-stack">
                            {project.tech.map((tech, i) => (
                                <span key={i} className="tech-tag">{tech}</span>
                            ))}
                        </div>
                        <div className="project-links">
                            <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="project-link"
                            >
                                <FaGithub size={18} /> Code
                            </a>
                            {project.demo && (
                                <a
                                    href={project.demo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="project-link"
                                >
                                    <FaExternalLinkAlt size={16} /> Live Demo
                                </a>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Projects;