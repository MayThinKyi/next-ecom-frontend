import { Review } from '@/types'
import { Rating } from '@mui/material';
import Image from 'next/image';
import React from 'react'

type Props={
    review:Review;
}
const ProductReview = ({review}:Props) => {
  
  return (
    <div className='border-b my-5 w-full lg:w-max '>
      <div className="flex items-center gap-3">
        <Image width={20} height={20} src={review.user.image} alt={review.user.name} />
        <h1 className="font-semibold text-md text-zinc-600">{review.user.name}</h1>
        <p>{new Date(review.createdDate).toDateString()}</p>
      </div>
      <Rating readOnly value={review.rating} />
      <p className="mb-3 text-wrap">{review.comment}</p>
    </div>
  )
}

export default ProductReview
