import React from 'react'
import { ComponentProps } from 'react'

type TVariant = "primary" | "secondary" | "danger" | "warning" | "success" 

type IButton = ComponentProps<"button"> & {
    variant ?: TVariant
}


function Button({children , variant ,style ,  ...rest}:IButton) {
    return (
        <div>
        
        <button {...rest} style={{...style , ...checkVariant(variant)}}>{children}</button>
    </div>
  )
}

export default Button

export function checkVariant (variant?:TVariant){
 if(variant === 'primary'){
    return { backgroundColor:"blue",color:"white", width:"100%"}
 }
 else if(variant === "secondary"){
    return {backgroundColor:"gray",color:"black"}
 }else if(variant === "danger"){
    return {backgroundColor:"red",color:"white"}
 }else if(variant === "success"){
    return {backgroundColor:"green",color:"white", padding:"5px 10px", borderRadius:"10px", margin:"5px"}
 }else if(variant === "warning"){
    return {backgroundColor:"yellow",color:"black"}
 }
}