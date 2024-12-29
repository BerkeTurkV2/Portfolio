import React, { useState } from 'react';
import Navbar from '../../components/Navbar';

function Projects() {
    const [currentProject, setCurrentProject] = useState(0);

    const projects = [
        {
            number: "01",
            title: "Dershane Yönetim Sistemi",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
            technologies: ["React", "Node.js", "MongoDB"],
            image: "https://placehold.co/600x400",
            demoLink: "#",
            githubLink: "#"
        },
        {
            number: "02",
            title: "E-Ticaret Projesi",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
            technologies: ["React", "Firebase", "Bootstrap"],
            image: "https://placehold.co/600x400",
            demoLink: "#",
            githubLink: "#"
        },
        // Diğer projeler için şablonu kullanabilirsiniz
    ];

    const nextProject = () => {
        setCurrentProject((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
    };

    const prevProject = () => {
        setCurrentProject((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
    };

    return (
        <div className='min-vh-100 bg-dark text-white'>
            <Navbar />
            <div className='container py-5'>
                <div className='row align-items-center'>
                    {/* Sol Taraf - Proje Bilgileri */}
                    <div className='col-lg-6 mb-4 mb-lg-0'>
                        <div className='position-relative'>
                            <div className='display-1 fw-bold opacity-25'>{projects[currentProject].number}</div>
                            <h2 className='display-4 mb-4'>{projects[currentProject].title}</h2>
                            <p className='lead mb-4'>{projects[currentProject].description}</p>
                            <div className='mb-4'>
                                {projects[currentProject].technologies.map((tech, index) => (
                                    <span key={index} className='badge bg-success me-2 mb-2'>{tech}</span>
                                ))}
                            </div>
                            <div className='d-flex gap-3'>
                                <a href={projects[currentProject].demoLink} className='btn btn-outline-light'>
                                    Demo'yu Görüntüle
                                </a>
                                <a href={projects[currentProject].githubLink} className='btn btn-outline-success'>
                                    Kaynak Kodu
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Sağ Taraf - Proje Görseli */}
                    <div className='col-lg-6'>
                        <div className='position-relative'>
                            <img 
                                src={projects[currentProject].image} 
                                alt={projects[currentProject].title}
                                className='img-fluid rounded shadow'
                            />
                        </div>
                    </div>
                </div>

                {/* Navigasyon Butonları */}
                <div className='d-flex justify-content-end gap-2 mt-4'>
                    <button 
                        onClick={prevProject} 
                        className='btn btn-success'
                        style={{ width: '50px', height: '50px' }}
                    >
                        ←
                    </button>
                    <button 
                        onClick={nextProject} 
                        className='btn btn-success'
                        style={{ width: '50px', height: '50px' }}
                    >
                        →
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Projects;