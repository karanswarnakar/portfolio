import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import Home from "./pages/Home"
import About from "./pages/About"
import Docs from "./pages/Docs"
import Projects from "./pages/Projects"

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/portfolio' element={<Home />} />
        <Route path='/portfolio/about' element={<About />} />
        <Route path='/portfolio/docs' element={<Docs />} />
        <Route path='/portfolio/projects' element={<Projects />} />
      </Routes>

    </>
  )
}

export default App
