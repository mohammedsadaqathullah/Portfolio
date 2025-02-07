import React from 'react'
import Navv from './Navv'
import "./projectCategory.css"
import { Link } from 'react-router-dom'

export const ProjectCategory = () => {
    return (
        <>
            <Navv />
            <div className='container'>
                <div className='box'>
                    <div className='one'>
                        <Link to='/RealTimeProjects' style={{ textDecoration: 'none', color: '#ccc4c4' }}>
                            <p>
                                Real-time Projects
                            </p></Link>
                    </div>
                    <div className='two'>
                        <Link to='/Projects' style={{ textDecoration: 'none', color: '#ccc4c4' }}>
                            <p>

                                Personal Projects
                            </p></Link>
                    </div>
                </div>
            </div>
        </>
    )
}
