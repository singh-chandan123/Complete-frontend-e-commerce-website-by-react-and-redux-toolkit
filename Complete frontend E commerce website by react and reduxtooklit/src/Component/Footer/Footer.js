import React from 'react'
import logo from "../Assets/logo.png"
import instagram_icon from '../Assets/instagram_icon.png'
import pintester_icon from "../Assets/pintester_icon.png"
import whatsapp_icon from "../Assets/whatsapp_icon.png"
import "./Footer.css"
const Footer = () => {
  return (
    <div className='footer'>
<div className='imglogo'>
<img  className=" footerlogo" src={logo}/>
<h2>SHOPPER</h2>
</div>

<ul className='links'>
<li>Company</li>
<li>Products</li>
<li>Offices</li>
<li>About</li>
<li>Contact</li>
</ul>

<div className='icon'>
<img className='iconimg' src={instagram_icon}/>
<img className='iconimg' src={pintester_icon}/>
<img className='iconimg' src={whatsapp_icon}/>
</div>
<hr/>
<div className='copyright'>
<p>Copyright @ 2023-All right reserved</p>
</div>

    </div>
  )
}

export default Footer