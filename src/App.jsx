import { BrowserRouter, Routes, Route } from "react-router-dom"

import Homepage from "./Screens/Homepage/Homepage"
import { About } from "./Screens/About"
import { Skills } from "./Screens/Skills/Skills"
import { Projects } from "./Screens/Projects/Projects"
// import Skills from "./Screens/Skills/Skills"
// import ProjectCategory from "./Screens/Projects/ProjectCategory"
// import RealTimeProjects from "./Screens/Projects/RealTimeProjects"
// import Projects from "./Screens/Projects/Projects"
// import Contact from "./Screens/Contact/Contact"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/About" element={<About />} />
        <Route path="/Skills" element={<Skills />} />
        {/* <Route path="/ProjectsCategory" element={<ProjectCategory />} /> */}
        {/* <Route path="/RealTimeProjects" element={<RealTimeProjects />} /> */}
        <Route path="/Projects" element={<Projects />} />
        {/* <Route path="/Contact" element={<Contact />} /> */}
      </Routes >
    </BrowserRouter>

  )
}
export default App