import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link for SPA navigation
import { FaMusic, FaUser } from 'react-icons/fa';  // Replace FaUserCircle with FaUser for a human icon
import { MdHome } from 'react-icons/md';
import { AiFillAudio } from 'react-icons/ai';
import './Header.css';

function Header() {
    const [isFixed, setIsFixed] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);

    // Listen for scroll event to determine if the second header should be fixed
    const handleScroll = () => {
        if (window.scrollY > 100) {  // 100px from top or adjust based on your design
            setIsFixed(true);
        } else {
            setIsFixed(false);
        }
    };

    // Set up scroll event listener
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        // Detect user preference for dark mode
        const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
        setIsDarkMode(prefersDarkMode);

        // Listen for changes in system theme (light/dark)
        const themeChangeListener = (e) => {
            setIsDarkMode(e.matches);
        };

        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', themeChangeListener);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.matchMedia('(prefers-color-scheme: dark)').removeEventListener('change', themeChangeListener);
        };
    }, []);

    return (
        <div className={`header-container ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
            {/* First Header - Main Navigation */}
            <header className={`header ${isDarkMode ? 'dark-header' : 'light-header'}`}>
                {/* Logo Section */}
                <div className="logo">
                    <img src="/download (1).png" alt="BBC Logo" />
                </div>

                {/* Profile Icon and Sign In Button Section */}
                <div className="profile-signin">
                    <div className="profile-icon">
                        {/* Replaced FaUserCircle with FaUser for a human figure icon */}
                        <FaUser size={30} className={`icon ${isDarkMode ? 'dark-icon' : 'light-icon'} black-icon`} />
                    </div>

                    <div className="sign-in">
                        <div className="sign-in-content">
                            <button>Sign In</button>
                        </div>
                    </div>
                </div>

                {/* Main Navigation Links */}
                <nav className="nav-links">
                    <ul>
                        <li><Link to="/" id="homepage-link">Home</Link></li>
                        <li><Link to="/news">News</Link></li>
                        <li><Link to="/sport">Sport</Link></li>
                        <li><Link to="/business">Business</Link></li>
                        <li><Link to="/innovation">Innovation</Link></li>
                        <li><Link to="/culture">Culture</Link></li>
                        <li><Link to="/travel">Travel</Link></li>
                    </ul>
                </nav>

                {/* Right Side Icons Section */}
                <div className="header-icons">
                    <div className="more-menu">
                        <button>...</button>
                    </div>

                    <div className="search-icon">
                        <button>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#000">
                                <circle cx="11" cy="11" r="8" stroke-width="2"></circle>
                                <line x1="16" y1="16" x2="22" y2="22" stroke-width="2"></line>
                            </svg>

                        </button>
                    </div>
                </div>
            </header>

            {/* Second Header - Sound Navigation with Fixed on Scroll */}
            <header className={`second-header ${isFixed ? 'fixed' : ''} ${isDarkMode ? 'dark-header' : 'light-header'}`}>
                <div className="sounds-logo">
                    <span className="sounds-text">SOUNDS</span>
                </div>
                <nav className="second-nav-links">
                    <ul>
                        <li><Link to="/"><MdHome size={20} className={`icon ${isDarkMode ? 'dark-icon' : 'light-icon'}`} /> Home</Link></li>
                        <li><Link to="/music"><FaMusic size={20} className={`icon ${isDarkMode ? 'dark-icon' : 'light-icon'}`} /> Music</Link></li>
                        <li><Link to="/podcasts"><AiFillAudio size={20} className={`icon ${isDarkMode ? 'dark-icon' : 'light-icon'}`} /> Podcasts</Link></li>
                        <li><Link to="/my-sounds"><FaUser size={20} className={`icon ${isDarkMode ? 'dark-icon' : 'light-icon'} black-icon`} /> My Sounds</Link></li>
                    </ul>
                </nav>
            </header>
        </div>
    );
}

export default Header;
