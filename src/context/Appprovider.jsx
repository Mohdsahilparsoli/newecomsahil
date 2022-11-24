import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react"
import reducer from "../contextreducer/reducer"
const AppContext = createContext()
const initialsate=  {
    dataloading:false,
    product:[],
    fproduct:[],
    apierror:false,
    singalproductdataloading:false,
    singalproduct:{}

}
// rest api 

const API = "https://api.pujakaitem.com/api/products";

const Appprovider = ({children}) => {
const [state , dispatch] = useReducer(reducer, initialsate)

const getproduct= async(url)=>{
    dispatch({type:"data-loading"})
try{
const res = await axios.get(url);
const result = await res.data;
dispatch({type:"data-uploading",payload:result})
}catch(err){
dispatch({type:"api-error"})
}
}
useEffect(()=>{
getproduct(API)
},[])

// singal data 


const getsingalproduct=async(url)=>{
dispatch({type:"singal-product-feting"});
try{
const singaldata = await axios.get(url);
const result =  await singaldata.data;
dispatch({type:"singal-product-data",payload:result})
}catch(err){
    dispatch({type:"singal-product-error"})
}
}


    return (
        <AppContext.Provider value={{...state,getsingalproduct}}>
            {children}
        </AppContext.Provider>
    )
}

const useProductprovider = ()=>{
    return useContext (AppContext)
}

export  {Appprovider ,AppContext,useProductprovider}