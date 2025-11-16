import { useGSAP } from '@gsap/react'
import React, { useState } from 'react'
import gsap from 'gsap'
import "remixicon/fonts/remixicon.css"
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Routes, BrowserRouter, Route } from 'react-router-dom'
import Ps from './assets/Components/Ps'
import MainApp from './assets/Components/MainApp'
import PrivacyNote from './assets/Components/PrivacyNote'
import Terms from './assets/Components/Terms'
gsap.registerPlugin(ScrollTrigger);
import ScrollToTop from './assets/Components/ScrollToTop'
import CompanyInfo from './assets/Components/CompanyInfo';

const App = () => {
  return (
    <>
    <ScrollToTop/>
    <Routes>
      <Route path='/' element={<MainApp/>}/>
      <Route path='/PS5' element={<Ps/>}/>
      <Route path='/Privacy' element={<PrivacyNote/>}/>
      <Route path='/TermsOfService' element={<Terms/>}/>
      <Route path='/CompanyInfo' element={<CompanyInfo/>}/>
    </Routes>
    
    
    </>
  )
}

export default App
