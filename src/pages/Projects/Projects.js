import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import { FaGithub } from 'react-icons/fa';
import { FaSquareArrowUpRight } from "react-icons/fa6";

function Projects() {
    const [currentProject, setCurrentProject] = useState(0);

    const projects = [
        {
            number: "01",
            title: "X-Kurs Merkezi",
            description: "This project consists of dashboards for a course center.",
            description2: "Admin Panel: The management team can view and update student and teacher information, add exam results, and manage feedback.",
            description3: "Student Panel: Students can view their exam results, attendance, and homework, and schedule lessons.",
            description4: "Teacher Panel: Teachers can organize their schedules and manage student information and performance.",
            technologies: ["React", "Node.js", "Bootstrap", "MySQL"],
            image: "/project_images/p1.png",
            demoUrl: "#",
            sourceUrl: "#"
        },
        {
            number: "02",
            title: "Portfolio",
            description: "This project is the website you are currently visiting. The code is written following modern architectural principles. Components and content are designed to be customizable. Therefore, my code is publicly available. Anyone can download it, modify the content sections, and use it as their own portfolio website.",
            technologies: ["React", "Next.js", "Bootstrap"],
            image: "/project_images/p2.png",
            demoUrl: "#",
            sourceUrl: "#"
        },
        {
            number: "03",
            title: "MovSer",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
            technologies: ["React", "Node.js", "MongoDB"],
            image: "https://placehold.co/600x400",
            demoUrl: "#",
            sourceUrl: "#"
        },
        {
            number: "04",
            title: "TaskForce",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
            technologies: ["React", "Firebase", "Bootstrap"],
            image: "https://placehold.co/600x400",
            demoUrl: "#",
            sourceUrl: "#"
        },
        {
            number: "05",
            title: "Bitki Atlası",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
            technologies: ["React", "Node.js", "MongoDB"],
            image: "https://placehold.co/600x400",
            demoUrl: "#",
            sourceUrl: "#"
        },
        {
            number: "06",
            title: "Başdaş Market",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
            technologies: ["React", "Firebase", "Bootstrap"],
            image: "https://placehold.co/600x400",
            demoUrl: "#",
            sourceUrl: "#"
        },
        {
            number: "07",
            title: "Kiraz",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
            technologies: ["React", "Firebase", "Bootstrap"],
            image: "https://placehold.co/600x400",
            demoUrl: "#",
            sourceUrl: "#"
        },
        {
            number: "08",
            title: "Orderify",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
            technologies: ["React", "Firebase", "Bootstrap"],
            image: "https://placehold.co/600x400",
            demoUrl: "#",
            sourceUrl: "#"
        },
        {
            number: "09",
            title: "Akdeniz Sosyal",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
            technologies: ["React", "Firebase", "Bootstrap"],
            image: "https://placehold.co/600x400",
            demoUrl: "#",
            sourceUrl: "#"
        },
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
            <div className='container py-3 py-lg-5'>
                <div className='row align-items-center'>
                    {/* Sol Taraf - Proje Bilgileri */}
                    <div className='col-lg-6 mb-4 mb-lg-0'>
                        <div className='position-relative'>
                            <div className='text-with-border'>{projects[currentProject].number}</div>
                            <h2 className='display-5 fw-bold mb-4'>{projects[currentProject].title}</h2>
                            <p className='lead mb-3'>{projects[currentProject].description}</p>
                            <p className='lead mb-3'>{projects[currentProject].description2}</p>
                            <p className='lead mb-3'>{projects[currentProject].description3}</p>
                            <p className='lead mb-3'>{projects[currentProject].description4}</p>
                            <div className='mb-4'>
                                {projects[currentProject].technologies.map((tech, index) => (
                                    <span key={index} className='badge p-2 my-bg-color me-2'>{tech}</span>
                                ))}
                            </div>
                            <div className='border-bottom border-white mb-4'></div>
                            <div className="d-flex gap-3 mt-4">
                                <a href={projects[currentProject].demoUrl} target="_blank" rel="noopener noreferrer" 
                                   className="btn btn-outline-light rounded-circle p-2">
                                    <FaSquareArrowUpRight  className="fs-3" />
                                </a>
                                <a href={projects[currentProject].sourceUrl} target="_blank" rel="noopener noreferrer" 
                                   className="btn btn-outline-light rounded-circle p-2"
                                   style={{ border: '1px solid #00995e' }}>
                                    <FaGithub className="fs-3 my-text-color"/>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Sağ Taraf - Proje Görseli */}
                    <div className='col-lg-6 mt-2'>
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
                <div className='d-flex justify-content-end gap-2 mt-4 me-5'>
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