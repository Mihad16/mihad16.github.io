import React from 'react'
import './App.css'
import Navbar from './Component/Navbar'
import Hero from './Component/Hero'
import AboutMe from './Component/AboutMe'
import Services from './Component/Services'
import Contact from './Component/Contact'
import Footer from './Component/Footar'

function App() {
  return (
    <div style={{ backgroundColor: 'var(--beige)' }}>
      <Navbar />
      <Hero />
      <AboutMe />
      <Services />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
