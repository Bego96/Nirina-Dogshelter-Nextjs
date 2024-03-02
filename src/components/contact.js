import React from 'react'
import { MdOutlineEmail } from "react-icons/md";
import { LuMapPin } from "react-icons/lu";
import { RiFacebookCircleLine } from "react-icons/ri";
import Image from 'next/image';
export default function Contact() {
  return (
    <div id="contact" className='text-bordeaux-slate px-4 py-20 flex flex-col md:flex-row lg:justify-between lg:items-center lg:p-24'>
        <div className='w-full lg:w-1/2 mb-10 md:mb-0'>
            <h3 className='text-2xl font-semibold mb-6'>Contact</h3>
            <p>For any information or volunteering contact us via</p>
            <div className='my-6'>
                <div className='flex items-center mb-2'>
                    <MdOutlineEmail size={24}/>
                    <p className='ml-2 text-xl'>Email</p>
                </div>
                <div>
                    <p className='text-bordeaux-dark-green'><a href="mailto:nirinashelter@gmail.com">nirinashelter@gmail.com</a></p>
                </div>
            </div>
            <div>
                <div className='flex items-center mb-2'>
                    <LuMapPin size={24}/>
                    <p className='ml-2 text-xl'>Address</p>
                </div>
                <div>
                    <p>Pasa Bunar, Tuzla, Bosnia and Herzegovina</p>
                </div>
            </div>
            <div className='mt-6'>
                <div className='mb-2'>
                    <p className='text-xl'>Social Media</p>
                </div>
                <div className='flex items-center'>
                    <RiFacebookCircleLine size={24}/>
                    <p className='ml-2'><a href='https://www.facebook.com/groups/330001807080905' target="_blank">Facebook</a></p>
                </div>
            </div>
        </div>
        <div className='w-full lg:w-1/2 overflow-hidden'>
            <Image src='/images/maps/shelter-location.png' height={1200} width={1200}/>
        </div>
    </div>
  )
}
