import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { RiInstagramFill } from "react-icons/ri";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
    const categories=['Phones','Laptops','Desktops','Watches','TVs','Accessories'];
    const services=['Contact Us','Shipping Policy','Returns & Exchanges','Watches','FAQ'];
    const socials=[
        {id:1,icon:<FaFacebook size={28} />},
        {id:2,icon:<AiFillTwitterCircle size={34}/>},
        {id:3,icon:<RiInstagramFill size={34}/>},
        {id:4,icon:<FaYoutube size={34} />},
    ];
  return (
    <div className='py-10 px-5 sm:px-10 md:px-20 bg-[#334155] text-white grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-4  gap-10 md:gap-0'>
        <div>
            <h1 className='text-xl font-semibold mb-4'>Shop Categories</h1>
            {categories.map((item,index)=>{
                return <p  className='mb-2' key={index}>{item}</p>
            })}
        </div>
        <div>
            <h1 className='text-xl font-semibold mb-4'>Shop Services</h1>
            {services.map((item,index)=>{
                return <p className='mb-2' key={index}>{item}</p>
            })}
        </div>
        <div>
            <h1 className='text-xl font-semibold mb-4'>About Us</h1>
            <p className='mb-2'>At our electronics store, we are dedicated to providing the latest and greatest devices and accessories to our customers. With a wide selection of phones, TVs, laptops, watches, and accessories.</p>
            <p>© 2024 E~Shop. All rights reserved.</p>
        </div>
        <div className='ml-5 sm:ml-5'>
            <h1 className='text-xl font-semibold mb-4'>Follow Us</h1>
            <div className="flex items-center gap-4">
            {socials.map((item)=>{
                return <div key={item.id}>
                    {item.icon}
                </div>
            })}
            </div>
        </div>
    </div>
  )
}

export default Footer
