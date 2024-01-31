import React from 'react'
import './CSS/Loginpage.css'
const Loginpage = () => {
  return (
    <div className='login'>

<div className='loginpagestart'>

<h2>Sign up</h2>
<div className='inputtag'>
    <input type='text' className='inputname' placeholder='Enter Name'/>
    <input type='text' className='inputname' placeholder='Email-address'/>
    <input type='text' className='inputname' placeholder='Password'/>
</div>
<button className='continue'>Continue</button>
<p className='verify'>Already have an account? <span>Login here</span></p>
<div className='lastcheckbox'>
<input className='checkbox' type='checkbox'/>
<p className='namelast'>By continue, i agree to the terms of use and privacy policy. </p>
</div>
</div>
    </div>
  )
}

export default Loginpage;
