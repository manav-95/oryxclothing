import React from 'react'

import FashionImage1 from '../assets/fashion-card-images/fashion-card-bg-1.jpg'
import FashionImage2 from '../assets/fashion-card-images/fashion-card-bg-2.jpg'
import FashionImage3 from '../assets/fashion-card-images/fashion-card-bg-3.jpg'
import FashionImage4 from '../assets/fashion-card-images/fashion-card-bg-4.jpg'

const CardImageContainer = () => {

    const images = [
        { image: FashionImage1 },
        { image: FashionImage2 },
        { image: FashionImage3 },
        { image: FashionImage4 },
    ]

    return (
        <>
            <div className='max-w-7xl container mx-auto my-10 px-4 slide-from-bottom'>
                <div className='flex flex-col items-center justify-center text-center gap-3 pb-8'>
                    <h1 className='text-3xl sm:text-4xl font-bold uppercase slide-from-left'>Collections</h1>
                    <p className='font-semibold text-xs sm:text-sm text-gray-500 uppercase slide-from-right'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, fugit! Corporis non recusandae consequuntur.
                    </p>
                </div>


                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4'>
                    {images.map((item, index) =>
                        <div key={index} className='overflow-hidden'>
                            <div className='w-full h-56 md:h-64 lg:h-80 bg-cover bg-center hover:scale-110 transition-all duration-200 ease-in-out'
                                style={{ backgroundImage: `url(${item.image})` }}
                            ></div>
                        </div>
                    )}




                </div>
            </div>
        </>
    )
}

export default CardImageContainer
