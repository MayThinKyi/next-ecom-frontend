'use client';

import {  CartContextType, CartProduct } from '@/types';
import React, { ReactNode, createContext, useEffect, useState } from 'react'

 export const CartContext=createContext<CartContextType | null> (null);
type Props={
    children:ReactNode;
}
const CartContextProvider = ({children}:Props) => {
    const [cartProducts,setCartProducts]=useState<CartProduct[]>( []);
    const savedToLocalStorage=(productsToSave:CartProduct[])=>{
        localStorage.setItem('eShopItems',JSON.stringify(productsToSave));
    }
    const addProduct=(product:CartProduct)=>{
        const isProductAndColorExist=cartProducts.filter(item=>{
           return item.productId===product.productId && item.selectedImage===product.selectedImage})[0];
           let productCartsCopy=[];
            if(!isProductAndColorExist) {
                productCartsCopy=[...cartProducts,product];
                setCartProducts([...productCartsCopy]);
                savedToLocalStorage(productCartsCopy);
            }
            else  {
                productCartsCopy=cartProducts.map((item)=>{
                    if(item.productId===product.productId && item.selectedImage===product.selectedImage) item={...item,quantity:item.quantity+product.quantity};
                    else item;
                    return item;
                })
                setCartProducts([...productCartsCopy]);
                savedToLocalStorage(productCartsCopy)
            }
    }
    const clearCart=()=>{
        setCartProducts([]);
        localStorage.removeItem('eShopItems');
    }
    const removeCartItem=(cartId:number)=>{
        let cartProductsCopy=[...cartProducts];
        cartProductsCopy= cartProductsCopy.filter((item)=>item.id!==cartId);
        setCartProducts([...cartProductsCopy]);
       savedToLocalStorage(cartProductsCopy);
    }
    const addQuantity=(cartId:number)=>{
        let cartProductsCopy=[...cartProducts];
        cartProductsCopy=cartProductsCopy.map((item)=>{
            if(item.id===cartId) item={...item,quantity:item.quantity+1};
            else item;
            return item;
        })
        setCartProducts([...cartProductsCopy]);
        savedToLocalStorage(cartProductsCopy);
    }
    const decreaseQuantity=(cartId:number)=>{
        let cartProductsCopy=[...cartProducts];
        cartProductsCopy=cartProductsCopy.map((item)=>{
            if(item.id===cartId) {
                if(item.quantity>1) item={...item,quantity:item.quantity-1};
            }
            else item;
            return item;
        })
        setCartProducts([...cartProductsCopy]);
        savedToLocalStorage(cartProductsCopy);
    }
    const value={
        cartProducts,addProduct,clearCart,removeCartItem,addQuantity,decreaseQuantity
    }
    useEffect(() => {
        if (typeof window !== 'undefined') {
          // Your code that uses localStorage
          setCartProducts(JSON.parse(localStorage.getItem('eShopItems') as string) || [])
        }
      }, []);
   
  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  )
}

export default CartContextProvider
