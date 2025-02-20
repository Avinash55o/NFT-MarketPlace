"use client";
import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { MdVerified, MdTimer } from "react-icons/md";
import { TbArrowBigLeftLines, TbArrowBigRightLine } from "react-icons/tb";
import { motion, AnimatePresence } from "framer-motion";

interface NFTSliderItem {
  title: string;
  id: number;
  name: string;
  collection: string;
  price: number;
  like: number;
  userImage: string;
  NftImage: string;
  time: { day: number; hour: number; minutes: number };
}

const SliderData: NFTSliderItem[] = [
    {
      title: "Panda Warrior",
      id: 1,
      name: "Avinash Boruah",
      collection: "Panda Collection",
      price: 0.005,
      like: 234,
      userImage:  "/hum.jpg",
      NftImage: "/panda.jpg",
      time: { day: 2, hour: 5, minutes: 30 },
    },
    {
      title: "Cyber Panda",
      id: 2,
      name: "Avinash",
      collection: "Panda Collection",
      price: 0.003,
      like: 189,
      userImage:  "/hum.jpg",
      NftImage: "/pand-2.jpg",
      time: { day: 1, hour: 8, minutes: 45 },
    },
    {
      title: "Golden Panda",
      id: 3,
      name: "Boruah",
      collection: "Panda Collection",
      price: 0.009,
      like: 320,
      userImage: "/hum.jpg",
      NftImage: "/golden-panda.jpg",
      time: { day: 3, hour: 4, minutes: 20 },
    },
  ];

export default function NFTSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [liked, setLiked] = useState<boolean[]>(new Array(SliderData.length).fill(false));

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === SliderData.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? SliderData.length - 1 : prev - 1));
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === SliderData.length - 1 ? 0 : prev + 1));
  }, []);

  return (
    <div className="relative w-full flex flex-col items-center justify-center bg-[#0d0d0d] py-12">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Featured NFTs</h2>

      <div className="relative w-full max-w-2xl md:h-[650px] h-[450px] overflow-hidden"> {/* Fixed height */}
  <AnimatePresence mode="wait">
    <motion.div
      key={currentIndex}
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.6 }}
      className="absolute top-0 left-0 w-full h-full bg-gray-900 rounded-2xl overflow-hidden shadow-xl border border-gray-800 p-6"
    >
      {/* NFT Image */}
      <div className="relative">
        <Image
          src={SliderData[currentIndex].NftImage}
          alt={SliderData[currentIndex].title}
          width={400}
          height={400}
          className="rounded-xl w-full object-cover"
        />
        <div className="absolute top-3 left-3 bg-purple-600 px-3 py-1 text-sm font-semibold text-white rounded-full shadow-md">
          {SliderData[currentIndex].collection}
        </div>
      </div>

      {/* NFT Details */}
      <div className="flex justify-between items-center mt-4">
        <h3 className="text-xl font-bold text-white">{SliderData[currentIndex].title}</h3>
        <div
          className="cursor-pointer text-2xl"
          onClick={() => {
            const newLikes = [...liked];
            newLikes[currentIndex] = !newLikes[currentIndex];
            setLiked(newLikes);
          }}
        >
          {liked[currentIndex] ? (
            <AiFillHeart className="text-red-500" />
          ) : (
            <AiOutlineHeart className="text-gray-400 hover:text-red-500" />
          )}
        </div>
      </div>

      <div className="flex items-center gap-2 mt-2">
        <Image
          src={SliderData[currentIndex].userImage}
          alt="User"
          width={50}
          height={50}
          className="rounded-full"
        />
        <p className="text-gray-400 text-sm">
          <MdVerified className="inline text-blue-500 mr-1" />
          {SliderData[currentIndex].name}
        </p>
      </div>

      {/* Price & Timer */}
      <div className="flex justify-between items-center mt-4">
        <p className="text-white font-semibold text-lg">💰 {SliderData[currentIndex].price} ETH</p>
        <p className="text-gray-400 flex items-center gap-1">
          <MdTimer className="text-yellow-500" />
          {SliderData[currentIndex].time.day}d {SliderData[currentIndex].time.hour}h {SliderData[currentIndex].time.minutes}m
        </p>
      </div>
    </motion.div>
  </AnimatePresence>

  {/* Navigation Buttons */}
  <button
    onClick={prevSlide}
    className="absolute top-1/2 left-0 -translate-y-1/2 bg-gray-800 p-3 rounded-full shadow-lg hover:bg-purple-600 transition text-white"
  >
    <TbArrowBigLeftLines size={28} />
  </button>
  <button
    onClick={nextSlide}
    className="absolute top-1/2 right-0 -translate-y-1/2 bg-gray-800 p-3 rounded-full shadow-lg hover:bg-purple-600 transition text-white"
  >
    <TbArrowBigRightLine size={28} />
  </button>
</div>

    </div>
  );
}
