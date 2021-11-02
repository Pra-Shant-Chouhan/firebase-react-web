import React, { useState } from 'react'
import workapi from '../API/workApi'

const HowItWork = () => {
    const [workData, setWorkData] = useState(workapi)
    console.log(workData)
    return (
        <>
            <section>
                <div className="work-container container">
                    <h1 className="main-heading text-center">How does it work
                    </h1>
                    <div className="row">
                        {workData.map((curElem) => {
                            const { id, logo, title, info } = curElem;
                            return (
                                <>
                                    <div className="col-12 col-lg-4 text-center work-container-subdiv " id='how-it-work-div' key ={id}>
                                        <i className={`fontawesome-stlye ${logo}`}></i>
                                        <h2 className="sub-heading">{`${title}`}</h2>
                                        <p className="main-hero-para w-100" id='para-of-api'>
                                            {`${info}`}
                                        </p>
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

export default HowItWork
