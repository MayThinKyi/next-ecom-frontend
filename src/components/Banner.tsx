import Image from 'next/image'
import React from 'react'

const Banner = () => {
  return (
    <div className='text-white py-5 px-5 lg:py-14  lg:px-20 bg-gradient-to-r from-sky-500 to-sky-900  flex flex-wrap sm:flex-nowrap items-center justify-center sm:justify-between'>
      <div className='text-center'>
        <h1 className="font-extrabold text-4xl sm:text-5xl lg:text-6xl">
        Summer Sale!
        </h1>
        <p className="text-xl md:text-2xl my-3">Enjoy discounts on selected items</p>
        <h1 className="text-yellow-400 text-3xl sm:text-4xl lg:text-5xl font-extrabold">
        GET 50% OFF
        </h1>
      </div>
      <div>
        <Image width={300} height={300} alt="Banner Image" src={'/banner.png'} className='object-contain' />
      </div>
    </div>
  )
}

export default Banner
