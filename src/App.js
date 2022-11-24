import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from"./Home"
import Product from './Product'
import Singalproduct from './Singalproduct'
import Cart from "./Cart"
const App = () => {
  return (
<>
<BrowserRouter>
<Routes>
<Route path='/' element={<Home/>}/>
<Route path='/product' element={<Product/>}/>
<Route path='/product/:id' element={<Singalproduct/>}/>
<Route path='cart' element={<Cart/>} />
<Route path='/*' element={<Home/>}/>


</Routes>
</BrowserRouter>

</>
  )
}

export default App