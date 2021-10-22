import React from 'react'

const Navbar = () => {
    
    return (
        <>
            <section className='navbar-bg'>

                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container">
                        <a className="navbar-brand" href="#">Bitt2Pay</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className={`collapse navbar-collapse `} id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Services</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">About Us</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Conatact Us</a>
                                </li>
                              
                            </ul>
                            <form className="d-flex">
                                
                                <button className="btn btn-outline-success btn-style btn-style-border" type="submit">Sign Up</button>
                                <button className="btn btn-outline-success btn-style btn-style-border" type="submit">Sign In</button>
                            </form>
                        </div>
                    </div>
                </nav>
            </section>
        </>
    )
}

export default Navbar
