'use client'
import React from 'react'
import  { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import ImgGallery from './imgGallery';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
export default function DogPhotos({imgGalleryNew}) {
    const [imgGalleryCopy, setImgGalleryCopy] = useState(imgGalleryNew);
    const [winWidth, setWinWidth] = useState(0)

    const handleWindowResize = () => {
      setWinWidth(1023);
    }

    let galleryLens = 10;
    let galleryArrays = [];
    let arr = [];
    let id = galleryLens/10
    let multiplier = 1;

    if (winWidth > 1023) {
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
    } else {
      galleryArrays = imgGalleryCopy;
    }
    
    useEffect(() => {
      // component is mounted and window is available
      handleWindowResize();
      window.addEventListener('resize', handleWindowResize);
      // unsubscribe from the event on component unmount
      return () => window.removeEventListener('resize', handleWindowResize);
    }, []);
  

  return (
    <div className='px-4 py-12'>
        
        <Swiper
          modules={[winWidth > 1023 ? Pagination : Navigation]}
          spaceBetween={10}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
         
        >
          {galleryArrays.map((imgs, index) => (
            <SwiperSlide key={imgs.id}>
              <div className='flex flex-col flex-wrap lg:flex-row'>
                <ImgGallery winWidth={winWidth} gallery={imgs.imgs} imgSrc={imgs.imgSrc} key={imgs.id}/>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
  )
}
