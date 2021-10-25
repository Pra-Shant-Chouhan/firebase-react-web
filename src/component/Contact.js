import React from 'react'

const Contact = () => {
    return (
        <>
            <section className='contactus-section'>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-10 mx-auto">
                            <div className="row">
                                <div className="contact-leftside col-12 col-lg-5">
                                    <h1 className='main-heading fw-blod'>
                                        Contact with our <br /> Sales Team
                                    </h1>
                                    <p className="main-hero-para">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, nihil natus. Eligendi nostrum exercitationem enim voluptas consequatur voluptatem. Voluptatem, dolore.
                                    </p>
                                    <figure>
                                        <img className='img-fluid' src="..\images\hero1.jpg" alt="contactUsimg" />
                                    </figure>

                                </div>
                                <div className="contact-rightside col-12 col-lg-7">
                                    <form method='POST'>
                                        <div className="row">
                                            <div className="col-12 col-lg-6 contact-input-filed">
                                                <input className='form-control' type="text" name="" id="" placeholder='First Name' />
                                            </div>
                                            <div className="col-12 col-lg-6 contact-input-filed">
                                                <input className='form-control' type="text" name="" id="" placeholder='Last Name' />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-12 col-lg-6 contact-input-filed">
                                                <input className='form-control' type="number" name="" id="" placeholder='Mobile NO.'></input>
                                            </div>
                                            <div className="col-12 col-lg-6 contact-input-filed">
                                                <input className='form-control' type='email' name="" id="" placeholder='Enter your E-mail' />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-12 contact-input-filed">
                                                <input className='form-control' type="text" name="" id="" placeholder='Add your Address' />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-12 contact-input-filed">
                                                <input className='form-control' type="text" name="" id="" placeholder='Enter Your Feedback' />
                                            </div>
                                        </div>
                                        <div className="mb-3 form-check contact-input-filed">
                                            <input type="checkbox" className="form-check-input " id="exampleCheck1"/>
                                                <label className="form-check-label" for="exampleCheck1">Check me out</label>
                                        </div>
                                        <button className="btn btn-outline-success btn-style btn-style-border w-100" type="submit">Submit</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}

export default Contact
