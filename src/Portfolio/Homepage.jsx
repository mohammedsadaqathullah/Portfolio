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
                    <p className='object'>A results-driven <span className="highlight">Front-End Developer</span> with expertise in <span className="highlight">React.js</span> and modern JavaScript frameworks, specializing
                        in the development of dynamic, responsive, and high-performance web applications. Proficient in <span className="highlight">state
                            management, React hooks, and API integration,</span> I focus on delivering seamless, scalable solutions that provide
                        exceptional user experiences. Holding a <span className="highlight">BSc in Psychology,</span> I leverage insights into human behavior and cognitive
                        processes to design intuitive, user-centric interfaces. As the <span className="highlight">Founder of Zii Techs,</span> a registered Micro Enterprise
                        under <span className="highlight">UDYAM (Udyam-TN-34-0076422),</span> I am actively engaged in providing computer programming,
                        consultancy, and software services. Passionate about continuous learning and professional growth, I am dedicated
                        to applying my skills to create innovative solutions that meet both business and user needs.
                    </p>
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
