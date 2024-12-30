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
            sourceUrl: "https://github.com/BerkeTurkV2/CourseManagementSystem"
        },
        {
            number: "02",
            title: "Portfolio",
            description: "This project is the website you are currently visiting. The code is written following modern architectural principles. Components and content are designed to be customizable. Therefore, my code is publicly available. Anyone can download it, modify the content sections, and use it as their own portfolio website.",
            technologies: ["React", "Next.js", "Bootstrap"],
            image: "/project_images/p2.png",
            demoUrl: "#",
            sourceUrl: "https://github.com/BerkeTurkV2/Portfolio"
        },
        {
            number: "03",
            title: "MovSer",
            description: "MovSer is a comprehensive application designed for movie and series enthusiasts. You can easily save the films and series you've watched, add the content you want to watch to your list, and even create your own custom lists to organize your favorite content and browse them at your convenience.",
            description2: "You can be in touch with your friends, share the lists you create with your friends and look at their suggestions. It is a project written to receive and give movie and series suggestions. You can actively reach the Google Play Store link from the arrow below.",
            technologies: ["React Native", "Node.js", "Supabase"],
            image: "/project_images/p3.png",
            demoUrl: "https://play.google.com/store/apps/details?id=com.movser",
            sourceUrl: "https://github.com/BerkeTurkV2/MovSer"
        },
        {
            number: "04",
            title: "TaskForce",
            description: "TaskForce is an application designed for time management, note-taking, and special day reminders. It features a simple and user-friendly interface. Users can record their daily or weekly notes, track countdowns for upcoming presentations and special days, and view birthdays and other significant dates on a calendar with reminders. To download the app, click on the arrow below to access the Google Play Store link.",
            technologies: ["React Native"],
            image: "/project_images/p4.png",
            demoUrl: "https://play.google.com/store/apps/details?id=com.taskforceTime",
            sourceUrl: "https://github.com/BerkeTurkV2/TaskForce"
        },
        {
            number: "05",
            title: "Bitki Atlası",
            description: "This project is a plant purchasing application. Users can access information about various plants, such as houseplants and garden plants, learn about their unique characteristics and care requirements, and add them to their cart for purchase based on stock availability. Currently, the app only includes demo features.",
            technologies: ["React Native"],
            image: "/project_images/p5.png",
            demoUrl: "#",
            sourceUrl: "https://github.com/BerkeTurkV2/BitkiAtlasi"
        },
        {
            number: "06",
            title: "Başdaş Market",
            description: "This project is a sample interface designed for 'Akıllı Ticaret' a company tasked with developing a mobile application for Başdaş Market. It provides a prototype design and functionality for online grocery shopping, with data being fetched from an API.",
            technologies: ["React Native"],
            image: "/project_images/p6.png",
            demoUrl: "#",
            sourceUrl: "https://github.com/BerkeTurkV2/kmz-coding-test"
        },
        {
            number: "07",
            title: "Kiraz",
            description: "Kiraz is a sample project designed for online grocery shopping, featuring user-friendly and customizable interface designs.",
            technologies: ["React Native"],
            image: "/project_images/p7.png",
            demoUrl: "#",
            sourceUrl: "https://github.com/BerkeTurkV2/Kiraz"
        },
        {
            number: "08",
            title: "Orderify",
            description: "This project is a restaurant/café ordering application being developed for both web and mobile platforms. Unlike other projects, it offers a range of conveniences such as viewing the menu, placing active orders, and managing orders directly within the establishment. It is designed to streamline the ordering process and minimize interaction with waitstaff. The coding process is ongoing, and this section will be updated soon.",
            technologies: ["React", "React Native", "Nodejs", "Bootstrap"],
            image: "/project_images/p8.png",
            demoUrl: "#",
            sourceUrl: "https://github.com/BerkeTurkV2/orderify-app"
        },
        {
            number: "09",
            title: "Akdeniz Sosyal",
            description: "Akdeniz Social Project is a mobile application developed as a graduation project, designed exclusively for Akdeniz University students. The app aims to create a platform where students can view events, clubs, cafes, and venues in one place, easily track on-campus and off-campus social activities, and create new ones to engage with others.",
            technologies: ["Java", "Firebase"],
            image: "/project_images/p9.png",
            demoUrl: "#",
            sourceUrl: "https://github.com/BerkeTurkV2/AkdenizSosyalApp"
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
                <div className='row'>
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
                            <div className='border-bottom border-white mb-3'></div>
                            <div className="d-flex gap-3 mt-4">
                                <a href={projects[currentProject].demoUrl} target="_blank" rel="noopener noreferrer"
                                    className="btn btn-outline-light rounded-circle p-2">
                                    <FaSquareArrowUpRight className="fs-3" />
                                </a>
                                <a href={projects[currentProject].sourceUrl} target="_blank" rel="noopener noreferrer"
                                    className="btn btn-outline-light rounded-circle p-2"
                                    style={{ border: '1px solid #00995e' }}>
                                    <FaGithub className="fs-3 my-text-color" />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Sağ Taraf - Proje Görseli */}
                    <div className='col-lg-6 align-self-center mt-2 mt-lg-0'>
                        <div className="row">
                            <div className='position-relative'>
                                <img
                                    src={projects[currentProject].image}
                                    alt={projects[currentProject].title}
                                    className='img-fluid rounded-5 shadow'
                                />
                            </div>
                            {/* Navigasyon Butonları */}
                            <div className='d-flex justify-content-end gap-2 mt-3 me-5'>
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
                </div>
            </div>
        </div>
    );
}

export default Projects;