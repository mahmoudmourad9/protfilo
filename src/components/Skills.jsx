import { FaMobileAlt, FaCubes, FaServer, FaGlobe, FaTools, FaUsers } from 'react-icons/fa';
import { profile } from '../data/profile';

const skillIcons = {
    mobileDev: <FaMobileAlt />,
    architecture: <FaCubes />,
    backend: <FaServer />,
    webBasics: <FaGlobe />,
    tools: <FaTools />,
    softSkills: <FaUsers />,
};

const skillLabels = {
    mobileDev: 'Mobile Development',
    architecture: 'Architecture & State',
    backend: 'Backend & APIs',
    webBasics: 'Web Basics',
    tools: 'Tools & Design',
    softSkills: 'Soft Skills',
};

function Skills() {
    return (
        <section id="skills" className="skills">
            <div className="container">
                <h2 className="section-title">Tools & Technologies</h2>

                {profile.skillsIntro && (
                    <p className="skills-intro">{profile.skillsIntro}</p>
                )}

                <div className="skills-grid">
                    {Object.entries(profile.skills).map(([category, skills]) => (
                        <div key={category} className="skill-card">
                            <div className="icon">{skillIcons[category]}</div>
                            <h3>{skillLabels[category]}</h3>
                            <div className="skill-tags">
                                {skills.map((skill, index) => (
                                    <span key={index} className="skill-tag">{skill}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Skills;
