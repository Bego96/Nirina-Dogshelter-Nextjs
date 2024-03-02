import React from 'react'
import Image from 'next/image'
export default function MoreAboutUs() {
  return (
    <div className='pt-16 bg-bordeaux-brown flex justify-end p-4 lg:p-24 mb-24 mt-36 '>

      <div className='w-full xl:w-[80%] rounded-3xl relative ' >

        <div className='md:shadow-[0_6px_16px_rgb(0,0,0,0.2)] text-bordeaux-black relative z-30 xl:z-10 p-4 w-full bg-light-brown xl:p-16 lg:top-[30%] lg:left-10 lg:absolute lg:w-[50%] 2xl:p-24 xl:-left-[25%] xl:top-12 rounded-2xl 2xl:top-[15%] 2xl:-left-[25%]'>
          <h2 className='font-semibold text-4xl xl:text-6xl'>More About Us</h2>
          <p className='text-xl mt-12'>
          Nirina&apos;s team is a dedicated group comprised of a handful of diligent workers, a dozen volunteers, and two supervisors. Each day, they work tirelessly to enhance the conditions of the shelter, fostering a harmonious environment while managing the various responsibilities essential for the smooth functioning of the system.
          </p>
        </div>

        <Image src="/images/Nirina_za_Landing_Page/Image_of_all_Team.png" className="z-5 rounded-3xl relative bottom-[30px] lg:bottom-0" alt='Nirina dog shelter' height={1400} width={1400}/>
      </div>
    </div>
  )
}
