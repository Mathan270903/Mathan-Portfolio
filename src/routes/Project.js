import React from 'react'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Heroimg2 from '../components/Heroimg2'
import PricingCart from '../components/PricingCart'
import Work from '../components/Work'

const Project = () => {
  return (
    <div>
      <Navbar />
      <Heroimg2 heading = "Projects." text = "Some of my recent projects."/>
      <Work />
      <PricingCart />
      <Footer />
    </div>
  )
}

export default Project