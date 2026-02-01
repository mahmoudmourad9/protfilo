import { FaMobileAlt, FaGlobe, FaServer, FaBrain, FaPaintBrush, FaHandshake } from 'react-icons/fa';
import { profile } from '../data/profile';

const serviceIcons = {
    0: <FaMobileAlt />,
    1: <FaGlobe />,
    2: <FaServer />,
    3: <FaBrain />,
    4: <FaPaintBrush />,
    5: <FaHandshake />,
};

function Services() {
    return (
        <section id="services" className="services">
            <div className="container">
                <div className="services-header">
                    <span className="services-label">SERVICES</span>
                    <h2 className="services-title">What I Can Do For You</h2>
                    <p className="services-subtitle">
                        From concept to deployment — I build complete digital solutions
                    </p>
                </div>

                <div className="services-grid">
                    {profile.services.map((service, index) => (
                        <div key={index} className="service-card">
                            <div className="service-icon-wrapper">
                                <div className="service-icon">
                                    {serviceIcons[index]}
                                </div>
                            </div>
                            <div className="service-content">
                                <h3 className="service-title">{service.title}</h3>
                                <p className="service-description">{service.description}</p>
                                <p className="service-ideal">
                                    <span className="ideal-icon">→</span>
                                    {service.ideal}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="services-cta">
                    <p>Have a project in mind?</p>
                    <a href="#contact" className="btn btn-primary">
                        Let's Work Together
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Services;
