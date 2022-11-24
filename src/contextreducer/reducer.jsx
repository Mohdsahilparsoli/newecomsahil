

const Myreducer = (state,action) => {
    switch(action.type) {
        case "data-loading":
        return{
            ...state,
            dataloading:true
  
        };
        case "data-uploading":
            const fdata = action.payload.filter((value)=>{
                return value.featured===true;
            });
            return {
                ...state,
                product:action.payload,
                fproduct:fdata,
                

            }
        case "api-error":
        return {
            ...state,
            apierror:true,

        } 


case "singal-product-feting":
    return{


        ...state,
        singalproductdataloading:true
    }
case "singal-product-data":
    return{

        ...state,
        singalproductdataloading:false,
        singalproduct:action.payload,
        
    }
case "singal-product-error":
    return{
        ...state,
        singalproductdataloading:false,
        apierror:true
    }    
        default:
        return state
      }
}

export default Myreducer 