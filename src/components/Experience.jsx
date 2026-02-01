import { FaGraduationCap, FaBriefcase } from 'react-icons/fa';
import { profile } from '../data/profile';

function Experience() {
    return (
        <section id="experience" className="experience">
            <div className="container">
                <h2 className="section-title">Education & Experience</h2>

                <div className="experience-grid">
                    {/* Education */}
                    <div className="experience-column">
                        <h3><span className="icon"><FaGraduationCap /></span> Education</h3>

                        <div className="timeline-item">
                            <h4>{profile.education.degree}</h4>
                            <p className="place">{profile.education.university}</p>
                            <p className="period">{profile.education.year}</p>
                        </div>
                    </div>

                    {/* Experience */}
                    <div className="experience-column">
                        <h3><span className="icon"><FaBriefcase /></span> Experience</h3>

                        {profile.experience.map((exp, index) => (
                            <div key={index} className="timeline-item">
                                <div className="timeline-header">
                                    <h4>{exp.title}</h4>
                                    {exp.type && <span className="exp-type">{exp.type}</span>}
                                </div>
                                <p className="place">{exp.company}</p>
                                <p className="period">{exp.period}</p>
                                <ul>
                                    {exp.tasks.map((task, i) => (
                                        <li key={i}>{task}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Experience;
