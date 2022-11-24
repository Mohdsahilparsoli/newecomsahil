const reducerfilter = (state,action) => {
switch(action.type){


  case "final-search":
        return{
            ...state,
            dataloading:true,
         
        }

    case "serching-data":
      const priceatr = action.payload.map((curElem)=>curElem.price);
      let minprice = Math.min(...priceatr);
      let maxprice=Math.max(...priceatr);
        return{
            ...state,
            filterproduct:[...action.payload],
            allproduct:[...action.payload],
            filter:{...state.filter, minprice,
              maxprice,
              price:minprice}
    
        };

       case "sorting-data":
        return{
          ...state,
        sorting_value: action.payload,
        };
        case "sorting-products":
          let newsortdata ;
          const {sorting_value,filterproduct}=state;
          let temproduct = [...filterproduct]
    const sortingproducts =(a,b)=>{
    if(sorting_value==="loweset"){
      return a.price - b.price;
    }
    if(sorting_value==="highest"){
      return b.price - a.price;
    }
    if(sorting_value==="a-z"){
      return a.name.localeCompare(b.name);
    }

    if(sorting_value==="z-a"){
      return b.name.localeCompare(a.name);
    }
    }


       newsortdata =temproduct.sort(sortingproducts) 

        return{
          ...state,
          filterproduct:newsortdata
          };
    case "all-upadted-value":
    const {name,value}= action.payload;
    return{
        ...state,
        filter:{
            ...state.filter,
            [name]:value
        }

        }  ;
      case "filter-product":
        let {allproduct}= state;
        let tempfilterproduct = [...allproduct];
  
        const {text, category,company,colors,price} =state.filter;
      
        if (text) {
            tempfilterproduct = tempfilterproduct.filter((curElem) => {
              return curElem.name.toLowerCase().includes(text);
            });
          }
        if(category !=="all")
        {
          tempfilterproduct = tempfilterproduct.filter( (curElem) => curElem.category === category)
        }
        if(company !=="all"){
          tempfilterproduct = tempfilterproduct.filter((curElem)=>curElem.company===company)
        }
        if(colors !=="all"){
          tempfilterproduct=tempfilterproduct.filter((curElem)=>curElem.colors===colors)
        }
        if(price===0){
          tempfilterproduct=tempfilterproduct.filter((curElem)=>{
            return curElem.price===price;
          })
        }else{
          tempfilterproduct= tempfilterproduct.filter((curElem)=>{
            return curElem.price>=price
          })
        }
          return{
            ...state,
            filterproduct:tempfilterproduct
          }

          case "clear-filter":
          return{
              ...state,
              filter:{
                ...state.filter,
                text:"",
                category:"all",
                company:"all",
                colors:"all",
                minprice:state.filter.minprice,
                price:state.filter.minprice,
              }

            }
      default:
        return state  
}
}

export default reducerfilter