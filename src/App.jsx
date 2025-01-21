import React from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import HomePage from './components/Home/HomePage'
import ProductsPage from './components/Products/ProductsPage'
import SingleProductPage from './components/SingleProduct/SingleProductPage'
import CartPage from './components/Cart/CartPage'
import MyOrder from './components/MyOrder/MyOrderPages'
import LoginPage from './components/Authentication/LoginPage'
import SignupPage from './components/Authentication/SignupPage'

const App = () => {
  return (
    <div className='app'>
      <Navbar />
      {/* <HomePage />
      <ProductsPage />
      <SingleProductPage />
      <CartPage />
      <MyOrder /> */}
      {/* <LoginPage /> */}
      <SignupPage />
    </div>
  )
}

export default App