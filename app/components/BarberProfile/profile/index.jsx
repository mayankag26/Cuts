"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import Slider from "../userReviewImage";
import { useState } from "react";
import Post from "../userReviews";
import ServiceAvailable from "../serviceAvailable";
import ShopLocation from "../shopLocation";
import Bookingform from "../../booking/Bookingform";

export default function Profile(props) {
  const [barber, setBarber] = useState({});
  const [clicked, setClicked] = useState(false);
  let idd = props.idd;
  let img =
    "https://static.vecteezy.com/system/resources/thumbnails/004/141/669/small/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg";
  console.log(barber);
  let msg = "No reviews";
  const [textareaValue, setTextareaValue] = useState("");
  const [comments, setComments] = useState("");
  const handleTextareaChange = (event) => {
    setTextareaValue(event.target.value);
  };
  function handleClicked() {
    setClicked(true);
  }
  useEffect(() => {
    async function getBarber() {
      let data = await fetch(`http://localhost:3000/api/barber/${idd}`, {
        method: "GET",
      }); 
      if (!data.ok) {
        throw new Error(`HTTP error! Status: ${data.status}`);
      }
      try {
        data = await data.json();
        // console.log(data)
        setBarber(data.result);
        setComments(data.result.comments);
      } catch (error) {
        console.error(error);
        return { name: "Error fetching data" };
      }
    }
    getBarber();
  }, []);
  useEffect(() => {
    if (clicked) {
      async function getComment() {
        try {
          let res = await fetch(`http://localhost:3000/api/barber/${idd}`, {
            method: "POST",
            body: JSON.stringify(textareaValue),
            headers: {
              "content-type": "application/json",
            },
          });
          if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);
          res = await res.json();
          setComments(res.result.comments);
        } catch (error) {
          console.log(error);
        }
        setClicked(false);
        setTextareaValue("");
      }
      getComment();
    }
  }, [clicked]);

  let func = () => {
    var d = new Date();
    let a = barber.openingTime,
      b = barber.closingTime,
      t1 = 0,
      t2 = 0;
    if (a)
      t1 =
        (parseInt(a[0]) * 10 + parseInt(a[1])) * 60 +
        parseInt(a[3]) * 10 +
        parseInt(a[4]);
    if (b)
      t2 =
        (parseInt(b[0]) * 10 + parseInt(b[1])) * 60 +
        parseInt(b[3]) * 10 +
        parseInt(b[4]);
    if (a && (a[6] == "p" || a[6] == "P")) t1 += 12 * 60;
    if (b && (b[6] == "p" || b[6] == "P")) t2 += 12 * 60;
    // console.log(t1, t2);

    let currTime = d.getHours() * 60 + d.getMinutes();
    // console.log(currTime)

    const isOpen = currTime >= t1 && currTime <= t2;
    return isOpen ? (
      <span className="text-green-500">Open Now</span>
    ) : (
      <span className="text-red-500">Closed Now</span>
    );
  };

  function displayTime(timeString) {
    // let hr = timeString[0] * 10 + timeString[1];
    if (timeString) {
      console.log(timeString[0]);
      let hours = parseInt(timeString[0]) * 10 + parseInt(timeString[1]);
      let minutes = parseInt(timeString[3]) * 10 + parseInt(timeString[4]);
      console.log(minutes);
    }
  }

  // console.log(barber);
  return (
    <div>
      {/* <div>Hello {props.id}</div> */}
      {console.log(barber)}
      <div className="flex max-w-7xl mx-auto flex-col items-start gap-1 border-3 md:border-2 p-4 shadow-lg z-10">
        <div className="flex flex-col sm:text-0.5xl md:text-1xl">
          <span
            style={{ fontWeight: "bold", fontSize: "1.5rem", color: "black" }}
          >
            India / {barber.city} / {barber.name}
          </span>
        </div>
        <div className="mx-auto dark:bg-gray-800">
          <div className="grid grid-cols-4 gap-2">
            <div className="group col-span-2 overflow-hidden">
              <Link href="#">
                <img
                  alt="cut 1"
                  className="object-cover w-full h-full transform transition-transform duration-300 hover:scale-105"
                  height="200"
                  src={
                    barber.images && barber.images.length > 0
                      ? barber.images[0]
                      : img
                  }
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
                    src={
                      barber.images && barber.images.length > 0
                        ? barber.images[1]
                        : img
                    }
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
                    src={
                      barber.images && barber.images.length > 0
                        ? barber.images[2]
                        : img
                    }
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
                    src={
                      barber.images && barber.images.length > 0
                        ? barber.images[2]
                        : img
                    }
                  />
                </Link>
                <div className="absolute inset-0 bg-slate-300 opacity-60 blur-md"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="sm:text-0.5xl md:text-1xl lg:text-2xl xl:text-2.5xl font-bold flex flex-row justify-between w-full">
          <div>{barber.name}</div>
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
              <p className="ms-1 text-sm font-medium text-black-500 dark:text-gray-400 ">
                <b> {barber.rating} out of 5 </b>
              </p>
            </div>
          </div>
        </div>
        <div className="text-sm md:text-lg lg:text-xl text-gray-700 mt-2">
          {barber.address}
        </div>
        <div className="text-sm md:text-lg lg:text-xl text-gray-700 mt-2">
          {func()} {displayTime(barber.openingTime)}
          {barber.openingTime &&
            barber.openingTime[0] +
              barber.openingTime[1] +
              ":" +
              barber.openingTime[3] +
              barber.openingTime[4] +
              " " +
              barber.openingTime[6] +
              barber.openingTime[8]}
          -
          {barber.closingTime &&
            barber.closingTime[0] +
              barber.closingTime[1] +
              ":" +
              barber.closingTime[3] +
              barber.closingTime[4] +
              " " +
              barber.closingTime[6] +
              barber.closingTime[8]}
          (Today)
        </div>

        <div className="flex flex-row justify-center py-1">
          <div className="rounded-lg px-3 py-2.5 text-sm font-semibold border-1 border-black shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">
            Current Number in queue: {barber.currentNumber}
          </div>
          <div className="lg:w-4 md:w-1"></div>
          <div className="rounded-lg px-3 py-2.5 text-sm font-semibold border-1 border-black shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">
            Available Number: {barber.availableNumber}
          </div>
        </div>
        <div className="z-10">
         <Bookingform salonid={idd} availableNumber={barber?.availableNumber}></Bookingform> 
        </div>
        <div class="my-3 text-lg bg-gray-700 p-2 text-white rounded-lg ml-auto mr-auto">
          Explore Our Range of Services
        </div>

        <div className="w-[1250px]">
          <ServiceAvailable services={barber.services} />
        </div>
        <div className=" w-full border-3 md:border-2 p-4 z-5">
          <Slider reviews={barber.reviews} />
        </div>
        <div className="w-full border-3 md:border-2 p-4 relative">
          <Post comments={barber.reviews} />
          <div className="absolute inset-0 z-5 border border-transparent hover:border-black-1000 transition-colors duration-300"></div>
        </div>

        <ShopLocation />
      </div>
    </div>
  );
}
