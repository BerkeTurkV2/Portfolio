import React from 'react';
import Navbar from '../../components/Navbar';
import { FaGraduationCap, FaCertificate } from 'react-icons/fa';
import './Education.css';

function Education() {
    return (
        <div className='min-vh-100 bg-dark text-white'>
            <Navbar />
            <div className="container py-5">
                <div className="row">
                    <div className="col-lg-6 mb-4">
                        <h3 className="mb-4 text-center">
                            <FaGraduationCap className="me-2" style={{ color: '#00995e' }} />
                            Education
                        </h3>
                        <div className="border-start border-success ps-4">
                            <div className="mb-4">
                                <h4 style={{ color: '#00995e' }}>Ege University</h4>
                                <p className="text-secondary mb-1">International Computer - Master's Degree</p>
                                <p className="text-secondary mb-1">Izmir</p>
                                <p className="text-secondary">2024 - Present</p>
                            </div>

                            <div className="mb-4">
                                <h4 style={{ color: '#00995e' }}>Akdeniz University</h4>
                                <p className="text-secondary mb-1">Computer Engineering (English) - Bachelor's Degree</p>
                                <p className="text-secondary mb-1">Antalya</p>
                                <p className="text-secondary">2016 - 2022</p>
                            </div>

                            <div className="mb-4">
                                <h4 style={{ color: '#00995e' }}>Yunus Emre Anatolian High School</h4>
                                <p className="text-secondary mb-1">Science and Mathematics</p>
                                <p className="text-secondary mb-1">Izmir</p>
                                <p className="text-secondary">2012 - 2016</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <h3 className="mb-4 text-center">
                            <FaCertificate className="me-2" style={{ color: '#00995e' }} />
                            Courses & Certificates
                        </h3>
                        <div className="border-start border-success ps-4">
                            <div className="mb-4">
                                <h4 style={{ color: '#00995e' }}>React Native</h4>
                                <p className="text-secondary mb-1">TechCr</p>
                                <p className="text-secondary mb-1">Mobile app developer with React Native</p>
                                <p className="text-secondary">2022</p>
                            </div>
                            <div className="mb-4">
                                <h4 style={{ color: '#00995e' }}>Flutter</h4>
                                <p className="text-secondary mb-1">Google Skillshop</p>
                                <p className="text-secondary mb-1">Mobile app developer with Flutter</p>
                                <p className="text-secondary">2022</p>
                            </div>

                            <div className="mb-4">
                                <h4 style={{ color: '#00995e' }}>Java Spring</h4>
                                <p className="text-secondary mb-1">PatikaDev</p>
                                <p className="text-secondary mb-1">Norma Company Bootcamp</p>
                                <p className="text-secondary">2022</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Education;