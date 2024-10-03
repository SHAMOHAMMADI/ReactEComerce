import { createContext, useContext, useState } from "react"


interface ShoppingCartContext{
    cartItems: CartItem[];
    handleIncreaseProductQTY: (id:number)=>void
    handleDecreaseProductQTY: (id:number)=>void
}
interface ShoppingCartProvider{
    children : React.ReactNode
}

interface CartItem {
    id : number ;
    qty : number ;
}

/////////////////
export const ShoppingCartContext = createContext<ShoppingCartContext>({
    cartItems: []
})
// export const ShoppingCartContext = createContext({} as ShoppingCartContext)
////////////////
export const useShoppingCartContext = ()=>{
    return useContext(ShoppingCartContext)
}

export function ShoppingCartProvider({children}:ShoppingCartProvider){
 
 const [cartItems , setCartItems] = useState<CartItem[]>([])


const handleIncreaseProductQTY = (id: number)=>{
    setCartItems(currentItems =>{
        const selectedItem = currentItems.find(item=>item.id == id)
        if(selectedItem == null){
            return [...currentItems , { id: id , qty:1}]
        }else{
           return currentItems.map((item)=>{
              if(item.id == id){
                return {
                    ...item , qty:item.qty + 1
                }
              }else {
                return item
              }
            })
        }
    })

    
    const handleDecreaseProductQTY = (id: number)=>{
        setCartItems(currentItems =>{
            let selectedItem = currentItems.find(item=>item.id == id)
            if(selectedItem.qty == 1){
                return currentItems.filter(item => item.id !== id)
            }else{
               return currentItems.map((item)=>{
                  if(item.id == id){
                    return {
                        ...item , qty:item.qty - 1
                    }
                  }else {
                    return item
                  }
                })
            }
        })
    




}
    return (
        <ShoppingCartContext.Provider  value={{cartItems , handleDecreaseProductQTY , handleIncreaseProductQTY}}> 
            {children}
        </ShoppingCartContext.Provider>
    )
}}