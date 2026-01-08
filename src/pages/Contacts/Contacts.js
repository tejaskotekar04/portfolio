import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import './Contacts.css';

function Contact() {
    return (
        <section className="contact">
            <h1 className="page-title">Contact</h1>

            <div className="contact-content">
                <p className="contact-text">
                    I'm always open to discussing new opportunities, interesting projects,
                    or just having a conversation about tech.
                </p>

                <div className="contact-links">
                    <a
                        href="https://www.linkedin.com/in/tejas-kotekar-0302b6227/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="contact-card"
                    >
                        <FaLinkedin size={32} />
                        <span className="contact-label">LinkedIn</span>
                        <p className="contact-handle">linkedin.com/in/tejas-kotekar-0302b6227</p>
                    </a>

                    <a
                        href="mailto:tejaskotekar04@gmail.com"
                        className="contact-card"
                    >
                        <FaEnvelope size={32} />
                        <span className="contact-label">Email</span>
                        <p className="contact-handle">tejaskotekar04@gmail.com</p>
                    </a>

                    <a
                        href="https://github.com/tejaskotekar04"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="contact-card"
                    >
                        <FaGithub size={32} />
                        <span className="contact-label">GitHub</span>
                        <p className="contact-handle">github.com/tejaskotekar04</p>
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Contact;