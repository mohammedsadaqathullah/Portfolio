import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaHome, FaLaptopCode } from 'react-icons/fa';
import { GiFiles } from 'react-icons/gi';
import { VscSmiley } from 'react-icons/vsc';

import "./skills.css"

export const Skills = () => {
    return (
        <div className="skillsContainer">
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
            <div className="skillsBoxes">
                <div className="box">
                    <div className="heading">Web Developement</div>
                    <div className="cardContainer">

                        <div className="skillsCardOne">

                            <p className="skills">React js</p>
                        </div>
                        <div className="skillsCard">

                            <p className="skills">HTML</p>
                        </div>
                        <div className="skillsCard">

                            <p className="skills">CSS</p>
                        </div>
                        <div className="skillsCard">

                            <p className="skills">Tailwind CSS</p>
                        </div>
                        <div className="skillsCard">

                            <p className="skills">Bulma</p>
                        </div>
                        <div className="skillsCard">

                            <p className="skills">JavaScript (ES6+)</p>
                        </div>
                        <div className="skillsCard">

                            <p className="skills">Vite</p>
                        </div>
                        <div className="skillsCard">

                            <p className="skills">React Hooks</p>
                        </div>
                        <div className="skillsCard">

                            <p className="skills">React Router</p>
                        </div><div className="skillsCard">

                            <p className="skills">React Icons</p>
                        </div>

                    </div>
                </div>


                <div className="box">
                    <div className="heading">App Development</div>
                    <div className="cardContainer">
                        <div className="skillsCard">

                            <p className="skills">React Native</p>
                        </div>
                        <div className="skillsCard">

                            <p className="skills">Expo (Expo CLI,Expo Go)</p>
                        </div>
                        <div className="skillsCard">

                            <p className="skills">React Native Navigation</p>
                        </div>
                        <div className="skillsCard">

                            <p className="skills">React Native Async Storage</p>
                        </div>
                        <div className="skillsCard">

                            <p className="skills">Expo AV (Audio & Video Handling)</p>
                        </div>

                    </div>
                </div>


                <div className="box">
                    <div className="heading">Backend & Authentication</div>
                    <div className="cardContainer">
                        <div className="skillsCard">

                            <p className="skills">Firebase Authentication</p>
                        </div>
                        <div className="skillsCard">

                            <p className="skills">Node.js & Express.js (Basic)</p>
                        </div>
                        <div className="skillsCard">

                            <p className="skills">MongoDB Atlas (Basic)</p>
                        </div>
                    </div>
                </div>
                <div className="box">
                    <div className="heading">API Integration & Data Management</div>
                    <div className="cardContainer">
                        <div className="skillsCard">

                            <p className="skills">React Context API</p>
                        </div>

                        <div className="skillsCard">

                            <p className="skills">Ajax</p>
                        </div>
                        <div className="skillsCard">

                            <p className="skills">Axios</p>
                        </div><div className="skillsCard">

                            <p className="skills">Fetch API</p>
                        </div><div className="skillsCard">

                            <p className="skills">Promises</p>
                        </div><div className="skillsCard">

                            <p className="skills">Async/Await</p>
                        </div><div className="skillsCard">

                            <p className="skills">CRUD Operation</p>
                        </div>
                    </div>
                </div>

                <div className="box">
                    <div className="heading">UI & Styling</div>
                    <div className="cardContainer">
                        <div className="skillsCard">

                            <p className="skills">React Bootstrap</p>
                        </div>
                        <div className="skillsCard">

                            <p className="skills">Material UI</p>
                        </div>
                        <div className="skillsCard">

                            <p className="skills">Tailwind CSS</p>
                        </div><div className="skillsCard">

                            <p className="skills">Styled Components</p>
                        </div><div className="skillsCard">

                            <p className="skills">Responsive Design</p>
                        </div>
                    </div>
                </div>

                <div className="box">
                    <div className="heading">Version Control & Development Tools</div>
                    <div className="cardContainer">
                        <div className="skillsCard">

                            <p className="skills">Git & GitHub</p>
                        </div>
                        <div className="skillsCard">

                            <p className="skills">VS Code</p>
                        </div>
                        <div className="skillsCard">

                            <p className="skills">Postman (API Testing)</p>
                        </div>
                        <div className="skillsCard">

                            <p className="skills">React Developer Tools</p>
                        </div>
                    </div>
                </div>

            </div>
        </div >
    )
}
