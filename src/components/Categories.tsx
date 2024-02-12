'use client';
import React, { useEffect, useState } from 'react'
import { IoHomeOutline } from "react-icons/io5";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { BsLaptop } from "react-icons/bs";
import { MdOutlineDesktopWindows } from "react-icons/md";
import { IoMdWatch } from "react-icons/io";
import { PiTelevisionFill } from "react-icons/pi";
import { FaRegKeyboard } from "react-icons/fa";
import Link from 'next/link';
import {  useSearchParams } from 'next/navigation';

const Categories = () => {
    const searchParams=useSearchParams();
    const categories=[
       { id:1,icon:<IoHomeOutline/>,label:'All'},
       { id:2,icon:<IoPhonePortraitOutline/>,label:'Phone'},
       { id:3,icon:<BsLaptop/>,label:'Laptop'},
       { id:4,icon:<MdOutlineDesktopWindows/>,label:'Desktop'},
       { id:5,icon:<IoMdWatch/>,label:'Watch'},
       { id:6,icon:<PiTelevisionFill/>,label:'TV'},
       { id:7,icon:<FaRegKeyboard/>,label:'Accesories'},
    ];
   
       
   

  return (
    <div className='flex flex-wrap items-center justify-between pt-4  border-b  mb-10 px-2 sm:px-10'>
      {categories.map((category)=>{
        return <Link key={category.id} href={category.label==='All' ? '/'  :
        `?category=${category.label}`} className={`
        ${category.label==='All' && searchParams.get('category')===null ? 'border-b-2' : category.label===searchParams.get('category') ? 'border-b-2':'' }
         border-sky-800 px-3 pb-3 flex items-center gap-2`}>
            {category.icon}
            <p>{category.label}</p>
        </Link>
      })}
    </div>
  )
}

export default Categories
