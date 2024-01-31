import React from 'react'
// import Items from '../Component/Items/Items';
import './CSS/Carts.css'
import { useDispatch, useSelector } from 'react-redux'
import { remove } from '../Store/Cartslice';

const Carts = () => {
    const totalproduct=useSelector((item)=>(item.cart));
    const dispatch=useDispatch();
    const handleremove=(id)=>{
dispatch(remove(id))
    }
  return (
    <div className='carts'>
        <hr/>
        <h2>all selected product are here</h2>
        <div className='items-filters'>      
{
    totalproduct.map((item)=>(
        <div className='allitems'>
            <img className='allitems-image' src={item.image}/>
            {item.name}
          
         <div className='allitems-price' >
        ${item.new_price}
           
            </div>
          <button className='removes' onClick={()=>{handleremove(item.id)}}>Remove</button>
            </div>
    ))
}

</div>

    </div>

  )
}

export default Carts