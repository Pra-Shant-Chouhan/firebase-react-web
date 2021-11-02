import React, { useState } from 'react'

const ContactUs = () => {
    const [userData, setUserData] = useState({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        address: "",
        message: ""
    })

    let name, value;
    const postUserData = (event) => {
        name = event.target.name;
        value = event.target.value;
        setUserData({ ...userData, [name]: value })
    }
    // connect with firebase 
    const submitData = async (event) => {
        event.preventDefault();
        const { firstName, lastName, phone, email, address, message } = userData;
        if (firstName && lastName && phone && email && address && message) {
            const res = await fetch(
                "https://fir-react-app-3ca73-default-rtdb.firebaseio.com/userDataRecords.json",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "aplication/json"
                    },
                    body: JSON.stringify({
                        firstName, lastName, phone, email, address, message
                    }),
                }
            );
            if (res) {
                setUserData({
                    firstName: "",
                    lastName: "",
                    phone: "",
                    email: "",
                    address: "",
                    message: ""
                })
                alert("Data is Stored")
            }
            else {
                alert("plz fill the data")
            }
        } else {
            alert("plz fill the data")
        }
    }
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
                                    <p className="main-hero-para" id='contact-us-para'>
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
                                                <input className='form-control' type="text" name="firstName" id="" placeholder='First Name' value={userData.firstName} onChange={postUserData} />
                                            </div>
                                            <div className="col-12 col-lg-6 contact-input-filed">
                                                <input className='form-control' type="text" name="lastName" id="" placeholder='Last Name' value={userData.lastName} onChange={postUserData} />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-12 col-lg-6 contact-input-filed">
                                                <input className='form-control' type="tel" name="phone" id="" placeholder='Mobile NO.' value={userData.phone} onChange={postUserData}></input>
                                                
                                            </div>
                                            <div className="col-12 col-lg-6 contact-input-filed">
                                                <input className='form-control' type='email' name="email" id="" placeholder='Enter your E-mail' value={userData.email} onChange={postUserData} />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-12 contact-input-filed">
                                                <input className='form-control' type="text" name="address" id="" placeholder='Add your address' value={userData.address} onChange={postUserData} />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-12 contact-input-filed">
                                                <input className='form-control' type="text" name="message" id="" placeholder='Enter Your Feedback' value={userData.message} onChange={postUserData} />
                                            </div>
                                        </div>
                                        
                                        <button className="btn btn-outline-success btn-style btn-style-border w-100" type="submit" onClick={submitData}>Submit</button>
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

export default ContactUs
