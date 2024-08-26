import Affiliate from "@/models/affiliateModel";
import { connectDB } from "@/utils/mongodb";
import { NextResponse } from "next/server";

export async function POST (req){
    try{
        const {code}= await req.json();
        await connectDB();
        const existingUser = await Affiliate.findOne({code})
        if(existingUser){
            return NextResponse.json({data : existingUser.name ,status: 200})
        }
        return NextResponse.json({data : "Invalid Code ",status: 202})


    }catch(error){
        console.log(error);
        return NextResponse.json({data : error.message},{status: 500});
    }
}