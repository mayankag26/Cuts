import Salons from "@/models/salons";
import { NextResponse } from "next/server";
import mongodb from "@/libs/mongodb";
export async function PUT(req) {
    try {
      const { salonid, availableNumber } = await req.json();
      //await connectMongoDB();
      await Salons.findOneAndUpdate({_id:salonid},{$set:{ availableNumber:availableNumber+1}});
  
      return NextResponse.json({ message: "available number  edited." }, { status: 201 });
    } catch (error) {
      return NextResponse.json(
        { message: "error : ",error },
        { status: 500 },
        {new:true}
      );
    }
  }
