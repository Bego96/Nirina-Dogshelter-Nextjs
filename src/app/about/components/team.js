import React from 'react'
import Image from 'next/image'
export default function Team() {
  return (
    <div className='text-bordeaux-black rounded-tl-[60px] rounded-br-[60px] px-4 py-16 bg-orange flex flex-col xl:flex-row gap-10 lg:p-24 items-center'>
        <div className='flex flex-col flex-wrap justify-center md:items-end xl:w-2/3 sm:flex-row gap-6 md:gap-4'>
            <div className='flex flex-col justify-center items-center'>
                <div className='w-[220px] h-[220px] overflow-hidden rounded-full flex justify-center items-center'>
                    <Image src="/images/team/emina.png" className="w-auto h-auto" height={600} width={600} alt="Emina"/>
                </div>
                <div className='text-center mt-4'>
                    <p className='text-lg font-semibold'>CEO</p>
                    <p className='text-lg'>Emina Divkovic</p>
                    <p>
                        Keeps everything <br/>
                        under control
                    </p>
                </div>
            </div>
            <div className='flex flex-col justify-center items-center'>
                <div className='w-[150px] h-[150px] overflow-hidden rounded-full flex justify-center items-center'>
                    <Image src="/images/team/vlado.png" className="w-auto h-auto" height={600} width={600} alt="Vlado"/>
                </div>
                <div className='text-center mt-4'>
                    <p>Employee</p>
                    <p className='text-lg'>Vlado Mandic</p>
                </div>
            </div>
            <div className='flex flex-col justify-center items-center'>
                <div className='w-[150px] h-[150px] overflow-hidden rounded-full flex justify-center items-center'>
                    <Image src="/images/team/anto.png" className="w-auto h-auto" height={600} width={600} alt="Anto"/>
                </div>
                <div className='text-center mt-4'>
                    <p>Employee</p>
                    <p className='text-lg'>Anto Jagic</p>
                </div>
            </div>
            <div className='flex flex-col justify-center items-center'>
                <div className='w-[150px] h-[150px] overflow-hidden rounded-full flex justify-center items-center'>
                    <Image src="/images/team/almir.jpg" className="w-auto h-auto" height={600} width={600} alt="Almir"/>
                </div>
                <div className='text-center mt-4'>
                    <p>Employee</p>
                    <p className='text-lg'>Almir Agic</p>
                </div>
            </div>
            <div className='flex flex-col justify-center items-center'>
                <div className='w-[150px] h-[150px] overflow-hidden rounded-full flex justify-center items-center'>
                    <Image src="/images/team/adisa.png" className="w-auto h-auto" height={600} width={600} alt="Adisa"/>
                </div>
                <div className='text-center mt-4'>
                    <p>Employee</p>
                    <p className='text-lg'>Adisa Agica</p>
                </div>
            </div>
            <div className='flex flex-col justify-center items-center'>
                <div className='w-[150px] h-[150px] overflow-hidden rounded-full flex justify-center items-center'>
                    <Image src="/images/team/ivan.png" className="w-auto h-auto" height={600} width={600} alt="Ivan"/>
                </div>
                <div className='text-center mt-4'>
                    <p>Employee</p>
                    <p className='text-lg'>Ivan Mandic</p>
                </div>
            </div>
        </div>
        <div className='xl:w-1/3'>
            <p className='text-lg'>
            A dedicated team of five workers ensures the shelter&apos;s smooth operation, performing daily tasks like feeding, cleaning, and maintenance, 
            while on-call shifts guarantee continuous care and vigilance.
            </p>
        </div>
    </div>
  )
}
