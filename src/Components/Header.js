/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

const Header = () => {
    return (
        <div>
        <div className='container'>
                <div className="row header">
                    <div className="col-md-6 header-caption">
                        <h2 className="h1 text-light  text-monospace">YOU CAN GET PURE HONY HERE</h2>
                        <p className="text-light font-italic">There are many variations of passages of Lorem Ipsum available, but
                            the majority have suffered</p>
                        <button className="btn btn-danger my-3">contact</button>
                    </div>

                    <div className="col-md-6 mt-3">
                        <img className="img-fluid mt-1 mb-5" src="./images/banner_img.png" alt="" />
                    </div>

                </div>
                </div>
            </div>
    )
}

export default Header