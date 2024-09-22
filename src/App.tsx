import { useState } from 'react'
import Home from './pages/home/Home.tsx'
import Store from './pages/store/Store.tsx'
import {Routes , Route} from 'react-router-dom'
import NavBar from './components/navBar/NavBar.tsx'
import Layout from './components/layout/Layout.tsx'
import Product from './pages/product/Product.tsx'
import Cart from './pages/cart/Cart.tsx'


function App() {
  const [count, setCount] = useState(25)

  return (
    <Layout>
    <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/store" element={<Store />}/>
    <Route path="/product/:id" element={<Product />}/>
    <Route path="/cart" element={<Cart />}/>
    </Routes> 
    </Layout>
  )
}

export default App
