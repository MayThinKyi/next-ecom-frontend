import Banner from '@/components/Banner'
import Categories from '@/components/Categories'
import ProductCard from '@/components/ProductCard'
import { products as productsData } from '@/utils/products'
import React from 'react'

type Props={
  searchParams:{
    category:string;
    search:string;
  }
}
const HomePage = ({searchParams:{category,search}}:Props) => {
  let products=[];
  if(category) products=productsData.filter((product)=>product.category===category)
  else products=[...productsData]
  if(search) products=products.filter((product)=>product.name.toLowerCase().includes(search.toLowerCase()))
  return (
    <div className='mb-10'>
      <Categories/>
      <Banner/>
      <div className="my-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        
        {products.map((product)=>{
          return <ProductCard key={product.id} product={product} />
        })}
      </div>
      {products.length<1 && <h1 className='text-center text-xl '>Oops! No products found. Click &apos;All&apos; to clear filters.</h1>}
    </div>
  )
}

export default HomePage
