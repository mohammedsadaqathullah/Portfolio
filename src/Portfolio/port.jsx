import Contact from "./Contact"
import Homepage from "./Homepage"
import './port.css'
import Projects from "./Projects"
import Skills from "./Skills"
import Welcomepage from "./welcomepage"
import Certificates from './Certificates'
import { BrowserRouter, Routes, Route } from "react-router-dom"


function Portfolio() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Welcomepage />} />
                <Route path="/Homepage" element={<Homepage />} />
                <Route path="/Skills" element={<Skills />} />
                <Route path="/Projects" element={<Projects />} />
                <Route path="/Contact" element={<Contact />} />
                <Route path="/Certificates" element={<Certificates />} />
            </Routes >
        </BrowserRouter>

    )
}
export default Portfolio