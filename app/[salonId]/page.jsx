import React from "react"
import Profile from "@/app/components/BarberProfile/profile/index.jsx"
export default function Page({params}) {
    // console.log(params);
  return <div>
    <Profile idd={params.salonId}></Profile>
  </div>
}


