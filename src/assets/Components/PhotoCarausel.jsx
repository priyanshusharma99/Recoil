import React from 'react'
import CarauselImage from './CarauselImage'

const PhotoCarausel = () => {
  return (
    <div className='w-full h-[65vh] overflow-scroll bg-black flex items-center gap-6'>
      <CarauselImage imgLink = "how-many-cities-places-you-think-that-will-be-in-gta-6-v0-1apejmv166jc1.webp"/>
      <CarauselImage imgLink = "Gemini_Generated_Image_f9kkj7f9kkj7f9kk.png"/>
      <CarauselImage imgLink = "Jason_and_Lucia_Motel_landscape.jpg"/>
      <CarauselImage imgLink = "Jason_and_Lucia_02_landscape.webp"/>
      <CarauselImage imgLink = "images.jpg"/>
      <CarauselImage imgLink = "grand-theft-auto-5-hero-banner-desktop-01-ps5-en-04mar22.webp"/>
    </div>
  )
}

export default PhotoCarausel
