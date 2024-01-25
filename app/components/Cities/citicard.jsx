"use client"
import React from "react";
import {Card, CardBody, CardFooter, Image} from "@nextui-org/react";
import Link from 'next/link';
import { useRouter } from "next/navigation";

export default function CitiCard() {
 const router = useRouter();
  const navigate=(name)=>{
    router.push(name)
  }

  const list = [
    {
      title: "Mumbai",
      img: "/mumbai.avif",
    },
    {
      title: "Delhi",
      img: "/delhi.avif",
    },
    {
        title: "Hyderabad",
        img: "/hyderabad.png",
    },
    {
        title: "Kolkata",
        img: "/kolkata.avif",
    },
    {
        title: "Ahmedabad",
        img: "/ahmedabad.avif",
    },
    {
        title: "Bengaluru",
        img: "/bengaluru.png",
    },    
  ];


  return (
    <div className="w-full gap-2 grid grid-cols-4 sm:grid-cols-6">
     
      {list.map((item, index) => (
        <Card shadow="sm" key={index} isPressable onPress={()=>{navigate(`/locations/`+item.title)}}>
        
          <CardBody className="overflow-visible p-0">

        <Link href={`/locations/`+item.title} >
          <Image
              radius="lg"
              width="100%"
              alt={item.title}
              className="w-full object-contain h-[80px]"
              src={item.img}
            />
         </Link> 
          </CardBody>
          <CardFooter className="text-small flex justify-center items-center">
            <b className="text-center">{item.title}</b>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
