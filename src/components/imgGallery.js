import React from 'react';
import Image from 'next/image';

export default function ImgGallery({ gallery, key, imgSrc, winWidth }) {
  return (
    <>
      {
      
        winWidth > 1023 ?
        gallery.map((img, index) => (
          <div key={img.id} className='w-full mb-4 md:h-[360px] md:w-auto md:mx-auto md:mb-20'>
            <Image src={img.imgSrc} className="h-full w-full" width={500} height={1000} alt="dog" />
          </div>
      )) : <div key={key} className='h-full flex justify-center'>
            <Image src={imgSrc} className="min-h-[300px] w-auto" width={500} height={1000} alt="dog" />
          </div>
          }
    </>
  );
}
