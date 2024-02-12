'use client';
import { useCart } from '@/hooks/useCart';
import Image from 'next/image';
import React, { useState } from 'react'

const CartPage = () => {
  const {cartProducts,clearCart,removeCartItem,addQuantity,decreaseQuantity}=useCart();
  let total=0;
 cartProducts.map((item)=>{
  total+=item.price*item.quantity
 });
  return (
    <div className='py-10 px-2 sm:px-10'>
      <h1 className="text-2xl text-center font-semibold my-5">Shopping Cart</h1>
      <button onClick={clearCart} className='border rounded-lg py-1 px-3 text-sm'>Clear Cart</button>
      <div className="my-8">
        <div className="grid gap-5 grid-cols-4 pb-4 border-b">
            <div>Product</div>
            <div>Price</div>
            <div>Quantity</div>
            <div>Total</div>
        </div>
        <div className="my-3">
          {cartProducts.map((item)=>{
            return <div key={item.id} className="py-3 grid gap-5 grid-cols-4 pb-4 border-b">
                <div className="flex  gap-2">
                  <Image width={40} height={40} src={item.selectedImage.image} alt={item.name} />
                  <div>
                    <p className='line-clamp-2 text-sm'>{item.name}</p> 
                    <p onClick={()=>removeCartItem(item.id)} className="text-sm underline text-sky-800">Remove</p>
                  </div>
                </div>
                <div className='text-sm sm:text-lg ml-10 sm:ml-0'>${item.price}</div>
                <div className="flex gap-1 sm:gap-3">
                <button onClick={()=>decreaseQuantity(item.id)}   className='px-2 h-max  text-xl font-semibold border rounded'>-</button>
                <span>{item.quantity}</span>
                <button onClick={()=>addQuantity(item.id)}   className='px-2  h-max  text-lg font-semibold border rounded'>+</button>
            </div>
                <div className='text-sm sm:text-lg font-semibold text-zinc-600'>${item.price*item.quantity}</div>
            </div>
          })}
        </div>
      </div>
      <div>
        <div className="flex items-center gap-5">
          <h1>Subtotal</h1>
          <h1 className='text-zinc-600 font-semibold'>$ {total}</h1>
        </div>
      </div>
    </div>
  )
}

export default CartPage
