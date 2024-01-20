import Image from 'next/image'
import React from 'react'
import headerPic from '/public/headerpic.jpg'

export default function Hero() {
    return (
        <div className='relative'>
            <div>
                <Image src={headerPic} alt="salon" className='w-full h-[80vh] object-cover' />
            </div>
            <div className='absolute top-1/2 left-1/2 z-[10] -translate-x-1/2 -translate-y-1/2 text-white text-8xl md:text-9xl'> 
                <h1 className='font-bold tracking-widest'>CUTS</h1>
            </div>
        </div>
    )
}