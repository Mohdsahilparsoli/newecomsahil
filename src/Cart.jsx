import React from 'react'
import { useCartconext } from './context/Cartconetxt'
import {AiFillDelete} from "react-icons/ai"
import { Link } from 'react-router-dom';
const Cart = () => {
  const {Cart,removeproduct,removealldata} = useCartconext();
  
 if(Cart.length===0){
  return <>
  <div className="emtycart">
    <div className="maincart">
      <h1>Please Continue Shoping</h1>
    <Link to={"/product"}>
    <button>Continue Shoping</button>
    </Link>

    </div>
  </div>
  
  </>
 }
  return (

<div className="cartpage">

<div className='fieldname'>
  <h6>Product</h6>
  <h6>Price</h6>
  <h6> Quantitty</h6>
  <h6>Subt total</h6>
  <h6>Remove</h6>
  
</div>


<div className="productsdata">

  {
    Cart.map((value,index)=>{
      console.log(value)
      const {color,price,id,amount,name,maxprice,image} = value
      return (
        <>
        <div className='product'>
          <img src={image} alt={name} />
          <div className="productbody">
            <h6 className='colorcart'>{name}  <span style={{backgroundColor:color}}></span></h6>
            
          </div>
        </div>
        <div className='product'><h6>{price}</h6></div>
        <div className='product'>
        <button>+</button>
        <input type="text" value={amount} />
        <button>-</button>
        </div>
        <div className='product'>
      <h6>
      {amount*price}

        </h6>            </div>
        <div className='product'>
        <button className='remove' onClick={()=>removeproduct(id)}><AiFillDelete></AiFillDelete></button>
        </div>
        
        </>
      )
      
      
    })
  }
</div>

<div className="removealldata">
 <Link to={"/product"}>
 <button>Continue shoping</button>
 </Link>
 <button className='removeall' onClick={()=>removealldata()}>Remove all</button>
</div>


</div>


  )
}

export default Cart