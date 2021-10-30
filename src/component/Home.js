import React from 'react'
import AboutUs from './AboutUs'
import ContactUs from './ContactUs'
import Footer from './Footer'
import Header from './Header'
import HowItWork from './HowItWork'
import Navbar from './Navbar'
import Services from './Services'

const Home = () => {
    return (
        <>
          <Navbar />
          <Header />
          <HowItWork />
          <AboutUs />
          <Services />
          <ContactUs/>
          <Footer/>
        </>
      )
}

export default Home
