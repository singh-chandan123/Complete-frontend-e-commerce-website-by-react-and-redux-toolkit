import React, { useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'
import {  useSelector } from 'react-redux'
const Navbar = () => {
    const[menu,setmenu]=useState("shop");
    const totalproduct=useSelector((item)=>(item.cart))
  return (
    <div className='navbar'>

<div className='navlogoimg'>
<img className='imagelogo' src={logo}/>
<h2>SHOPPER</h2>
</div>

<div className='different_list'>
<ul className='unorderlist'>
<li className='listclass' onClick={()=>{setmenu("shop")}}> <Link style={{textDecoration:'none'}} to="/">shop</Link> {menu==="shop"?<hr/>:<></>} </li>
    <li className='listclass' onClick={()=>{setmenu("Men")}}> <Link style={{textDecoration:'none'}} to="/men">Men</Link> {menu==="Men"?<hr/>:<></>}</li>
    <li className='listclass' onClick={()=>{setmenu("women")}}> <Link style={{textDecoration:'none'}} to="/women">women</Link> {menu==="women"?<hr/>:<></>}</li>
    <li className='listclass' onClick={()=>{setmenu("kid")}}><Link style={{textDecoration:'none'}} to="/kid">kid</Link> {menu==="kid"?<hr/>:<></>}</li>
    
</ul>
</div>

<div className='loginandcart'>
    <Link to="/login"><button className='loginbuton'>Login</button></Link>
   <Link to="/carts"> <img className='cartimg' src={cart_icon}/></Link>
    <div className='cartcount'>{totalproduct.length}</div>
</div>

</div>
  

  )
}

export default Navbar