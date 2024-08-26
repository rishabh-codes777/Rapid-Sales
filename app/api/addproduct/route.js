import Product from "@/models/productModel";
import { connectDB } from "@/utils/mongodb";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export async function POST (req){
    try{
        const {name, description,paymentLink, price, incentiveType, incentive } = await req.json();
        await connectDB();
        const existingProduct = await Product.findOne({name})
        if(existingProduct){
            return NextResponse.json({data : "Product already exists",status: 400})
        }
        await Product.create({name, description,paymentLink, price, incentiveType, incentive });
        return NextResponse.json({data : "Product Created",status: 201})


    }catch(error){
        console.log(error);
        return NextResponse.json({data : error.message},{status: 500});
    }
}