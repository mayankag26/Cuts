"use client"
import React, { useState } from 'react'
import { Divider } from '@nextui-org/react';
function Location({ children }) {
  const [color,activeColor]=useState(1);
  return (
    <div>
   
      <div className=' flex services flex-row mx-3 md:mx-10 space-x-5 md:space-x-12 pt-11 md:flex-row'>
        <div className='barbershop flex space-x-2 bg-slate-200 px-2 py-2' onClick={() => { console.log("barbershop clicked"); } }>
          <div className='w-4'><img src='/logoofshop.png'></img></div>
          <div><button className='text-sm  '>Salon Nearby</button></div></div>
        <div className='barberhome flex space-x-2  bg-slate-200  px-2 py-2' onClick={() => { console.log("barberhome clicked"); activeColor(0) } }>
          <div className='w-4'><img src='/logoofhome.png'></img></div>
          <div><button className=' text-sm'>Home Service</button></div></div>     
      </div>  
      <Divider className='bg-gray-900 mt-8  '></Divider>

     
      {children}
    </div>
  );
}

export default Location
