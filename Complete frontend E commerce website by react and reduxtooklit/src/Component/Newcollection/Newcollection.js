import React from 'react'
import "./Newcollection.css"
import new_collections from "../Assets/new_collections"
const Newcollection = () => {
  return (
    <div className='newcollection'>
<h1>NEW COLLECTIONS</h1>
<hr/>
<div className='wrapper'>
    {
        new_collections.map((items)=>(
<div className='newcollectionitem'>
<img className='itemimage' src={items.image}/>
               <div className='itemname'>
               { items.name}  
               </div>  
              <span className='newprice'>
              ${ items.new_price}
              </span>
              <span className='oldprice'>
              ${items.old_price}
              </span>
    </div>
        ))
    }
</div>
    </div>
  )
}

export default Newcollection