import React from 'react'
import Container from '../../components/container/Container'
import CartItem from '../../components/cartItem/CartItem'

function Cart() {
  return (
    <div>
        <Container>
            <div className="grid grid-cols-3 md:grid-cols-4 gap-2">

            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />

            </div>
        </Container>
    </div>
  )
}

export default Cart