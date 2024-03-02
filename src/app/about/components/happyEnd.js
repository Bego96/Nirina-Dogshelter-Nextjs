import React from 'react'
import Image from 'next/image'
export default function HappyEnd() {
  return (
    <div className='pt-16 flex justify-start p-4 lg:p-24 mb-24'>

    <div className='w-full xl:w-[80%] rounded-3xl relative ' >

      <div className='md:shadow-[0_6px_16px_rgb(0,0,0,0.2)] text-bordeaux-black relative z-30 xl:z-10 p-4 w-full bg-light-brown xl:p-16 lg:top-[30%] lg:right-10 lg:absolute lg:w-[50%] 2xl:p-24 xl:-right-[25%] xl:top-12 rounded-2xl 2xl:top-[15%] 2xl:-right-[25%]'>
        <h2 className='font-semibold text-4xl xl:text-6xl'>Happy End</h2>
        <p className='text-xl mt-12'>
        At &apos;Happy End,&apos; we&apos;re dedicated to giving every dog a chance at a loving home. Explore heartwarming stories of adoption, where dogs find forever families, 
        bringing joy and &apos;Happy Endings&apos; for both pets and owners. Witness tales of transformation and loyalty that warm the heart, showcasing the incredible bond between humans and their furry companions.
        </p>
      </div>

      <Image src="/images/Nirina_za_Landing_Page/happyEnd.png" className="z-5 rounded-3xl relative bottom-[30px] lg:bottom-0" alt='Nirina dog shelter' height={1400} width={1400}/>
    </div>
  </div>
  )
}
