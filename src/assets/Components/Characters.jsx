import React from 'react'
import Charcard from './Charcard'


const Characters = () => {
  return (
    <>
    <div className='flex flex-col justify-evenly gap-10 items-center'>
    <h1 className='text-6xl text-white'>Enter The Realism</h1>
    <div className='flex justify-center items-center gap-9'>
      <a href="https://www.gtabase.com/gta-6/characters/jason"><Charcard imageLink = "JasonDuval-GTAVI-Portrait.webp" name = "Jason" /></a>
      <a href="https://www.gtabase.com/gta-6/characters/lucia"><Charcard imageLink = "LuciaCaminos-GTAVI-Portrait.png" name = "Lucia" /></a>
      <a href="https://www.gtabase.com/characters/gta-6/cal-hampton"><Charcard imageLink = "cal-hampton.jpg" name = "Cal Hampton" /></a>
    </div>
    </div>
    </>
  )
}

export default Characters
