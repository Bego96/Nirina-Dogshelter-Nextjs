import React from 'react'
import Image from 'next/image'
import { RxHamburgerMenu } from "react-icons/rx";
import Link from 'next/link';
export default function Navigation({setAside}) {



  return (
    <nav className='bg-dark-brown items-center px-4 py-2 flex justify-between lg:px-24 lg:py-2 rounded-b-2xl'>
        <div>
            <Image src="/images/logo/logo.png" alt="Nirina logo" width={70} height={70}/>
        </div>
        <div className='md:hidden cursor-pointer' onClick={() => setAside()}>
            <RxHamburgerMenu size={28} color='white'/>
        </div>
        <div className='hidden md:flex'>
            <ul className='md:flex md:items-center md:font-semibold'>
                <li className='xl:ml-14 md:ml-8 cursor-pointer'>Home</li>
                <li className='xl:ml-14 md:ml-8 cursor-pointer'><Link href="/about">About Us</Link></li>
                <li className='xl:ml-14 md:ml-8 cursor-pointer'>Programs</li>
                <li className='xl:ml-14 md:ml-8 cursor-pointer'>Gallery</li>
                <li className='xl:ml-14 md:ml-8 cursor-pointer'>Contact</li>
            </ul>
            <button className="hidden text-black hover:text-white md:block group relative px-12 py-2 overflow-hidden rounded-lg bg-yellow text-lg shadow xl:ml-14 md:ml-8 cursor-pointer">
                <div className="absolute inset-0 w-0 bg-orange transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                <span className="relative md:font-semibold">Donate</span>
            </button>
        </div>
    </nav>
  )
}
