import React from 'react'
import BrandsList from '../components/BrandsList'
import Featured from '../components/Featured'
import Newsletter from '../components/Newsletter'
import Slider from '../components/Slider'
import '../App.css'

const Home = () => {
  return (
    <div>
      <Slider />
      <BrandsList />
      <Featured />
      <Newsletter />
    </div>
  )
}

export default Home
