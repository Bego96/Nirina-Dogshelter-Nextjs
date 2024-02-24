'use client'
import React from 'react'
import  { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import ImgGallery from './imgGallery';
import { Pagination } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
export default function DogPhotos({imgGalleryNew}) {
    const [imgGalleryCopy, setImgGalleryCopy] = useState(imgGalleryNew);

    let galleryLens = 10;
    let galleryArrays = [];
    let arr = [];
    let id = galleryLens/10
    let multiplier = 1;

    for (let i = 0; i < imgGalleryCopy.length; i++) {
        
        if (arr.length >= 10) { 
            galleryArrays.push({id: id,
                imgs: arr});
            arr = []; 
            multiplier++;
            id = (galleryLens*multiplier/galleryLens)
        }
        arr.push(
            imgGalleryCopy[i]
        ); 
    }

  return (
    <div className='px-4 py-12'>
        
        <Swiper
            modules={[ Pagination,  ]}
          spaceBetween={0}
          slidesPerView={1}
          
          pagination={{ clickable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
         
        >
          {galleryArrays.map((imgs, index) => (
            <SwiperSlide key={imgs.id}>
              <div className='flex flex-col flex-wrap lg:flex-row'>
                <ImgGallery gallery={imgs.imgs} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
  )
}
