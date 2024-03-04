import connectMongoDB from "@/libs/mongodb";
import Salons from "@/models/salons";
import { NextResponse } from "next/server";


export async function GET(request,content){
    try{
        await connectMongoDB();
        console.log(content.params.id)
        const data=await Salons.find({_id:content.params.id});
        // console.log(data[0])
        return NextResponse.json({result:data[0],status:200});
    }
    catch (error) {
        console.error("Error in GET function:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
