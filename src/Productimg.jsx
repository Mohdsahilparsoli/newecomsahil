import React, { useState } from 'react'

const Productimg = ({img=[{url:""}]}) => {
    const[oldimg,updatedimg] = useState(img[0])
  return (
<div className="mainimg">
<div className="mainimgproduct">
        <img src={oldimg.url} />
    </div>
    <div className="column">
        {
            img.map((value ,index)=>{
             return <img key={index} src={value.url} onClick={()=>updatedimg(value)} alt="produc galery"/>
            })
        }

    </div>
  
</div>
  )
}

export default Productimg