import Home from './pages/home/Home.tsx'
import Store from './pages/store/Store.tsx'
import {Routes , Route} from 'react-router-dom'
import NavBar from './components/navBar/NavBar.tsx'
import Layout from './components/layout/Layout.tsx'
import Product from './pages/product/Product.tsx'
import Cart from './pages/cart/Cart.tsx'
import ProductTest from './pages/productTest/ProductTest.tsx'
import axios from 'axios'
import {useState , useEffect, createContext} from 'react'
import  {ShoppingCartProvider } from './context/ShoppingCartContext.tsx'
import PrivateRoute from './components/privateRoute/privateRoute.tsx'
import Login from './pages/login/Login.tsx'



// export interface Root {
  
// }



function App() {

  return (
    <ShoppingCartProvider>
    <Layout>
    <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/store" element={<Store />}/>
    <Route path="/product/:id" element={<Product />}/>
    <Route path="/login" element={<Login />}/>
    {/* <Route path="/cart" element={<Cart />}/> */}
    <Route path="/productTest" element={<ProductTest />}/>
    
    <Route element={<PrivateRoute/>}>
      <Route path="/cart" element={<Cart />}/>
    </Route>
    </Routes> 
    </Layout>
    </ShoppingCartProvider>
  )
}

export default App
