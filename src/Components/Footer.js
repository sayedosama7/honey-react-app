/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react'

class Footer extends Component {
    render() {
        return (
            <div>
                <div className="container footer text-light my-5 text-center">
                    <div className="row">

                        <div className="col-md-6 col-lg-3">
                            <h2 className="mb-4">about</h2>
                            <small>Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit, <br /> sedconsectetur</small>
                            <div className="icons my-3">
                                <a href=""><i className="fa-brands fa-facebook mr-2 text-light"></i></a>
                                <a href=""><i className="fa-brands fa-twitter mr-2 text-light"></i></a>
                                <a href=""><i className="fa-brands fa-linkedin mr-2 text-light"></i></a>
                                <a href=""><i className="fa-brands fa-instagram text-light"></i></a>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-3">
                            <h2 className="mb-4">Adderess</h2>
                            <small>Healing Center, oo W Street <br/> name,
                                Loram ipusum</small>
                            <div className="my-3">
                                <h6>+2 01210304516</h6>
                                <h6>+2 01210304516</h6>
                            </div>
                            <a className="text-light" href="#">demo@gmail.com</a>
                        </div>

                        <div className="col-md-6 col-lg-3 links">
                            <h2 className="mb-4">Links</h2>
                            <div className="d-flex flex-column">
                                <a className="text-light mb-2" href="">home</a>
                                <a className="text-light mb-2" href="">about</a>
                                <a className="text-light mb-2" href="">shop</a>
                                <a className="text-light mb-2" href="">quality</a>
                                <a className="text-light mb-2" href="">contact</a>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 Newsletter">
                            <h2 className="mb-4">Newsletter</h2>
                            <form>
                                <input className="mb-2 rounded pl-2" type="text" name="" placeholder="your name" />
                                <input className="mb-2 rounded pl-2" type="email" name="" id="" placeholder="email" />
                                <button className="btn btn-danger d-block m-auto">suscribe</button>
                            </form>
                        </div>

                    </div>

                    <div className="text-center my-5">
                        <h5>© 2020 All Rights Reserved.</h5>
                        <h4 className="text-danger">sayed osama</h4>
                    </div>

                </div>
            </div>
        )
    }
}

export default Footer
