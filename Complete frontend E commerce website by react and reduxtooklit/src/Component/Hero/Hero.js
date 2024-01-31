import React from 'react'
import './Hero.css'
import hand_icon from '../Assets/hand_icon.png'
import arrow_icon from '../Assets/arrow.png'
import hero_image from '../Assets/hero_image.png'
const Hero = () => {
  return (
    <div className='hero'>
        <div className='horizontalline'></div>
<div className='bothclass'>

<div className='heroleft'>
    <p className='heading'>NEW ARRIVALS ONLY</p>
    <div className='heroleftheading'>
<h1 className='new'>new</h1>
<img className='handimg' src={hand_icon} />
    </div>
<div className='secondheading'>
<h1>collection </h1>
<h1>for everyone</h1>
</div>
<button className='button'>Latest collection  </button>

</div>
<div className='heroright'>
<img src={hero_image}/>
</div>
</div>
    </div>
  )
}

export default Hero