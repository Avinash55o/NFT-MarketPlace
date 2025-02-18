import React from "react";
import Link from "next/link";
import { FiGrid, FiSearch, FiUser, FiFileText, FiSettings } from "react-icons/fi";
import { CiWallet } from "react-icons/ci";
interface DiscoverItem {
  name: string;
  link: string;
  icon: any;
}

interface CloseableComponentProps {
  close: () => void;
}

export default function Discover({ close }: CloseableComponentProps) {
  // Discover items with icons
  const discoverItems: DiscoverItem[] = [
    {
      name: "Collection",
      link: "/collection",
      icon: <FiGrid className="text-gray-600" />,
    },
    {
      name: "Search",
      link: "/search",
      icon: <FiSearch className="text-gray-600" />,
    },
    {
      name: "Author Profile",
      link: "/author-profile",
      icon: <FiUser className="text-gray-600" />,
    },
    {
      name: "NFT Details",
      link: "/nft-detail",
      icon: <FiFileText className="text-gray-600" />,
    },
    {
      name: "Account Setting",
      link: "/account-setting",
      icon: <FiSettings className="text-gray-600" />,
    },
    {
      name: "Connect Wallet",
      link: "/connect-wallet",
      icon: <CiWallet className="text-gray-600" />,
    },
  ];

  return (
    <div
      className="absolute top-full left-0 mt-2 w-64 bg-white shadow-lg rounded-md overflow-hidden z-50"
      style={{ zIndex: 1000 }}
    >
      {/* Header */}
      <div className="px-4 py-3 border-b border-gray-200 bg-gray-100">
        <h3 className="text-sm font-semibold text-gray-800">Discover</h3>
      </div>

      {/* Discover List */}
      <div className="py-2">
        {discoverItems.map((item, index) => (
          <Link
            key={index+1}
            href={item.link}
            onClick={close} // Close the dropdown when an item is clicked
          >
            <div className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer">
              <div className="mr-3">{item.icon}</div>
              <p className="text-sm text-gray-800">{item.name}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}