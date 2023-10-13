import React, { Component } from 'react'
import NavBar from './NavBar'

export class Search extends Component {
    render() {
        return (
            <div>
                <div>
                    <NavBar />
                    <div className='container-fluid search'>
                        <div className='row'>

                            <div className='col-md-12'>
                                <h2 className='text-light text-center mb-5'>honey</h2>
                                <form className='m-auto w-75'>
                                    <input className='form-control py-4 text-center' type='search' placeholder='write here what you search about' />
                                    <button className='form-control mt-3 btn btn-warning'>search</button>

                                </form>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default Search
