import './Homepage.css'
import avatar from "../../Media/avatar2.jpg"
import Navv from '../Navbar/Navv';
import { useEffect, useRef } from 'react';


function Homepage() {
    const videoRef = useRef(null);

    return (

        <div className='homePageBody' id='homepage'>

            <div className="homepageContainer">
                <div className="leftcontainer">
                    <div className='imageContainer'>
                        <img src={avatar} className='avatar' onContextMenu={(e) => e.preventDefault()} />
                    </div>
                    <h2 className='name'>Hi, I'm <br />Mohammed Sadaqathullah</h2>
                    <p className='title'>Front-End Developer & Entrepreneur</p>

                </div>
                <div className="homepageNav">

                    <Navv />
                </div>
                <div className="gap"></div>
                <div className="homepageGap"></div>

            </div>

        </div>

    )
}
export default Homepage;
