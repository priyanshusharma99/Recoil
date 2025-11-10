import React from 'react'

const Trailer = () => {
  return (
    <div className='w-full h-screen flex flex-col justify-evenly items-center bg-black'>
        <h1 className='text-white text-5xl'>Watch The Trailer Now</h1>
      <iframe className='w-[73vw] h-[40vw]' src="https://www.youtube.com/embed/VQRLujxTm3c?si=2lwQO4PCcPa9Jycf" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
  )
}

export default Trailer
