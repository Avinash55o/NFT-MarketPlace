"use client";
import React from "react";
import { FaWallet, FaShoppingCart, FaGavel, FaUserShield } from "react-icons/fa";
import { MdOutlineCollections, MdOutlineSecurity } from "react-icons/md";
import { motion } from "framer-motion";


export default function Services() {
  const services = [
    {
      title: "Secure Wallet Integration",
      description: "Seamlessly connect your crypto wallet to buy, sell, and trade NFTs with ease.",
      icon: <FaWallet className="text-4xl text-purple-500" />,
    },
    {
      title: "Buy & Sell Instantly",
      description: "Browse thousands of NFTs and complete transactions instantly with blockchain security.",
      icon: <FaShoppingCart className="text-4xl text-blue-500" />,
    },
    {
      title: "Live Auctions",
      description: "Bid on exclusive NFTs in real-time and compete with other collectors.",
      icon: <FaGavel className="text-4xl text-red-500" />,
    },
    {
      title: "Verified Creators",
      description: "Only verified artists and trusted creators can list NFTs on our platform.",
      icon: <FaUserShield className="text-4xl text-green-500" />,
    },
    {
      title: "Curated NFT Collections",
      description: "Explore high-quality NFT collections, hand-picked by our experts.",
      icon: <MdOutlineCollections className="text-4xl text-yellow-500" />,
    },
    {
      title: "Advanced Security",
      description: "Our marketplace is built with high-end encryption and smart contract security.",
      icon: <MdOutlineSecurity className="text-4xl text-teal-500" />,
    },
  ];
  return (
    <section className="py-16 px-5 bg-gray-900 text-white">
    <div className="container mx-auto text-center">
      <h2 className="text-4xl font-bold mb-6">Our Services</h2>
      <p className="text-gray-400 max-w-2xl mx-auto mb-10">
        Explore the powerful features of our NFT marketplace, built for both creators and collectors.
      </p>

      {/* Service Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="p-6 bg-gray-800 rounded-2xl shadow-lg flex flex-col items-center text-center"
          >
            <div className="mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-400">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
  );
}
