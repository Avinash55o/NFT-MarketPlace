"use client";
import React, { useState } from "react";
import ProfileHeader from "../components/Profile-components/ProfileHeader/profileHeader";
import ProfileTabs from "../components/Profile-components/ProfileTabs/profileTabs";
import NFTCard from "../components/NFTCard/nftCard";

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

export default function Profile() {
  const user = {
    name: "Crypto King",
    username: "cryptoking",
    bio: "NFT Collector & Digital Artist | Join my journey in Web3 🚀",
    avatar: "/user.jpg",
    walletAddress: "0xB5...3D4A",
    isVerified: true,
    social: {
      twitter: "https://twitter.com/cryptoking",
      instagram: "https://instagram.com/cryptoking",
    },
  };

  const sampleNFTs: NFT[] = [
    { id: 1, name: "CryptoArt #1", NftImage: "/panda.jpg", userImage: "/user1.jpg", price: 2.5, owner: "Alice", category: "Art", blockchain: "Ethereum", time: { day: 2, hour: 5, minutes: 30 } },
    { id: 2, name: "Pixel Ape", NftImage: "/panda.jpg", userImage: "/user2.jpg", price: 1.8, owner: "Bob", category: "Collectibles", blockchain: "Solana", time: { day: 1, hour: 8, minutes: 45 } },
    { id: 3, name: "3D Cyberpunk", NftImage: "/panda.jpg", userImage: "/user3.jpg", price: 3.0, owner: "Charlie", category: "Gaming", blockchain: "Polygon", time: { day: 3, hour: 4, minutes: 20 } },
    { id: 4, name: "Virtual Land", NftImage: "/panda.jpg", userImage: "/user4.jpg", price: 5.0, owner: "Dave", category: "Virtual Real Estate", blockchain: "Ethereum", time: { day: 2, hour: 12, minutes: 10 } },
  ];

  const [activeTab, setActiveTab] = useState("Owned NFTs");

  return (
    <div className="max-w-4xl mx-auto py-10 px-5">
      {/* Profile Header */}
      <ProfileHeader user={user} />

      {/* Tabs - Made Horizontally Scrollable on Mobile */}
      <div className="overflow-x-auto scrollbar-hide flex gap-4 py-4 sm:justify-center">
        {["Owned NFTs", "Created NFTs", "Favorites", "Activity"].map((tab) => (
          <button
            key={tab}
            className={`px-6 py-2 rounded-lg whitespace-nowrap ${activeTab === tab ? "bg-purple-600 text-white" : "bg-gray-800 text-gray-300 hover:bg-gray-700"}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Owned NFTs Section - Shows 2 NFTs per row on mobile */}
      {activeTab === "Owned NFTs" && (
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
          {sampleNFTs.map((nft) => (
            <NFTCard key={nft.id} nft={nft} />
          ))}
        </div>
      )}

      {/* Created NFTs */}
      {activeTab === "Created NFTs" && (
        <p className="text-gray-400 text-center mt-6">No created NFTs yet.</p>
      )}

      {/* Favorite NFTs */}
      {activeTab === "Favorites" && (
        <p className="text-gray-400 text-center mt-6">No favorite NFTs yet.</p>
      )}

      {/* Activity Section */}
      {activeTab === "Activity" && (
        <p className="text-gray-400 text-center mt-6">No activity yet.</p>
      )}
    </div>
  );
}