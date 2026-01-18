import './Certifications.css';

function Certifications() {
    const certifications = [
        {
            name: 'Hands-on approach to AI for real-world applications',
            issuer: 'TCS iON | IIT Kharagpur',
            date: 'October 2024',
            certificateId: '241911Y2378', // Optional
            link: 'https://drive.google.com/file/d/1WIHRGr-AIAx_csSwgWchzhx9SFRQJndB/view?usp=sharing', // Optional
        },
        // Add more certifications here
    ];

    return (
        <section className="certifications">
            <h1 className="page-title">Certifications</h1>

            <div className="certifications-grid">
                {certifications.map((cert, index) => (
                    <div key={index} className="certification-card">
                        <h3 className="cert-name">{cert.name}</h3>
                        <p className="cert-issuer">{cert.issuer}</p>
                        <p className="cert-date">{cert.date}</p>
                        {cert.credentialId && (
                            <p className="cert-id">Certificate ID: {cert.credentialId}</p>
                        )}
                        {cert.link && (
                            <a
                                href={cert.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="cert-link"
                            >
                                View Certificate
                            </a>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Certifications;