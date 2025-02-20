"use client";
import React from "react";
import Image from "next/image";
import { FaTwitter, FaInstagram, FaCopy } from "react-icons/fa";
import { MdVerified } from "react-icons/md";

interface ProfileHeaderProps {
  user: {
    name: string;
    username: string;
    bio: string;
    avatar: string;
    walletAddress: string;
    isVerified: boolean;
    social: { twitter?: string; instagram?: string };
  };
}

const ProfileHeader: React.FC<ProfileHeaderProps> = ({ user }) => {
  return (
    <div className="text-center bg-gray-900 text-white p-8 rounded-xl shadow-lg">
      {/* Profile Image */}
      <div className="relative inline-block">
        <Image
          src={user.avatar}
          alt="Profile Avatar"
          width={120}
          height={120}
          className="rounded-full border-4 border-purple-500"
        />
        {user.isVerified && <MdVerified className="absolute bottom-2 right-0 text-blue-500 text-xl" />}
      </div>

      {/* Name, Username & Bio */}
      <h2 className="text-2xl font-bold mt-3">{user.name}</h2>
      <p className="text-gray-400">@{user.username}</p>
      <p className="text-gray-300 max-w-md mx-auto mt-2">{user.bio}</p>

      {/* Wallet Address */}
      <div className="flex justify-center items-center mt-3">
        <span className="text-gray-400 text-sm">{user.walletAddress.slice(0, 6)}...{user.walletAddress.slice(-4)}</span>
        <FaCopy className="ml-2 cursor-pointer text-gray-500 hover:text-white" />
      </div>

      {/* Social Links */}
      <div className="flex justify-center gap-4 mt-3">
        {user.social.twitter && <a href={user.social.twitter} target="_blank"><FaTwitter className="text-blue-500 text-2xl" /></a>}
        {user.social.instagram && <a href={user.social.instagram} target="_blank"><FaInstagram className="text-pink-500 text-2xl" /></a>}
      </div>
    </div>
  );
};

export default ProfileHeader;
