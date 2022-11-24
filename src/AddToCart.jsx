import React, { useState } from 'react'
import { FaCheck } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useCartconext } from './context/Cartconetxt';
const AddToCart = ({product}) => {
  const {colors ,id, stock} = product;
  const [amount,setamount]= useState(1)
  const[color,setColor]=useState(colors[0])

const {cartfun} = useCartconext()


  
   const increment =()=>{
    amount<stock ? setamount(amount+1):setamount(stock)
  
  }
  const deceremen=()=>{
    amount>1? setamount(amount-1):setamount(1);
  }
  return (<>



<div className="colors">
{
         colors.map((curColor, index) => {
          return (
            <button
              key={index}
              style={{ backgroundColor: curColor }}
              className={color === curColor ? "btnStyle active" : "btnStyle"}
              onClick={() => setColor(curColor)}>
              {color === curColor ? <FaCheck className="checkStyle" /> : null}
            </button>
          );
        })
} 
</div>
<div className="cart">
  <div className="input">
    <button onClick={increment}>+</button>
    <input type="text" value={amount} />
    <button onClick={deceremen}>-</button>
  </div>
  <div className="btn">
  <Link to="/cart" onClick={()=>{ cartfun(id,color,amount,product)}}>  
<button className='addtocart' >
  Add to Cart
  </button>
  </Link>
  </div>
</div>


 
  </>
   )
}

export default AddToCart