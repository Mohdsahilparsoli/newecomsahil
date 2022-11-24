
import { createContext, useContext, useEffect, useReducer } from "react"
import reducer from "../contextreducer/reducerfilter"
import { useProductprovider } from "./Appprovider";
const filtercontext = createContext();
const initialsate={
    dataloading:false,
    filterproduct:[],
    allproduct:[],
    sorting_value: "lowest",
    filter:{
        text:"",
        category: "all",
        company:"all",
        colors:"all",
        price:0,
        minprice:0,
        maxprice:0,
    }
}
const FilterProvide = ({children}) => {
    const [state,dispatch]=useReducer(reducer,initialsate)
    const {product} = useProductprovider();


 // value geter
//  useEffect(() => {
//     dispatch({ type: "FILTER_PRODUCTS" });
//     dispatch({ type: "SORTING_PRODUCTS" });
//   }, [product, state.sorting_value, state.filter]);


 // sort 

const sort = (event)=>{
    let userValue = event.target.value;
    dispatch({type:"sorting-data",payload:userValue})
   
}




 const updatedvalue = (event)=>{
const name = event.target.name;
const value = event.target.value;
dispatch({type:"all-upadted-value",payload:{name,value}})
    
 }
// clear filter

const clearfilter = ()=>{
    dispatch({type:"clear-filter"})
}

    
  // product data 
  useEffect(()=>{
    dispatch({type:"final-search"})  
  dispatch({type:"serching-data",payload:product})
   },[product])
  
   // serching useefect
  
   useEffect(()=>{
      dispatch({type:"filter-product"})
      dispatch({type:"sorting-products"})
   },[product,state.filter, state.sorting_value])
  

    return <filtercontext.Provider value={{...state,
        clearfilter,
        updatedvalue,
        sort,
    }}>{children}</filtercontext.Provider>
}

const useFilter = ()=>{
    return useContext(filtercontext)
}

export  {FilterProvide,filtercontext,useFilter}