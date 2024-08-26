import Users from "@/models/userModel";
import { connectDB } from "@/utils/mongodb";
import { NextResponse } from "next/server";

export async function GET (req){
    const url = new URL(req.url);
    const searchParams = new URLSearchParams(url.searchParams);
    const email = searchParams.get('email');
    try{
        await connectDB();
        if(email==="all"){
            const users = await Users.find({});
            return NextResponse.json({data : users, status: 200})
        }
        const user = await Users.findOne({email});
        
        
        if(!user){
            return NextResponse.json({data : "No affiliate found", status: 404})
        }
        return NextResponse.json({data : user, status: 200})
    }catch(err){
        console.log(err);
        return NextResponse.json({data : err.message, status: 500})
    }

}