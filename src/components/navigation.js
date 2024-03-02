import React from 'react'
import Image from 'next/image'
import { RxHamburgerMenu } from "react-icons/rx";
import Link from 'next/link';
export default function Navigation({setAside}) {

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      };

  return (
    <nav className='top-0 w-full z-40 fixed bg-dark-brown items-center px-4 py-2 flex justify-between lg:px-24 lg:py-2 rounded-b-2xl'>
        <div>
            <Image src="/images/logo/logo.png" alt="Nirina logo" width={70} height={70}/>
        </div>
        <div className='md:hidden cursor-pointer' onClick={() => setAside()}>
            <RxHamburgerMenu size={28} color='white'/>
        </div>
        <div className='hidden md:flex'>
            <ul className='md:flex md:items-center md:font-semibold'>
                <li className='xl:ml-14 md:ml-8 cursor-pointer' onClick={() => scrollToSection('homeTop')}><Link href="/">Home</Link></li>
                <li className='xl:ml-14 md:ml-8 cursor-pointer' onClick={() => scrollToSection('aboutUs')}>About Us</li>
                <li className='xl:ml-14 md:ml-8 cursor-pointer' onClick={() => scrollToSection('programs')}>Programs</li>
                <li className='xl:ml-14 md:ml-8 cursor-pointer' onClick={() => scrollToSection('gallery')}>Gallery</li>
                <li className='xl:ml-14 md:ml-8 cursor-pointer' onClick={() => scrollToSection('contact')}>Contact</li>
            </ul>
            <button className="hidden text-black hover:text-white md:block group relative px-12 py-2 overflow-hidden rounded-lg bg-yellow text-lg shadow xl:ml-14 md:ml-8 cursor-pointer">
                <div className="absolute inset-0 w-0 bg-orange transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                <span className="relative md:font-semibold">Donate</span>
            </button>
        </div>
    </nav>
  )
}
