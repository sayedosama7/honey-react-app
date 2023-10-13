import React from 'react'

const Contact = () => {
    return (
        <div>
            <div className="container contact">
                <h2 className="h1 text-center text-light text-monospace mb-5">Contact Us</h2>
                <div className="row">
                    <div className="col-md-12">
                        <form>
                            <div className="form-group d-flex">
                                <input type="text" className="form-control px-3 py-4 mr-3 w-40 bg-transparent text-danger"
                                    id="exampleInputname" aria-describedby="nameHelp" placeholder="Full name"/>

                                    <input type="email" className="form-control px-3 py-4  w-40 bg-transparent text-danger "
                                        id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="E-mail"/>
                                    </div>


                                    <div className="form-group d-flex">
                                        <input type="tel" className="form-control px-3 py-4 mr-3 w-40 bg-transparent text-danger"
                                            id="exampleInputNumber1" aria-describedby="numberHelp" placeholder="phone number"/>

                                            <input type="text" className="form-control px-3 py-4 w-40 mb-4 bg-transparent text-danger"
                                                id="exampleInputMessage1" placeholder="message"/>
                                            </div>
                                            <button className="btn btn-danger px-5 m-auto d-block">send</button>
                                        </form>
                                    </div>
                            </div>
                    </div>
                </div>
                )
}

                export default Contact