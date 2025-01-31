import './Skills.css'
import Navv from './Navv'
import html from './html.png'
import css from './css.png'
import js from './js.png'
import bootstrap from './bootstrap.png'
import material from './material.png'
import react from './reactlog.png'
import git from './git.png'
import github from './github.png'
import vscode from './vscode.png'

function Skills() {
    return (
        <section className='skillssec'>
            <Navv />
            <div className='skills'>
                <div className='skillsonetop'>
                    <p className='languages'>Languages</p>
                    <table>
                        <tr>
                            {/* <div className="skillsone"> */}
                            <td><img id='skill-logo' className='html' src={html} /></td>
                            <td><img id='skill-logo' className='css' src={css} /></td>
                            <td><img id='skill-logo' className='js' src={js} /></td>
                            {/* </div> */}
                        </tr>
                        <tr>
                            <td>    <p className='skilltitles'>
                                HTML</p></td>
                            <td><p className='skilltitles'>
                                CSS
                            </p></td>

                            <td><p className="skilltitles">
                                JavaScript
                            </p></td>
                        </tr>

                    </table>
                </div>
                <div className='skillstwotop'>
                    <p className='frameworks'>Frameworks</p>
                    <table>
                        <tr>
                            {/* <div className="skillstwo"> */}
                            <td><img id='skill-logo' className='bootstrap' src={bootstrap} /></td>
                            <td><img id='skill-logo' className='material' src={material} /></td>
                            <td><img id='skill-logo' className='react' src={react} /></td>
                            {/* </div> */}
                        </tr>
                        <tr>
                            <td><p className="skilltitles">
                                Bootstrap
                            </p></td>
                            <td><p className="skilltitles">
                                Material UI
                            </p></td>
                            <td><p className="skilltitles">
                                React / React Native
                            </p></td>

                        </tr>

                    </table>
                </div>
                <div className='skillsthreetop'>
                    <p className='others'>Others</p>
                    <table>
                        <tr>

                            {/* <div className="skillsthree"> */}
                            <td><img id='skill-logo' className='git' src={git} /></td>
                            <td><img id='skill-logo' className='github' src={github} /></td>
                            <td><img id='skill-logo' className='vs' src={vscode} /></td>
                            {/* </div> */}
                        </tr>
                        <tr>
                            <td><p className="skilltitles">
                                Git
                            </p></td>
                            <td><p className="skilltitles">
                                Github
                            </p></td>
                            <td><p className="skilltitles">
                                VS code
                            </p></td>
                        </tr>

                    </table>
                </div>
            </div >
        </section >
    )
}
export default Skills