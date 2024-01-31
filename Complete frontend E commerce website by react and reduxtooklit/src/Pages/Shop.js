import React from 'react'
import Hero from '../Component/Hero/Hero'
import Product from "../Component/Product/Product"
import Offers from '../Component/Offers/Offers'
import Newcollection from '../Component/Newcollection/Newcollection'
import Newsletter from '../Component/Newsletter/Newsletter'
import Footer from '../Component/Footer/Footer'

const Shop = () => {
  return (
    <div className='shop'>
<Hero></Hero>
<Product></Product>
<Offers></Offers>
<Newcollection></Newcollection>
<Newsletter></Newsletter>

    </div>
  )
}

export default Shop