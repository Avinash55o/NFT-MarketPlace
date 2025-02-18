import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <div className="relative flex flex-col md:flex-row  items-center justify-center text-white bg-black min-h-screen px-6 md:px-12 overflow-hidden">
     
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 blur-3xl opacity-20" />

      {/* Content */}
      <div className="relative z-10 text-center max-w-3xl">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500"
        >
          Explore & Collect Unique Digital Art
        </motion.h1>
        <p className="mt-4 text-lg text-gray-300">
          Join the future of digital ownership with our NFT marketplace.
        </p>

        {/* CTA Buttons */}
        <div className="mt-6 flex justify-center gap-4">
          <button className="px-6 py-3 rounded-full bg-purple-600 hover:bg-purple-700 transition text-white font-semibold shadow-lg">
            Start Collecting
          </button>
          <button className="px-6 py-3 rounded-full bg-transparent border border-purple-500 hover:bg-purple-500 transition text-white font-semibold shadow-lg">
            Learn More
          </button>
        </div>
      </div>

      {/* NFT Showcase Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="relative mt-10 max-w-sm md:w-1/2 rounded-xl overflow-hidden bg-gray-900 shadow-lg border border-gray-800"
      >
        <Image
          src="/hero-1.jpeg"
          alt="NFT Artwork"
          width={400}
          height={400}
          className="w-full object-cover"
        />
        <div className="p-4">
          <h2 className="text-lg font-bold text-white">Liquid Abstract Painting</h2>
          <p className="text-sm text-gray-400">@ArtistName</p>
          <div className="mt-2 flex justify-between text-sm text-gray-300">
            <span>2.26 ETH</span>
            <span>23h 11m 32s</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
