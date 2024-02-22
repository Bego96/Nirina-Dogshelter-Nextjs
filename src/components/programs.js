import React from 'react'
import Image from 'next/image'
export default function Programs() {
  return (
    <div className='flex flex-col items-center bg-[#5B6161] p-4 xl:p-32'>
        <h2 className='font-semibold text-4xl xl:text-6xl mb-12'>Programs</h2>
        <div className='mb-4 md:mb-12 xl:mb-24 flex flex-col bg-[#333A3A] p-8 rounded-xl justify-center items-center md:flex-row'>
           
            <div className='w-full md:w-1/2 lg:w-[30%] relative'>
                <div className='px-6 text-center absolute bottom-2 left-1/2 transform -translate-y-[5%] -translate-y-[30%] -translate-x-1/2 xl:-translate-y-[10%] p-4 bg-slate-600 bg-opacity-30 rounded-xl'>
                    <p className='mb-2 md:text-xl'>Various Programs</p>
                    <p className='text-slate-200 md:text-xl'>Walking and more..</p>
                </div>
                <Image src="/images/Nirina_za_Landing_Page/Card-2.png" height={500} width={500} className="w-full" alt="Varius programs"/>
            </div>
        
            <div className='w-full md:w-1/2 lg:w-[70%] mt-12 md:mt-0 md:ml-8'>
                <h3 className='font-semibold text-2xl xl:text-4xl mb-8'>
                    The Walking Programs
                </h3>
                <p className='text-xl text-slate-200'>
                The walking program was created with the aim of socializing dogs as much as possible. Streets dogs can have various characters, 
                from the most cuddly ones to those who do not allow anyone to approach them. 
                </p>
                <div className='flex justify-end mt-12'>
                    <p className='text-xl text-slate-200'>
                        Read more
                    </p>
                </div>
            </div>
        </div>
        <div className='mb-4 md:mb-12 xl:mb-24 flex flex-col bg-[#333A3A] p-8 rounded-xl justify-center items-center md:flex-row'>
           
            <div className='w-full md:w-1/2 lg:w-[30%] relative'>
                <div className='px-6 text-center absolute bottom-2 left-1/2 transform -translate-y-[5%] -translate-y-[30%] -translate-x-1/2 xl:-translate-y-[10%] p-4 bg-slate-600 bg-opacity-30 rounded-xl'>
                    <p className='mb-2 md:text-xl'>cca3000</p>
                    <p className='text-slate-200 md:text-xl'>Total dogs adopted</p>
                </div>
                <Image src="/images/Nirina_za_Landing_Page/Card-1.png" height={500} width={500} className="w-full" alt="Virtual adoption programs"/>
            </div>
        
            <div className='w-full md:w-1/2 lg:w-[70%] mt-12 md:mt-0 md:ml-8'>
                <h3 className='font-semibold text-2xl xl:text-4xl mb-8'>
                Virtual Adopting Programs
                </h3>
                <p className='text-xl text-slate-200'>
                The <q>Virtual Adoptions</q> program was created with the aim of collecting the remaining necessary funds in order to provide food for all the dogs in the shelter. 
                It functions in such a way that the Virtual Adopter (VA) chooses the dog he wants to <q>adopt</q> online and pays 16€ for its food every month. 
                This is the most important activity in our shelter thanks to which we fill our <q>dogs</q> bowls every day.
                </p>
            </div>
        </div>
        <div className='mb-2 md:mb-8 xl:mb-12 flex flex-col bg-[#333A3A] p-8 rounded-xl justify-center items-center md:flex-row'>
           
            <div className='w-full md:w-1/2 lg:w-[30%] relative'>
                <div className='px-6 text-center absolute bottom-2 left-1/2 transform -translate-y-[5%] -translate-y-[30%] -translate-x-1/2 xl:-translate-y-[10%] p-4 bg-slate-600 bg-opacity-30 rounded-xl'>
                    <p className='mb-2 md:text-xl'>$ thousands</p>
                    <p className='text-slate-200 md:text-xl'>food & products donation</p>
                </div>
                <Image src="/images/Nirina_za_Landing_Page/Card.png" height={500} width={500} className="w-full" alt="Varius programs"/>
            </div>
        
            <div className='w-full md:w-1/2 lg:w-[70%] mt-12 md:mt-0 md:ml-8'>
                <h3 className='font-semibold text-2xl xl:text-4xl mb-8'>
                Leon’s Fund
                </h3>
                <p className='text-xl text-slate-200'>
                Leon{`'`}s fund is a program designed on behalf of all the dogs that left our shelter. We wanted to honor them in some way so they would never be forgotten. 
                When a dog leaves our shelter, you can support this program by donating a symbolic amount of money marked as <q>In memory of __ </q>
                </p>
                <div className='flex justify-end mt-12'>
                    <p className='text-xl text-slate-200'>
                        Read more
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}
