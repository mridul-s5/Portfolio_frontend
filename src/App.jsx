import React from 'react'
import { BrowserRouter as BrowsrerRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Skills from './pages/Skills'
import Projects from './pages/Projects'
import Contact from './pages/Contact'


const App = () => {
  return (
    <div>
      <BrowsrerRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skill" element={<Skills />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
         
      </BrowsrerRouter>
    </div>
  )
}

export default App
