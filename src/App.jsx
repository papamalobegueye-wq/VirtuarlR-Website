// import React from 'react'

import HeroSection from "./components/Hero"
import Navbar from "./components/Navbar"

const App = () => {
  return (
    <div>
      <Navbar />

      <div className="max-w-7xl mx-auto pt-20 px-6" >
        <HeroSection/>
      </div>
    </div>
  )
}

export default App