import React from 'react'
import { useFilter } from './context/FilterProvide'

const Sortcmp = () => {
    const {sort,sorting_value}= useFilter();
  
  return (
<>
<form action="#">
<select name="sort"  onClick={sort} >
<option >Please sort product...</option>
<option value="" disabled></option>
    <option value="loweset">Price(loweset)</option>
    <option value="" disabled></option>
    <option value="highest">Price(highest)</option>
    <option value=""disabled></option>
    <option value="a-z">product(a-z)</option>
    <option value=""disabled></option>
    <option value="z-a">Product(z-a)</option>
</select>

</form>

</>
  )
}

export default Sortcmp