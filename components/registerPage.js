"use client"
import { signIn } from "next-auth/react"
import { useState } from "react";
import { useRouter } from "next/navigation";
import { BeatLoader } from "react-spinners";
import React from 'react';
import { useSearchParams } from 'next/navigation';
import Swal from "sweetalert2";

const RegisterPage = ({ setIsLoginPage }) => {
  const router = useRouter();
  const [loader, setLoader] = useState(false);
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl') || '/home';

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoader(true);
      const res = await fetch('/api/register', {
        method: 'POST',
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          name: e.target.name.value,
          email: e.target.email.value,
          password: e.target.password.value,
        }),
      });

      const data = await res.json();
      console.log(res, data);

      if (data.status === 400) {
        setLoader(false);
        Swal.fire({
          icon: 'info',
          title: 'Already a member',
          text: "Already registered please login to continue",
          showConfirmButton: false,
          timer: 2000,
          timerProgressBar: true
        });
        setTimeout(() => {
          setIsLoginPage(true)
        }, 1999);
      }

      if (data.status === 201) {
        setLoader(false);
        Swal.fire({
          icon: 'success',
          title: 'Thanks for signup',
          text: "Please login to continue",
          showConfirmButton: false,
          timer: 2000,
          timerProgressBar: true
        });
        setTimeout(() => {
          setIsLoginPage(true)
        }, 1999);
      }
    } catch (err) {
      setLoader(false);
      console.log(err);
    }
    console.log("Submitted");
  }

  const handleGoogle = async () => {
    try {
      const res = await signIn("google", {
        redirect: false,
        callbackUrl
      });
      if (res.error) {
        setError(res.error);
        console.log("Invalid credentials");
      } else {
        console.log(res);
        router.push(callbackUrl);
      }
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="flex flex-col md:flex-row-reverse min-h-screen">
      {/* Left Side */}
      <div className="w-full md:w-1/2 flex flex-col items-center justify-center p-6 md:p-10"
        style={{ backgroundImage: 'url(/bg.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <h1 className="text-2xl md:text-4xl font-bold text-center text-white">
          Generate passive <span className="">Income</span> from your <span className="">Influence</span>
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4 md:mt-10">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="flex justify-center items-center">
              <img
                src={`/${i}.png`}
                alt={`Influencer ${i}`}
                className=" w-24 h-24 md:w-32 md:h-32"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Right Side */}
      <div className="w-full md:w-1/2 bg-white flex flex-col items-center justify-center p-6 md:p-10 text-black">
        <div className="flex items-center justify-center mb-4 md:mb-8">
          <h2 className="text-2xl md:text-4xl font-bold ">Welcome to <span className="font-normal italic ">Sprint</span><span className=" ">Earn</span></h2>
        </div>
        <form className="w-full max-w-xs md:max-w-sm" onSubmit={handleSubmit}>
          <div className="mb-4 md:mb-8">
            <input
              type="text"
              id="name"
              name="name"
              placeholder='Mark'
              className="shadow appearance-none border rounded-full w-full h-10 md:h-12 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4 md:mb-8">
            <input
              type="email"
              id="email"
              name="email"
              placeholder='abc@sprintearn.com'
              className="shadow appearance-none border rounded-full w-full h-10 md:h-12 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4 md:mb-6">
            <input
              type="current-password"
              id="password"
              name="password"
              placeholder='********'
              className="shadow appearance-none border rounded-full w-full h-10 md:h-12 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              <input type="checkbox" className="mr-2 leading-tight" />
              <span className="text-sm">I accept the terms & conditions</span>
            </label>
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-primary text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline hover:scale-[1.01]"
            >
              {loader ? <BeatLoader color={"#fff"} size={10} /> : "Register"}
            </button>
          </div>
          <div className="mt-4 flex items-center justify-center">
            <button
              className="relative inline-flex items-center shadow-lg shadow-slate-300 justify-center font-semibold tracking-base ring-offset-background hover:border border-black hover:scale-[1.01] hover:transition-all transition-colors focus-visible:outline-none disabled:opacity-50 bg-black rounded-full text-primary-foreground text-white h-10 md:h-11 px-8 text-base w-full space-x-3"
              type="button"
              onClick={handleGoogle}
            >
              <svg
                width="20"
                height="21"
                viewBox="0 0 20 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.6372 8.61467C16.5004 8.61312 13.3636 8.6139 10.2269 8.61426C10.2273 9.91531 10.2253 11.2164 10.2276 12.517C12.0442 12.5166 13.8608 12.5162 15.6771 12.517C15.4666 13.7637 14.7256 14.9039 13.6749 15.6058C13.0144 16.0499 12.2556 16.3381 11.4732 16.4752C10.6858 16.6096 9.87218 16.6268 9.08673 16.4677C8.28799 16.3084 7.52554 15.9756 6.86041 15.5065C5.79686 14.7593 4.98519 13.6661 4.56844 12.4357C4.14231 11.1843 4.13918 9.79183 4.57039 8.54159C4.86959 7.66041 5.36759 6.84643 6.02179 6.18402C6.82874 5.35792 7.87787 4.76737 9.0082 4.5252C9.97607 4.31859 10.9967 4.35802 11.9443 4.6447C12.7497 4.88923 13.4921 5.33057 14.1003 5.91136C14.7151 5.30008 15.3267 4.6853 15.9404 4.07289C16.2622 3.74324 16.6005 3.42803 16.9121 3.08941C15.9802 2.22697 14.8877 1.53371 13.6941 1.09546C11.5451 0.304563 9.12148 0.287776 6.95804 1.03656C4.51999 1.87124 2.44402 3.69447 1.293 5.99895C0.892263 6.79302 0.599691 7.64058 0.423936 8.51236C-0.0182152 10.6844 0.289966 13.0002 1.29182 14.9785C1.94293 16.2698 2.87642 17.4177 4.00874 18.3176C5.07701 19.1695 6.32217 19.7987 7.64236 20.1499C9.30821 20.5967 11.0814 20.5865 12.7583 20.2049C14.2737 19.8562 15.7076 19.132 16.8524 18.0751C18.0624 16.9631 18.9256 15.498 19.3826 13.9235C19.881 12.2061 19.9497 10.3727 19.6372 8.61467Z"
                  fill="currentColor"
                ></path>
              </svg>
              <span>Continue with Google</span>
            </button>
          </div>
          <div className="mt-4 text-center">
            <button>
              <div onClick={() => { setIsLoginPage(true) }}>
                Already a user? <span className='text-primary font-bold'>Login</span>
              </div>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
