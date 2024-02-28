import React from 'react';
import Image from 'next/image';

export default function Supporters() {
  return (
    <div className='bg-orange px-4 py-16 lg:px-20 lg:py-28 mt-20 lg:mt-36'>
        <h2 className='text-center font-semibold text-4xl xl:text-6xl text-black mb-20'>We are Supported by</h2>
        <div className="p-4 grid md:grid-cols-2 xl:grid-cols-3 gap-8 max-w-screen mx-auto">
            <div className="rounded-xl p-4  flex flex-col bg-white h-96 2xl:flex-row justify-center items-center gap-4" >
                <div className="h-1/2 w-auto">
                    <Image src="/images/supporters/tuzla-soli.png" className="h-full w-auto" height={800} width={800} alt="Tuzla soli"></Image>
                </div>
                <div className="w-maxWidth text-black text-center 2xl:text-left">
                    <p className='text-3xl'>
                        Tuzla soli
                    </p>
                </div>
            </div>
            <div className="rounded-xl p-4 flex flex-col bg-white h-96 2xl:flex-row justify-center items-center gap-4">
                <div className="h-1/2 w-auto">
                    <Image src="/images/supporters/Logo.png" className="h-full w-auto" height={800} width={800} alt="Tuzla soli"></Image>
                </div>
                <div className="w-maxWidth md:items-start text-black text-center 2xl:text-left">
                    <p className='text-3xl text-bordeaux-light-green'>
                    Tierhilfe <br/> Pfotentraum <br/>e.V.
                    </p>
                    <p className='text-xl'>
                    Chance auf Leben
                    </p>
                </div>
            </div>
            <div className="rounded-xl p-4 flex flex-col bg-white h-96 2xl:flex-row justify-center items-center gap-4">
                <div className="h-1/2 w-auto">
                    <Image src="/images/supporters/logo-reset.png" className="h-full w-auto" height={800} width={800} alt="Tuzla soli"></Image>
                </div>
                <div className="w-maxWidth md:items-start text-black text-center 2xl:text-left">
                    <p className='text-3xl'>
                    RE-SET
                    </p>
                    <p className='text-xl'>
                    Nevladina Organizacija 
                    </p>
                </div>
            </div>
            <div className="rounded-xl p-4 flex flex-col bg-white lg:col-start-2 lg:col-span-1 h-96 justify-center items-center">
                <div className="w-full">
                    <Image src="/images/supporters/bosinske-hunde-logo.png" className="w-full" height={800} width={800} alt="Tuzla soli"></Image>
                </div>
            </div>
            </div>
    </div>
    
  );
}
