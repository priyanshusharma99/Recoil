import React from 'react'
import Charcard from './Charcard'


const Characters = () => {
  return (
    <>
    <div className='flex flex-col justify-evenly gap-10 items-center'>
    <h1 className='text-6xl text-white'>Enter The Realism</h1>
    <div className='flex justify-center items-center gap-9'>
      <Charcard imageLink = "Gemini_Generated_Image_it0cgyit0cgyit0c.png" name = "Jason" />
      <Charcard imageLink = "Gemini_Generated_Image_2l19bl2l19bl2l19.png" name = "Lucia" />
      <Charcard imageLink = "Gemini_Generated_Image_h2dr2hh2dr2hh2dr.png" name = "Bardok" />
    </div>
    </div>
    </>
  )
}

export default Characters
