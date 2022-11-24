import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Colors from './AddToCart';
import { useProductprovider } from './context/Appprovider';
import Productimg from './Productimg';
import Start from './Start';
import AddToCart from './AddToCart';
const API = "https://api.pujakaitem.com/api/products";
const Singalproduct = () => {

  const {id} = useParams()
  
  const {getsingalproduct ,singalproduct} = useProductprovider();
  const {name,price,rating,company,image,description,reviews,stars,stock}= singalproduct;

   useEffect(()=>{
  getsingalproduct(`${API}?id=${id}`)   
  },[])

  return (
<>
<div className="main1">
  <div className="productgalry">
    <Productimg img={image}/>
  </div>
  <div className="productcontent">
    <h1>{name}</h1>
    <Start str={stars} rev={reviews}/>
    <h5>MRP <del>{new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format(price/10)}</del></h5>
    <h5>Deal of the day {new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format(price/20)} </h5>
    <div className="descraption">{description}</div>
    <div className="geninfo">
    <h5><span>Available:</span>  {stock>0?"In Stock":"Not in Stock"}</h5>
    <h5><span>Id:</span>{id}</h5>
    <h5><span>Brand:</span>  {company}</h5>
    <div className="addcart">
  {stock > 0 && <AddToCart product={singalproduct}/>}





    </div>
    </div>
  </div>
</div>
</>
  )
}

export default Singalproduct