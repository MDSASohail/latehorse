import React from 'react'
import SingleProduct from './SingleProduct'
const products = [{heading:"Straberry", unit:"Per Kg", cost:"Rs 300", img:"https://latehorse.in/wp-content/uploads/2024/12/4-300x300.png"},{heading:"Straberry", unit:"Per Kg", cost:"Rs 300", img:"https://latehorse.in/wp-content/uploads/2024/12/4-300x300.png"},{heading:"Straberry", unit:"Per Kg", cost:"Rs 300", img:"https://latehorse.in/wp-content/uploads/2024/12/4-300x300.png"},{heading:"Straberry", unit:"Per Kg", cost:"Rs 300", img:"https://latehorse.in/wp-content/uploads/2024/12/4-300x300.png"},{heading:"Straberry", unit:"Per Kg", cost:"Rs 300", img:"https://latehorse.in/wp-content/uploads/2024/12/4-300x300.png"}]
function OurProducts() {
  return (
    <div className='py-20 border-2 border-red-800'>
        <h1 className='my-1 text-center md:text-4xl lg:text-6xl'>Our Products</h1>
        <p className='py-4 text-center px-2 text-xl'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, fuga quas itaque eveniet beatae optio.</p>

        <div className='border-2 border-pink-800 p-6 flex justify-around flex-wrap'>
            {products.map(item => <SingleProduct heading={item.heading} cost={item.cost} img={item.img} unit={item.unit}/>)}


        </div>

    </div>
  )
}

export default OurProducts