"use client";
import React, { useState } from "react";
import NFTCard from "../NFTCard/nftCard";
import { FaSearch, FaFilter, FaBitcoin } from "react-icons/fa";
import { MdOutlineCategory } from "react-icons/md";
import { IoMdClose } from "react-icons/io";

interface NFT {
  id: number;
  name: string;
  NftImage: string;
  userImage: string;
  price: number;
  owner: string;
  category: string;
  blockchain: string;
  time: { day: number; hour: number; minutes: number };
}

const sampleNFTs: NFT[] = [
  { id: 1, name: "CryptoArt #1", NftImage: "/panda.jpg", userImage: "/user1.jpg", price: 2.5, owner: "Alice", category: "Art", blockchain: "Ethereum", time: { day: 2, hour: 5, minutes: 30 } },
  { id: 2, name: "Pixel Ape", NftImage: "/panda.jpg", userImage: "/user2.jpg", price: 1.8, owner: "Bob", category: "Collectibles", blockchain: "Solana", time: { day: 1, hour: 8, minutes: 45 } },
  { id: 3, name: "3D Cyberpunk", NftImage: "/panda.jpg", userImage: "/user3.jpg", price: 3.0, owner: "Charlie", category: "Gaming", blockchain: "Polygon", time: { day: 3, hour: 4, minutes: 20 } },
  { id: 4, name: "Virtual Land", NftImage: "/panda.jpg", userImage: "/user4.jpg", price: 5.0, owner: "Dave", category: "Virtual Real Estate", blockchain: "Ethereum", time: { day: 2, hour: 12, minutes: 10 } },
  { id: 5, name: "Pixel Warrior", NftImage: "/panda.jpg", userImage: "/user5.jpg", price: 2.2, owner: "Eve", category: "Gaming", blockchain: "Solana", time: { day: 1, hour: 9, minutes: 15 } },
  { id: 6, name: "Alien Avatar", NftImage: "/panda.jpg", userImage: "/user6.jpg", price: 4.5, owner: "Frank", category: "Collectibles", blockchain: "Polygon", time: { day: 4, hour: 6, minutes: 50 } },
];

const ExploreNFTs: React.FC = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [blockchain, setBlockchain] = useState("");
  const [showFilters, setShowFilters] = useState(false);

  const filteredNFTs = sampleNFTs
    .filter((nft) =>
      nft.name.toLowerCase().includes(search.toLowerCase()) ||
      nft.owner.toLowerCase().includes(search.toLowerCase())
    )
    .filter((nft) => (category ? nft.category === category : true))
    .filter((nft) => (blockchain ? nft.blockchain === blockchain : true));

  return (
    <section className="container mx-auto py-10 px-5">
      <h2 className="text-3xl font-bold text-center mb-8">Explore NFTs</h2>

      {/* 🔍 Search & Filter Button */}
      <div className="flex items-center gap-4 justify-between mb-6">
        {/* Search Bar */}
        <div className="relative flex-grow">
          <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
          <input
            type="text"
            placeholder="Search NFTs..."
            className="input input-bordered pl-12 pr-4 w-full rounded-full text-lg"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* Filter Button */}
        <button
          className="btn btn-circle btn-outline flex items-center justify-center"
          onClick={() => setShowFilters(!showFilters)}
        >
          {showFilters ? <IoMdClose className="text-xl" /> : <FaFilter className="text-xl" />}
        </button>
      </div>

      {/* 🛠️ Filter Options (Toggle) */}
      {showFilters && (
        <div className="bg-gray-800 p-5 rounded-xl shadow-lg mb-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {/* Category Filter */}
            <div className="relative">
              <MdOutlineCategory className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
              <select
                className="select select-bordered pl-10 w-full"
                onChange={(e) => setCategory(e.target.value)}
                value={category}
              >
                <option value="">All Categories</option>
                <option value="Art">Art</option>
                <option value="Collectibles">Collectibles</option>
                <option value="Gaming">Gaming</option>
                <option value="Virtual Real Estate">Virtual Real Estate</option>
              </select>
            </div>

            {/* Blockchain Filter */}
            <div className="relative">
              <FaBitcoin className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
              <select
                className="select select-bordered pl-10 w-full"
                onChange={(e) => setBlockchain(e.target.value)}
                value={blockchain}
              >
                <option value="">All Blockchains</option>
                <option value="Ethereum">Ethereum</option>
                <option value="Solana">Solana</option>
                <option value="Polygon">Polygon</option>
              </select>
            </div>
          </div>
        </div>
      )}

      {/* 🖼️ NFT Grid (Desktop) */}
      <div className="hidden sm:grid md:grid-cols-3 gap-6">
        {filteredNFTs.length > 0 ? (
          filteredNFTs.map((nft) => <NFTCard key={nft.id} nft={nft} />)
        ) : (
          <p className="text-center col-span-full">No NFTs found.</p>
        )}
      </div>

      {/* 📱 NFT Slider (Mobile - One NFT at a time) */}
      <div className="sm:hidden flex overflow-x-auto gap-6 scrollbar-hide snap-x snap-mandatory">
        {filteredNFTs.length > 0 ? (
          filteredNFTs.map((nft) => (
            <div key={nft.id} className="flex-shrink-0 w-full snap-center">
              <NFTCard nft={nft} />
            </div>
          ))
        ) : (
          <p className="text-center">No NFTs found.</p>
        )}
      </div>
    </section>
  );
};

export default ExploreNFTs;
