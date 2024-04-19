"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import Slider from "../userReviewImage";
import { useState } from "react";
import Post from "../userReviews";

export default function Profile(props) {
  const [barber,setBarber]=useState({});
  let idd=props.idd
  let img='https://static.vecteezy.com/system/resources/thumbnails/004/141/669/small/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg'
  // console.log(barber)
  

  useEffect(()=>{
    async function getBarber() {
      let data = await fetch(`http://localhost:3000/api/barber/${idd}`);
      console.log(data);
      
      try {
        data=await data.json()
        setBarber(data?.result);
      } catch (error) {
        console.error(error);
        return { name: "Error fetching data" };
      }
    }
    getBarber()
  },[])
  let func = () => {
    var d = new Date();
    const isOpen =
      d.getHours() >= barber?.openingTime && d.getHours() < barber?.closingTime;
    return isOpen ? (
      <span className="text-green-500">Open Now</span>
    ) : (
      <span className="text-red-500">Closed Now</span>
    );
  };
  return (
    <>
      {/* <div>Hello {props.id}</div> */}
      <div className="flex max-w-7xl mx-auto flex-col items-start gap-1 border-3 md:border-2 p-4 shadow-lg z-10">
        <div className="flex flex-col sm:text-0.5xl md:text-1xl">
          India / {barber?.city} / {barber?.name}
        </div>
        <div className="mx-auto dark:bg-gray-800">
          <div className="grid grid-cols-4 gap-2">
            <div className="group col-span-2 overflow-hidden">
              <Link href="#">
                <img
                  alt="cut 1"
                  className="object-cover w-full h-full transform transition-transform duration-300 hover:scale-105"
                  height="200"
                  src={(barber?.images && barber?.images?.length > 0)?barber?.images[0]:img}
                  style={{
                    aspectRatio: "200/200",
                    objectFit: "cover",
                  }}
                  width="200"
                />
              </Link>
            </div>

            {/* Second and third images (hidden on smaller screens) */}
            <div className="grid grid-cols-1 grid-rows-2 gap-2 col-span-1">
              <div className="group overflow-hidden">
                <Link href="#">
                  <img
                    alt="Burger 2"
                    className="object-cover w-full h-full transform transition-transform duration-300 hover:scale-105"
                    height="100"
                    src={(barber?.images && barber?.images?.length > 0)?barber?.images[1]:img}
                    style={{
                      aspectRatio: "100/100",
                      objectFit: "cover",
                    }}
                    width="100"
                  />
                </Link>
              </div>
              <div className="group overflow-hidden">
                <Link href="#">
                  <img
                    alt="Burger 3"
                    className="object-cover w-full h-full transform transition-transform duration-300 hover:scale-105"
                    height="100"
                    src={(barber?.images && barber?.images?.length > 0)?barber?.images[2]:img}
                    style={{
                      aspectRatio: "100/100",
                      objectFit: "cover",
                    }}
                    width="100"
                  />
                </Link>
              </div>
            </div>

            {/* Fourth image (hidden on smaller screens) */}
            <div className="block relative">
              <div className="group w-full h-full relative">
                <Link href="#">
                  <img
                    alt="Burger 2"
                    className="object-cover w-full h-full bg-blue-500"
                    src={(barber?.images && barber?.images?.length > 0)?barber?.images[2]:img}
                  />
                </Link>
                <div className="absolute inset-0 bg-slate-300 opacity-60 blur-md"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="sm:text-0.5xl md:text-1xl lg:text-2xl xl:text-2.5xl font-bold flex flex-row justify-between w-full">
          
          <div>{barber?.name}</div>

          <div>
            <div className="flex items-center">
              <svg
                className="w-4 h-4 text-yellow-300 me-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <p className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400 ">
                  {barber?.rating}

              </p>
              <p className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">
                out of
              </p>
              <p className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">
                5
              </p>
            </div>
          </div>
        </div>
        <div className="text-sm">{barber?.address}</div>
        <div className="text-sm">
          {func()} -{" "}
          {barber?.openingTime < 12
            ? barber?.openingTime + "am "
            : (barber?.openingTime % 12) + "pm "}
          -
          {barber?.closingTime < 12
            ? barber?.closingTime + " am "
            : (barber?.closingTime % 12) + " pm "}
          (Today)
        </div>

        <div className="flex flex-row py-1">
          <div className="rounded-lg px-3 py-2.5 text-sm font-semibold border-1 border-black shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">
            Current Number in queue : {barber?.currentNumber}
          </div>
          <div className="lg:w-4 md:w-1"></div>
          <div className="rounded-lg  px-3 py-2.5 text-sm font-semibold border-1 border-black shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">
            Available Number : {barber?.availableNumber}

          </div>
        </div>
        <div>
          <button
            type="button"
            className="rounded-lg px-10 py-3 text-sm font-semibold border-1 bg-blue-900 text-white border-black shadow-sm hover:bg-blue-600 hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            BOOK SLOT NOW
          </button>
        </div>
        <div className="my-3 text-lg bg-gray-700 p-2 text-white rounded-lg">
          Services Available
        </div>
        <div className=" w-full border-3 md:border-2 p-4 z-5">
          <Slider reviews={barber?.reviews} />
        </div>
        <div className=" w-full border-3 md:border-2 p-4 z-5">
          <Post comments={barber?.comments}/>
        </div>
        <div className=" w-full border-3 md:border-2 p-4 z-5">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">
            Write your own comment.
          </h1>
          <textarea className="border-2 rounded-md p-2 w-full h-full resize-none focus:outline-none focus:ring focus:border-blue-500 "></textarea>  
        </div>
      </div>
    </>
  );
}
