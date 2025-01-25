import React from 'react';
import CardBG2 from '../assets/special-offer/special-offer-card-bg-2.jpg';
import CardBG3 from '../assets/special-offer/special-offer-card-bg-3.jpg';

const SpecialOfferCard = () => {

    const cards = [
        { image: CardBG3, smallHeading: 'Save Upto 20%', bigHeading: 'Special Offer', buttonText: 'Shop Now', },
        { image: CardBG2, smallHeading: 'Mens Clothing', bigHeading: 'Amazing Deals', buttonText: 'Check Now', },
    ]

    return (

        <div className="max-w-7xl my-10 container mx-auto px-4 slide-from-bottom ">

            <div className='flex flex-col items-center justify-center text-center gap-3 pb-8'>
                <h1 className='text-3xl min-[425px]:text-4xl font-bold uppercase slide-from-left'>Deals & Offers</h1>
                <p className='font-semibold text-xs min-[425px]:text-sm text-gray-500 uppercase slide-from-right'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, fugit! Corporis non recusandae consequuntur.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {cards.map((item, index) => (
                    <div
                        key={index}
                        className="group relative overflow-hidden rounded-sm bg-gray-200"
                        style={{ height: 300 }}
                    >
                        <div
                            className="w-full h-full bg-cover bg-center group-hover:rotate-[5deg] duration-300 ease-in-out transition-all group-hover:scale-[1.3]"
                            style={{
                                backgroundImage: `url(${item.image})`,
                                boxShadow: 'inset 0 0 250px rgba(0, 0, 0, 0.7)',
                            }}
                        />
                        {/* Centered Content */}
                        <div className="absolute inset-0 flex justify-center items-center z-10">
                            <div className="text-center flex flex-col items-center">
                                <p className="font-bold text-xl sm:text-2xl md:text-2xl text-[#f5f5f5] drop-shadow-2xl">{item.smallHeading}</p>
                                <p className="font-bold text-4xl sm:text-5xl md:text-5xl text-[#f5f5f5] mb-1">{item.bigHeading}</p>
                                <button className="py-1.5 px-6 my-3 bg-yellow-500 rounded-sm font-medium">{item.buttonText}</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SpecialOfferCard;
