import React from 'react';
import RelaxingImage from '../assets/shop-by-activity/relaxing.jpg'
import ActiveImage from '../assets/shop-by-activity/active.jpg'
import ResortImage from '../assets/shop-by-activity/resort.jpg'
import SwimImage from '../assets/shop-by-activity/swim.jpg'
import TravelImage from '../assets/shop-by-activity/travel.jpg'

const ShopByActivity = () => {

    const activities = [
        { linkTitle: 'shop now', image: RelaxingImage, title: 'Relaxing', },
        { linkTitle: 'shop now', image: ActiveImage, title: 'Active', },
        { linkTitle: 'shop now', image: SwimImage, title: 'Swin Wear', },
        { linkTitle: 'shop now', image: TravelImage, title: 'Travel', },
        { linkTitle: 'shop now', image: ResortImage, title: 'Resort Wear', },
    ]

    return (
        <>
            <div className="max-w-7xl container mx-auto px-4 py-2">
                
                <div className='flex flex-col items-center justify-center text-center gap-3 py-8'>
                    <h1 className='text-3xl min-[425px]:text-4xl font-bold uppercase slide-from-left'>Shop By Activity</h1>
                    <p className='font-semibold text-xs min-[425px]:text-sm text-gray-500 uppercase slide-from-right'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, fugit! Corporis non recusandae consequuntur.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                    {activities.map((item, index) => (
                        <div
                            key={index}
                            className='bg-stone-200 h-96  min-[425px]:h-[480px] sm:h-[380px] lg:h-80 overflow-hidden group relative cursor-pointer slide-from-top'>
                            <div
                                className=" h-full bg-cover bg-center rounded-sm  group-hover:scale-110 duration-700 ease-in-out transition-transform"
                                style={{
                                    backgroundImage: `url(${item.image})`,
                                    boxShadow: 'inset 0 0 100px rgba(0, 0, 0, 0.7)',
                                }}>
                            </div>
                            <div className='absolute left-0 bottom-0'>
                                <div className='flex flex-col text-[#f5f5f5] px-3 py-1.5'>
                                    <p className='font-semibold drop-shadow-2xl text-left text-xl'>{item.title}</p>
                                    <p className='underline text-left'>{item.linkTitle}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default ShopByActivity;
