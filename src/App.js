import React from 'react'
import AboutUs from './component/AboutUs'
import Header from './component/Header'
import HowItWork from './component/HowItWork'
import Navbar from './component/Navbar'

const App = () => {
  return (
    <>
      <Navbar />
      <Header />
      <HowItWork />
      <AboutUs/>
    </>
  )
}

export default App

