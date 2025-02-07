import { VscSmiley } from "react-icons/vsc";
import { FaLaptopCode } from "react-icons/fa";
import { GiFiles } from "react-icons/gi";
import { MdAddIcCall } from "react-icons/md";

import { ImAttachment } from "react-icons/im";
import { NavLink } from 'react-router-dom';

import "./navv.css"

export default function Navv() {

    return (
        <>
            {/* <nav className='nav'>
                <span className='navlist'>
                    <ul className='ul'>
                        <NavLink to='/' style={{ textDecoration: 'none' }}><li>About</li></NavLink>
                        <NavLink to='/Skills' style={{ textDecoration: 'none' }}><li>Skills</li></NavLink>
                        <NavLink to='/ProjectsCategory' style={{ textDecoration: 'none' }}><li>Projects</li></NavLink>
                        <NavLink to='/Contact' style={{ textDecoration: 'none' }}><li >Contact</li></NavLink>
                    </ul>


                </span>

            </nav > */}
            <nav className='navTwo'>
                <span className='navlist'>
                    <ul className='ul'>
                        <NavLink to='/About' style={{ textDecoration: 'none' }}>
                            <li >
                                About <VscSmiley />
                            </li></NavLink>
                        <NavLink to='/Skills' style={{ textDecoration: 'none' }}>
                            <li>
                                Skills <FaLaptopCode />
                            </li></NavLink>
                        <NavLink to='/Projects' style={{ textDecoration: 'none' }}>
                            <li>
                                Projects <GiFiles />
                            </li></NavLink>
                        <NavLink to='/About' style={{ textDecoration: 'none' }}>
                            <li>
                                Contact  <MdAddIcCall />

                            </li></NavLink>

                        <li>
                            Resume <ImAttachment />
                        </li>
                    </ul>

                </span>
            </nav>
        </>
    )
}