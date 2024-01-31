import React from 'react'
import "./Newsletter.css"
const Newsletter = () => {
  return (
    <div className='newsletter'>
<h1>Get Exclusive offers in your email</h1>
<p>Subscribe to our newsletter and stay updated</p>
<div className='inputtagss'>
    <input placeholder='your email id' name='email' className='emailname'/>
    <button className='butons'>Subscribe</button>
</div>
    </div>
  )
}

export default Newsletter