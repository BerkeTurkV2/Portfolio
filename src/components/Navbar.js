import React from 'react';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg py-3">
            <div className="container">
                <a className="navbar-brand" href="/">
                    <img className="rounded-circle bg-dark" src="/b2.png" alt="Logo" style={{ width: '100px', height: '100px' }} />
                </a>
                <div className="d-flex align-items-center gap-4">
                    <a href="/" className="nav-link fs-5 fw-bold" style={{ color: '#00995e' }}>Home</a>
                    <a href="/Education" className="nav-link text-white fs-5 fw-bold">Education</a>
                    <a href="/Works" className="nav-link text-white fs-5 fw-bold">Works</a>
                    <a href="/Projects" className="nav-link text-white fs-5 fw-bold">Projects</a>
                    <a href="/Contact" className="nav-link text-white fs-5 fw-bold">Contact</a>
                    <button className="btn rounded-pill px-3 fs-5" style={{ backgroundColor: '#00995e', color: 'black' }}>
                        Write me
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;