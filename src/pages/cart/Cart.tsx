import Container from "../../components/container/Container";
import CartItem from "../../components/cartItem/CartItem";
import Button from "../../components/button/Button";
import { useShoppingCartContext } from "../../context/ShoppingCartContext";

function Cart() {
  const { cartItems } = useShoppingCartContext();

  return (
    <div>
      <Container>
        <div className="grid grid-cols-1  gap-2 mt-6">
          {cartItems.map((items) => (
            <CartItem {...items} />
          ))}
        </div>
        <div className="bg-blue-100 w-full shadow-inner text-right p-4 mt-6 rounded-md">
          <h3>قیمت کل</h3>
          <h3>تخفیف شامل</h3>
          <h3>قیمت نهایی</h3>
          <Button variant="success">ثبت سفارش</Button>
        </div>
      </Container>
    </div>
  );
}

export default Cart;
