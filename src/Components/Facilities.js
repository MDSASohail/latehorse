import React from 'react'
const data = [{heading:"Free Shipping", text:"When Order over Rs 100", img:""},{heading:"24/7 Support", text:"Get Support all days", img:""}]
function Facilities() {
  return (
    <div className='h-72 border-2 border-red-900 bg-slate-500 flex justify-center items-center flex-wrap'>
        {data.map(item =><div className='border-2 w-72 border-green-800 m-5'>
            <div className='flex items-center border-2 border-black w-full'>
                <img className='border-2 mr-4 rounded-full w-20 h-20 border-black' src="" alt="" />
                <div>
                    <h1 className='text-2xl'>{item.heading}</h1>
                    <p className=''>{item.text}</p>
                </div>
            </div>
        </div>)}

    </div>
  )
}

export default Facilities