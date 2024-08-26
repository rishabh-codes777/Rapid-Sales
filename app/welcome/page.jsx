"use client"
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const PaymentSuccess = () => {
    useEffect(() => {
        const timer = setTimeout(() => window.location.replace('https://sprintearn.com'), 3000);
        return () => clearTimeout(timer);
    }, []);
  return (
    <div className='flex justify-center items-center bg-white h-screen'>
        <div className="flex flex-col items-center justify-center text-center p-20 bg-white">
        <motion.div
            className="text-green-500 text-6xl"
            initial={{ scale: 0 }}
            animate={{ rotate: 360, scale: 1 }}
            transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
            delay: 0.5
            }}
        >
            ✓
        </motion.div>
        <h1 className="text-4xl font-semibold text-gray-800 mt-3">Payment successful</h1>
        <p className="text-gray-600 text-xl">Thank you for your purchase. Your payment has been successfully processed.</p>
        </div>
    </div>
    
  );
};

export default PaymentSuccess;
