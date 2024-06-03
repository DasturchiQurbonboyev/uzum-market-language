import React from 'react'
import Hero from '../../components/swiper/Hero'
import Product from '../../components/products/Product'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'

const Home = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <Product />
            {/* <Footer /> */}
        </div>
    )
}

export default Home