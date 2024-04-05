import connectMongoDB from "@/libs/mongodb";
import Users from "@/models/users";
import { NextResponse } from "next/server";

export async function PUT(req) {
  try {
    const { name, email, contactNo, address } = await req.json();
    //await connectMongoDB();
    await Users.findOneAndUpdate({ email:email},{$set:{ contactNo:contactNo,address:address}});

    return NextResponse.json({ message: "User edited." }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: "error : ",error },
      { status: 500 },
      {new:true}
    );
  }
}