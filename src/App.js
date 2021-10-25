import React from 'react'
import AboutUs from './component/AboutUs'
import Contact from './component/Contact'
import Footer from './component/Footer'
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
      <Services />
      <Contact />
      <Footer/>
    </>
  )
}

export default App

