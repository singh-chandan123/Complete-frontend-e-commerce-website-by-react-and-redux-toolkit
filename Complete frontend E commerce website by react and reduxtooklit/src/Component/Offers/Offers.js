import React from 'react'
import "./Offers.css"
import exclusive_image from "../Assets/exclusive_image.png"
const Offers = () => {
  return (
    <div className='offers'>
<div className='offerleft'>
<h1>Exclusive</h1>
<h1>Offers for you</h1>
<h3>ONLY ON BEST SELLERS PRODUCT</h3>
<button className='button'>Check Now</button>
</div>
<div className='offerright'>
<img src={exclusive_image} />
</div>
    </div>
  )
}

export default Offers