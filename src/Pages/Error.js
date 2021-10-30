import React from 'react'
import Error404 from '../component/Error404'

import Footer from '../component/Footer'
import Navbar from '../component/Navbar'

const Error = () => {
    return (
        <div>
            <Navbar/>
            <Error404 />
            <Footer/>
        </div>
    )
}

export default Error
