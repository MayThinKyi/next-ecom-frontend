import { CartContext } from "@/providers/CartContextProvider"
import {  useContext } from "react"

export const useCart=()=>{
    const context=useContext(CartContext);
    if(context===null) throw new Error('Please wrap CartContext Provider correctly!')
    return context;
}