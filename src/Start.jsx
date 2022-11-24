
import {FaStar, FaStarHalfAlt} from 'react-icons/fa';
import {AiOutlineStar} from "react-icons/ai";
const Start = ({str, rev}) => {
 const rating  = Array.from({length:5},(element,index)=>{

    const number = index+0.5;
    return(
        <>
        <span key={index}>
            {
                str>=index+1?(<FaStar/>):str>=number?(<FaStarHalfAlt/>):<AiOutlineStar/>
            }
        </span>
        
        </>
    )
  
 })

    return (
   <>
   
   <h5>{rating} ({rev}  Customer reviews)</h5>
   </>
  )
}

export default Start