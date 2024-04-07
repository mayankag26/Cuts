"use client";
import React from "react";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const Slider = ({reviews}) => {
  const responsive = {
    // superLargeDesktop: {
    //   // the naming can be any, depends on you.
    //   breakpoint: { max: 4000, min: 3000 },
    //   items: 5,
    // },
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

  let list = [
    {
      id:1,
      comment: "Comment1",
      name: "Hair salon",
      image: "https://t3.ftcdn.net/jpg/05/06/74/32/360_F_506743235_coW6QAlhxlBWjnRk0VNsHqaXGGH9F4JS.jpg",
    },
    {
      id:2,
      comment: "Lorem ipsum dolor sit amet, <br/ consectetur adipiscing elit.",
      name: "Hair salon",
      image: "https://t3.ftcdn.net/jpg/05/06/74/32/360_F_506743235_coW6QAlhxlBWjnRk0VNsHqaXGGH9F4JS.jpg",
    },

    {
      id:3,
      comment: "Lorem ipsum dolor sit amet, <br/ consectetur adipiscing elit.",
      name: "Hair salon",
      image: "https://t3.ftcdn.net/jpg/05/06/74/32/360_F_506743235_coW6QAlhxlBWjnRk0VNsHqaXGGH9F4JS.jpg",
    },
    {
      id:4,
      comment: "Lorem ipsum dolor sit amet, <br/ consectetur adipiscing elit.",
      name: "Hair salon",
      image: "https://t3.ftcdn.net/jpg/05/06/74/32/360_F_506743235_coW6QAlhxlBWjnRk0VNsHqaXGGH9F4JS.jpg",
    },
    {
      id:5,
      comment: "Lorem ipsum dolor sit amet, <br/ consectetur adipiscing elit.",
      name: "Hair salon",
      image: "https://t3.ftcdn.net/jpg/05/06/74/32/360_F_506743235_coW6QAlhxlBWjnRk0VNsHqaXGGH9F4JS.jpg",
    },
    {
      id:6,
      comment: "Lorem ipsum dolor sit amet, <br/ consectetur adipiscing elit.",
      name: "Hair salon",
      image: "https://t3.ftcdn.net/jpg/05/06/74/32/360_F_506743235_coW6QAlhxlBWjnRk0VNsHqaXGGH9F4JS.jpg",
    },
    {
      id:7,
      comment: "Lorem ipsum dolor sit amet, <br/ consectetur adipiscing elit.",
      name: "Hair salon",
      image: "https://t3.ftcdn.net/jpg/05/06/74/32/360_F_506743235_coW6QAlhxlBWjnRk0VNsHqaXGGH9F4JS.jpg",
    },
    {
      id:8,
      comment: "Lorem ipsum dolor sit amet, <br/ consectetur adipiscing elit.",
      name: "Hair salon",
      image: "https://t3.ftcdn.net/jpg/05/06/74/32/360_F_506743235_coW6QAlhxlBWjnRk0VNsHqaXGGH9F4JS.jpg",
    },
  ];
  // console.log(reviews)
  if(reviews) list=reviews
  return (
    <div className="mt-5">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">User Images </h1>

      <Carousel responsive={responsive}>
        {list.map((item, index) => (
          <div key={index} className="container m-auto w-10/12">
            <div className="">
              <div>
                <img src={item.image}></img>{" "}
              </div>
             <div >{item.comment}</div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Slider;
