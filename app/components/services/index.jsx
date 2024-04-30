"use client"
import { color } from 'framer-motion';
import React from 'react'
import { useState } from 'react';
const Services = (props) => {
  return (
    <div>
    <div className='flex services flex-row mx-3 md:mx-10 space-x-5 md:space-x-12 pt-11 md:flex-row'>
      <div
        className={`barbershop flex space-x-2 p-4 rounded-md ${
          props.color === 1 ? 'bg-slate-400' : 'bg-slate-100'
        }`}
        onClick={() => {
          console.log("barbershop clicked");
          props.setColor(1);
        }}
      >
        <div className='w-4'><img src='/logoofshop.png'></img></div>
        <div><button className='text-sm'>Salon Nearby</button></div>
      </div>
      <div
        className={`barberhome flex space-x-2 p-4 rounded-md ${
          props.color === 0 ? 'bg-slate-400' : 'bg-slate-100'
        }`}
        onClick={() => {
          console.log("barberhome clicked");
          props.setColor(0);
        }}
      >
        <div className='w-4'><img src='/logoofhome.png'></img></div>
        <div><button className='text-sm'>Home Service</button></div>
      </div>
    </div>
  </div>

  )
}

export default Services
