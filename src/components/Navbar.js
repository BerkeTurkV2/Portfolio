import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const isActiveRoute = (route) => {
        return location.pathname === route;
    };

    return (
        <nav className="navbar navbar-expand-lg bg-dark">
            <div className="container mt-1 mt-lg-3 mb-0 mb-lg-4">
                <a href="/" className="navbar-brand fs-4 fw-bold" style={{ color: '#00995e' }}>BT</a>
                
                <button 
                    className="navbar-toggler me-2" 
                    type="button" 
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <div className={`hamburger ${isOpen ? 'active' : ''}`}>
                        <span className="bar"></span>
                        <span className="bar"></span>
                        <span className="bar"></span>
                    </div>
                </button>

                <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`}>
                    <div className="navbar-nav ms-auto gap-lg-4">
                        <a 
                            href="/" 
                            className={`nav-link fs-5 fw-bold ${isActiveRoute('/') ? 'active-link' : 'text-white'}`}
                        >
                            Home
                        </a>
                        <a 
                            href="/Education" 
                            className={`nav-link fs-5 fw-bold ${isActiveRoute('/Education') ? 'active-link' : 'text-white'}`}
                        >
                            Education
                        </a>
                        <a 
                            href="/Experiences" 
                            className={`nav-link fs-5 fw-bold ${isActiveRoute('/Experiences') ? 'active-link' : 'text-white'}`}
                        >
                            Experiences
                        </a>
                        <a 
                            href="/Projects" 
                            className={`nav-link fs-5 fw-bold ${isActiveRoute('/Projects') ? 'active-link' : 'text-white'}`}
                        >
                            Projects
                        </a>
                        <a 
                            href="/Contact" 
                            className={`nav-link fs-5 fw-bold ${isActiveRoute('/Contact') ? 'active-link' : 'text-white'}`}
                        >
                            Contact
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;