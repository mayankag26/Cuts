"use client";

import React from 'react'
import Carousel from "../../components/carousel/index"
import Shops from '@/app/components/shops'
import HomeShops from '@/app/components/homeshop'
import Services from '@/app/components/services'
const Page = ({ params }) => {
  
  let [color, setColor]=React.useState(0);
  // React.useEffect(() => {setColor(1);}, []);

  return (
    <div> 
     <Services color={color} setColor={setColor}></Services>
     <div className='carousel'>
       <Carousel />
      <div className='text-4xl mt-8  -translate-x-1.5 lg:mx-16'>Hair Salons In {params.city}</div> 
      </div>
      <div className='shops pt-10'> 
     { (color===1)?<Shops location={`${params.city}`}></Shops>:<HomeShops  location={`${params.city}`}></HomeShops>}    
      </div>     
    </div>
  )
}

export default Page
