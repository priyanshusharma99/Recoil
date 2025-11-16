import React from 'react'
import { useNavigate } from 'react-router-dom'
import Footer from './Footeer';

const CompanyInfo = () => {
    const navigate = useNavigate();
  return (
    <div>
       <nav className='w-full h-[10vh] bg-black flex justify-between items-center px-10'>
                <div className="logo text-white text-4xl">
                    <h1>Rockstar Games</h1>
                </div>
                <div className="right flex gap-3 text-white font-[Arial] font-extrabold">
                    <button onClick={()=>navigate("/")} className='border cursor-pointer border-amber-50 px-3 py-2 rounded-2xl'>Home</button>
                    <button className='bg-amber-600 px-3 py-2 rounded-2xl'>Who We Are</button>
                </div>
            </nav>
            <main className='relative h-[50vh] overflow-hidden'>
                <img src="360_F_200686969_GJ7zbz2qaNIE4dyHSbZkQXvNPzRuwlr3.jpg" className='w-full absolute top-0 left-0' alt="" />
                <h1 className='text-white absolute top-20 left-100 font-[Arial] font-extrabold text-7xl'>Rockstar Games ®</h1>
                <h1 className='text-white absolute top-40 left-90 font-[Arial] font-extrabold text-7xl'>Company Information</h1>
            </main>
                <img className='' src="95bebc1d1507747181a274c871a0c6dc0f441061-1920x1080.avif" alt="" />
                <div className='w-full p-10 flex gap-5 flex-col items-center italic'>
            <h1 className='font-[Arial] font-extrabold text-5xl'>Rockstar Games USA - Company Information</h1>
            <h4 className='font-[Arial] text-xl'>
Rockstar Games USA - Company Information</h4>
<div className='w-[80vw] border-t border-black'></div>
<pre>{
    `Rockstar Games Limited,
The Observatory Building,
7 - 11 Sir John Rogerson's Quay,
Dublin 2,
Ireland.

Irish company registration number: 483483.
VAT number: IE 9745692R
`
    }
</pre>
</div>
<Footer/>
    </div>
  )
}

export default CompanyInfo
