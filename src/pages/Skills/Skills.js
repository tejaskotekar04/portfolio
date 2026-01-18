import './Skills.css';

function Skills() {
    const skillCategories = [
        {
            category: 'Languages',
            skills: ['Java', 'Python', 'SQL', 'JavaScript'],
        },
        {
            category: 'Web Development',
            skills: ['FastAPI', 'Node.js', 'Express.js', 'React'],
        },
        {
            category: 'Databases',
            skills: ['MySQL', 'MongoDB'],
        },
        {
            category: 'AI & ML',
            skills: ['NumPy', 'Pandas', 'Rasa Framework'],
        },
        {
            category: 'Tools & Platforms',
            skills: ['Git', 'GitHub', 'Postman', 'Docker'],
        },
    ];

    return (
        <section className="skills">
            <h1 className="page-title">Skills</h1>

            <div className="skills-container">
                {skillCategories.map((cat, index) => (
                    <div key={index} className="skill-category">
                        <h3 className="category-title">{cat.category}</h3>
                        <div className="skills-list">
                            {cat.skills.map((skill, i) => (
                                <span key={i} className="skill-tag">{skill}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Skills;