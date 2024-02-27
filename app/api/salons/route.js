import { NextResponse } from "next/server";
import salons from "@/models/salons";
import connectMongoDB from "@/libs/mongodb";

export async function GET()
{
    await connectMongoDB();
    const data=await salons.find();
    console.log(data);
    return NextResponse.json({result:data},{status:200})
}
    