"use client";
import React, { useState } from "react";

const tabs = ["Owned NFTs", "Created NFTs", "Favorites", "Activity"];

interface ProfileTabsProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const ProfileTabs: React.FC<ProfileTabsProps> = ({ activeTab, setActiveTab }) => {
  return (
    <div className="flex justify-center gap-6 mt-6">
      {tabs.map((tab) => (
        <button
          key={tab}
          className={`px-6 py-2 rounded-lg text-white ${activeTab === tab ? "bg-purple-600" : "bg-gray-800 hover:bg-gray-700"}`}
          onClick={() => setActiveTab(tab)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default ProfileTabs;
