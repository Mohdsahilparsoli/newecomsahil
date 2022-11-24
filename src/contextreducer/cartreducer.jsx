

const cartreducer = (state,action) => {
if(action.type==="cart-data"){
    const {id,color,amount,product}=action.payload;

const existing = state.Cart.find((curentitem)=>{
    return curentitem.id === id+color;
})

if(existing){
    let updateexisting = state.Cart.map((curentitem)=>{
        if(curentitem.id===id+color){
            let newamount = curentitem.amount+amount;
            return{
                ...curentitem,
                amount:newamount
            }
        }else{
            return curentitem
        }
    })
    return {
        ...state,
        Cart:updateexisting
    }
} else{
    let cartproduct;
    cartproduct={
        id:id+color,
        color,
        amount,
        name:product.name,
        price:product.price,
        maxprice:product.stock,
        image:product.image[0].url
    
    }

    
    return{
        ...state,
        Cart:[...state.Cart,cartproduct]
    }
}

   
}

if(action.type==="remove-data"){
    const updatedcart = state.Cart.filter((curent)=>{
        return curent.id !== action.payload; 
    })
    return{
        ...state,
        Cart:updatedcart
    }
}
if(action.type==="remove-all-data"){
return{
    ...state,
    Cart:[]
}
}
return state
}

export default cartreducer