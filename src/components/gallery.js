import React, { useState } from 'react';
import 'swiper/css';
import { imageList } from '@/app/lib/sliderImages';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import DogPhotos from './dogPhotos';

export default function Gallery() {
    const [imgGallery, setImgGallery] = useState(imageList);
    


  return (
    <div className='bg-[#D1D4D4] py-8'>
      <h3 className='bg-[#5B6161] py-4 text-center font-semibold text-4xl xl:text-6xl'>Gallery</h3>
      <div className='px-4 py-12'>
        <DogPhotos imgGalleryNew={imgGallery}/>
      </div>
      <div className='flex justify-center items-center px-4 lg:px-24'>
        <button className="w-2/3 group relative h-[44px] sm:w-[250px] overflow-hidden rounded-lg bg-[#008080] text-lg shadow cursor-pointer">
            <div className="absolute inset-0 w-0 bg-[#25a5be] transition-all duration-[250ms] ease-out group-hover:w-full"></div>
            <span className="relative text-white md:font-semibold">See all photos</span>
        </button>
      </div>
    </div>
  );
}
