"use client";
import React from "react";  
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const Slider = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
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

  const list = [
    {
      index:1,
      details: "Lorem ipsum dolor sit amet, <br/ consectetur adipiscing elit.",
      name: "Hair Coloring",
      img: "https://www.realsimple.com/thmb/U33Wm0XpT-zZKwlcq08ygfKmZyk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/must-do-after-hair-color-appointment-GettyImages-677835580-e0d1e9948e8d424396bbdaf36249b29a.jpg",
    },
    {
      index:2,
      details: "Lorem ipsum dolor sit amet, <br/ consectetur adipiscing elit.",
      name: "Hair Cut",
      img: "https://t3.ftcdn.net/jpg/01/15/72/72/360_F_115727227_uPCZW7xN0c3Bqis09eOu2Yqe2xPDzFSk.jpg",
    },

    {
      index:3,
      details: "Lorem ipsum dolor sit amet, <br/ consectetur adipiscing elit.",
      name: "Shaving",
      img: "https://t3.ftcdn.net/jpg/05/06/74/32/360_F_506743235_coW6QAlhxlBWjnRk0VNsHqaXGGH9F4JS.jpg",
    },
    {
      index:4,
      details: "Lorem ipsum dolor sit amet, <br/ consectetur adipiscing elit.",
      name: "Facial",
      img: "https://t3.ftcdn.net/jpg/05/06/74/32/360_F_506743235_coW6QAlhxlBWjnRk0VNsHqaXGGH9F4JS.jpg",
    },
    {
      index:5,
      details: "Lorem ipsum dolor sit amet, <br/ consectetur adipiscing elit.",
      name: "Manicures ",
      img: "https://t3.ftcdn.net/jpg/05/06/74/32/360_F_506743235_coW6QAlhxlBWjnRk0VNsHqaXGGH9F4JS.jpg",
    },
    {
      index:6,
      details: "Lorem ipsum dolor sit amet, <br/ consectetur adipiscing elit.",
      name: "Pedicures",
      img: "https://t3.ftcdn.net/jpg/05/06/74/32/360_F_506743235_coW6QAlhxlBWjnRk0VNsHqaXGGH9F4JS.jpg",
    },
    {
      index:7,
      details: "Lorem ipsum dolor sit amet, <br/ consectetur adipiscing elit.",
      name: "Massage",
      img: "https://t3.ftcdn.net/jpg/05/06/74/32/360_F_506743235_coW6QAlhxlBWjnRk0VNsHqaXGGH9F4JS.jpg",
    },
   
  ];
  return (
    <div className="pt-3 mt-8 bg-teal-50">
      <Carousel responsive={responsive}>
        {list.map((item, index) => (
          <div className="m-[100px] ">
            <div className=" mt-4 flex justify-center">
              <button type="button" className="text-gray-900  text-[40px] focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-teal-700  rounded-lg  text-center p-3">{item.name}</button>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Slider;