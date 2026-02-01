import { profile } from '../data/profile';

function About() {
    return (
        <section id="about" className="about">
            <div className="container">
                <div className="about-image">
                    <img src="/profile.png" alt={profile.name} className="image-wrapper" />
                </div>

                <div className="about-content">
                    <h2>About Me</h2>
                    <p>{profile.about}</p>

                    <div className="about-stats">
                        <div className="stat">
                            <span className="number">{profile.projects.length}+</span>
                            <span className="label">Projects</span>
                        </div>
                        <div className="stat">
                            <span className="number">{Object.values(profile.skills).flat().length}+</span>
                            <span className="label">Technologies</span>
                        </div>
                        <div className="stat">
                            <span className="number">2+</span>
                            <span className="label">Years Experience</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
