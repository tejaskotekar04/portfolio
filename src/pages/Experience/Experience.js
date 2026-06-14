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
                        Worked on developing an AI-powered chatbot/agent using the Rasa framework.
                    </li>
                    <li className="exp-item">
                        Implemented conversational flows, intents, and responses to enhance user interaction.
                    </li>
                    <li className="exp-item">
                        Participated in troubleshooting, debugging, and improving application functionality.
                    </li>
                    <li className="exp-item">
                        Collaborated with team members to design, develop and test backend modules.
                    </li>
                    <li className="exp-item">
                        Gained experience in software development lifecycle (SDLC), API integration, and backend development.
                    </li>
                </ul>
            </div>
        </section>
    );
}

export default Experience;