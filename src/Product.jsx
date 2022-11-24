import React from 'react'
import { useFilter } from './context/FilterProvide'
import Filtersection from './Filtersection';
import Productcard from './Productcard';
import Sortcmp from './Sortcmp';

const Product = () => {
  const {filterproduct } =  useFilter();

  
  return (
   <>
   <div className="main">
    <div className="filtersection">
        <Filtersection/>
    </div>
   <div className="productsection">
    <div className="sorting">
     <p>{filterproduct.length} Product</p> 
     <Sortcmp/>
    </div>
    <div className="mainproduct">
    <Productcard filterdata = {filterproduct}/>
    </div>
    </div>

   </div>
     </>
  )
}

export default Product