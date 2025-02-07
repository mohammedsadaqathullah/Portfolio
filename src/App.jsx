import { BrowserRouter, Routes, Route } from "react-router-dom"
import Homepage from "./Screens/Homepage/Homepage"
import { About } from "./Screens/About/About"
import { Skills } from "./Screens/Skills/Skills"
import { Projects } from "./Screens/Projects/Projects"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/About" element={<About />} />
        <Route path="/Skills" element={<Skills />} />
        <Route path="/Projects" element={<Projects />} />
      </Routes >
    </BrowserRouter>

  )
}
export default App