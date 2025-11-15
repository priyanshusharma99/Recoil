import React from 'react'

const ViceCity = () => {
  return (
    <div className='bg-black overflow-hidden w-full relative h-[40vh]'>
        <div className='bg-linear-to-r absolute from-black to-transparent w-full h-full p-13 flex justify-evenly'>
            <div className=''>
            <h1 className='text-white text-xl font-[Arial]'>Game Overview</h1>
            <h1 className='text-white text-3xl font-bold font-[Arial]'>Welcome to Vice City</h1>
            </div>
            <div className='text-white text-2xl font-[Arial] w-[50vw]'>
                <p>Experience blockbuster hits Grand Theft Auto V and GTA Online - now upgraded for PlayStation 5 with stunning visuals, faster loading, adaptive triggers, haptic feedback, Tempest 3D audio and more, plus exclusive content for GTA Online players.</p>
            </div>
        </div>
      <img 
      className='w-screen'
      src="how-many-cities-places-you-think-that-will-be-in-gta-6-v0-1apejmv166jc1.webp" alt="" />
      <div className="absolute z-20 bottom-0 left-0 w-full py-10 px-10 bg-linear-to-t from-black to-transparent"></div>
    </div>
  )
}

export default ViceCity
