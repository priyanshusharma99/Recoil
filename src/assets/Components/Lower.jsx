import React from 'react'

const Lower = () => {
  return (
    <div className='w-full h-screen bg-black'>
        <div className="cntr w-full h-[80%] flex justify-center items-center pt-[15vh]">
      <div className="left-img w-1/2">
        <img src="imag.png" className='imag' alt="" />
      </div>
      <div className="right w-[45vw] p-10 flex flex-col gap-10 justify-center items-center">
        <h1 className='text-8xl text-white text1'>Still Running,</h1>
        <h1 className='text-8xl text-white text1'>Not Hunting</h1>
        <p className='text-white font-[Arial] text1'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum pariatur omnis dolorem dolor voluptatem qui, quia veniam! Voluptates ipsum natus ipsa quaerat cum architecto tempore officiis, quisquam corrupti porro atque quos modi autem reiciendis officia voluptatum rem voluptatibus voluptate? Aperiam commodi asperiores id inventore, nostrum ratione nemo perspiciatis culpa enim?</p>
        <p className='text-white font-[Arial] text1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum qui eum perspiciatis totam, dicta repudiandae praesentium vero ipsa iusto quod.</p>
        <div className="text-white font-[Arial] font-extrabold text-3xl w-full flex justify-center">
        <a href='https://www.rockstargames.com/VI' target='_blank'>
        <button className='bg-amber-500 py-2 px-5 text1 rounded-2xl '>Download</button>
        </a>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Lower
