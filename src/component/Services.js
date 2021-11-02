import React, { useState } from 'react'
import serviceapi from '../API/serviceapi.js'

const Services = () => {
    // eslint-disable-next-line 
    const [serviceData, setServiceData] = useState(serviceapi)
    return (
        <>
            <section className='serivice-main-container'>
                <div className="container service-container">
                    <h1 className="main-heading text-center fw-bold">
                        How to send money
                    </h1>
                    <div className="row">
                        {serviceData.map((curElem) => {
                            const { id, logo, title, info } = curElem;
                            return (
                                <>
                                    <div className="col-12 com-lg-4 col-xxl-4 work-container-subdiv my-5" key={id}>
                                        <i className={`fontawesome-stlye ${logo}`}></i>
                                        <h2 className="subheading">{title}</h2>
                                        <p className='main-hero-para'>{info}</p>
                                    </div>
                                </>
                            )
                        })}

                    </div>
                </div>
            </section>
        </>
    )
}

export default Services
