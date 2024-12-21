import React from 'react'

function Header() {
  return (
    <div className='h-screen  bg-slate-600 border-2 border-red-950 flex justify-center items-center'>
        <div className='border-2 max-w-[650px] font-bold border-blue-800 text-center'>
            <p className='text-orange-500  md:text-2xl lg:text-3xl'>FRESH & NATURAL</p>
            <h3 className='text-white sm:text-3xl   md:text-4xl lg:text-6xl'>LateHorse – Unleash Your Inner Strength</h3>
            <div className='border-2 border-green-800'>
                <button className='rounded-lg m-3 border-2 border-white px-4 py-2 text-white hover:bg-orange-500 hover:border-orange-500'>Shop Now</button>
                <button className='rounded-lg m-3 border-2 border-white  px-4 py-2 text-white hover:bg-orange-500 hover:border-orange-500'>Contact Us</button>
            </div>

        </div>

    </div>
  )
}

export default Header