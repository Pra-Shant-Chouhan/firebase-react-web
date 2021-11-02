import React, { useState } from 'react'
import AboutHowtoUse from '../API/AboutHowtoUse'

const AboutUs = () => {
    // eslint-disable-next-line 
    const [aboutData, setAboutData] = useState(AboutHowtoUse)
    return (
        <>
            <section className='common-section our-services'>
                <div className="container mt5">
                    <div className="row">
                        <div className='col-12 col-lg-5 text-center our-service-leftside-img'>
                            <img src=".\images\hero3.jpg" alt="AboutUsImg" />

                        </div>
                        <div className='col-12 col-lg-7 our-services-list'>
                            <h3 className="mini-title">
                                --AVIALABLE @ GOOGLE AND IOS STROE ONLY
                            </h3>
                            <h1 className="main-heading">How to use the App?</h1>
                            {aboutData.map((curElem) => {
                                const { id, title, info } = curElem;
                                return (
                                    <>
                                        <div className="row our-services-info" key={title}>
                                            <div className="col-1 our-services-number">{id}</div>
                                            <div className="col-10 our-service-data">
                                                <h2>{title}</h2>
                                                <p className='main-hero-para' id='para-of-api'> {info} </p>
                                            </div>
                                        </div>
                                    </>
                                )
                            })}

                            <br />
                            <button className="btn btn-outline-success btn-style btn-style-border" type="submit">Learn More</button>
                        </div>
                    </div>
                </div>

            </section>

            {/* Second part of About us section */}
            <section className='common-section our-services our-services-rightside'>
                <div className="container mt5">
                    <div className="row">

                        <div className='col-12 col-lg-7 our-services-rightside-content d-flex justify-content-center align-item-right flex-column'>
                            <h3 className="mini-title">
                                --SUPPORT IN ANY LANGUAGES
                            </h3>
                            <h1 className="main-heading">World class support is <br />
                            available 24/7</h1>
                            {aboutData.map((curElem) => {
                                const { id, title, info } = curElem;
                                return (
                                    <>
                                        <div className="row our-services-info" key={info}>
                                            <div className="col-1 our-services-number">{id}</div>
                                            <div className="col-10 our-service-data">
                                                <h2>{title}</h2>
                                                <p className='main-hero-para' id='para-of-api'> {info} </p>
                                            </div>
                                        </div>
                                    </>
                                )
                            })}
                           
                            <br />
                            <button className="btn btn-outline-success btn-style btn-style-border" type="submit">Learn More</button>
                        </div>
                        <div className='col-12 col-lg-5  our-service-rightside-img "'>
                                <img src=".\images\callcenter.jpg" alt="AboutUsImg " />

                            </div>
                    </div>
                </div>

            </section>


        </>
    )
}

export default AboutUs
