import React from 'react'
import './Item.css'
import { useDispatch } from 'react-redux'
import { addtocart } from '../../Store/Cartslice';

const Items = (props) => {
    const dispatch=useDispatch();
    const handleclick=(product)=>{
dispatch(addtocart(product));
    }
  return (
    <div className='item'>
<img className='propimg' src={props.image} />
<div className='nameofitem'>{ props.name}</div>

<div className='pricetag'>
${props.new_price}

<div className='oldprices'>${props.old_price}</div>
<button className='addto' onClick={()=>{handleclick(props)}}>AddtoCart</button>
</div>



    </div>
  )
}

export default Items