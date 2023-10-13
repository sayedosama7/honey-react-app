import React, { Component } from 'react'
import Header from './Header'
import About from './About'
import Quality from './Quality'
import Contact from './Contact'
import Baner from './Baner'
import Footer from './Footer'
import NavBar from './NavBar'

export class HomePage extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <Header />
                <About />
                <Quality />
                <Contact />
                <Baner />
                <Footer />
            </div>
        )
    }
}

export default HomePage
