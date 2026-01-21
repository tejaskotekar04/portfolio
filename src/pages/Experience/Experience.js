import './Experience.css';

function Experience() {
    return (
        <section className="experience">
            <h1 className="page-title">Experience</h1>

            <div className="experience-card">
                <div className="exp-header">
                    <div>
                        <h3 className="company-name">TraceArt Technologies (OPC) Pvt. Ltd.</h3>
                        <p className="role">Software Developer Intern</p>
                    </div>
                    <span className="duration">July 2025 - December 2025</span>
                </div>
                <ul className="exp-list">
                    <li className="exp-item">
                        Engineered a no-code Bot Studio platform using React Flow and FastAPI, accelerating Rasa-based bot development by 80%
                        through visual workflow creation and instant YAML file generation.
                    </li>
                    <li className="exp-item">
                        Architected automated JSON-to-YAML conversion system with dual databases (MongoDB for bot configs, MySQL for user
                        data), dynamically generating 4 Rasa framework files in real-time upon workflow saves.
                    </li>
                    <li className="exp-item">
                        Designed scalable canvas-based interface supporting unlimited nodes per workflow with drag-and-drop functionality and
                        properties panel, enabling users to build complex conversational agents.
                    </li>
                </ul>
            </div>
        </section>
    );
}

export default Experience;