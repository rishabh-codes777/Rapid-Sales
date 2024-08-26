import WeekDetails from "@/models/weekModel";
import { connectDB } from "@/utils/mongodb";
import { NextResponse } from "next/server";

export async function POST (req){
    try{
        const {weekdata}= await req.json();
        await connectDB();
        await WeekDetails.create(weekdata);
        return NextResponse.json({data : "WeekData Created",status: 201})


    }catch(error){
        console.log(error);
        return NextResponse.json({data : error.message},{status: 500});
    }
}