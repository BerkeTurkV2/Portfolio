import React from 'react';
import Navbar from '../../components/Navbar';
import { FaBriefcase } from 'react-icons/fa';
import './Experiences.css';

function Experiences() {
    return (
        <div className='min-vh-100 bg-dark text-white'>
            <Navbar />
            <div className="container py-3 py-lg-5">
                <h3 className="mb-3 mb-lg-5 text-center">
                    <FaBriefcase className="me-2" style={{ color: '#00995e' }} />
                    Work Experience
                </h3>
                <div className="timeline">
                    {/* Mobilde tarih üstte, webde solda */}
                    <div className="timeline-item left">
                        <div className="date d-none d-md-block">07/2023 - 10/2023</div>
                        <div className="content">
                            <div className="d-block d-md-none mb-2 text-white">07/2023 - 10/2023</div>
                            <h4 style={{ color: '#00995e' }}>Freelance and Personal Projects</h4>
                            <p className="text-secondary mb-1">Mobile Application Developer - React Native</p>
                        </div>
                    </div>

                    <div className="timeline-item right">
                        <div className="date d-none d-md-block">12/2022 - 07/2023</div>
                        <div className="content">
                            <div className="d-block d-md-none mb-2 text-white">12/2022 - 07/2023</div>
                            <h4 style={{ color: '#00995e' }}>Hobitek Technology</h4>
                            <p className="text-secondary mb-1">Izmir | Mobile Application Developer ( Junior ) - React Native</p>
                            <p className="text-secondary">• Development of mobile applications for company's own device projects, targeting phones and tablets.</p>
                        </div>
                    </div>

                    <div className="timeline-item left">
                        <div className="date d-none d-md-block">09/2022 - 10/2022</div>
                        <div className="content">
                            <div className="d-block d-md-none mb-2 text-white">09/2022 - 10/2022</div>
                            <h4 style={{ color: '#00995e' }}>35inch</h4>
                            <p className="text-secondary mb-1">Izmir | Mobile Application Developer ( Junior ) - React Native</p>
                        </div>
                    </div>

                    <div className="timeline-item right">
                        <div className="date d-none d-md-block">06/2021 - 09/2021</div>
                        <div className="content">
                            <div className="d-block d-md-none mb-2 text-white">06/2021 - 09/2021</div>
                            <h4 style={{ color: '#00995e' }}>Hasan Sayın A.Ş. Technocity</h4>
                            <p className="text-secondary mb-1">Antalya | Intern - ( Image Processing - Mobile )</p>
                            <p className="text-secondary">• Designed AI models using Python libraries for image processing</p>
                            <p className="text-secondary">• Developed Java Android mobile application for project demonstration</p>
                        </div>
                    </div>

                    <div className="timeline-item left">
                        <div className="date d-none d-md-block">06/2019 - 09/2019</div>
                        <div className="content">
                            <div className="d-block d-md-none mb-2 text-white">06/2019 - 09/2019</div>
                            <h4 style={{ color: '#00995e' }}>Rentido Information Technologies</h4>
                            <p className="text-secondary mb-1">Antalya | Intern - Web Development</p>
                            <p className="text-secondary">• Frontend development using HTML/CSS/JS for rentido.com</p>
                            <p className="text-secondary">• Backend development using PHP-Laravel</p>
                        </div>
                    </div>

                    <div className="timeline-item right">
                        <div className="date d-none d-md-block">07/2018 - 10/2018</div>
                        <div className="content">
                            <div className="d-block d-md-none mb-2 text-white">07/2018 - 10/2018</div>
                            <h4 style={{ color: '#00995e' }}>Buzlu Sports Ice Rink</h4>
                            <p className="text-secondary mb-1">Antalya | Database Administrator</p>
                            <p className="text-secondary">• Configuration of company database, management of financial and personnel information</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Experiences;