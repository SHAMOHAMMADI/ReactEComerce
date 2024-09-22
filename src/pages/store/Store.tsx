import React from 'react'
import NavBar from '../../components/navBar/NavBar'
import ProductItem from '../../components/productItem/ProductItem'
import Container from '../../components/container/Container'
import { Link } from 'react-router-dom'

function Store() {
  return (
    <>
    {/* <NavBar /> */}
    <div>
      <Container>
      <h1 className="text-right m-6">جدید ترین محصولات </h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
        <Link to={`/product/${1}`}>
        <ProductItem />
        </Link>
        <Link to={`/product/${2}`}>
        <ProductItem />
        </Link>
        <Link to={`/product/${3}`}>
        <ProductItem />
        </Link>
        <Link to={`/product/${4}`}>
        <ProductItem />
        </Link>
        
      </div>
      </Container>
    </div>
    </>
  )
}

export default Store