import { connectDB } from "@/utils/mongodb";
import { NextResponse } from "next/server";
import Razorpay from "razorpay";
import Users from "@/models/userModel";
const instance = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET,
});


export async function POST(req) {
    try{
        const {email , amount, phone, code} = await req.json();
        await connectDB();
        console.log("here",email, amount, phone)
        const user =  await Users.findOne({email});
        if(!user){
            return NextResponse.json({message:"User not found"},{status:404})
        }
        if(user.premium){
            return NextResponse.json({message:"User is already premium"},{status:400})
        }
        user.mobile = phone;
        await user.save();
        const options = {
        amount: (amount*100),  // amount in the smallest currency unit
        currency: "INR",
        receipt: `order_rcptid_${Date.now()}`,
        notes: {userEmail: email, code:code}
        };
        const order = await instance.orders.create(options);
        console.log(order);
        return NextResponse.json({order: order});

    }catch(error){
        console.log(error);
        return NextResponse.json({ data: error.message }, { status: 500 });
    }
    
}
