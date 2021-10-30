import React from 'react'

const Footer = () => {
    return (
        <>
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-10 mx-10">
                            <div className="row">
                                <div className="col-6 col-lg-3">

                                    <h2>Company</h2>
                                    <ul>
                                        <li>
                                            <a href="#">About</a>
                                        </li>
                                        <li>
                                            <a href="#">Privacy Policy</a>
                                        </li>
                                        <li>
                                            <a href="#">Terms of Service</a>
                                        </li>
                                        <li>
                                            <a href="#">Advertising</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-6 col-lg-3">

                                    <h2>Support</h2>
                                    <ul>
                                        <li>
                                            <a href="#">Help
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">Blog
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">Pricing</a>
                                        </li>
                                        <li>
                                            <a href="#">Knowledge base</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-6 col-lg-3">

                                    <h2>Services</h2>
                                    <ul>
                                        <li>
                                            <a href="#">Blog</a>
                                        </li>
                                        <li>
                                            <a href="#">Events</a>
                                        </li>
                                        <li>
                                            <a href="#">Chargeback Guide</a>
                                        </li>
                                        <li>
                                            <a href="#">Settlement Guide</a>
                                        </li>
                                    </ul>
                                </div>

                                <div className="col-6 col-lg-3">

                                    <h2>Follow Us</h2>
                                    <div className="row">
                                        <div className="col-3 mx-auto">
                                            <a href="https://github.com/Pra-Shant-Chouhan">
                                                <i className='fab fa-github fontawesome-stlye'></i>
                                            </a>
                                        </div>
                                        <div className="col-3 mx-auto">
                                            <a href="https://stackoverflow.com/users/15393021/prashant-chouhan">
                                                <i className='fab fa-stack-overflow fontawesome-stlye'></i>
                                            </a>
                                        </div>
                                        <div className="col-3 mx-auto">
                                            <a href="">
                                                <i className='fab fa-linkedin fontawesome-stlye'></i>
                                            </a>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr />
                            <div className="mt-2">
                                <p className="main-hero-para text-center w-100">Copyright@2021 Bitt2Pay .All rights reserved</p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
