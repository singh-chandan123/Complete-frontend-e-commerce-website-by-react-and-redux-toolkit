import React from 'react'
import data_product from '../Assets/data'
import "./Product.css"
const Product = () => {
  return (
    <div className='popular'>
        <h1>Popular in women</h1>
        <hr/>
        <div className='allitem'>
        {

        data_product.map((item)=>(
            <div>
                <img className='itemimage' src={item.image}/>
               <div className='itemname'>
               { item.name}  
               </div>  
              <span className='newprice'>
              ${ item.new_price}
              </span>
              <span className='oldprice'>
              ${item.old_price}
              </span>
              
             
               
                        
              
              
                </div>
        ))
        }
        </div>

    </div>
  )
}

export default Product;