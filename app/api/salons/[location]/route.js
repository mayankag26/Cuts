import { NextResponse } from "next/server";
import salons from "@/models/salons";
import connectMongoDB from "@/libs/mongodb";

 export async function GET(request,content)
{
    await connectMongoDB();
    try {
    const data=await salons.find();
    // console.log(data);
    // console.log(request);
    const currentLocation=content.params.location.toLowerCase();
    console.log(currentLocation);
    const filterdata=data.filter((item)=>(((item.city.toLowerCase())))==(currentLocation) )
    // {if(filterdata.length()==0){return NextResponse.json({result:"data not found"})}}

    return NextResponse.json({result:filterdata},{status:200})
   } catch (error) {
    console.error("Error fetching salon data:", error);
    return NextResponse.error(error);
    }
}
