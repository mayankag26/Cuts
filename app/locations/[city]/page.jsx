'use client'
import React from 'react'
import Carousel from "../../components/carousel/index"
import Shops from '@/app/components/shops'
const Page = ({ params }) => {
  return (
    <div> 
     <div className='carousel pt-6'>
       <Carousel></Carousel>
      </div>
      <div><h1 className='pt-20 text-4xl text-center'>Hair salon in {params.city}</h1> </div> 
      <div className='shops pt-20'>
       <Shops></Shops>  
      </div>
  
          
    </div>
  )
}

export default Page
