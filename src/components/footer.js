'use client'
import React from 'react';
import Image from 'next/image';
import { RiFacebookCircleLine } from "react-icons/ri";
import Link from 'next/link';

export default function Footer() {

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div>
            <div className='bg-dark-brown px-4 py-16 rounded-t-2xl lg:px-24 lg:py-10'>
                <div className='flex flex-col lg:flex-row md:justify-between mb-10'>
                    <div className='flex flex-col xl:flex-row'>
                        <div className='mb-10 xl:mb-0 lg:mr-36'>
                            <div className='mb-4'>
                                <Image src="/images/logo/logo.png" alt="Nirina logo" width={70} height={70}/>
                            </div>
                            <p className='mb-4 text-2xl font-semibold'>Social Media</p>
                            <div className='flex'>
                                <p className='mr-2'>Follow Us on</p>
                                <a href='https://www.facebook.com/groups/330001807080905' target="_blank"><RiFacebookCircleLine size={24}/></a>
                            </div>
                        </div>
                        <div className='mb-10 lg:mb-0'>
                            <p className='font-semibold text-2xl mb-10'>Links</p>
                            <ul className='md:flex md:items-center'>
                                <li className='mb-6 lg:mb-0 cursor-pointer'  onClick={() => scrollToSection('homeTop')}><Link href='/'>Home</Link></li>
                                <li className='mb-6 lg:mb-0 md:ml-10 cursor-pointer' onClick={() => scrollToSection('aboutUs')}><Link href="/#aboutUs" scroll={true}>About Us</Link></li>
                                <li className='mb-6 lg:mb-0 md:ml-10 cursor-pointer' onClick={() => scrollToSection('programs')}><Link href="/#programs" scroll={true}>Programs</Link></li>
                                <li className='mb-6 lg:mb-0 md:ml-10 cursor-pointer' onClick={() => scrollToSection('gallery')}><Link href="/#gallery" scroll={true}>Gallery</Link></li>
                                <li className='mb-6 lg:mb-0 md:ml-10 cursor-pointer' onClick={() => scrollToSection('contact')}><Link href="/#contact" scroll={true}>Contact</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className='flex lg:items-end flex-col lg:ml-20'>
                        <p className='text-2xl'>If you appreciate our work, support us with donations</p>
                        <button className="mt-8 w-[200px] font-semibold block group relative px-12 py-2 overflow-hidden rounded-lg bg-yellow text-black shadow cursor-pointer">
                            <div className="absolute inset-0 w-0 bg-orange transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                            <span className="relative text-black hover:text-white md:font-semibold">Donate</span>
                        </button>
                    </div>
                </div>
                <div className='flex flex-col lg:flex-row md:justify-between md:items-start'>
                    <p>Nirina Dog Shelter &copy; 2024 All rights reserved.</p>
                    <div className='flex flex-col lg:flex-row mt-10 lg:mt-0'>
                        <p className='font-semibold lg:mr-10'>Created by <span className='font-normal'>Ismar</span></p>
                        <p className='font-semibold'> Design by <span className='font-normal'>Marija Jovanović</span></p>
                    </div>
                </div>
            </div>
        </div>
    );
}
