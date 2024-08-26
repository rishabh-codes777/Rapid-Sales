"use client";
import React, { useEffect, useState, Suspense } from "react";
import { signOut } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import Script from "next/script";
import { checkUser } from "@/utils/auth";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import Navbar from "@/components/navbar";
import SkeletonPaymentOptions from "./skeletonPaymentOptions";
import Loader from "@/components/loader";

const PaymentOptions = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const code = searchParams.get("refer");
  Cookies.set("code", code);
  const [promoCode, setPromoCode] = useState(code||"");
  const [price, setPrice] = useState(12000);
  const [discount, setDiscount] = useState(0);
  const [referralName, setReferralName] = useState("");
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [isUserPremium, setIsUserPremium] = useState(false);
  const [isPaymentLoading, setIsPaymentLoading] = useState(false);
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    const getUserDetails = async () => {
      const user = await checkUser();
      if (user) {
        setEmail(user.email);
        setName(user.name);
        setPhone(user.mobile);
        setIsUserPremium(user.isPremium);
        console.log(user);
        if(!user.isPremium) setIsLoading(false);
      }
    };
    getUserDetails();
  }, []);

  useEffect(() => {
    if (isUserPremium) {
      router.push("https://sprintearn.com");
    }
  },[isUserPremium]);

  const checkout = async () => {
    try {
      setIsPaymentLoading(true);
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          amount: price - discount,
          phone: phone,
          code: promoCode,
        }),
      });
      const data = await res.json();
      const order = data.order;
      console.log("order is", order);

      const options = {
        key: process.env.RAZORPAY_KEY_ID,
        amount: order.amount,
        currency: "INR",
        name: "Sprint Earn",
        description: "Premium subscription",
        image: "",
        order_id: order.id,
        callback_url: `${process.env.NEXT_PUBLIC_BASE_URL}/api/verify-payment`,
        prefill: {
          name: name,
          email: email,
          contact: phone,
        },
        notes: {
          address: "Razorpay Corporate Office",
        },
        theme: {
          color: "#306338 ",
        },
      };
      const rzp1 = new window.Razorpay(options);
      rzp1.open();
      setIsPaymentLoading(false);
    } catch (err) {
      setIsPaymentLoading(false);
      console.error(err);
      alert("An error occurred while processing your payment. Please try again later.");
    }
  };

  const handleApplyPromoCode = async () => {
    try {
      const response = await fetch("/api/verify-code", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ code: promoCode }),
      });

      const data = await response.json();
      if (data.status === 200) {
        setDiscount(2000);
        setReferralName(data.data);
        setError("");
      } else {
        setError("Invalid promo code");
        setDiscount(0);
        setReferralName("");
      }
    } catch (error) {
      setError("Failed to apply promo code");
      setDiscount(0);
      setReferralName("");
    }
  };

  useEffect(() => {
    if (code) {
      handleApplyPromoCode();
    }
  }, [code]);

  if(isLoading) return <Loader />

  return (

    
      <div
      className="flex flex-col min-h-screen text-black space-y-8"
      style={{ backgroundImage: 'url(/bg.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <Navbar signOut={signOut}/>
      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-col md:flex-row w-11/12 lg:w-3/5 border border-bg-primary rounded-md">
        {/* Sidebar */}
        <div className="w-full md:w-1/3 bg-bg-secondary rounded-t-md md:rounded-l-md md:rounded-t-none text-black p-4 md:p-8 space-y-4 md:space-y-6">
          <h2 className="text-xl md:text-2xl"><span className="font-normal italic">Sprint</span><span className="font-bold">Earn</span></h2>
          <div className="bg-white text-black p-4 rounded-lg space-y-2">
            <div className="text-gray-600">Price Summary</div>
            <div>
              <div className="text-2xl md:text-3xl font-bold text-left">₹{price.toLocaleString()}</div>
              {discount > 0 && (
                <>
                  <div className="text-lg text-left text-green-600 font-semibold">- ₹{discount.toLocaleString()}</div>
                  <div className="text-2xl md:text-3xl font-bold border-t border-gray-500 text-left">₹{(price - discount).toLocaleString()}</div>
                </>
              )}
            </div>
          </div>

          <div className="bg-white text-black p-4 rounded-lg flex flex-col">
            <div className="flex items-center space-x-2">
              <input
                type="text"
                value={promoCode}
                onChange={(e) => {
                  setPromoCode(e.target.value);
                  setError("");
                }}
                className="w-full border border-bg-primary rounded-md p-2"
                placeholder="Enter Promo Code"
              />
              <button onClick={handleApplyPromoCode} className="text-lg font-semibold text-green-600">
                Apply
              </button>
            </div>
            {referralName && (
              <div className="text-sm text-green-500 text-start mt-2">
                Referral: {referralName}
              </div>
            )}
            {error && (
              <div className="text-sm text-red-500 text-start mt-2">
                {error}
              </div>
            )}
          </div>
        </div>

        {/* Payment Options */}
        <div className="w-full md:w-2/3 bg-white p-4 md:p-8 rounded-b-md md:rounded-r-md md:rounded-b-none h-auto md:h-[70vh]">
          <div className="text-lg md:text-xl font-semibold mb-4 md:mb-6">Payment Details</div>
          <div className="grid grid-cols-1 gap-4">
            <div>
              <div className="border border-bg-primary p-4 rounded-lg">
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-400">Name</label>
                  <input
                    id="name"
                    type="text"
                    className="w-full border rounded-lg p-2 mt-1"
                    placeholder="John"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-400">Email</label>
                  <input
                    id="email"
                    type="text"
                    className="w-full border rounded-lg p-2 mt-1"
                    placeholder="@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="mobile-no" className="block text-gray-400">Mobile No.</label>
                  <input
                    id="mobile"
                    type="number"
                    className="w-full border rounded-lg p-2 mt-1"
                    placeholder="9876543210"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>

                <button className="bg-primary text-white w-full py-2 rounded-full font-bold" onClick={checkout}>
                  {isPaymentLoading ? "Processing..." : "Continue"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      
      <Script src="https://checkout.razorpay.com/v1/checkout.js" />
    </div>
    
    
  );
};

function Payment() {
  
  return (
    // You could have a loading skeleton as the `fallback` too
    <Suspense fallback={SkeletonPaymentOptions}>
      <PaymentOptions />
    </Suspense>
  )
}

export default Payment