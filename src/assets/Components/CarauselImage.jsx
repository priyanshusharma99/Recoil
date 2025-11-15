import React from 'react'

const CarauselImage = ({imgLink}) => {
  return (
    <div className='shrink-0'>
      <img className='w-[40vw] shrink-0 rounded-3xl' src={imgLink} alt="" />
    </div>
  )
}

export default CarauselImage
