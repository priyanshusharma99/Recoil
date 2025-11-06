import React from 'react'
import Navbar from './Navbar'
import { motion } from 'motion/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faJetFighterUp } from "@fortawesome/free-solid-svg-icons";

const Hero = () => {
  return (
    <div className="relative w-screen h-screen overflow-hidden">
      <video 
        autoPlay 
        loop 
        muted 
        className="absolute inset-0 w-full h-full object-cover brightness-95 z-0"
      >
        <source src="/Menace - Official Cinematic Trailer.mp4" type="video/mp4" />
      </video>

      <div className="absolute top-6 left-0 w-full z-20 flex justify-center">
        <Navbar />
      </div>

      <div className="absolute inset-0 flex flex-col items-center justify-center gap-1 text-white text-center px-4 z-10">
        <h1 className="cursor-pointer font-extrabold text-9xl font-[baunk] text-white drop-shadow-[0_0_25px_#00ffff]">
          RECOIL
        </h1>
        <p className="text-2xl md:text-3xl max-w-2xl font-extrabold font-[unnamed] mt-4">
          Experience futuristic combat
        </p>
        <button className="bg-black/40 backdrop-blur-md border border-white/10 shadow-lg transition-all duration-300 px-5 py-3 rounded-2xl mt-6 hover:bg-cyan-600">
          Play Now
        </button>
      </div>
      <FontAwesomeIcon icon={faJetFighterUp} />
      <div className="social">
        <a href=""><motion.img whileHover={{scale:1.1}} className='z-20 absolute w-20 right-5 bottom-4' src="public/Social Icons/Discord (1).png" alt="Hello" /></a>
        <a href=""><motion.img whileHover={{scale:1.1}} className='z-20 absolute w-20 right-20 bottom-4' src="public/Social Icons/7feba4a3-9a90-4a45-8bf3-1b192c2cac88 (1).png" alt="Hello" /></a>
        <a href=""><motion.img whileHover={{scale:1.1}} className='z-20 absolute w-20 right-35 bottom-4' src="public/Social Icons/facebook (1).png" alt="Hello" /></a>
        <a href=""><motion.img whileHover={{scale:1.1}} className='z-20 absolute w-20 right-50 bottom-4' src="public/Social Icons/insta (1).png" alt="Hello" /></a>
      </div>
    </div>
  )
}

export default Hero