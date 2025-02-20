"use client";

import React from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div className="relative flex  md:flex-row items-center justify-center text-white bg-black min-h-screen px-6 md:px-12 ">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 blur-3xl opacity-20"></div>
      {/* Left Side - Background Images */}
      <div className="absolute top-0 md:left-0 md:w-1/2 w-full">
        {/* Bottom Background Image */}
        <img
          src="/Frame 2.png"
          alt="Fluid Background"
          className="absolute top-0 left-0 object-cover"
        />
        {/* Overlay Image */}
        <img
          src="/Frame 1.png"
          alt="Overlay"
          className="absolute md:top-0 md:left-0  md:object-cover mix-blend-overlay animate-float md:animate-none "
        />
      </div>

      {/* Left Section */}
      <div className="absolute top-0 md:left-0 md:ml-16 md:h-full flex flex-col justify-center items-center text-center p-16 text-white z-10">
        <h3 className="md:text-2xl text-lg font-bold mb-3">Back to </h3>
        <h1 className="md:text-7xl text-4xl font-bold mb-6">Web3</h1>
        <p className="md:text-xl text-base  md:w-80 mb-8">
          Explore, collect, and trade digital assets in a vibrant marketplace.
        </p>
        <button
          onClick={() => router.push("/dashboard")}
          className="bg-white text-blue-600 md:ml-2 md:w-80 w-48 px-8 py-4 rounded-full font-semibold md:text-lg text-sm hover:bg-blue-100"
        >
          Start Exploring
        </button>
      </div>

      {/* Right Side - Floating Crypto Icons */}
      {/* Bitcoin Floating */}
      <div className="absolute md:pb-10 inset-0 flex justify-center items-center">
        <img
          src="/bitcoin.png"
          alt="Bitcoin"
          className="md:h-36 h-24 mb-14 mr-12 object-cover animate-float"
        />
      </div>

      {/* Solana Floating */}
      <div className="absolute md:pb-96 inset-0 md:flex md:justify-center md:items-center flex ">
        <img
          src="/solana.png"
          alt="Solana"
          className="md:h-32 h-14 md:mb-96  md:mr-40 object-cover  -rotate-45 animate-float-slow"
        />
      </div>

      {/* Ethereum Floating */}
      <img
        src="/ethereum.png"
        alt="Ethereum"
        className="absolute top-12 right-80 h-44 mr-32 animate-float-fast"
      />

      {/*Binance */}
      <img
        src="/binance.png"
        alt="Ethereum"
        className="absolute top-56 right-96 h-20 mr-96 animate-float"
      />

      {/* USDT Floating */}
      <img
        src="/usdt.png"
        alt="USDT"
        className="absolute top-80 right-2 h-24 mr-10 rotate-12 animate-float"
      />

      {/* Shiba Inu Floating */}
      <img
        src="/shiba-inu.png"
        alt="Shiba Inu"
        className="absolute top-16 right-24 h-24 mr-10 -rotate-30 animate-float-slow"
      />

      {/* Bottom Right Background */}
      <div className="">
      <img
        src="/bit.png"
        alt="Background"
        className="absolute bottom-0 right-0  md:w-1/2 md:h-2/3 h-64 mr-20 md:object-cover animate-float-slow"
      />
      </div>
      
    </div>
  );
}
