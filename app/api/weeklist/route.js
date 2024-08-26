import WeekDetails from "@/models/weekModel";
import { connectDB } from "@/utils/mongodb";
import { NextResponse } from "next/server";

export async function GET (req){
    try{
        
        await connectDB();
        const weeks = await WeekDetails.find();
        return NextResponse.json({data : weeks,status: 200})


    }catch(error){
        console.log(error);
        return NextResponse.json({data : error.message},{status: 500});
    }
}