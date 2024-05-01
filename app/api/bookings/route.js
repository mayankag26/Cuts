import mongodb from "@/libs/mongodb";
import Bookings from "@/models/bookings";
import { NextResponse } from "next/server";
export async function POST(request)
{
    const {userid, salonid,useremail, status, queueNo}=await request.json();
    // console.log(`${userid} ${salonid} ${useremail} ${status} ${queueNo}`);
    await Bookings.create({userid, salonid,useremail, status, queueNo});
    return NextResponse.json({message:"booking sucessfully"},{status:201}); 
}