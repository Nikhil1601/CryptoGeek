import React from 'react'
import Featured from '../components/Featured'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Featured />
      <Footer />
    </div>
  )
}

export default Home
