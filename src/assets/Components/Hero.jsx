import React from 'react'
import Character from './Character'

const Hero = () => {
  return (
    <div className=''>
      <video autoPlay loop muted className="bg-vid brightness-50 object-cover absolute"><source src={"public/Capstone.mp4"} type="video/mp4" /> </video>
      <div className="flex gap-8 items-center justify-center relative z-10 flex-col h-full text-white text-center px-4">
        <h1 className=" ml-15 font-extrabold text-shadow-lg text-shadow-cyan-400 mt-45 text-9xl font-[baunk] text-purple-400">
          RECOIL
        </h1>
        <p className="text-4xl md:text-2xl max-w-2xl font-extrabold font-[unnamed]">
          Experience futuristic combat
        </p>
        <div className="btn">
        <button className='bg-red-500 px-5 py-3 rounded-2xl'>Play Now</button>
        </div>
        <div className="cards flex gap-15 mt-25">
          <Character char="public/Gemini_Generated_Image_82usvj82usvj82us.png"/>
          <Character char="public/Gemini_Generated_Image_5aw27h5aw27h5aw2.png"/>
          <Character char="public/Gemini_Generated_Image_rjgaq9rjgaq9rjga.png"/>
          <Character char="public/Gemini_Generated_Image_rgznhvrgznhvrgzn.png"/>
        </div>
      </div>

 
    </div>
  )
}

export default Hero
