import React from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import HomePage from './components/Home/HomePage'
import ProductsPage from './components/Products/ProductsPage'
import SingleProductPage from './components/SingleProduct/SingleProductPage'
import CartPage from './components/Cart/CartPage'
import MyOrder from './components/MyOrder/MyOrderPages'

const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <HomePage />
      <ProductsPage />
      <SingleProductPage />
      <CartPage />
      <MyOrder />
    </div>
  )
}

export default App