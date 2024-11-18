'use client';

import Link from 'next/link'
import React from 'react';
import { CiSearch } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa";
import { CiShoppingCart } from "react-icons/ci";
import NavLink from '@/type/page';
import { usePathname } from 'next/navigation';

const Navbar = () => {
    const pathname = usePathname();
    return (
        <div className='flex items-center justify-center '>
            <div className='w-full'>
                <div className='max-w-[1400px] mx-auto'>
                    <div className=' flex flex-col'>
                        <div className='flex md:justify-between justify-center items-center md:px-32 px-2  py-3 w-full bg-black  text-white '>
                            <div className='text-center flex-1 '>
                                <div className='flex md:justify-center justify-start items-center md:gap-2'>
                                    <p className=' hidden md:block text-sm text-slate-300 mr-2'>
                                        Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
                                    </p>
                                    <h1 className=' font-semibold text-xl text-red-500'>
                                        ShopNow
                                    </h1>
                                </div>
                            </div>

                            {/* Right-aligned text */}
                            <div className='ml-auto'>
                                <select
                                    className='outline-none px-4  text-black'
                                    style={{ color: 'black' }} // Inline style for additional control
                                    defaultValue="English"
                                >
                                    <option style={{ color: 'black' }}>Spanish</option>
                                    <option style={{ color: 'black' }}>French</option>
                                    <option style={{ color: 'black' }}>German</option>
                                </select>
                            </div>
                            {/* Centered text */}
                        </div>
                        <div className='flex items-center justify-between lg:px-32 w-full px-2  pt-10 pb-6 border-b border-gray-400'>
                            <div className='font-bold text-2xl	'>
                                Exclusive
                            </div>
                            <div className='flex-row gap-12 md:flex hidden'>
                                {
                                    NavLink.map((item, index) => {
                                        const isActive = pathname === item.link;  // Check if the link is active using pathname

                                        return (

                                            <Link href={item.link} key={index}
                                                className={`text-black font-bold pb-1 ${isActive
                                                    ? "border-b-2 border-red-900"
                                                    : "hover:border-b-2 hover:border-red-900"
                                                    }`}
                                            >
                                                {item.name}
                                            </Link>

                                        )

                                    })
                                }
                            </div>
                            <div className='flex items-center justify-between gap-2'>
                                {/* Group container with hover effect */}
                                <div className='flex gap-2 group py-2 px-4 rounded bg-gray-300 items-center'>
                                    <input
                                        type="text"
                                        placeholder='What are you looking for?'
                                        className='outline-none text-slate-600 transition-all duration-300 bg-gray-300 ease-in-out w-[50px] group-hover:w-full'
                                        style={{ flexGrow: 1 }}

                                    />
                                    <CiSearch className='w-6 h-6' />
                                </div>
                                <div>
                                    <FaRegHeart className='w-6 h-6' />
                                </div>
                                <div>
                                    <CiShoppingCart className='w-6 h-6' />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    )
}

export default Navbar;

