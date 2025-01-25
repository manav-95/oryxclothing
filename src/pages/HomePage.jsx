import React from 'react'
import Hero from '../components/Hero'
import SpecialOfferCard from '../components/SpecialOfferCard'
import ShopByActivity from '../components/ShopByActivity'
import CardImageContainer from '../components/CardImageContainer'
import WhatsAppButton from '../components/WhatsAppButton'

const HomePage = () => {
  return (
    <>
    <div>
        <Hero />
        <ShopByActivity />
        <SpecialOfferCard />
        <CardImageContainer />
        <WhatsAppButton />
    </div>
    </>
  )
}

export default HomePage