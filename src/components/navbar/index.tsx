'use client';
import React, { useState } from 'react'
import {Redressed} from 'next/font/google';
const redressed=Redressed({subsets:['latin'],weight:['400']});
import { AiOutlineShoppingCart } from "react-icons/ai";
import ProfileDropDown from './ProfileDropDown';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useCart } from '@/hooks/useCart';
import { useSession } from 'next-auth/react';

const Navbar = () => {
  const {status}= useSession();
  const {cartProducts}=useCart();
  const router=useRouter();
  const [search,setSearch]=useState('');
  return (
    <div className='bg-slate-100 py-2 px-4 sm:px-10 flex flex-wrap gap-5 items-center justify-between'>
      <div className={redressed.className}>
        <Link href={'/'} className="text-3xl text-zinc-600 font-semibold">E-Shop</Link>
      </div>
      <div className=" flex items-center">
        <input value={search} onChange={(e)=>setSearch(e.target.value)} className='px-1 sm:px-3 py-2 outline-blue-600 rounded-l-lg' placeholder='Explore Proudcts...' />
        <button onClick={()=>{
          search.trim().length>0  ? router.push(`?search=${search}`) : 
          router.push('/')
        }} className='px-5 py-2 transition-colors bg-blue-600 hover:bg-blue-800 text-white font-semibold rounded-r-lg'>Search</button>
      </div>
      <div className="flex items-center gap-5">
        <Link href={'/cart'} className='relative'>
          <AiOutlineShoppingCart size={28} />
          <span className="absolute top-[-8px] right-[-5px] rounded-full bg-sky-800 text-white px-1 text-sm font-semibold">
              {cartProducts.length}
          </span>
        </Link>
       {status==='loading' ? <p className='text-sm'>Loading...</p> :  <ProfileDropDown/>}
      </div>
    </div>
  )
}

export default Navbar
