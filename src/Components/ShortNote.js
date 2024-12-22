import React from 'react'

function ShortNote() {
  return (
    <div className='my-20 px-10 border-2 border-red-800'>
        <div className='flex justify-between items-center'>
            <div className='videoSection border-2 border-black'>
            <iframe className='w-full h-[315px]'  src="https://www.youtube.com/embed/VGcQGTwcwsA?si=Tql8dq0QE0HdPNqF" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
            <div className='contentSection ml-8'>
                <h1>Since 1951</h1>
                <h1 className='font-bold text-3xl'>We are Late Horse</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum reprehenderit accusantium quia omnis, blanditiis obcaecati. Enim inventore provident at ratione? Quia, et officiis. Consectetur temporibus ducimus quidem quod fuga voluptatum impedit voluptas culpa. Architecto dignissimos itaque eum sed labore hic.</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic, animi delectus. Voluptatum labore ipsum possimus, aperiam error laboriosam officia ipsa, nihil vero, maxime obcaecati nostrum?</p>
                <button className='px-6 mt-4 py-4 rounded-lg bg-orange-500 text-white'>Know More</button>
            </div>
            
        </div>

        

    </div>
  )
}

export default ShortNote