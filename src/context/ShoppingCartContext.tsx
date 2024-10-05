import { createContext, useContext, useState } from "react";

interface ShoppingCartProvider {
    children : React.ReactNode
}
interface cartItems {
    id : number 
    qty : number
}
interface ShoppingCartContext {
    cartItems: cartItems[]
    handleIncreaseProductQTY : (id:number)=> void 
    handleDecreaseProductQTY : (id:number)=> void
    handleProductQty : (id:number) => number
}




// export const ShoppingCartContext = createContext<ShoppingCartContext>({
//     cartItems: [] 
// })

export const ShoppingCartContext = createContext({} as ShoppingCartContext)

export const useShoppingCartContext = ()=>{
    return useContext(ShoppingCartContext)
}

export function ShoppingCartProvider({children}:ShoppingCartProvider){
    const [cartItems , setCartItems] = useState<cartItems[]>([])
    
    const handleIncreaseProductQTY = (id:number)=>{
    setCartItems(currentItem=>{
      let selectedItem = currentItem.find(item=>item.id == id)
      if(selectedItem == null){
        return[...currentItem, {id:id , qty:1}];
      }  
      else{
       return  currentItem.map(item=>{
            if(item.id == id){
                return {
                    ...item , 
                    qty : item.qty +1
                }
            } 
            else{
                return item;
            }
        })
      }
    })
    } 
    const handleDecreaseProductQTY = (id:number)=>{
    setCartItems(currentItems=>{
       let selectedItem = currentItems.find(item=> item.id == id)

       if(selectedItem?.qty === 1){
        return currentItems.filter(item => item.id !==id)
       }else{
          return currentItems.map((item)=>{
            if(item.id == id){
                return {...item , qty: item.qty - 1}
            }
            else {
                return item
            }
          })
       }
    })
    }

    const handleProductQty = (id:number)=>{
       return cartItems.find(item => item.id == id)?.qty || 0
    }

    return (
        <ShoppingCartContext.Provider value={{cartItems , handleIncreaseProductQTY , handleDecreaseProductQTY ,handleProductQty}}>
            {children}
        </ShoppingCartContext.Provider>
    )
}