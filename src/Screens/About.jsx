import React from 'react'
import { NavLink } from 'react-router-dom'
import { IoCallOutline } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";

import avatar from '../Media/avatar4.png'
import "./about.css"
import { FaHome, FaLaptopCode } from 'react-icons/fa';
import { GiFiles } from 'react-icons/gi';
import { VscSmiley } from 'react-icons/vsc';

export const About = () => {
    const phoneNumber = "+918220206483";
    const email = "mdsadaq.fed@gmail.com";
    const whatsappLink = `https://wa.me/${phoneNumber}`;
    const linkedinLink = "https://www.linkedin.com/in/mohammedsadaqathullah";

    return (
        <div className="aboutContainer">
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
            <div className='aboutContentContainer'>
                <div className="aboutImageContainer">
                    <img src={avatar} alt="Avatar" className="aboutImage" />
                </div>
                <p className='object'>
                    <span className='highlights'>A Front-End & React Native Developer</span> with expertise in
                    <span className='highlights'>React.js, React Native, and modern JavaScript frameworks,</span>
                    specializing in the development of <span className='highlights'>scalable, high-performance web and mobile applications.</span>
                    Skilled in <span className='highlights'>state management, React hooks, and API integration,</span>
                    I focus on delivering seamless user experiences with clean, maintainable code.
                    <br />

                    As the registered <span className="highlights">Founder of Zii Techs,</span>
                    a micro enterprise dedicated to <span className='highlights'>freelancing,</span>
                    I provide <span className='highlights'>custom software development, mobile and web solutions, and technical consultancy.</span>
                    Committed to <span className='highlights'>continuous learning and innovation,</span>
                    I strive to create <span className='highlights'>efficient, user-centric digital solutions</span>
                    that align with business objectives.
                </p>
            </div>
            <div className="downloadContainer">
                <div className="downloadButton">Download CV</div>
            </div>
            <div className="contactContainer">
                <h1 className='contactHeading'>Contact</h1>
                <div className="contactList">
                    <a href={`tel:${phoneNumber}`} className='contactListItems' style={{ textDecoration: 'none', color: "white" }}>

                        Call <IoCallOutline size={25} />

                    </a>

                    <a href={whatsappLink} className='contactListItems' target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: "white" }}>

                        Whatsapp <FaWhatsapp size={25} />

                    </a>

                    <a href={`mailto:${email}`} className='contactListItems' style={{ textDecoration: 'none', color: "white" }}>

                        Gmail <SiGmail size={25} />

                    </a>

                    <a href={linkedinLink} className='contactListItems' target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: "white" }}>

                        Linked <FaLinkedin size={25} />

                    </a>
                </div>
            </div>
            <div className='gap'></div>
        </div>
    )
}
