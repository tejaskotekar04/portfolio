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
                        Built and maintained a Library Management REST API using Node.js, Express.js, and SQL, implementing core workflows such
                        as user management, book inventory, and issue/return operations.
                    </li>
                    <li className="exp-item">
                        Designed the backend database schema and implemented secure, scalable CRUD APIs, ensuring data consistency and efficient
                        query performance.
                    </li>
                    <li className="exp-item">
                        Implemented core functionalities for a visual Bot Studio platform including drag-and-drop node interface with React Flow,
                        RESTful APIs for bot configuration using FastAPI, and dynamic JSON-to-YAML conversion.
                    </li>
                </ul>
            </div>
        </section>
    );
}

export default Experience;