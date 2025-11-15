import { useGSAP } from '@gsap/react'
import React from 'react'
import gsap from "gsap"
import { motion } from 'framer-motion'
import PsMap from './PsMap'

const Ps = () => {
  return (
    <>
    <div onMouseMove={(e) => {
      const xMove = (e.clientX / window.innerWidth - 0.5) * 40;
      gsap.to(".mical", {
        x: `${xMove * 0.1}%`
      })
      gsap.to(".franklin", {
        x: `${xMove * 0.2}%`
      })
      gsap.to(".trevor", {
        x: `${xMove * 0.2}%`
      })
      gsap.to(".city", {
        x: `${xMove * 0.2}%`,
      })
    }} className='w-full bg-black h-screen relative bg-cover overflow-hidden '>
      <img src="/how-many-cities-places-you-think-that-will-be-in-gta-6-v0-1apejmv166jc1.webp" className='w-full scale-[1.1] city h-screen opacity-60' alt="" />
      <div className="logo flex z-10 items-center gap-4">
        <div className="lines flex flex-col gap-1">
          <div className="w-12 h-1 absolute z-10 top-7 left-4 bg-white"></div>
          <div className="w-8 h-1 absolute z-10 top-9 left-4 bg-white"></div>
          <div className="w-5 h-1 absolute z-10 top-11 left-4 bg-white"></div>
        </div>
        <h3 className='text-4xl absolute top-5 left-19 text-white -mt-1.5'>RockStar</h3>
      </div>
      <h1 className='text-white top-5 play text-[10vw] translate-x-[31%] absolute z-1'>PLAY STATION 5</h1>
      <img src="trevor.png" className='-bottom-[15%] trevor left-1/7 absolute w-[33vw] z-2' alt="" />
      <img src="franklin.png" className='-bottom-[45%] franklin right-1/11 w-[45vw] absolute z-3' alt="" />
      <img src="Micheal.png" className='absolute mical  z-4 -bottom-[40%] left-1/2 -translate-x-1/2 w-[43vw]' alt="" />
      <div className='text-white font-[Arial] font-extrabold text-xl'>
      <motion.button whileHover={{
        scale:1.1,

      }} className='absolute bottom-5 bg-amber-600 px-4 py-2 rounded-2xl right-7 z-50'>Choose Edition</motion.button>
      </div>
    </div>
    <PsMap/>
    </>
  )
}

export default Ps
