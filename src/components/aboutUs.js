import React from 'react';
import Image from 'next/image';

export default function AboutUs() {
  return (
    <div className='pt-16 bg-bordeaux-brown flex justify-end p-4 lg:p-24'>

      <div className='w-full xl:w-[80%] rounded-3xl relative ' >

        <div className='md:shadow-[0_6px_16px_rgb(0,0,0,0.2)] text-black relative z-30 xl:z-10 p-4 w-full bg-light-brown xl:p-16 lg:top-[30%] lg:left-10 lg:absolute lg:w-[50%] 2xl:p-24 xl:-left-[25%] xl:top-12 rounded-2xl 2xl:top-[15%] 2xl:-left-[25%]'>
          <h2 className='font-semibold text-4xl xl:text-6xl'>About Us</h2>
          <p className='text-xl mt-12'>
            Founded in 2012, <q>Nirina</q> took over a struggling shelter,
            rescuing 800 dogs from dire conditions; today, despite ongoing
            challenges, our passion and dedication continue to create positive
            stories and moments.
          </p>
          <button className="w-full text-black hover:text-white mt-12 group relative h-[44px] sm:w-[250px] overflow-hidden rounded-lg bg-yellow  text-lg shadow cursor-pointer">
            <div className="absolute inset-0 w-0 bg-orange transition-all duration-[250ms] ease-out group-hover:w-full"></div>
            <span className="relative md:font-semibold">Learn More</span>
          </button>
        </div>

        <Image src="/images/Nirina_za_Landing_Page/About_Us_Image.png" className="z-5 rounded-3xl relative bottom-[30px] lg:bottom-0" alt='Nirina dog shelter' height={1400} width={1400}/>
      </div>
    </div>
  );
}
