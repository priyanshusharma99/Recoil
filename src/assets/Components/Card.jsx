import React from 'react'

const Card = () => {
  return (
    <div className='p-4'>
      <div className='h-[28vw] w-[32vw] rounded-3xl gap-2 flex flex-col p-7 justify-between '>
        <div className="img">
          <img src="public/champ.avif" alt="" />
        </div>
        <div className="text">
          <div className="date">
            Esports | 11/1/2025
          </div>
          <div className="t">

            Valorant Esports Staff

            VCT Game Changers Championship Merch Collection
          </div>
        </div>
        
      </div>
      
    </div>
  )
}

export default Card
