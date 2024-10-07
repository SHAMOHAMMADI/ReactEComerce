import { useEffect, useState } from "react";
import Button from "../button/Button";
import { getProduct } from "../../services/api";
import { Products } from "../../types/server";
import { useShoppingCartContext } from "../../context/ShoppingCartContext";
import { Link } from "react-router-dom";

interface ICartItems { 
  id : number 
  qty : number
}
function CartItem({id , qty}:ICartItems) {
  const {handleIncreaseProductQTY , handleDecreaseProductQTY , handleRemoveProduct } = useShoppingCartContext()
  const [product , setProduct] = useState<Products>()
   
  useEffect(()=>{
   getProduct(id).then((data)=>{
    setProduct(data)
   })
  },[])
  return (
    <div className=" border shadow-md rounded flex flex-row-reverse text-right mx-12 justify-center">
        <Link to={`/product/${id}`}>
      <img src={product?.image} alt="itemPicture" className=" rounded-md " />
        </Link>
      <div className="p-4">
        <h3>{product?.title}</h3>
        <div></div>
        <div className="grid grid-cols-4 text-right [&>*]:my-4">
          
          <Button
            variant="primary"
            style={{ borderRadius: "10px", maxWidth: "120%" }}
            onClick={()=>handleIncreaseProductQTY(id)}
          >
            +
          </Button>
          <span className="border text-center mx-2">{qty}</span>
          <Button
            variant="primary"
            style={{ 
              borderRadius: "10px",
              border: "1px solid",
              maxWidth: "120%"}}
              onClick={()=>handleDecreaseProductQTY(id)}
              >
            -
          </Button>
          <Button
            variant="danger"
            style={{ borderRadius: "10px", maxWidth: "4 rem" }}
            onClick={()=>handleRemoveProduct(id)}
          >
            حذف
          </Button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
