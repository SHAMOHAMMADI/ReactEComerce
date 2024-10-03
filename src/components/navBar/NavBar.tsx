import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Container from "../container/Container";
import { ShoppingCartContext } from "../../context/ShoppingCartContext";
function NavBar() {
 
  const {cartItems} = useContext(ShoppingCartContext)


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
            <Link to="/cart">
            <button>سبد خرید</button>
            
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default NavBar;
