import React from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Navbar from './Component/Navbar'
import Hero from './Component/Hero'
import AboutMe from './Component/AboutMe'
import Contact from './Component/Contact'
import Project from './Component/Project'
import Footer from './Component/Footar'

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={(
            <>
              <Hero />
              <AboutMe />
              <Contact />
            </>
          )}
        />
        
        <Route path="/projects" element={<Project />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
