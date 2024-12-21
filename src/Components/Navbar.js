function Navbar() {
    return (
        <>
           <nav className="h-11 navbar absolute w-full top-4 border-2 border-red-700 flex justify-between bg-black">
              <div className="border-2 border-blue-800">
                   <img className="w-10" src="https://latehorse.in/wp-content/uploads/2024/11/cropped-WhatsApp-Image-2024-11-28-at-10.48.50_bcaaa438-Photoroom-120x95.png" alt="" />
              </div>
              <div className="border-2 border-green-800">
                    <button className="border-2 border-black mx-3">Home</button>
                    <button className="border-2 border-black mx-3">About</button>
                    <button className="border-2 border-black mx-3">Contact</button>
                    <button className="border-2 border-black mx-3">Shop</button>
                    
              </div>
              <div className="border-2 border-pink-400">
                <button className="border-2 border-black mx-3">Login</button>
                <button className="border-2 border-black mx-3">Register</button>

              </div>
           </nav>
           
        </>
    )
}

export default Navbar