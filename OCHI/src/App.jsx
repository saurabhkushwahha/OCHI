import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import LandingPage from './components/LandingPage'
import Marquee from './components/Marquee'
import About from './components/About'
import Eyes from './components/Eyes'
import Feature from './components/Feature'
import Card from './components/Card'
import Footer from './components/Footer'
import LocomotiveScroll from 'locomotive-scroll';
function App() {
const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className='w-full min-h-screen bg-zinc-800  text-white'>
     <Navbar/>
     <LandingPage/>
     <Marquee/>
     <About/>
      <Eyes/>
      <Feature/>
     < Card/>
       <Footer/>
    </div>
  )
} 

export default App
