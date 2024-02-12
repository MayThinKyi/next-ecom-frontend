'use client';
import { Menu, Transition } from '@headlessui/react'
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import { Fragment, useEffect, useRef, useState } from 'react'

export default function ProfileDropDown() {
  const {data:user,status}=useSession();
  return (
    <div className=" text-right">
      <Menu as="div" className=" inline-block text-left">
        <div>
          <Menu.Button className="inline-flex w-full justify-center rounded-md px-4 py-2 text-sm font-medium text-white  focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75">
            <Image alt="User Profile" src={'/user.png'} width={45} height={45} className='rounded-full border border-blue-600 object-center' />
            
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
            <div className="px-1 py-1 ">
              {status==='unauthenticated' ?
              <Menu.Item>
                {({ active }) => (
                  <Link href={'/api/auth/signin'}
                    className={`${
                      active ? 'bg-blue-500 text-white' : 'text-gray-900'
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                   
                    Login
                  </Link>
                )}
              </Menu.Item> :
              <Menu.Item>
                {({ active }) => (
                  <Link href={'/api/auth/signout'}
                    className={`${
                      active ? 'bg-blue-500 text-white' : 'text-gray-900'
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    Logout
                  </Link>
                )}
              </Menu.Item>}
            </div>
           
            
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  )
}


