/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class NavBar extends Component {
    render() {
        return (
            <div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12">
                            <nav className="navbar navbar-expand-lg bg-transparent">
                                <Link className="navbar-brand text-light" to="/">Honey</Link>
                                <button className="navbar-toggler " type="button" data-toggle="collapse"
                                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                    aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="text-light border px-2"><i className="fa-solid fa-bars"></i></span>
                                </button>

                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav m-auto ">
                                        <li className="nav-item active ">
                                            <Link className="nav-link text-danger" to="/">Home</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link text-light" to="/quality">quality</Link>
                                        </li>
                                        <li className="nav-item ">
                                            <Link className="nav-link text-light" to="/about">about</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link text-light" to="/shop">shop</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link text-light" to="/contact">contact us</Link>
                                        </li>
                                    </ul>
                                    <div className="form-inline my-2 my-lg-0">
                                        <Link to="/contact"><i className="fa-solid fa-user mr-3 text-light"></i></Link>
                                        <Link to="/search"><i className="fa-solid fa-magnifying-glass text-light"></i>
                                        </Link>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default NavBar
