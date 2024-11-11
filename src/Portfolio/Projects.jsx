import Navv from './Navv'
import './projects.css'
import zid from './zid.png'
import zit from './zit.png'
import zim from './zim.png'
import crudd from './crudd.png'
import crudt from './crudt.png'
import todod from './todod.png'
import todot from './todot.png'
import todom from './todom.png'
import subd from './subd.png'
import subt from './subt.png'
import subm from './subm.png'
import logd from './logd.png'
import logt from './logt.png'
import cald from './cald.png'
import calt from './calt.png'
import calm from './calm.png'
import scored from './scored.png'
import scoret from './scoret.png'

function Projects() {
    return (
        <>
            <div>
                <Navv />
            </div>
            <div className="projects">
                <div className="zipizza">
                    <a href="https://zii-pizza.vercel.app/" target="_blank"><h2 className='zititle'><span className='titlenum'>1.</span>Project: Zi Pizza — e-commerce site :</h2></a>
                    <p className="ziobject"><span className='highlight'>Zi Pizza e-commerce site</span> was built using <span className="highlight">React.js</span> and <span className="highlight">React Bootstrap,</span> implementing interactive UI components and little custom CSS for user experience. Optimized for performance, accessibility, and <span className="highlight">responsiveness across all devices.</span></p>
                    <div className="zipizzaimgs">
                        <img className='zid' src={zid} />
                        <img className='zit' src={zit} />
                        <img className='zim' src={zim} />
                    </div> <p className='hrline' ></p>
                    <a href="https://crud-json-op.netlify.app/" target="_blank"><h2 className='crudtitle'><span className='titlenum'>2.</span>Project: CRUD Application with React.js :</h2></a>
                    <p className="crudobject">Built a <span className="highlight">CRUD (Create, Read, Update, Delete)</span> application using <span className="highlight">React.js and a JSON Fake API</span> for data management. Implemented user-friendly interfaces to perform operations on mock data, <span className="highlight">allowing users to add, view, update, and delete records.</span> Leveraged React hooks <span className="highlight">(useState, useEffect)</span> for efficient state management and dynamic updates.</p>
                    <div className="zipizzaimgs">
                        <img className='zid' src={crudd} />
                        <img className='zit' src={crudt} />
                        {/* <img className='zim' src={zim} /> */}
                    </div><p className='hrline' ></p>
                    <a href="https://daily-task-list-site.vercel.app/" target="_blank"><h2 className='crudtitle'><span className='titlenum'>3.</span>Project: To-DO-List :</h2></a>
                    <p className="crudobject">Developed a dynamic and <span className="highlight">responsive To-Do List application using HTML, CSS, and JavaScript,</span> enabling users to efficiently manage and track tasks. Implemented key features such as <span className="highlight">task creation, deletion, and persistence with local storage for seamless user experience.</span></p>
                    <div className="zipizzaimgs">
                        <img className='zid' src={todod} />
                        <img className='zit' src={todot} />
                        <img className='zim' src={todom} />
                    </div><p className='hrline' ></p>
                    <a href="https://submarine-css.vercel.app/" target="_blank"><h2 className='crudtitle'><span className='titlenum'>4.</span>Project: Animation 001 :</h2></a>
                    <p className="crudobject">Developed a <span className="highlight">fully animated submarine,</span> complete with <span className="highlight">fish swimming and bubble effects,</span> to simulate an underwater scene.Implemented <span className="highlight">interactive "on/off" buttons to toggle</span> the visibility of the fish and other dynamic elements, <span className="highlight">enhancing user control.</span></p>
                    <div className="zipizzaimgs">
                        <img className='zid' src={subd} />
                        <img className='zit' src={subt} />
                        <img className='zim' src={subm} />
                    </div><p className='hrline' ></p>
                    <a href="https://login-form-page-1.vercel.app/" target="_blank"><h2 className='crudtitle'><span className='titlenum'>5.</span>Project: Log-in Form :</h2></a>
                    <p className="crudobject">Developed a responsive login form <span className="highlight">using HTML and CSS,</span> optimized for both desktop and tablet devices. Implemented a clean, user-friendly interface with responsive design techniques to ensure seamless functionality across multiple screen sizes.</p>
                    <div className="zipizzaimgs">
                        <img className='zid' src={logd} />
                        <img className='zit' src={logt} />
                        {/* <img className='zim' src={todom} /> */}
                    </div><p className='hrline' ></p>
                    <a href="https://basic-arithmetic-calculator.vercel.app/" target="_blank"><h2 className='todotitle'><span className='titlenum'>6.</span>Project: Calculator :</h2></a>
                    <p className="todoobject">Built a responsive calculator <span className="highlight">using HTML, CSS, and JavaScript</span> that performs <span className="highlight">basic arithmetic operations.</span> The app is optimized for <span className="highlight">desktop, tablet, and mobile devices,</span> providing an intuitive and user-friendly interface.</p>
                    <div className="zipizzaimgs">
                        <img className='zid' src={cald} />
                        <img className='zit' src={calt} />
                        <img className='zim' src={calm} />
                    </div><p className='hrline' ></p>
                    <a href="https://scorey-com.vercel.app/" target="_blank"><h2 className='crudtitle'><span className='titlenum'>7.</span>Project: ScorEy :</h2></a>
                    <p className="crudobject">Developed a <span className="highlight">scoreboard application</span> that allows users to <span className="highlight">set a winning score</span> and track the points for <span className="highlight">two players.</span> The app provides <span className="highlight">real-time score updates</span> and automatically declares a winner once the preset score is reached. It features an intuitive interface for seamless interaction and easy score management.Use ipad or desktop or large screen devices for better experience.</p>
                    <div className="zipizzaimgs">
                        <img className='zid' src={scored} />
                        <img className='zit' src={scoret} />
                        {/* <img className='zim' src={todom} /> */}
                    </div><p className='hrline' ></p>
                </div>

            </div>
        </>
    )
}
export default Projects