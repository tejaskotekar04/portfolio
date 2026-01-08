import './Experience.css';

function Experience() {
    return (
        <section className="experience">
            <h1 className="page-title">Experience</h1>

            <div className="experience-card">
                <div className="exp-header">
                    <div>
                        <h3 className="company-name">TraceArt Technologies (OPC) Pvt. Ltd.</h3>
                        <p className="role">Intern</p>
                    </div>
                    <span className="duration">July 2025 - December 2025</span>
                </div>
                <ul className="exp-list">
                    <li className="exp-item">
                        Developed a Library Management REST API using Node.js, Express.js, and SQL (Sequelize), supporting book, user and issue/return
                        workflows.
                    </li>
                    <li className="exp-item">
                        Implemented an actor-model based approach for handling book/file uploads, improving concurrency, reliability and separation of
                        responsibilities.
                    </li>
                    <li className="exp-item">
                        Contributed to a Bot Studio Platform using FastAPI, Rasa Framework, and MongoDB, including JSON-to-YAML conversion for
                        dynamic chatbot configuration.
                    </li>
                </ul>
            </div>
        </section>
    );
}

export default Experience;