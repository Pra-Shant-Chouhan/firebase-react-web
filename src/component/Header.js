import React from 'react'

const Header = () => {
    return (
        <>
            <header>
                <section className="container main-hero-container">
                    <div className="row">
                        <div className="col-12 col-lg-6 header-left-side d-flex justify-content-center flex-column align-items-start order-lg-first order-last">
                            <h1 className="display-2">
                                Online Payment Made <br /> Easy For You.
                            </h1>
                            <p className="main-hero-para" id='main-section-para'>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et,
                                quia quis? Ipsa officia ad deserunt voluptate quam, nisi odio
                                officiis tempora recusandae voluptate quam, nisi odio officiis
                                tempora recusandae
                            </p>
                            <h3 id='head-of-mainpara'>Get early access for you</h3>
                            <div className="input-group mt-3">
                                <input
                                    type="text"
                                    className="rounded-pill w-75 me-3 p-2 form-control-text"
                                    placeholder='Enter Your Email'
                                />
                                <div className="input-group-text">Get it now</div>
                            </div>
                        </div>
                        {/*  --------------- main header right side--------------  */}
                        <div className="col-12 col-lg-6 header-right-side d-flex justify-content-center align-items-center main-hero-section-images order-md-first order-sm-first">
                            <img
                                src="./images/hero1.jpg"
                                alt="heroimg"
                                className="img-fluid"
                            />
                            <img
                                src="./images/hero4.jpg"
                                alt="heroimg4"
                                className="img-fluid main-hero-img2"
                            />
                        </div>
                    </div>
                </section>
            </header>
        </>
    )
}

export default Header
