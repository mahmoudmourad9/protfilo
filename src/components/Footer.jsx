import { FaGithub, FaLinkedin, FaTwitter, FaTelegram, FaFacebook, FaHeart, FaBriefcase } from 'react-icons/fa';
import MostaqlIcon from './icons/MostaqlIcon';
import { profile } from '../data/profile';

function Footer() {
    const currentYear = new Date().getFullYear();

    const scrollToSection = (e, id) => {
        e.preventDefault();
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-brand">
                        <h3>{profile.name}</h3>
                        <p>{profile.title}</p>
                    </div>

                    <div className="footer-links">
                        <h4>Quick Links</h4>
                        <ul>
                            <li><a href="#home" onClick={(e) => scrollToSection(e, 'home')}>Home</a></li>
                            <li><a href="#about" onClick={(e) => scrollToSection(e, 'about')}>About</a></li>
                            <li><a href="#projects" onClick={(e) => scrollToSection(e, 'projects')}>Projects</a></li>
                            <li><a href="#contact" onClick={(e) => scrollToSection(e, 'contact')}>Contact</a></li>
                        </ul>
                    </div>

                    <div className="footer-social">
                        {profile.social.github && (
                            <a href={profile.social.github} target="_blank" rel="noopener noreferrer">
                                <FaGithub />
                            </a>
                        )}
                        {profile.social.linkedin && (
                            <a href={profile.social.linkedin} target="_blank" rel="noopener noreferrer">
                                <FaLinkedin />
                            </a>
                        )}
                        {profile.social.twitter && (
                            <a href={profile.social.twitter} target="_blank" rel="noopener noreferrer">
                                <FaTwitter />
                            </a>
                        )}
                        {profile.social.telegram && (
                            <a href={profile.social.telegram} target="_blank" rel="noopener noreferrer">
                                <FaTelegram />
                            </a>
                        )}
                        {profile.social.facebook && (
                            <a href={profile.social.facebook} target="_blank" rel="noopener noreferrer">
                                <FaFacebook />
                            </a>
                        )}
                        {profile.social.mostaql && (
                            <a href={profile.social.mostaql} target="_blank" rel="noopener noreferrer">
                                <MostaqlIcon />
                            </a>
                        )}
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>© {currentYear} {profile.name}. All rights reserved. | Built with <FaHeart style={{ color: '#e74c3c', verticalAlign: 'middle' }} /> and React</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
