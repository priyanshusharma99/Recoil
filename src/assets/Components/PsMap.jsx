import React from 'react'

const PsMap = () => {
    return (
        <>
        <div className='relative w-full h-screen bg-black overflow-hidden'>
            <div className="absolute z-20 top-0 left-0 w-full py-10 px-10 bg-linear-to-b from-black to-transparent"></div>
            <div className='w-full h-screen bg-linear-to-r from-black to-transparent absolute flex items-center'>
                <div className='h-full flex flex-col ml-16 justify-center gap-15'>
                    <div className="flex flex-col gap-6">
                        <h1 className='text-white text-6xl'>Grand Theft Auto VI</h1>
                        <h4 className='font-[Arial] text-white'>Rockstar Games</h4>
                        <h4 className='font-[Arial] text-white'>Available on <span className='border border-amber-50 p-1'>PS5</span> <span className='border border-amber-50 p-1'>PS4</span></h4>
                    </div>
                    <div className="flex gap-16">
                    <div className="flex flex-col gap-4">
                        <h4 className='text-white font-[Arial]'>Released 17/11/2014</h4>
                        <div className='text-white text-2xl font-[Arial] font-bold'>
                            <button className='bg-amber-500 px-3 py-1 rounded-2xl'>Choose Edition</button>
                        </div>
                    </div>
                    <div className='flex flex-col gap-3'>
                        <ul className='list-disc'>
                        <li className='text-white font-[Arial]'>PS Plus required for online play</li>
                        <li className='text-white font-[Arial]'>In-game purchases optional</li>
                        <li className='text-white font-[Arial]'>Online play required</li>
                        </ul>
                    </div>
                    </div>
                </div>
                <div>
                    <img src="0_Cal_Hampton_landscape.png" alt="" className='w-[50vw] -bottom-25 absolute right-0' />
                </div>
            </div>
            <img src="7A450120-8A07-47CC-AE71-FE8F7BF91123.png" className='' alt="" />
            <div className="absolute z-20 bottom-0 left-0 w-full h-[30vh] py-10 px-10 bg-linear-to-t from-black to-transparent"></div>
        </div>
        </>
    )
}

export default PsMap
