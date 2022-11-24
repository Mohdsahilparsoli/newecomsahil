import React from 'react'
import { Link } from 'react-router-dom'

    const Productcard = ({filterdata}) => {
  return (
<>
{
    filterdata.map((value)=>{
        const {name,image,price,id} = value
        return <>
        <Link to={`/product/${id}`}>
        <div className="products">
            <img src={image} alt="productimg" />
            <div className="cardbody">
                <span> <p>{name}</p> <p>{new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format(price/10)}</p> </span>
            </div>
        </div>
        
        </Link>
        </>
    })
}


</>
  )
}

export default Productcard