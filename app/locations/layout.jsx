"use client"
import React, { useState } from 'react'
import { Divider } from '@nextui-org/react';
function Location({ children }) {
  const [color,activeColor]=useState(1);
  return (
    <div>
   
      {/* <div className=' flex services flex-row mx-3 md:mx-10 space-x-5 md:space-x-12 pt-11 md:flex-row ' >
      <button className='flex flex-row space-x-1 p-2 bg-cyan-100  focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2'>
      <div className='w-10'><img src='/logoofshop.png'></img></div>
      <div type="button" class="text-gray-  font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Salon Nearby</div>
      </button>
      <button className='flex flex-row space-x-1 p-2 bg-cyan-100 text-gray-900 bg-gradient-to-r from-blue-200 via-blue-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2'>
      <div className='w-10'><img src='/logoofhome.png'></img></div>
      <div  className="text-gray-900 bg-gradient-to-r from-blue-200 via-blue-300 to-yellow-200 hover:bg-gradient-to-bl font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Home Service</div>
      </button> */}
      <div className=' flex services flex-row mx-3 md:mx-10 space-x-5 md:space-x-12 pt-11 md:flex-row '>
        <div className='barbershop flex space-x-2 bg-slate-100 p-4 hover:bg-slate-200' onClick={() => { console.log("barbershop clicked"); } }>
          <div className='w-4'><img src='/logoofshop.png'></img></div>
          <div><button className='text-sm '>Salon Nearby</button></div></div>
        <div className='barberhome flex space-x-2  bg-slate-100  p-4  hover:bg-slate-200  ' onClick={() => { console.log("barberhome clicked"); activeColor(0) } }>
          <div className='w-4'><img src='/logoofhome.png'></img></div>
          <div><button className=' text-sm '>Home Service</button></div></div>     
      </div>  
     

     
      {children}
    </div>
  );
}

export default Location
