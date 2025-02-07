import React, { useState } from 'react';
import jobportalImg from '../../Media/jobd.png';
import ziiImg from '../../Media/zid.png';
import crudImg from '../../Media/crudd.png';
import todoImg from '../../Media/todod.png';
import hayasImg from '../../Media/hayasd.png';
import hayasAppImg from '../../Media/hayasApp.jpg';
import { NavLink } from 'react-router-dom';
import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
import { FaHome, FaLaptopCode } from 'react-icons/fa';
import { GiFiles } from 'react-icons/gi';
import { VscSmiley } from 'react-icons/vsc';

import "./projects.css";

export const Projects = () => {
    const [project, setProject] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [showRealTime, setShowRealTime] = useState(false);
    const [showPersonalProjects, setShowPersonalProjects] = useState(false);

    const personalProjects = [
        {
            image: jobportalImg,
            title: "Admin Job Portal",
            description: "The Admin Job Portal Interface is an advanced platform designed to enable seamless job management for administrators. It allows admins to easily post, edit, and delete job listings with full control over content. The front-end is built using React.js, featuring 90% custom CSS and 10% Material UI for an intuitive and responsive user experience. The backend is uniquely developed using AI, powered by Express and MongoDB Atlas, ensuring scalability, security, and intelligent data handling. The AI-driven backend optimizes job posting processes and enhances functionality, creating a highly efficient and adaptive admin portal.",
            url: "https://job-portal-fullstack.vercel.app/"
        },
        {
            image: ziiImg,
            title: "Zii Pizza : E-commerce UI",
            description: "The Zii Pizza E-commerce Site UI showcases a sleek, modern design built with React.js and React Bootstrap. This project focuses exclusively on the visual and interactive layout, featuring a responsive and intuitive interface that ensures a smooth browsing experience. While no functionality has been implemented yet, the UI is designed with key elements like product displays, navigation, and interactive components, providing a solid foundation for future development and functionality integration.",
            url: "https://zii-pizza.vercel.app/"
        },
        {
            image: crudImg,
            title: "CRUD operation",
            description: "The CRUD Site is a dynamic web application built with React.js, designed to perform Create, Read, Update, and Delete (CRUD) operations. The front-end offers an intuitive user interface that allows users to add, edit, update, and delete data effortlessly. The backend is powered by JSON fake APIs, enabling seamless data handling and interaction. This project provides a practical solution for managing data through a simple and responsive interface, showcasing the ability to implement basic CRUD functionalities in a web environment.",
            url: "https://crud-json-op.netlify.app/"
        },
        {
            image: todoImg,
            title: "ToDo List",
            description: "The To-Do List site is a user-friendly task management application built with React.js. It allows users to easily add tasks, mark them as completed, edit existing tasks, and delete them when no longer needed. The application integrates with localStorage to ensure that tasks are preserved even after the user refreshes or revisits the page. This simple yet effective tool offers a seamless, interactive experience for managing daily tasks, combining ease of use with the convenience of local data storage.",
            url: "https://daily-task-list-site.vercel.app/"
        }
    ];

    const realTimeProjects = [
        {
            image: hayasImg,
            title: "HAYAS - Ecommerce Website",
            description: "HAYAS is a user-friendly grocery and food ordering platform catering to the villages and towns surrounding Tirunelveli district. The site allows users to easily register and log in through Firebase Authentication, ensuring secure access to their personal accounts. Once logged in, users can browse a wide variety of grocery and food products, select their desired items, and confirm their order. Upon confirmation, an automatically generated order list will appear, and users are redirected to WhatsApp to complete the transaction and communicate directly with the service. The website also features promotional advertisements and video content, keeping users informed about the latest deals and updates. With a clean and intuitive product display, users can quickly add items to their cart and finalize their order with ease, making grocery and food shopping convenient and efficient.",
            url: "https://hayas-fast-delivery.netlify.app/"
        },
        {
            image: hayasAppImg,
            title: "HAYAS - Ecommerce APP",
            description: "Hayas is a mobile application developed with React Native, offering the same functionality as the website version but optimized for mobile devices. Users can securely register and log in using Firebase Authentication. Once logged in, they can browse grocery and food products, add items to their cart, and confirm orders. Upon confirmation, the app generates an order list and redirects users to WhatsApp for finalizing the order. Additionally, the app features advertising posts and videos, keeping users updated on promotions. Tailored for Tirunelveli district and surrounding towns, Hayas makes grocery and food shopping easy and efficient on mobile.",
            url: "https://expo.dev/artifacts/eas/mFJKV6vMWrwqLM9TQr8KU7.apk"
        }
    ];

    const handleRealTimeProjects = () => {
        if (showRealTime) {
            setProject([]);
        } else {
            setProject(realTimeProjects);
        }
        setShowRealTime(!showRealTime);
        setCurrentIndex(0);
        setShowPersonalProjects(false)
    };

    const handlePersonalProjects = () => {
        if (showPersonalProjects) {
            setProject([]);
        } else {
            setProject(personalProjects);
        }
        setShowPersonalProjects(!showPersonalProjects);
        setCurrentIndex(0);
        setShowRealTime(false);
    };

    const handleNext = () => {
        if (currentIndex < project.length - 1) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    return (
        <div className="projectsContainer">
            <div className="menuContainer">
                <div className='menu'>
                    <div className="first">
                        <NavLink to="/">
                            <p className='FM'><FaHome size={26} /> Home</p>
                        </NavLink>
                        <NavLink to="/About">
                            <p className='FM'><FaLaptopCode size={26} /> About</p>
                        </NavLink>

                        <NavLink to="/Skills">
                            <p className='FM'><VscSmiley size={26} /> Skills</p>
                        </NavLink>

                        <NavLink to="/Projects">
                            <p className='FM'><GiFiles size={26} /> Projects</p>
                        </NavLink>

                    </div>

                </div>

            </div>
            <div className="projectsBoxes">
                <div className="projectsHeadingContainer">
                    <h1
                        className={`projectsHeading ${showRealTime ? 'active' : ''}`}
                        onClick={handleRealTimeProjects}
                    >
                        Real-Time Projects
                    </h1>
                    <h1
                        className={`projectsHeading ${showPersonalProjects ? 'active' : ''}`}
                        onClick={handlePersonalProjects}
                    >
                        Personal Projects
                    </h1>
                </div>

                {project.length > 0 && (
                    <div className="projectsList">
                        <div className="projectsImageContainer">
                            <img src={project[currentIndex].image} alt={project[currentIndex].title} />
                        </div>
                        <div className="projectsTitle">
                            <h3>{project[currentIndex].title}</h3>
                        </div>
                        <div className='nextprevContainer'>
                            <span>
                                <button className='btnPrev' onClick={handlePrev} disabled={currentIndex === 0}><GrFormPrevious size={30} /></button>
                            </span>
                            <span>
                                <button className='btnNext' onClick={handleNext} disabled={currentIndex === project.length - 1}><MdNavigateNext size={30} /></button>
                            </span>
                        </div>
                        <div id="projectsDescription">
                            <p>{project[currentIndex].description}</p>
                        </div>
                        <div className="projectLink">
                            <a href={project[currentIndex].url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "brown" }}>View Project</a>
                        </div>
                        <div className="gap"></div>

                    </div>
                )}
            </div>

        </div>
    );
};
