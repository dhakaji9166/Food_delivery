import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Home from './Pages/Home/Home'

import { Routes, Route } from 'react-router-dom'
import Cart from './Pages/Cart/Cart'
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder'





const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <Routes >
        <Route path="/" element={<Home />} />
        <Route path="/placeorder" element={<PlaceOrder />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  )
}

export default App