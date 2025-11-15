import { useGSAP } from '@gsap/react'
import React, { useState } from 'react'
import gsap from 'gsap'
import "remixicon/fonts/remixicon.css"
import Grand from './assets/Components/Grand'
import Lower from './assets/Components/Lower'
import Footer from './assets/Components/Footeer'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrollVideo from './assets/Components/Scrollvideo'
import Characters from './assets/Components/Characters'
import { StickyCard002 } from './assets/Components/skiper17'
import Trailer from './assets/Components/Trailer'
import WorldSection from './assets/Components/WorldSection'
import { Routes, BrowserRouter, Route } from 'react-router-dom'
import Ps from './assets/Components/Ps'
import MainApp from './assets/Components/MainApp'
gsap.registerPlugin(ScrollTrigger);

const App = () => {
  
  
  
  return (
    <>
    <Routes>
      <Route path='/' element={<MainApp/>}/>
      <Route path='/PS5' element={<Ps/>}/>
    </Routes>
    
    </>
  )
}

export default App
