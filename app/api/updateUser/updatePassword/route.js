import Users from "@/models/userModel";
import { connectDB } from "@/utils/mongodb";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export async function POST (req){
    try{
        const {email, password}= await req.json();
        await connectDB();
        //update password
        const existingUser = await Users.findOne({email})
        if(existingUser){
            const hashedPassword = await bcrypt.hash(password, 10);
            await Users.updateOne({email},{$set:{password: hashedPassword}});
            return NextResponse.json({data : "Password Updated",status: 200})
        }
        return NextResponse.json({data : "User not found",status: 404})

    }catch(error){
        console.log(error);
        return NextResponse.json({data : error.message},{status: 500});
    }
}