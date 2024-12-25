import React from 'react';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg py-3">
            <div className="container">
                <a className="navbar-brand fs-3 fw-bold text-white" href="/">
                    Berke<span style={{ color: '#00ff9d' }}>.</span>
                </a>
                <div className="d-flex align-items-center gap-4">
                    <a href="/" className="nav-link" style={{ color: '#00ff9d' }}>Home</a>
                    <a href="/Education" className="nav-link text-white">Education</a>
                    <a href="/resume" className="nav-link text-white">Resume</a>
                    <a href="/work" className="nav-link text-white">Work</a>
                    <a href="/contact" className="nav-link text-white">Contact</a>
                    <button className="btn rounded-pill px-4" style={{ backgroundColor: '#00ff9d', color: 'black' }}>
                        Hire me
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;