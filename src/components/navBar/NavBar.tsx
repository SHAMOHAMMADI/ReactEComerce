import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Container from "../container/Container";
import { ShoppingCartContext, useShoppingCartContext } from "../../context/ShoppingCartContext";
import Button from "../button/Button";
function NavBar() {
 
  const {cartItems , cartQty} = useContext(ShoppingCartContext)
  const { handleLogin , handleLogOut} = useShoppingCartContext()


  return (
    <div className="shadow border-b">
      <Container>
        <div className='flex flex-row-reverse justify-between h-16 items-center'>
          <ul className=" flex flex-row-reverse [&>*]:mx-8">
            <li>
              <Link to="/">خانه</Link>
            </li>
            <li>
              <Link to="/store">فروشگاه</Link>
            </li>
          </ul>
          <div>
            <Button onClick={handleLogOut}>LogOut</Button>
            <Link to="/cart" className="flex">
            <button className="relative  text-white rounded-xl shadow-inner"><img src="/public/2.svg" className="w-8" alt="" />
              {cartQty !== 0 ? (<span className="absolute border rounded-full bg-white text-black -top-2 -right-1">{cartQty}</span>) : ""}
            </button>
            
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default NavBar;
