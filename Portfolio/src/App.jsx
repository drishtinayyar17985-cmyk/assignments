import React from 'react'
import Navbar from './components/Navbar';
import Home from './components/Pages/Home'
import{Routes,Route} from "react-router-dom"
import About from './components/Pages/About';
import Qualification from './components/Pages/Qualification';
import Skills from './components/Pages/Skills';
import Projects from './components/Pages/Projects';
const App = () => {
  return (
  <>
  <Navbar/>
  <Routes>
 <Route path="/home" element={ <Home/>}/>
 <Route path="/about" element={ <About/>}/>
 <Route path="/qualification" element={ <Qualification/>}/>
 <Route path="/skills" element={ <Skills/>}/>
< Route path="/projects" element={ <Projects/>}/>
  </Routes>
  </>
  )
}

export default App
