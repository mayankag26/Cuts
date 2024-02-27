"use client";
import React from "react";
import Link from "next/link";
import Slider from "../userReviewImage";
import Post from "../userReviews";

const barber = [
  {
    index:1,
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmMDR_xBK0w6ZHYCpHrE4krxcFe6wT3ZKxIQ&usqp=CAU",
    name: "Hair Slayer",
    city: "Lucknow",
    address: "Omaxe, Gomti Nagar, Lucknow",
    opensAt: 9,
    closesAt: 14,
    currentNumber: 20,
    availableNumber: 26,
    services: {
      Haircut: 200,
      Trimming: 100,
      Facial: 400,
    },
  },
];

export default function Profile() {
  let func = () => {
    var d = new Date();
    const isOpen =
      d.getHours() >= barber[0].opensAt && d.getHours() < barber[0].closesAt;
    return isOpen ? (
      <span className="text-green-500">Open Now</span>
    ) : (
      <span className="text-red-500">Closed Now</span>
    );
  };
  return (
    <>
      <div className="flex max-w-7xl mx-auto flex-col items-start gap-1 border-3 md:border-2 p-4 shadow-lg z-10">
        <div className="flex flex-col sm:text-0.5xl md:text-1xl">
          India / {barber[0].city} / {barber[0].name}
        </div>
        <div className="mx-auto dark:bg-gray-800">
          <div className="grid grid-cols-4 gap-2">
            <div className="group col-span-2 overflow-hidden">
              <Link href="#">
                <img
                  alt="cut 1"
                  className="object-cover w-full h-full transform transition-transform duration-300 hover:scale-105"
                  height="200"
                  src={barber[0].img}
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
                    src={barber[0].img}
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
                    src={barber[0].img}
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
                    src={barber[0].img}
                  />
                </Link>
                <div className="absolute inset-0 bg-slate-300 opacity-60 blur-md"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="sm:text-0.5xl md:text-1xl lg:text-2xl xl:text-2.5xl font-bold flex flex-row justify-between w-full">
          <div>{barber[0].name}</div>
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
                4.95
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
        <div className="text-sm">{barber[0].address}</div>
        <div className="text-sm">
          {func()} -{" "}
          {barber[0].opensAt < 12
            ? barber[0].opensAt + "am "
            : (barber[0].opensAt % 12) + "pm "}
          -
          {barber[0].closesAt < 12
            ? barber[0].closesAt + " am "
            : (barber[0].closesAt % 12) + " pm "}
          (Today)
        </div>

        <div className="flex flex-row py-1">
          <div className="rounded-lg px-3 py-2.5 text-sm font-semibold border-1 border-black shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">
            Current Number in queue : {barber[0].currentNumber}
          </div>
          <div className="lg:w-4 md:w-1"></div>
          <div className="rounded-lg  px-3 py-2.5 text-sm font-semibold border-1 border-black shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">
            Available Number : {barber[0].availableNumber}
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
          <Slider />
        </div>
        <div className=" w-full border-3 md:border-2 p-4 z-5">
          <Post />
        </div>
        <div className=" w-full border-3 md:border-2 p-4 z-5">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">
            Write your own comment..
          </h1>
          <textarea className="border-2 rounded-md p-2 w-full h-full resize-none focus:outline-none focus:ring focus:border-blue-500 "></textarea>  
        </div>
      </div>
    </>
  );
}
