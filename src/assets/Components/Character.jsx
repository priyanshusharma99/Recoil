import React from 'react'

const Character = (props) => {
  return (
    <div>
      <div className="">
        <img className='w-[17vw] rounded-3xl' src={props.char} alt="" />
      </div>
    </div>
  )
}

export default Character
