import { Product } from '@/types'
import { Rating } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

type Props={
    product:Product;
}
const ProductCard = ({product}:Props) => {
    let avgRating=0;
    product.reviews.map((review)=>avgRating+=review.rating);
    avgRating=avgRating/product.reviews.length || 0;
  return (
    <Link href={`/products/${product.id}`} className='py-3 px-2 rounded-2xl cursor-pointer border text-center bg-slate-100 hover:scale-105 transition-all'>
        <Image className='mx-auto my-5' width={80} height={80} alt={product.name} src={product.images[0].image} />
      <h1 className='line-clamp-2 text-[15px]'>{product.name}</h1>
      <Rating name="read-only" value={avgRating} readOnly />
      <p className='text-[15px]'>{product.reviews.length} {product.reviews.length<2 ? 'Review' : 'Reviews'}</p>
        <p className="font-semibold">${product.price}</p>
    </Link>
  )
}

export default ProductCard
