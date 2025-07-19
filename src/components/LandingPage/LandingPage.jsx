import React from 'react'
import HeroSection from './HeroSecton/HeroSection'
import About from './About/About'
import DataSafety from './DataSafety/DataSafety'
import Rating from './Rating/Rating'
import WhatsNew from './WhatsNew/WhatsNew'

export default function LandingPage() {
  return (
    <div className={" px-2 md:px-4 w-full"}>
        <HeroSection />
        <About />
        <DataSafety />
        <Rating />
        <WhatsNew />
    </div>
  )
}
