import React from 'react'
import Charcard from './Charcard'


const Characters = () => {
  return (
    <>
    <div className='flex flex-col justify-evenly gap-10 items-center'>
    <h1 className='text-6xl text-white'>Enter The Realism</h1>
    <div className='flex justify-center items-center gap-9'>
      <Charcard imageLink = "JasonDuval-GTAVI-Portrait.webp" name = "Jason" />
      <Charcard imageLink = "LuciaCaminos-GTAVI-Portrait.png" name = "Lucia" />
      <Charcard imageLink = "342D382C-622D-4BF9-B0DE-30FF46F587BA.png" name = "Bardok" />
    </div>
    </div>
    </>
  )
}

export default Characters
