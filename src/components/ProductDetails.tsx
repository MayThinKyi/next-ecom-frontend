'use client';

import React, { useState } from 'react'
import Horizontal from '@/components/Horizontal';
import ProductReview from '@/components/ProductReview';
import { useCart } from '@/hooks/useCart';
import { CartProduct } from '@/types';
import { products } from '@/utils/products';
import { Rating } from '@mui/material';
import Image from 'next/image';
type Props={
    productId:string;
}
const ProductDetails = ({productId}:Props) => {
    const {addProduct}=useCart();
    const product=products.filter((product)=>product.id===productId)[0];
   const [cartProduct,setCartProduct]=useState<CartProduct>({
    id:Math.random(),
    productId:product.id,
    name:product.name,
    brand:product.brand,
    category:product.category,
    price:product.price,
    quantity:1,
    selectedImage:product.images[0]
   })
    let avgRating=0;
    product.reviews.map((review)=>avgRating+=review.rating);
    avgRating=avgRating/product.reviews.length||0;
  return (
    <div className='py-10'>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-0">
        <div className='flex gap-10  md:gap-[80px]'>
            <div className='flex flex-col gap-5 border px-3 py-5 h-max rounded-lg'>
                {product.images.map((item)=>{
                    return <Image key={item.image} onClick={()=>setCartProduct({...cartProduct,selectedImage:item})} width={40} height={40} src={item.image} alt={item.color} />
                })}
            </div>
            <div>
                <Image width={200} height={200} alt={product.name } src={cartProduct.selectedImage.image} />
            </div>
        </div>
        <div>
            <h1 className='text-xl sm:text-2xl mb-4'>{product.name}</h1>
            <p className="text-zinc-500 text-xl font-semibold">${product.price}</p>
            <div className=" mt-4 flex items-center gap-2">
            <Rating value={avgRating} readOnly />
            <span className='font-[500]'>{product.reviews.length} {product.reviews.length>1 ? 'Reviews' : 'Review'}</span>
            </div>
            <Horizontal/>
            <p>{product.description}</p>
            <Horizontal/>
            <div className="flex items-center gap-2">
                <h1 className='text-zinc-500 font-semibold'>Category:</h1>
                <span>{product.category}</span>
            </div>
            <div className="my-2 flex items-center gap-2">
                <h1 className='text-zinc-500 font-semibold'>Brand:</h1>
                <span>{product.brand}</span>
            </div>
            <div className="my-3">{product.inStock ? 
            <p className="text-green-600">Instock</p> :
            <p className="text-red-600">Out of Stock</p>
            }</div>
            <Horizontal/>
            <div className="my-2 flex items-center gap-2">
                <h1 className='text-zinc-500 font-semibold'>Colors:</h1>
                <div className="flex items-center gap-3">
                    {product.images.map(item=>{
                        return <div onClick={()=>setCartProduct({...cartProduct,selectedImage:item})} key={item.colorCode} className={ `${item.colorCode===cartProduct.selectedImage.colorCode ? 'border-[3px]' :''} border-sky-800  p-[2px] rounded-full`}>
                            <div style={{background:item.colorCode}} className='   w-[25px] h-[25px] rounded-full border '></div>
                        </div>
                    })}
                </div>
            </div>
            <Horizontal/>
            <div className="flex items-center my-2 gap-5">
            <h1 className='text-zinc-500 font-semibold'>Quantity:</h1>
            <div className="flex items-center gap-3">
                <button onClick={()=>{
                    if(cartProduct.quantity>1){
                        setCartProduct({...cartProduct,quantity:cartProduct.quantity-1})
                    }
                }} className='px-2  text-xl font-semibold border rounded'>-</button>
                <span>{cartProduct.quantity}</span>
                <button onClick={()=>setCartProduct({...cartProduct,quantity:cartProduct.quantity+1})} className='px-2  text-xl font-semibold border rounded'>+</button>
            </div>
            </div>
            <button onClick={()=>{
                addProduct(cartProduct)
                setCartProduct({...cartProduct,id:Math.random(),quantity:1})
            }} className="mt-8 rounded-lg font-semibold text-lg text-white py-3 px-14 bg-sky-900 hover:bg-sky-800 transition-colors">
                Add To Cart
            </button>
        </div>
      </div>
      <div className="mt-10 px-2 sm:px-5">
        <h1 className="text-2xl font-semibold text-slate-600">Product Reviews</h1>
        {product.reviews.length>0 ? product.reviews.map((review)=>{
            return <ProductReview key={review.id} review={review} />
        }) : <p className='mt-8'>No reviews...</p>}
        
    </div>
    </div>
  )
}

export default ProductDetails
