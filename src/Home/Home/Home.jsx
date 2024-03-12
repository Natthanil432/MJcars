import { Component } from 'react'
import Navbar from '../../Navbar/Navbar'
import About from '../About/About'
import Banner from '../Banner/Banner'
import Cars from '../Cars/Cars'
import Footer from '../Footer/Footer'

export default class Home extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <Banner />
                <About />
                <Cars />
                <Footer />
            </div>
        )
    }
}