import './Homepage.css'
// import bgvideo from "../../Media/bg.mp4"
import avatar from "../../Media/avatar2.jpg"
import Navv from '../Navbar/Navv';
import { useEffect, useRef } from 'react';


function Homepage() {
    const videoRef = useRef(null);

    // useEffect(() => {
    //     const observer = new IntersectionObserver(
    //         (entries) => {
    //             entries.forEach(entry => {
    //                 if (entry.isIntersecting) {
    //                     videoRef.current.play();
    //                 } else {
    //                     videoRef.current.pause();
    //                 }
    //             });
    //         },
    //         { threshold: 0.05 } // Start playing when 50% of the video is visible
    //     );
    //     if (videoRef.current) {
    //         observer.observe(videoRef.current);
    //     }
    //     return () => {
    //         observer.disconnect();
    //     };
    // }, []);
    return (

        <div className='homePageBody' id='homepage'>
            {/* <div className='video-background'>
                <video ref={videoRef} autoPlay loop muted className='video' preload='none'>
                    <source src={bgvideo} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div> */}
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
                {/* <div className="down">
                    <a href="/portfoliopdf.pdf" download="My_Portfolio.pdf">
                        <button className='downloadbtn'>
                            Download Resume &darr;
                        </button>
                    </a>
                </div> */}
            </div>

        </div>

    )
}
export default Homepage;
