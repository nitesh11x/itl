import React from 'react'
import Navbar from './components/Navbar'
import Home from './Home'
import Hero from './components/Hero'
import Drives from './components/Drives'
import Founder from './components/Founder'
import Solution from './components/Solution'
import Methodology from './components/Methodology'
import Ground from './components/Ground'

const App = () => {
  return (
    <>

      <Navbar />
      <div className='hero-gradient'>
        <Hero />
        <Drives />
      </div>
      <div className='hero-gradient-reverse'>
        <Founder />
        <Solution />

      </div>
      <div className='hero-gradient-custom'>

        <Methodology />
        <Ground />
      </div>
    </>
  )
}

export default App
