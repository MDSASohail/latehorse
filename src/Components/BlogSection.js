import SingleBlog from "./SingleBlog"
const blogs = [{img:"https://latehorse.in/wp-content/uploads/2024/12/4-300x300.png", heading:"You will vainly look for fruit on it in autumn.", paragraph:"Vivamus lacus enim, pulvinar vel nulla sed, scelerisque rhoncus nisi. Praesent vitae mattis nunc, egestas viverra eros.", date:"27 December, 2019"},{img:"https://latehorse.in/wp-content/uploads/2024/12/4-300x300.png", heading:"You will vainly look for fruit on it in autumn.", paragraph:"Vivamus lacus enim, pulvinar vel nulla sed, scelerisque rhoncus nisi. Praesent vitae mattis nunc, egestas viverra eros.", data:"27 December, 2019"},{img:"https://latehorse.in/wp-content/uploads/2024/12/4-300x300.png", heading:"You will vainly look for fruit on it in autumn.", paragraph:"Vivamus lacus enim, pulvinar vel nulla sed, scelerisque rhoncus nisi. Praesent vitae mattis nunc, egestas viverra eros.", date:"27 December, 2019"},{img:"https://latehorse.in/wp-content/uploads/2024/12/4-300x300.png", heading:"You will vainly look for fruit on it in autumn.", paragraph:"Vivamus lacus enim, pulvinar vel nulla sed, scelerisque rhoncus nisi. Praesent vitae mattis nunc, egestas viverra eros.", date:"27 December, 2019"}]
function BlogSection() {
  return (
    <div className='py-20 border-2 border-red-800'>
        <h1 className='my-1 text-center md:text-4xl lg:text-6xl'>Our Blogs</h1>
        <p className='py-4 text-center px-2 text-xl'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, fuga quas itaque eveniet beatae optio.</p>

        <div className='border-2 border-pink-800 p-6 flex justify-around flex-wrap '>
            {blogs.map(item => <SingleBlog heading={item.heading} paragraph={item.paragraph} date={item.date} unit={item.unit} img={item.img}/>)}


        </div>

        <div className="text-center  my-3"><button className="p-3 py-2 text-white bg-orange-500 rounded-lg">More Blogs</button></div>

    </div>
  )
}

export default BlogSection