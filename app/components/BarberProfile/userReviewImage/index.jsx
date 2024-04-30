"use client";
import React from "react";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const Slider = ({ reviews }) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  let list = [];
  if (reviews) list = reviews;

  return (


    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-6"> Images </h1>
      <div className="  relative flex items-center justify-center w-full dark:text-gray-900">
        <div className=" flex items-center justify-start w-full h-full gap-6 py-4 mx-auto overflow-auto lg:gap-8">
          {list.map((item, index) => (
            <div className="key={index} relative flex flex-shrink-0 w-full sm:w-auto">
              <img
                className="object-cover object-center dark:bg-gray-500 h-96 aspect-square"
                src={item.image}
                alt="Image 1"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;

