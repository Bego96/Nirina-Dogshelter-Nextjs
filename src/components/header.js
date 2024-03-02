import React from 'react'

export default function Header() {
  return (
    <div id="homeTop" className='px-4 py-16 lg:p-24 mt-20'>
        <div className='px-4 py-12 bg-hero-img bg-no-repeat bg-cover bg-center rounded-2xl overflow-hidden w-full xl:px-24 xl:py-72'>
            <div className='flex flex-col'>
                <h1 className='font-semibold text-4xl lg:text-6xl xl:text-7xl'>
                    Adopting is more <br/> humane than buying
                </h1>
                <p className='text-xl mt-12 md:w-[70%] lg:w-1/2 xl:w-[40%]'>
                The primary goal is to bring joy to our furry friends. Spend time petting them, sharing treats, and playing with toys - and in return, 
                they will reward you with unwavering trust. 
                </p>
                <button className="w-full mt-12 text-black hover:text-white group relative h-[44px] sm:w-[250px] overflow-hidden rounded-lg bg-yellow text-lg shadow cursor-pointer">
                    <div className="absolute inset-0 w-0 bg-orange transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                    <span className="relative font-semibold">Ask for Adopt</span>
                </button>
            </div>
        </div>
    </div>
  )
}
