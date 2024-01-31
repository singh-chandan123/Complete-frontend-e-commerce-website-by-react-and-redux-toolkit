import React from 'react'
import all_product from '../Component/Assets/all_product'
import Items from '../Component/Items/Items'
import  './CSS/Shopcategory.css'
import dropdown_icon from '../Component/Assets/dropdown_icon.png'
const Shopcategories = (props) => {
  return (
    <div className='shopcategory'>
<hr/>
<img className='banner' src={props.name}/>
<div className='shopcategoryheading'>
<p >
    <span className='highlight'>Showing 1-12 </span>
    out of 36 product
</p>
<p className='sortby'>sort by <img src={dropdown_icon} /> </p>
</div>

<div className='imagefiltering'>
{
   all_product.map((item,i)=>{
    if(item.category===props.category){
        return <Items image={item.image} name={item.name} new_price={item.new_price}  old_price={item.old_price} id={item.id} />
   
       
    }
    else{
        return null
    }
   })
     
        
  
    
 
    }
</div>


    </div>
  )
}

export default Shopcategories