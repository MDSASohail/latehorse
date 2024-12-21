import React from 'react'

function SingleBlog({img, heading, paragraph, date}) {
  return (
    <div className='border-2 border-black w-80 m-2 p-4'>
        <img src={img} className='w-full' alt="" />
        <h1 className='font-bold text-center text-xl'>{heading}</h1>
        <span className='my-2'>{date}</span>
        <p className='my-2'>{paragraph}</p>
        <span className='my-2'>read more <strong>></strong></span>

    </div>
  )
}

export default SingleBlog