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
    userImage: "/panda.png",
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
    userImage: "/panda.png",
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
    userImage: "/panda.png",
    NftImage: "/golden-panda.jpg",
    time: { day: 3, hour: 4, minutes: 20 },
  },
  {
    title: "Shadow Panda",
    id: 4,
    name: "Avinash B.",
    collection: "Panda Collection",
    price: 0.007,
    like: 210,
    userImage: "/panda.png",
    NftImage: "/shadow.jpg",
    time: { day: 2, hour: 6, minutes: 15 },
  },
];

export default function NFTSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [liked, setLiked] = useState<boolean[]>(new Array(SliderData.length).fill(false));

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
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
    <div className="relative w-full flex flex-col items-center justify-center bg-black py-12">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">🔥 Featured NFTs</h2>
      
      <div className="relative w-full max-w-4xl overflow-hidden">
        <div className="flex gap-4 transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}>
          {SliderData.map((nft, index) => (
            <motion.div key={index} className="min-w-[calc(100%/3)] p-4">
              <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-xl border border-gray-800 p-6">
                <div className="relative">
                  <Image
                    src={nft.NftImage}
                    alt={nft.title}
                    width={600}
                    height={400}
                    className="rounded-xl w-full object-cover"
                  />
                  <div className="absolute top-3 left-3 bg-purple-600 px-3 py-1 text-sm font-semibold text-white rounded-full shadow-md">
                    {nft.collection}
                  </div>
                </div>

                <div className="flex justify-between items-center mt-4">
                  <h3 className="text-xl font-bold text-white">{nft.title}</h3>
                  <div
                    className="cursor-pointer text-2xl"
                    onClick={() => {
                      const newLikes = [...liked];
                      newLikes[index] = !newLikes[index];
                      setLiked(newLikes);
                    }}
                  >
                    {liked[index] ? (
                      <AiFillHeart className="text-red-500" />
                    ) : (
                      <AiOutlineHeart className="text-gray-400 hover:text-red-500" />
                    )}
                  </div>
                </div>

                <div className="flex items-center gap-2 mt-2">
                  <Image
                    src={nft.userImage}
                    alt="User"
                    width={30}
                    height={30}
                    className="rounded-full"
                  />
                  <p className="text-gray-400 text-sm">
                    <MdVerified className="inline text-blue-500 mr-1" />
                    {nft.name}
                  </p>
                </div>

                <div className="flex justify-between items-center mt-4">
                  <p className="text-white font-semibold text-lg">💰 {nft.price} ETH</p>
                  <p className="text-gray-400 flex items-center gap-1">
                    <MdTimer className="text-yellow-500" />
                    {nft.time.day}d {nft.time.hour}h {nft.time.minutes}m
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <button onClick={prevSlide} className="absolute left-4 top-1/2 -translate-y-1/2 bg-gray-800 p-3 rounded-full hover:bg-purple-600 text-white">
        <TbArrowBigLeftLines size={28} />
      </button>
      <button onClick={nextSlide} className="absolute right-4 top-1/2 -translate-y-1/2 bg-gray-800 p-3 rounded-full hover:bg-purple-600 text-white">
        <TbArrowBigRightLine size={28} />
      </button>
    </div>
  );
}