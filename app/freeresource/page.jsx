"use client"
import Navbar from '@/components/navbar';
import Link from 'next/link';
import React, { useState } from 'react';

const HeroSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`/api/email/freeresource`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setIsSubmitted(true);
        console.log('Form submitted successfully:', await response.json());
      } else {
        console.error('Error submitting form:', response.statusText);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#f2f5fa] text-black"
    style={{ backgroundImage: 'url(/bg.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className='w-full flex justify-center top-0'>
        <div className="flex justify-between items-center w-full md:w-3/5 bg-bg-secondary px-4 py-2 md:px-10 md:py-4 rounded-b-xl">
          <h2 className='text-xl md:text-2xl'><span className="font-normal italic">Sprint</span><span className="font-bold">Earn</span></h2>
          <Link href={"/login"}>
            <button className="text-white bg-primary px-4 py-1.5 rounded-md ml-4">Login</button>
          </Link>
        </div>
      </div>
      <div className='flex flex-col items-center justify-center space-y-8 md:space-y-16 flex-1 px-4 md:px-0'>
        <h1 className="text-5xl md:text-9xl font-semibold  md:text-left text-white w-full md:w-4/5">
          Turn your knowledge
          <br />
          into <span className="text-black">income.</span>
        </h1>
        <div className="w-full md:w-4/5 flex flex-col md:flex-row items-center justify-between">
          <div className='space-y-2 mb-4 md:mb-0'>
            <p className="text-2xl md:text-5xl font-bold text-white">
              Want to join us?
            </p>
            <p className="text-md md:text-xl text-white">
              Join community of 15K+ influencers,
              <br />
              strategies, and resources to launch, grow, and monetize
              <br />
              your internet business.
            </p>
          </div>
          <div className="mt-4 flex flex-col items-center w-full md:w-1/2">
            {isSubmitted ? (
              <div className="text-2xl text-center text-white">
                Thank you for subscribing! 🎉 <br /> Please check your email
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center space-y-3 w-full md:w-[20vw]">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  required={true}
                  className="px-4 py-2 border border-white bg-transparent rounded-full focus:outline-none w-full"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  className="px-4 py-2 border border-white bg-transparent rounded-full focus:outline-none w-full"
                />
                <input
                  type="number"
                  name="mobile"
                  placeholder="Mobile no."
                  value={formData.mobile}
                  onChange={handleChange}
                  className="px-4 py-2 border border-white bg-transparent rounded-full focus:outline-none w-full"
                />
                <button type="submit" className="w-full px-6 py-2 text-black bg-white rounded-full hover:bg-gray-900 focus:outline-none">
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
