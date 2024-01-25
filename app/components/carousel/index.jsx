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
      details: "Lorem ipsum dolor sit amet, <br/ consectetur adipiscing elit.",
      name: "Hair salon",
      img: "https://t3.ftcdn.net/jpg/05/06/74/32/360_F_506743235_coW6QAlhxlBWjnRk0VNsHqaXGGH9F4JS.jpg",
    },
    {
      details: "Lorem ipsum dolor sit amet, <br/ consectetur adipiscing elit.",
      name: "Hair salon",
      img: "https://t3.ftcdn.net/jpg/05/06/74/32/360_F_506743235_coW6QAlhxlBWjnRk0VNsHqaXGGH9F4JS.jpg",
    },

    {
      details: "Lorem ipsum dolor sit amet, <br/ consectetur adipiscing elit.",
      name: "Hair salon",
      img: "https://t3.ftcdn.net/jpg/05/06/74/32/360_F_506743235_coW6QAlhxlBWjnRk0VNsHqaXGGH9F4JS.jpg",
    },
    {
      details: "Lorem ipsum dolor sit amet, <br/ consectetur adipiscing elit.",
      name: "Hair salon",
      img: "https://t3.ftcdn.net/jpg/05/06/74/32/360_F_506743235_coW6QAlhxlBWjnRk0VNsHqaXGGH9F4JS.jpg",
    },
    {
      details: "Lorem ipsum dolor sit amet, <br/ consectetur adipiscing elit.",
      name: "Hair salon",
      img: "https://t3.ftcdn.net/jpg/05/06/74/32/360_F_506743235_coW6QAlhxlBWjnRk0VNsHqaXGGH9F4JS.jpg",
    },
    {
      details: "Lorem ipsum dolor sit amet, <br/ consectetur adipiscing elit.",
      name: "Hair salon",
      img: "https://t3.ftcdn.net/jpg/05/06/74/32/360_F_506743235_coW6QAlhxlBWjnRk0VNsHqaXGGH9F4JS.jpg",
    },
    {
      details: "Lorem ipsum dolor sit amet, <br/ consectetur adipiscing elit.",
      name: "Hair salon",
      img: "https://t3.ftcdn.net/jpg/05/06/74/32/360_F_506743235_coW6QAlhxlBWjnRk0VNsHqaXGGH9F4JS.jpg",
    },
    {
      details: "Lorem ipsum dolor sit amet, <br/ consectetur adipiscing elit.",
      name: "Hair salon",
      img: "https://t3.ftcdn.net/jpg/05/06/74/32/360_F_506743235_coW6QAlhxlBWjnRk0VNsHqaXGGH9F4JS.jpg",
    },
  ];
  return (
    <div className="mt-10">
      <Carousel responsive={responsive}>
        {list.map((item, index) => (
          <div className="container m-auto w-8/12 ">
            <div className="wrapper">
              <div>
                <img src={item.img}></img>{" "}
              </div>
              <h1> {item.name}</h1>
              <p>{item.details}</p>
            </div>
            <div className="button-wrapper">
              
              <button className=" flex justify-center">BOOK NOW</button>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Slider;
