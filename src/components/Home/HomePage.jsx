import React from 'react'
import HeroSection from './HeroSection'
import iphone from '../../assets/image/iphone-14-pro.webp'
import mac from '../../assets/image/mac-system-cut.jfif'
import FeaturedProducts from './FeaturedProducts'

const HomePage = () => {
  return (
    <div>
        <HeroSection 
          title="Buy Iphone 14 Pro" 
          subtitle="Experience the power of the latest Iphone 14 with our most Pro camera ever"
          link="/"
          image={iphone}
        />

        <FeaturedProducts />

        <HeroSection 
          title="Build the ultimate setup" 
          subtitle="You can add Studio display and colour-matched Magic accessories to your bag after configure your mac mini"
          link="/"
          image={mac}
        />
    </div>
  )
}

export default HomePage