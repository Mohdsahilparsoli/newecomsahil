import {  createContext, useContext, useEffect, useReducer } from "react"
import { json } from "react-router-dom"
import reducer from "../contextreducer/cartreducer"
const Cart = createContext()
const updatedcart= ()=>{
let newcartdata = localStorage.getItem("cartdatalocalsahil")
if(newcartdata===[]){
    return [];
}else{
    return JSON.parse(newcartdata)
}
}
const initialsate={
    Cart:updatedcart()
}
const Cartconetxt = ({children}) => {
    const [state,dispatch]=useReducer(reducer,initialsate)

// get cart data 
    const cartfun = (id,color,amount,product)=>{
      dispatch({type:"cart-data",payload:{id,color,amount,product}})
    }

// remove data form cart 

const removeproduct = (id)=>{
dispatch({type:"remove-data",payload:id})
}

const removealldata= ()=>{
dispatch({type:"remove-all-data"})
} 



// local storages



useEffect(()=>{
localStorage.setItem("cartdatalocalsahil",JSON.stringify(state.Cart))
},[state.Cart])



return (<>

<Cart.Provider value={{...state,cartfun,removeproduct,removealldata}}>
    {children}
</Cart.Provider>
</>)
}
const useCartconext = ()=>{
    return useContext(Cart)
}

export { Cartconetxt ,useCartconext}