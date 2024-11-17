import './Homepage.css'
import img2 from './left.png'
import Navv from './Navv';


function Homepage() {
    return (
        <div className='body' id='homepage'>
            <Navv />
            <div className="container">
                <div className="leftcontainer">
                    <h2 className='name'>Mohammed Sadaqathullah</h2>
                    <p className='title'>Front-End Developer</p>
                    <p className='object'>Front-End Developer with the  knowledge of <span className="highlights">React.js,</span> building dynamic, responsive, and user-friendly web applications using efficient <span className="highlights">state management and reusable components.</span> Graduated with a <span className="highlights">Bachelor of Science in Psychology,</span> providing a solid understanding of user behavior and cognitive processes. Eager to <span className='highlights'>leverage psychological insights to enhance user experience and drive effective design</span> in the IT field.</p>
                </div>
                <div className="rightcontainer">
                    <img src={img2} className='img' alt="" />
                </div>
            </div>
            <div className="down">
                <a href="/portfoliopdf.pdf" download="My_Portfolio.pdf"><button className='downloadbtn'>Download Resume &darr;</button></a> </div>

        </div>

    )
}
export default Homepage;
