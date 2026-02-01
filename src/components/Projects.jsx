import { FaGithub, FaGooglePlay, FaExternalLinkAlt, FaFolder } from 'react-icons/fa';
import { profile } from '../data/profile';

function Projects() {
    return (
        <section id="projects" className="projects">
            <div className="container">
                <h2 className="section-title">Featured Projects</h2>

                <div className="projects-grid">
                    {profile.projects.map((project, index) => (
                        <div key={index} className="project-card">
                            {/* Screenshot */}
                            <div className="project-image">
                                {project.image ? (
                                    <img src={project.image} alt={project.title} />
                                ) : (
                                    <div className="project-placeholder">
                                        <FaFolder />
                                    </div>
                                )}
                            </div>

                            <div className="project-content">
                                {/* Name */}
                                <h3 className="project-title">{project.title}</h3>

                                {/* Description */}
                                <p className="project-description">{project.description}</p>

                                {/* Tools */}
                                {project.tools && (
                                    <div className="project-tools">
                                        <span className="tools-label">Tools:</span>
                                        <div className="tools-list">
                                            {project.tools.map((tool, i) => (
                                                <span key={i} className="tool-tag">{tool}</span>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* Outcome */}
                                {project.outcome && (
                                    <div className="project-outcome">
                                        <span className="outcome-icon">🎯</span>
                                        <span>{project.outcome}</span>
                                    </div>
                                )}

                                {/* Links */}
                                <div className="project-links">
                                    {project.github && (
                                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                                            <FaGithub /> GitHub
                                        </a>
                                    )}
                                    {project.demo && project.demo.includes('play.google') && (
                                        <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-link primary">
                                            <FaGooglePlay /> Google Play
                                        </a>
                                    )}
                                    {project.demo && !project.demo.includes('play.google') && (
                                        <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-link primary">
                                            <FaExternalLinkAlt /> Live Demo
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="projects-cta">
                    <p>More projects available on my GitHub</p>
                    <a
                        href={profile.social.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary"
                    >
                        View All Projects
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Projects;
