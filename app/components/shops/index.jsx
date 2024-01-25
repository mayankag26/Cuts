"use client";
import React from "react";
import "./index.css"
import Link from "next/link";
const list = [
  
  {
    index: 1,
    details: "Lorem ipsum dolor sit amet, <br/ consectetur adipiscing elit.",
    name: "Hair salon",
    queue:"1",
    navigation:"hairsalon6",
    star:4.1,
    img: "https://t3.ftcdn.net/jpg/05/06/74/32/360_F_506743235_coW6QAlhxlBWjnRk0VNsHqaXGGH9F4JS.jpg",
  },

  {
    index: 2,
    details: "Lorem ipsum dolor sit amet, <br/ consectetur adipiscing elit.",
    name: "Hair salon",
    queue:"1",
    navigation:"hairsalon5",
    star:4.1,
    img: "https://t3.ftcdn.net/jpg/05/06/74/32/360_F_506743235_coW6QAlhxlBWjnRk0VNsHqaXGGH9F4JS.jpg",
  },
  {
    index: 3,
    details: "Lorem ipsum dolor sit amet, <br/ consectetur adipiscing elit.",
    name: "Hair salon",
    queue:"1",
    navigation:"hairsalon4",
    star:4.1,
    img: "https://t3.ftcdn.net/jpg/05/06/74/32/360_F_506743235_coW6QAlhxlBWjnRk0VNsHqaXGGH9F4JS.jpg",
  },
  {
    index: 4,
    details: "Lorem ipsum dolor sit amet, <br/ consectetur adipiscing elit.",
    name: "Hair salon",
    queue:"1",
    navigation:"hairsalon3",
    star:4.1,
    img: "https://t3.ftcdn.net/jpg/05/06/74/32/360_F_506743235_coW6QAlhxlBWjnRk0VNsHqaXGGH9F4JS.jpg",
  },
  {
    index: 5,
    details: "Lorem ipsum dolor sit amet, <br/ consectetur adipiscing elit.",
    name: "Hair salon",
    queue:"1",
    navigation:"hairsalon2",
    star:4.1,
    img: "https://t3.ftcdn.net/jpg/05/06/74/32/360_F_506743235_coW6QAlhxlBWjnRk0VNsHqaXGGH9F4JS.jpg",
  },
  {
    index: 6,
    details: "Lorem ipsum dolor sit amet, <br/ consectetur adipiscing elit.",
    name: "Hair salon",
    queue:"1",
    navigation:"hairsalon",
    star:4.1,
    img: "https://t3.ftcdn.net/jpg/05/06/74/32/360_F_506743235_coW6QAlhxlBWjnRk0VNsHqaXGGH9F4JS.jpg",
  },
  
];


const Shops = () => {
  
  return (
    
    <div className="whole">
      {list.map((item, index) => (
        <div className="card" key={index}>
          <img src={item.img} alt={item.name} />
          <div className="content">
            <div className="flex justify-between"><h1>{item.name}</h1><button className="bg-blue-300">{item.star}⭐</button></div>
            <div>{item.details}</div>
            <h3>Queue: {item.queue}</h3>
            <Link href={`/profile/${item.navigation}`}>
            Navigate
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Shops;