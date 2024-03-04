// 'use client'
import React from 'react'
import Carousel from "../../components/carousel/index"
import Shops from '@/app/components/shops'
import { Divider } from '@nextui-org/react'
const Page = ({ params }) => {
  
  return (
    <div> 
     <div className='carousel'>
      {/* <Divider className='bg-gray-900 mt-8'></Divider> */}
       <Carousel></Carousel>
      <div className='text-4xl mt-8  -translate-x-1.5 lg:mx-16'>Hair Salons In {params.city}</div> 
       {/* <Divider className='bg-gray-900   '></Divider> */}
      </div>

      <div className='shops pt-10'>
      <Shops location={`${params.city}`}></Shops>  
      </div>     
    </div>
  )
}

export default Page
