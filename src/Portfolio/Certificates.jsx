import './certificates.css'
import Navv from './Navv'
import htmlc from './html_c.jpg'
import cssc from './css_c.jpg'
import reactc from './react_c.jpg'

function Certificates() {
    return (
        <>
            <Navv />
            <div className="certificates">
                <img src={htmlc} className="htmlc" />
                <img src={cssc} className="cssc" />
                <img src={reactc} className="reactc" />
            </div>
        </>
    )
}
export default Certificates