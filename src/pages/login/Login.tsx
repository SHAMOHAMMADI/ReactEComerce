import React from "react";
import Container from "../../components/container/Container";
import Button from "../../components/button/Button";
import { useShoppingCartContext } from "../../context/ShoppingCartContext";

function Login() {

    const {setIsLogin , handleLogin} = useShoppingCartContext()
  return (
    <div>
      <Container>
        <div className="bg-slate-300 p-12 rounded flex flex-col justify-center items-center [&>*]:my-2">
            <input type="text" placeholder="username"/><input type="text" placeholder="password"/>
            <Button onClick={handleLogin}>Login</Button>
        </div>
      </Container>
    </div>
  ); 
}

export default Login;
