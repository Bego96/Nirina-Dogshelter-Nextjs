import React from 'react';
import { TfiClose } from "react-icons/tfi";
import { IoIosHome } from "react-icons/io";
import { IoIosInformationCircle } from "react-icons/io";
import { BiSolidSpreadsheet } from "react-icons/bi";
import { GrGallery } from "react-icons/gr";
import { FaPhoneAlt } from "react-icons/fa";
import Image from 'next/image';

export default function Sidebar({ showSidebar, setAside }) {
  return (
    <aside className={`${showSidebar ? 'left-0' : 'left-[-100%]'} z-50 bg-[#D1D4D4] transition-all duration-150 ease-in-out delay-150 w-full h-[100vh] absolute top-0 flex flex-col justify-between md:hidden`}>
         <div>
            <div className='p-4 sm:p-6 flex justify-between bg-[#5B6161]'>
              <div className='flex items-center'>
                <Image src="/images/logo/logo.png" alt="Nirina logo" width={70} height={70} />
                <p className='ml-4 text-2xl text-white'>
                  NIRINA
                </p>
              </div>
              <div onClick={() => setAside()} className='cursor-pointer'>
                <TfiClose size={26} color='white' />
              </div>
            </div>
            <div className='px-4 py-6 sm:px-6 bg-[#D1D4D4]'>
              <ul className='text-slate-800 font-semibold text-lg'>
                <li className='mt-4 cursor-pointer p-4 hover:bg-[#008080] hover:text-slate-100 rounded-md flex'><IoIosHome size={26} className='mr-4' />Home</li>
                <li className='mt-4 cursor-pointer p-4 hover:bg-[#008080] hover:text-slate-100 rounded-md flex'><IoIosInformationCircle size={26} className='mr-4' />About Us</li>
                <li className='mt-4 cursor-pointer p-4 hover:bg-[#008080] hover:text-slate-100 rounded-md flex'><BiSolidSpreadsheet size={26} className='mr-4' />Programs</li>
                <li className='mt-4 cursor-pointer p-4 hover:bg-[#008080] hover:text-slate-100 rounded-md flex'><GrGallery size={26} className='mr-4' />Gallery</li>
                <li className='mt-4 cursor-pointer p-4 hover:bg-[#008080] hover:text-slate-100 rounded-md flex'><FaPhoneAlt size={26} className='mr-4' />Contact</li>
              </ul>
            </div>

          </div>

        <div className='p-6 bg-[#5B6161] sm:px-8'>
          <button className="font-semibold block group relative px-12 py-2 overflow-hidden rounded-lg bg-[#008080] text-lg shadow cursor-pointer">
            <div className="absolute inset-0 w-0 bg-[#25a5be] transition-all duration-[250ms] ease-out group-hover:w-full"></div>
            <span className="relative text-white md:font-semibold">Donate</span>
          </button>
        </div>
      
      
    </aside>
  );
}
