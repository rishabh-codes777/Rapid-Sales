import Affiliate from "@/models/affiliateModel";
import Users from "@/models/userModel";
import { connectDB } from "@/utils/mongodb";
import { NextResponse } from "next/server";

export async function GET (req){
    const url = new URL(req.url);
    const searchParams = new URLSearchParams(url.searchParams);
    const email = searchParams.get('email');
    try{
        await connectDB();
        const user = await Users.findOne({email});
        const affiliate = await Affiliate.findOne({user:user._id});
        console.log(affiliate)
        if(!affiliate){
            return NextResponse.json({data : "No affiliate found", status: 404})
        }
        return NextResponse.json({data : affiliate, status: 200})
    }catch(err){
        console.log(err);
        return NextResponse.json({data : err.message, status: 500})
    }

}