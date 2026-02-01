import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { profile } from '../data/profile';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    const scrollToSection = (e, id) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsOpen(false);
        }
    };

    return (
        <nav className="navbar">
            <div className="container">
                <a href="#home" className="logo">{profile.name.split(' ')[0]}</a>

                <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
                    <li><a href="#home" onClick={(e) => scrollToSection(e, 'home')}>Home</a></li>
                    <li><a href="#about" onClick={(e) => scrollToSection(e, 'about')}>About</a></li>
                    <li><a href="#experience" onClick={(e) => scrollToSection(e, 'experience')}>Experience</a></li>
                    <li><a href="#skills" onClick={(e) => scrollToSection(e, 'skills')}>Skills</a></li>
                    <li><a href="#projects" onClick={(e) => scrollToSection(e, 'projects')}>Projects</a></li>
                    <li><a href="#contact" onClick={(e) => scrollToSection(e, 'contact')}>Contact</a></li>
                </ul>

                <button className="mobile-toggle" onClick={toggleMenu}>
                    {isOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>
        </nav>
    );
}

export default Navbar;
