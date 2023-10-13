import React, { Component } from 'react'
import NavBar from '../NavBar'
import Contact from '../Contact'

export class AllContact extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <Contact />
            </div>
        )
    }
}

export default AllContact
