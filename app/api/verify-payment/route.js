import { NextResponse } from "next/server";
import crypto from "crypto";
import Users from "@/models/userModel";
import Razorpay from "razorpay";
import Sale from "@/models/salesModel";
import Affiliate from "@/models/affiliateModel";
const instance = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});
export const POST = async (req) => {
    
  try {
      const body = await req.formData();
      const payment_id = body.get('razorpay_payment_id');
      const order_id =  body.get('razorpay_order_id');
      const signature =  body.get('razorpay_signature');
      //Retrieve order details from Razorpay API
      const order = await instance.orders.fetch(order_id);
      const userEmail = order.notes.userEmail;
      const code = order.notes.code;
      //verification
      const data = order_id + "|" + payment_id;
      const expectedSignature = crypto
        .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
        .update(data.toString())
        .digest("hex");

        const isAuthentic = expectedSignature === signature;

        console.log(req.url)
        console.log(isAuthentic)
        if(isAuthentic){
            const user = await  Users.findOne({ email : userEmail });
            if (!user) throw Error("User not found!");
            user.isPremium = true;
            user.orderId = order_id;
            user.paymentId = payment_id;
            await user.save();
            const saleData = {
                product: "669a53b80db0869f9d23043e",
                code: code,
                amount: order.amount/100,
                orderId: order_id,
                paymentId: payment_id,
                username: user.name,
                useremail: userEmail,
                incentive: order.amount/200    //divide by 200 because 100 for converting it to rupees and divide by 2 for 50% incentive
            }
            const sale = await Sale.create(saleData)
            console.log(sale);
            const affiliate = await Affiliate.findOne({code})
            if(affiliate){
                affiliate.totalIncome += order.amount/200;
                await affiliate.save();
            }
            //send email
            (async () => {
              try {
                await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/email/payment`, {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({
                    email: userEmail,
                  }),
                });
              } catch (error) {
                console.error('Failed to send email:', error);
              }
            })();
            (async () => {
              try {
                await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/whatsapp/welcome`, {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({
                    mobile: user.mobile,
                  }),
                });
              } catch (error) {
                console.error('Failed to send message:', error);
              }
            })();
            return NextResponse.redirect(new URL('/welcome', req.url),{status:303})
        }else{
            return NextResponse.redirect (
                `/payment`
            );
        }
 
  } catch (error) {
    console.log(error);
    return NextResponse.json({ data: error.message }, { status: 500 });
  }
};
