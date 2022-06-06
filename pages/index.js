import React from 'react'
import {Product,FooterBanner,HeroBanner} from "../components/index"
const Home = () => {
  return (
    <>
      <HeroBanner/>

      <div className="products-heading">
        <h2>Beset Selling Products</h2>
        <p>Speakers of many variations</p>
      </div>

      <div className="products-container">
        {['Products 1','Products 2'].map((product) => product)}
      </div>

      <FooterBanner/>
    </>
  )
}

export default Home