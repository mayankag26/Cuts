import connectMongoDB from "@/libs/mongodb";
import Users from "@/models/users";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    // await connectMongoDB();
    const { email } = await req.json();
    const user = await Users.findOne({ email }).select("_id");
    // console.log("user: ", user);
    return NextResponse.json({ user });
  } catch (error) {
    return NextResponse.json(
      { message: "error: ",error },
      { status: 500 }
    );
  }
}