import React from 'react'
import Image from 'next/image'
import { RxHamburgerMenu } from "react-icons/rx";
export default function Navigation({setAside}) {



  return (
    <nav className='bg-[#5B6161] items-center px-4 py-2 flex justify-between lg:px-24 lg:py-2 rounded-b-2xl'>
        <div>
            <Image src="/images/logo/logo.png" alt="Nirina logo" width={70} height={70}/>
        </div>
        <div className='md:hidden cursor-pointer' onClick={() => setAside()}>
            <RxHamburgerMenu size={28} color='white'/>
        </div>
        <div className='hidden md:flex'>
            <ul className='text-white md:flex md:items-center md:font-semibold'>
                <li className='xl:ml-14 md:ml-8 cursor-pointer'>Home</li>
                <li className='xl:ml-14 md:ml-8 cursor-pointer'>About Us</li>
                <li className='xl:ml-14 md:ml-8 cursor-pointer'>Programs</li>
                <li className='xl:ml-14 md:ml-8 cursor-pointer'>Gallery</li>
                <li className='xl:ml-14 md:ml-8 cursor-pointer'>Contact</li>
            </ul>
            <button className="hidden md:block group relative px-12 py-2 overflow-hidden rounded-lg bg-[#008080] text-lg shadow xl:ml-14 md:ml-8 cursor-pointer">
                <div className="absolute inset-0 w-0 bg-[#25a5be] transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                <span className="relative text-white md:font-semibold">Donate</span>
            </button>
        </div>
    </nav>
  )
}
