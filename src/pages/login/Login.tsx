import { ChangeEvent, useState } from "react";
import Container from "../../components/container/Container";
import Button from "../../components/button/Button";
import { useShoppingCartContext } from "../../context/ShoppingCartContext";

function Login() {
  const { handleLogin } = useShoppingCartContext();

  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setUser({
      ...user,
      [name]: value,
    });
  };
  console.log(user);
  return (
    <div>
      <Container>
        <div className="bg-slate-300 p-12 rounded flex flex-col justify-center items-center [&>*]:my-2">
          <input
            type="text"
            placeholder="username"
            name="username"
            onChange={handleOnChange}
            value={user.username}
          />
          <input
            type="text"
            placeholder="password"
            name="password"
            onChange={handleOnChange}
            value={user.password}
          />
          <Button
            onClick={() => {
              handleLogin(user.username, user.password);
            }}
          >
            Login
          </Button>
        </div>
      </Container>
    </div>
  );
}

export default Login;
