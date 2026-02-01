import { FaArrowDown, FaMobileAlt, FaCode, FaRocket } from 'react-icons/fa';
import { SiFlutter, SiFirebase, SiDart } from 'react-icons/si';
import { profile } from '../data/profile';
import { useEffect, useState } from 'react';

function Hero() {
    const [displayText, setDisplayText] = useState('');
    const [isTyping, setIsTyping] = useState(true);
    const fullText = profile.title;

    useEffect(() => {
        if (isTyping) {
            if (displayText.length < fullText.length) {
                const timeout = setTimeout(() => {
                    setDisplayText(fullText.slice(0, displayText.length + 1));
                }, 100);
                return () => clearTimeout(timeout);
            } else {
                setTimeout(() => setIsTyping(false), 2000);
            }
        } else {
            if (displayText.length > 0) {
                const timeout = setTimeout(() => {
                    setDisplayText(displayText.slice(0, -1));
                }, 50);
                return () => clearTimeout(timeout);
            } else {
                setIsTyping(true);
            }
        }
    }, [displayText, isTyping, fullText]);

    const scrollToProjects = () => {
        document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
    };

    const scrollToContact = () => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    };

    const scrollToAbout = () => {
        document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section id="home" className="hero">
            {/* Floating Tech Icons */}
            <div className="floating-icons">
                <div className="floating-icon icon-1"><SiFlutter /></div>
                <div className="floating-icon icon-2"><SiDart /></div>
                <div className="floating-icon icon-3"><SiFirebase /></div>
                <div className="floating-icon icon-4"><FaMobileAlt /></div>
                <div className="floating-icon icon-5"><FaCode /></div>
                <div className="floating-icon icon-6"><FaRocket /></div>
            </div>

            {/* Animated Code Lines */}
            <div className="code-lines">
                <div className="code-line line-1"></div>
                <div className="code-line line-2"></div>
                <div className="code-line line-3"></div>
                <div className="code-line line-4"></div>
            </div>

            <div className="container">
                <div className="hero-content">
                    <p className="greeting animate-fadeInUp">{`Hi, I'm`}</p>
                    <h1 className="animate-fadeInUp delay-1">{profile.name}</h1>
                    <p className="title animate-fadeInUp delay-2">
                        {displayText}<span className="cursor">|</span>
                    </p>
                    <p className="tagline animate-fadeInUp delay-3">{profile.tagline}</p>

                    {/* Tech Stack Pills */}
                    <div className="tech-stack animate-fadeInUp delay-3">
                        <span className="tech-pill"><SiFlutter /> Flutter</span>
                        <span className="tech-pill"><SiDart /> Dart</span>
                        <span className="tech-pill"><SiFirebase /> Firebase</span>
                    </div>

                    <div className="hero-buttons animate-fadeInUp delay-4">
                        <button className="btn btn-primary" onClick={scrollToProjects}>
                            <FaRocket /> View My Apps
                        </button>
                        <button className="btn btn-secondary" onClick={scrollToContact}>
                            Get In Touch
                        </button>
                    </div>
                </div>

                <div className="hero-image animate-scaleIn delay-2">
                    {/* Phone Mockup */}
                    <div className="phone-mockup">
                        <div className="phone-frame">
                            <div className="phone-notch"></div>
                            <div className="phone-screen">
                                <img src="/mahmoud.png" alt={profile.name} className="avatar" />
                            </div>
                        </div>
                        {/* Floating App Icons around phone */}
                        <div className="app-icons">
                            <div className="app-icon app-1">📱</div>
                            <div className="app-icon app-2">🎯</div>
                            <div className="app-icon app-3">⚡</div>
                            <div className="app-icon app-4">🚀</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="scroll-indicator" onClick={scrollToAbout}>
                <FaArrowDown size={24} />
            </div>
        </section>
    );
}

export default Hero;
