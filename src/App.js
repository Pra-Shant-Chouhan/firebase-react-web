import React from 'react'
import AboutUs from './component/AboutUs'
import Header from './component/Header'
import HowItWork from './component/HowItWork'
import Navbar from './component/Navbar'
import Services from './component/Services'

const App = () => {
  return (
    <>
      <Navbar />
      <Header />
      <HowItWork />
      <AboutUs />
      <Services/>
    </>
  )
}

export default App

