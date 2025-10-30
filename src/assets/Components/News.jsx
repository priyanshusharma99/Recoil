import React from 'react'
import Card from './Card'

const News = () => {
  return (
    <div className='bg-black p-18'>
      <div className='text-white h-screen bg-[url("public/Lucid_Origin_Create_a_realistic_horizontal_torn_paper_edge_tex_1.jpg")] rounded-4xl m-auto object-cover border-none p-10 w-[85vw]'>
        <h1 className='text-black font-[unnamed] font-extrabold text-7xl'>Latest Happenings</h1>
        <Card/>
      </div>
    </div>
  )
}

export default News
