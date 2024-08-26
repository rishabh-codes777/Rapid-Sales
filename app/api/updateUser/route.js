import Users from "@/models/userModel";
import { connectDB } from "@/utils/mongodb";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export async function POST (req){
    try{
        const {name, email, website, mobile, description}= await req.json();
        await connectDB();
        const existingUser = await Users.findOne({email})
        //update the user data 
        if(existingUser){
            await Users.updateOne({email},{$set:{name, website, mobile, description}});
            return NextResponse.json({data : "User Updated",status: 200})
        }
        return NextResponse.json({data : "User not found",status: 404})


    }catch(error){
        console.log(error);
        return NextResponse.json({data : error.message},{status: 500});
    }
}