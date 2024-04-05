import { NextResponse } from "next/server";
import salons from "@/models/salons";
import connectMongoDB from "@/libs/mongodb";

 export async function GET(request,content)
{
    //await connectMongoDB();
    try {
    const data=await salons.find();
    const currentLocation=content.params.location.toLowerCase();
    const filterdata=data.filter((item)=>(((item?.city?.toLowerCase())))===(currentLocation) )
    // console.log(filterdata);
    return NextResponse.json({result:filterdata},{status:200})
   } catch (error) {    
    console.error("Error fetching salon data:", error);
    return NextResponse.error(error);
    }
}
