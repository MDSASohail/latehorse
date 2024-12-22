import {useEffect, useState} from 'react'
const reviews = [
    {
      photo: "https://via.placeholder.com/150",
      name: "John Doe",
      review: "This is an amazing product! Highly recommended. "
    },
    {
      photo: "https://via.placeholder.com/150",
      name: "Jane Smith",
      review: "Fantastic quality and great support."
    },
    {
      photo: "https://via.placeholder.com/150",
      name: "Emily Johnson",
      review: "Exceeded my expectations in every way."
    },
    {
      photo: "https://via.placeholder.com/150",
      name: "Michael Brown",
      review: "Will definitely purchase again. 5 stars!"
    },
    {
      photo: "https://via.placeholder.com/150",
      name: "Sarah Davis",
      review: "Superb! Worth every penny."
    }
  ];
// function Review() {
//     const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
//     }, 5000); // Slide every 3 seconds

//     return () => clearInterval(interval);
//   }, []);
//   return (
//     <div className="review-slider">
//     <div
//       className="slider-track"
//       style={{
//         transform: `translateX(-${currentIndex * 100}%)`,
//         transition: "transform 2s ease-in-out"
//       }}
//     >
//     
//     </div>
//   </div>
//   )
// }


const Review = () =>{
    const [currentIndex, setCurrentIndex] = useState(0);
    useEffect(()=>{
         const slideInterverTime = setInterval(() => {
            setCurrentIndex((preIndex => (preIndex+1)%reviews.length))
         }, 5000);

         return ()=> clearInterval(slideInterverTime)
    },[])
    return (
        <>
          <div className="container my-20 border-2 border-black w-full h-80 flex justify-center">
            <div className='border-2 border-red-600 w-[80%] flex overflow-hidden'>
                 {reviews.map(item =>
                    <div className='eachReview text-center  bg-red-300 border-2 border-blue-600' style={{transform:`translateX(-${currentIndex * 100}%)`, transition: "transform 1s ease"}}>
                         <div className='flex justify-center'><img src={item.photo} className='rounded-full'  alt="" /></div>
                         <h1 className='font-bold text-2xl'>{item.name}</h1>
                         <p>{item.review}</p>
                    </div>
                 )}
            </div>


          </div>
          
          
          
        </>
    )
}

export default Review