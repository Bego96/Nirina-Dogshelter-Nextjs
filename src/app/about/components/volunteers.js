import React from 'react'
import Image from 'next/image'
export default function Volunteers() {
  return (
    <div className='bg-bordeaux-brown px-4 py-16 text-bordeaux-slate flex flex-col xl:flex-row gap-10 lg:p-24 items-center my-24'>
        <div className='xl:w-1/3 flex flex-col justify-center items-center xl:items-start mb-12 xl:mb-0'>
            <h2 className='font-semibold text-4xl xl:text-6xl'>Volunteer</h2>
            <p className='text-lg mt-12 text-center xl:text-start'>
            Volunteers play a crucial role in boosting adoptions by socializing, training, and caring for dogs, offering innovative ideas, managing social media, 
            advertising to potential adopters, and providing assistance for inquiries.
            </p>
            <button className=" text-black hover:text-white mt-12 group relative h-[44px] w-[250px] overflow-hidden rounded-lg bg-yellow  text-lg shadow cursor-pointer">
                <div className="absolute inset-0 w-0 bg-orange transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                <span className="relative font-semibold"><a href='https://www.facebook.com/groups/330001807080905' target="_blank">Join Us</a></span>
          </button>
        </div>
        <div className='flex flex-col flex-wrap justify-center md:items-end xl:w-2/3 sm:flex-row gap-6 md:gap-4'>
            <div className='flex flex-col justify-center items-center'>
                <div className='w-[150px] h-[150px] overflow-hidden rounded-full flex justify-center items-center'>
                    <Image src="/images/team/vana.png" className="w-auto h-auto" height={600} width={600} alt="Vana"/>
                </div>
                <div className='text-center mt-4'>
                    <p>Volunteer</p>
                    <p className='text-lg'>Vana Mujčinović</p>
                </div>
            </div>
            <div className='flex flex-col justify-center items-center'>
                <div className='w-[150px] h-[150px] overflow-hidden rounded-full flex justify-center items-center'>
                    <Image src="/images/team/zdravko.png" className="w-auto h-auto" height={600} width={600} alt="Zdravko"/>
                </div>
                <div className='text-center mt-4'>
                    <p>Volunteer</p>
                    <p className='text-lg'>Zdravko Čajić</p>
                </div>
            </div>
            <div className='flex flex-col justify-center items-center'>
                <div className='w-[150px] h-[150px] overflow-hidden rounded-full flex justify-center items-center'>
                    <Image src="/images/team/ena.png" className="w-auto h-auto" height={600} width={600} alt="Ena"/>
                </div>
                <div className='text-center mt-4'>
                    <p>Volunteer</p>
                    <p className='text-lg'>Ena Čerimović</p>
                </div>
            </div>
            <div className='flex flex-col justify-center items-center'>
                <div className='w-[150px] h-[150px] overflow-hidden rounded-full flex justify-center items-center'>
                    <Image src="/images/team/emir.png" className="w-auto h-auto" height={600} width={600} alt="Emir"/>
                </div>
                <div className='text-center mt-4'>
                    <p>Volunteer</p>
                    <p className='text-lg'>Emir Dindić</p>
                </div>
            </div>
            <div className='flex flex-col justify-center items-center'>
                <div className='w-[150px] h-[150px] overflow-hidden rounded-full flex justify-center items-center'>
                    <Image src="/images/team/amra.jpg" className="w-auto h-auto" height={600} width={600} alt="Amra"/>
                </div>
                <div className='text-center mt-4'>
                    <p>Employee</p>
                    <p className='text-lg'>Amra Galijašević</p>
                </div>
            </div>
            <div className='flex flex-col justify-center items-center'>
                <div className='w-[150px] h-[150px] overflow-hidden rounded-full flex justify-center items-center'>
                    <Image src="/images/team/anita.jpg" className="w-auto h-auto" height={600} width={600} alt="Anita"/>
                </div>
                <div className='text-center mt-4'>
                    <p>Volunteer</p>
                    <p className='text-lg'>Anita Mišić</p>
                </div>
            </div>
            <div className='flex flex-col justify-center items-center'>
                <div className='w-[150px] h-[150px] overflow-hidden rounded-full flex justify-center items-center'>
                    <Image src="/images/team/vehid.png" className="w-auto h-auto" height={600} width={600} alt="Vehid"/>
                </div>
                <div className='text-center mt-4'>
                    <p>Volunteer</p>
                    <p className='text-lg'>Vehid Ademović</p>
                </div>
            </div>
            <div className='flex flex-col justify-center items-center'>
                <div className='w-[150px] h-[150px] overflow-hidden rounded-full flex justify-center items-center'>
                    <Image src="/images/team/lejla.png" className="w-auto h-auto" height={600} width={600} alt="Lejla"/>
                </div>
                <div className='text-center mt-4'>
                    <p>Volunteer</p>
                    <p className='text-lg'>Lejla Majdančić</p>
                </div>
            </div>
            <div className='flex flex-col justify-center items-center'>
                <div className='w-[150px] h-[150px] overflow-hidden rounded-full flex justify-center items-center'>
                    <Image src="/images/team/leon.png" className="w-auto h-auto" height={600} width={600} alt="Leon"/>
                </div>
                <div className='text-center mt-4'>
                    <p>Volunteer</p>
                    <p className='text-lg'>Leon Crossan</p>
                </div>
            </div>
        </div>
    </div>
  )
}
