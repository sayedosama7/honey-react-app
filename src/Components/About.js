import React from 'react'

const About = () => {
    return (
        <div>
            <div className="container-fluid about bg-light">
                <div className="row">
                    <div className="col-md-6">
                        <h2 className=" mb-4 mt-5">About Our Honey</h2>
                        <p className="text-muted">There are many variations of passages of Lorem Ipsum available, but the majority
                            have sufferedThere
                            are many variations of passages of Lorem Ipsum available, but the majority have sufferedThere are
                            many variations of passages of Lorem Ipsum available, but the majority have suffered</p>
                        <button className="btn btn-danger mt-3 mb-5">Read More</button>
                    </div>
                    <div className="col-md-6">
                        <img className="img-fluid" src="./images/about.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About