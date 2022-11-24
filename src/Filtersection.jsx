import React from 'react'
import { useFilter } from './context/FilterProvide'

const Filtersection = () => {
    const {filter:{text,
      category,
      company ,
      colors ,
      price,
      maxprice,
      minprice},
    updatedvalue,allproduct,
    clearfilter}= useFilter();


const getuniquedata=(data,attr)=>{
let newval = data.map((curentelemt)=>{

  return curentelemt[attr]
})

if(attr==="colors"){
  newval=newval.flat();
}
return (newval=["all", ...new Set(newval) ]);
}

const categorydata = getuniquedata(allproduct,"category");
const companydata = getuniquedata(allproduct,"company");
const colorsdata = getuniquedata(allproduct,"colors");



  return (
    <>
    <div className="serchproduct">
    <form action="">
        <input type="text" name="text" value={text} onChange={updatedvalue}  placeholder='search products' />
    </form>
    </div>

    <div className="categorybtn">
<h5>Category</h5>
{
  categorydata.map((catename,index)=>{
    return <button name="category"  className={catename===category? "active":""} 
    onClick={updatedvalue} value={catename} key={index}>{catename}</button>
  })
}
    </div>
   
   <div className="company categorybtn">
    <h5> Company</h5>
{
  companydata.map((curentelemt,index)=>{
    return <button type="button" name="company" value={curentelemt} className={curentelemt===company ? "active" : "" } 
    key={index} onClick={updatedvalue}>{curentelemt}</button>
  })
}
   </div>

   <div className="colors">
   {
    colorsdata.map((curentelemt,index)=>{
    return  <button type="button" 
    name='colors' value={colors} onClick={updatedvalue} style={{background:curentelemt}}  className={curentelemt===colors?"active":""}></button>
    })
   }
   
   </div>

   <div className="range">
    <p>{new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format(price/10)}</p>
    <input 
type="range" 
name="price" 
value={price}
min={minprice}
max={maxprice}
   onChange={updatedvalue}
      />
   </div>

   <div className="clearfilter">
    <button onClick={clearfilter}>Clear filter</button>
   </div>
    
    </>
  )
}

export default Filtersection