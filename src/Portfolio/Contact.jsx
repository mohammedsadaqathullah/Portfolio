import './contact.css'
import Navv from './Navv'
import whatsapp from './whatsapp.png'
import gmail from './gmail.jpg'
import github from './github.png'
import linkedin from './linkedin.png'

function Contact() {
    return (
        <>
            <Navv />
            <div className="contact">
                <div className="contactcontainer">
                    <a href="https://wa.me/919500790895" target="_blank"><img className='whatsapp' src={whatsapp} /></a>
                    <a href="https://mail.google.com/mail/?view=cm&to=mdsadaq.fed@gmail.com&su=SUBJECT&body=BODY&bcc" target="_blank"><img className='gmail' src={gmail} /></a>
                    <a href="https://github.com/mohammedsadaqathullah" target="_blank"><img className='cgithub' src={github} /></a>
                    <a href="https://in.linkedin.com/in/mohammedsadaqathullah" target="_blank"><img className='linkedin' src={linkedin} /></a>
                </div>
            </div>
        </>
    )
}
export default Contact