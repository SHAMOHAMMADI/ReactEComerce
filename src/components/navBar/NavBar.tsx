import { useContext } from "react";
import { Link } from "react-router-dom";
import Container from "../container/Container";
import { ShoppingCartContext, useShoppingCartContext } from "../../context/ShoppingCartContext";
import Button from "../button/Button";
function NavBar() {
 
  const { cartQty} = useContext(ShoppingCartContext)
  const { handleLogOut} = useShoppingCartContext()


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
          <div className='flex [&>*]:m-2'>
            <div>

            <Button onClick={handleLogOut} className="hover:shadow-inner hover: hover:scale-105 rounded-md border border-black-500 px-4 pb-2 ">خروج</Button>
            </div>
            <Link to="/cart" className="flex">
            <button className="relative  text-white rounded-xl shadow-inner"><img src="/public/2.svg" className="w-8 shadow-inner hover:scale-105" alt="" />
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
