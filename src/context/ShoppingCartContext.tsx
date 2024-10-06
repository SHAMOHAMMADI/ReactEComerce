import { createContext, useContext, useEffect, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { login } from "../services/api";

interface ShoppingCartProvider {
  children: React.ReactNode;
}
interface cartItems {
  id: number;
  qty: number;
}
interface ShoppingCartContext {
  cartItems: cartItems[];
  handleIncreaseProductQTY: (id: number) => void;
  handleDecreaseProductQTY: (id: number) => void;
  handleProductQty: (id: number) => number;
  handleRemoveProduct: (id: number) => void;
  cartQty : number,
  isLogin : boolean,
  setIsLogin : ()=>void,
  handleLogin : ()=>void,
  handleLogOut : ()=>void
}

// export const ShoppingCartContext = createContext<ShoppingCartContext>({
//     cartItems: []
// })

export const ShoppingCartContext = createContext({} as ShoppingCartContext);

export const useShoppingCartContext = () => {
  return useContext(ShoppingCartContext);
};

export function ShoppingCartProvider({ children }: ShoppingCartProvider) {



  // const [cartItems, setCartItems] = useState<cartItems[]>([]); 


 const [cartItems, setCartItems] = useLocalStorage<cartItems[]>("cartItems",[ ])

  const handleIncreaseProductQTY = (id: number) => {
    setCartItems((currentItem) => {
      let selectedItem = currentItem.find((item) => item.id == id);
      if (selectedItem == null) {
        return [...currentItem, { id: id, qty: 1 }];
      } else {
        return currentItem.map((item) => {
          if (item.id == id) {
            return {
              ...item,
              qty: item.qty + 1,
            };
          } else {
            return item;
          }
        });
      }
    });
  };
  const handleDecreaseProductQTY = (id: number) => {
    setCartItems((currentItems) => {
      let selectedItem = currentItems.find((item) => item.id == id);

      if (selectedItem?.qty === 1) {
        return currentItems.filter((item) => item.id !== id);
      } else {
        return currentItems.map((item) => {
          if (item.id == id) {
            return { ...item, qty: item.qty - 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  const handleProductQty = (id: number) => {
    return cartItems.find((item) => item.id == id)?.qty || 0;
  };

  const handleRemoveProduct = (id: number) => {
    setCartItems((currentItems) =>
      currentItems.filter((item) => item.id !== id)
    );
  };

  const cartQty =  cartItems.reduce((totalQty , item)=> totalQty + item.qty  , 0)

  const [isLogin , setIsLogin] = useState(false)

  function handleLogin (){
    login("salar","1234").finally(()=>{
     let token = "sdgfsdgsdgfsdfgdggsdfgsdf"
     localStorage.setItem("token",token)
      setIsLogin(true)
    })
  }

  const handleLogOut = ()=>{
    setIsLogin(false)
  }

  useEffect(()=>{
    let token = localStorage.getItem("token")

    if(token){
      setIsLogin(true)
    }
  },[])
  return (
    <ShoppingCartContext.Provider
      value={{
        cartItems,
        handleIncreaseProductQTY,
        handleDecreaseProductQTY,
        handleProductQty,
        handleRemoveProduct,
        cartQty,
        isLogin,
        setIsLogin,
        handleLogin,
        handleLogOut
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}
