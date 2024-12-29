import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaReact, FaNodeJs, FaJava } from 'react-icons/fa';
import { SiJavascript, SiMysql, SiSupabase, SiBootstrap, SiFlutter, SiDart, SiFirebase, SiTailwindcss, SiRedux } from 'react-icons/si';
import './Home.css';
import '../../styles/variables.css';

import Navbar from '../../components/Navbar';

function Home() {
    return (
        <div className='min-vh-100 bg-dark text-white' >
            <Navbar />
            <div className="container py-5">
                <div className="row">
                    <div className="col-lg-6 align-self-center">
                        <p className="fs-4 fw-bold mb-2">Computer Engineer & Software Developer</p>
                        <h1 className="display-3 fw-bold text-secondary mb-4">
                            Hello I'm{' '}
                            <span style={{ color: '#00995e' }}>Berke Türk</span>
                        </h1>
                        <p className="text-white mb-5 fs-5">
                            "I am working with React Native and React, currently focusing on expanding my expertise by learning Node.js and .NET Core."
                        </p>

                        <div className="d-flex gap-4 mb-5">
                            <button className="btn btn-outline rounded-pill px-4 py-2 d-flex align-items-center gap-2"
                                style={{ borderColor: '#00995e', color: '#00995e' }}>
                                DOWNLOAD CV <span>↓</span>
                            </button>
                            <div className="d-flex gap-4 align-items-center">
                                <a href="https://github.com" className="text-white fs-4 social-icon">
                                    <FaGithub />
                                </a>
                                <a href="https://linkedin.com" className="text-white fs-4 social-icon">
                                    <FaLinkedin />
                                </a>
                                <a href="https://instagram.com" className="text-white fs-4 social-icon">
                                    <FaInstagram />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6 d-flex justify-content-center">
                        <div className="position-relative">
                            <div className="profile-circle">
                                <div className="rotating-border"></div>
                                <div className="rotating-border-second"></div>
                                <div className="profile-image">
                                    <img
                                        src="/profile.jpg"
                                        alt="Profile"
                                        className="img-fluid rounded-circle"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='row mt-5'>
                        <div className="col-lg-7 mt-5">
                            <h5 className="mb-3 text-secondary">Main Skills:</h5>
                            <div className="d-flex gap-4 flex-wrap">
                                <div className="skill-icon">
                                    <FaReact size={24} title="React" />
                                    <span>React</span>
                                </div>
                                <div className="skill-icon">
                                    <FaReact size={24} title="React Native" />
                                    <span>React Native</span>
                                </div>
                                <div className="skill-icon">
                                    <FaNodeJs size={24} title="Node.js" />
                                    <span>Node.js</span>
                                </div>
                                <div className="skill-icon">
                                    <SiJavascript size={24} title="JavaScript" />
                                    <span>JavaScript</span>
                                </div>
                                <div className="skill-icon">
                                    <SiMysql size={24} title="MySQL" />
                                    <span>MySQL</span>
                                </div>
                                <div className="skill-icon">
                                    <SiSupabase size={24} title="Supabase" />
                                    <span>Supabase</span>
                                </div>
                                <div className="skill-icon">
                                    <SiBootstrap size={24} title="Bootstrap" />
                                    <span>Bootstrap</span>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-5 mt-5' >
                            <h5 className="mb-3 text-secondary">Additional Skills:</h5>
                            <div className="d-flex gap-4 flex-wrap">
                                <div className="skill-icon">
                                    <SiFlutter size={24} title="Flutter" />
                                    <span>Flutter</span>
                                </div>
                                <div className="skill-icon">
                                    <SiDart size={24} title="Dart" />
                                    <span>Dart</span>
                                </div>
                                <div className="skill-icon">
                                    <SiRedux size={24} title="Redux" />
                                    <span>Redux</span>
                                </div>
                                <div className="skill-icon">
                                    <SiFirebase size={24} title="Firebase" />
                                    <span>Firebase</span>
                                </div>
                                <div className="skill-icon">
                                    <SiTailwindcss size={24} title="Tailwind" />
                                    <span>Tailwind</span>
                                </div>
                                <div className="skill-icon">
                                    <FaJava size={24} title="Java" />
                                    <span>Java</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;