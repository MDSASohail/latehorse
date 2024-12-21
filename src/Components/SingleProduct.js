import React from 'react'

function SingleProduct({heading, unit, cost, img}) {
  return (
    <div className='border-2 border-red-700 p-5 m-4 md:text-2xl'>
        <img src={img} alt="" />
        <h2 className='text-center font-bold text-2xl'>{heading}</h2>
        <h3 className='text-center'>{unit}</h3>
        <h1 className='text-center font-bold text-3xl'>{cost}</h1>
        <div className='text-center my-2'><button className='text-center bg-orange-600 text-white rounded-lg px-3 py-2'>Add to Cart</button></div>

    </div>
  )
}

export default SingleProduct