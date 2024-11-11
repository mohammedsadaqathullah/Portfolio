import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Navv() {
    const [click, setClick] = useState(false)
    // const [show, setShow] = useState("notshow")
    return (
        <nav>
            <NavLink to='/Homepage' style={{ textDecoration: 'none' }}><h1 id='h1s'>Portfolio</h1></NavLink>
            <button className='menu' onClick={() => setClick(!click)}>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </button>

            <span className='navlist'>
                <ul id={click ? "show" : "notshow"}>
                    <NavLink to='/Homepage' style={{ textDecoration: 'none' }}><li>Home</li></NavLink>
                    <NavLink to='/Skills' style={{ textDecoration: 'none' }}><li>Skills</li></NavLink>
                    <NavLink to='/Projects' style={{ textDecoration: 'none' }}><li>Projects</li></NavLink>
                    <NavLink to='/Certificates' style={{ textDecoration: 'none' }}><li>Certificates</li></NavLink>
                    <NavLink to='/Contact' style={{ textDecoration: 'none' }}><li className='contactus'>Contact</li></NavLink>

                </ul>


            </span>

        </nav >
    )
}