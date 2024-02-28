import React from 'react'

export default function MoreAboutDonate() {
  return (
    <div className='bg-bordeaux-brown p-4 items-center flex flex-col xl:flex-row xl:px-40 py-24 mb-24'>
        <p className='font-semibold text-bordeaux-slate text-xl mb-12 xl:mb-0 xl:mr-24'>Every contribution, big or small, makes a difference. Consider adopting, fostering, or supporting us in any way you can. Together, 
            we can make room for more wagging tails and find loving homes for our furry friends. Your support means the world to us
        </p>
        <button className="w-full text-black hover:text-white group relative h-[44px] sm:w-[250px] xl:w-[450px] overflow-hidden rounded-lg bg-orange text-lg shadow cursor-pointer">
            <div className="absolute inset-0 w-0 bg-dark-orange transition-all duration-[250ms] ease-out group-hover:w-full"></div>
            <span className="relative text-white font-semibold">Donate</span>
        </button>
    </div>
  )
}
