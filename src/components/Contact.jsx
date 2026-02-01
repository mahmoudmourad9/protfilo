import { FaEnvelope, FaWhatsapp, FaLinkedin, FaGithub, FaMapMarkerAlt, FaBriefcase, FaFacebook, FaTwitter, FaTelegram } from 'react-icons/fa';
import MostaqlIcon from './icons/MostaqlIcon';
import { profile } from '../data/profile';

function Contact() {
    const handleSubmit = (e) => {
        e.preventDefault();
        // يمكنك إضافة منطق إرسال النموذج هنا
        alert('شكراً لرسالتك! سأتواصل معك قريباً.');
    };

    return (
        <section id="contact" className="contact">
            <div className="container">
                <h2 className="section-title">Let's Work Together</h2>

                <div className="contact-grid">
                    {/* Contact Info */}
                    <div className="contact-info">
                        <h3>Contact Information</h3>
                        <p>Feel free to reach out! I'm always open to discussing new projects, creative ideas, or opportunities.</p>

                        <div className="contact-items">
                            <a href={`mailto:${profile.email}`} className="contact-item">
                                <span className="icon"><FaEnvelope /></span>
                                <div className="details">
                                    <h4>Email</h4>
                                    <span>{profile.email}</span>
                                </div>
                            </a>

                            <a href={`https://wa.me/${profile.whatsapp}`} target="_blank" rel="noopener noreferrer" className="contact-item">
                                <span className="icon"><FaWhatsapp /></span>
                                <div className="details">
                                    <h4>WhatsApp</h4>
                                    <span>{profile.phone}</span>
                                </div>
                            </a>

                            <a href={profile.social.linkedin} target="_blank" rel="noopener noreferrer" className="contact-item">
                                <span className="icon"><FaLinkedin /></span>
                                <div className="details">
                                    <h4>LinkedIn</h4>
                                    <span>Mahmoud Mourad</span>
                                </div>
                            </a>

                            <a href={profile.social.github} target="_blank" rel="noopener noreferrer" className="contact-item">
                                <span className="icon"><FaGithub /></span>
                                <div className="details">
                                    <h4>GitHub</h4>
                                    <span>mahmoudmourad9</span>
                                </div>
                            </a>

                            <a href={profile.social.mostaql} target="_blank" rel="noopener noreferrer" className="contact-item">
                                <span className="icon"><MostaqlIcon /></span>
                                <div className="details">
                                    <h4>Mostaql</h4>
                                    <span>Mahmo_Mourad</span>
                                </div>
                            </a>

                            <div className="contact-social-row">
                                <a href={profile.social.facebook} target="_blank" rel="noopener noreferrer" className="social-icon facebook">
                                    <FaFacebook />
                                </a>
                                <a href={profile.social.twitter} target="_blank" rel="noopener noreferrer" className="social-icon twitter">
                                    <FaTwitter />
                                </a>
                                <a href={profile.social.telegram} target="_blank" rel="noopener noreferrer" className="social-icon telegram">
                                    <FaTelegram />
                                </a>
                            </div>

                            <div className="contact-item loading-lazy">
                                <span className="icon"><FaMapMarkerAlt /></span>
                                <div className="details">
                                    <h4>Location</h4>
                                    <span>{profile.location}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="contact-form">
                        <h3>Send Me a Message</h3>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <input type="text" placeholder="Your Name" required />
                            </div>
                            <div className="form-group">
                                <input type="email" placeholder="Your Email" required />
                            </div>
                            <div className="form-group">
                                <textarea placeholder="Your Message" required></textarea>
                            </div>
                            <button type="submit" className="btn">Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;
