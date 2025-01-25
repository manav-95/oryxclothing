import React from 'react'


import HeroBg from '../assets/hero-image.jpg'

function Hero() {

  return (
    <>
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${HeroBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4">Elevate Your Style</h1>
          <p className="text-xl sm:text-2xl md:text-3xl mb-8 font-semibold">Discover the latest in men's fashion</p>
          <button className="bg-white text-black font-bold py-2 px-6 rounded-sm text-lg sm:text-xl hover:bg-gray-200 transition duration-300">
            Shop Now
          </button>
        </div>
      </div>
    </>
  )
}

export default Hero
