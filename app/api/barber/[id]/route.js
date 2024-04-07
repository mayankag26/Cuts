import connectMongoDB from "@/libs/mongodb";
import Salons from "@/models/salons";
import { NextResponse } from "next/server";


export async function GET(request,content){
    try{
        await connectMongoDB();
        console.log(content.params.id)
        const data=await Salons.findOne({_id:content.params.id});
        // console.log(data)
        return NextResponse.json({result:data,status:200});
    }
    catch (error) {
        console.error("Error in GET function:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
export async function POST(request,content){
    try{
        await connectMongoDB();
        let payload=await request.json();
        const salon=await Salons.findOne({_id:content.params.id});
        if(!salon){
            throw new Error("Salon not found")  
        }
        // console.log(payload)
        if(payload) salon.comments.push(payload);
        await salon.save();
        // console.log(salon.comments)
        // console.log(salon)    
        return NextResponse.json({result:salon,status:200});
    }
    catch(error){
        console.log("Error in POST function:",error)
        return NextResponse.json({error:"Internal Server Error"},{status:500});
    }
}