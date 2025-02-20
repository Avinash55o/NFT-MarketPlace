import React from "react";
import Link from "next/link";
import { FaUserAlt, FaRegImage, FaUserEdit } from "react-icons/fa";
import { MdHelpCenter } from "react-icons/md";
import { TbDownloadOff, TbDownload } from "react-icons/tb";

interface ProfileMenuItem {
  id: number;
  icon: any;
  label: string;
  link: string;
}

interface CloseableComponentProps {
  close: () => void;
}

export default function Profile({ close }: CloseableComponentProps) {
  // Sample profile menu items
  const profileMenu: ProfileMenuItem[] = [
    {
      id: 1,
      icon: <FaUserAlt className="text-gray-600" />,
      label: "My Profile",
      link: "/Profile",
    },
    {
      id: 2,
      icon: <FaRegImage className="text-gray-600" />,
      label: "My Items",
      link: "/myitems",
    },
    {
      id: 3,
      icon: <FaUserEdit className="text-gray-600" />,
      label: "Edit Profile",
      link: "/editprofile",
    },
    {
      id: 4,
      icon: <MdHelpCenter className="text-gray-600" />,
      label: "Help Center",
      link: "/helpcenter",
    },
    {
      id: 6,
      icon: <TbDownloadOff className="text-gray-600" />,
      label: "Disable Account",
      link: "/disable-account",
    },
  ];

  return (
    <div
      className="absolute top-full right-0 mt-2 w-64 bg-white shadow-lg rounded-md overflow-hidden z-50"
      style={{ zIndex: 1000 }}
    >
      {/* Profile Header */}
      <div className="px-4 py-3 border-b border-gray-200">
        <div className="flex items-center space-x-3">
          <img
            src="/logo.png"
            alt="Profile Image"
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <p className="text-sm font-medium text-gray-800">Avinash Boruah</p>
            <small className="text-xs text-gray-600">X0342787789423.....</small>
          </div>
        </div>
      </div>

      {/* Profile Menu */}
      <div className="py-2">
        {profileMenu.map((item) => (
          <Link
            key={item.id}
            href={item.link}
            onClick={close} // Close the dropdown when an item is clicked
          >
            <div className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer">
              <div className="mr-3">{item.icon}</div>
              <p className="text-sm text-gray-800">{item.label}</p>
            </div>
          </Link>
        ))}
      </div>

      {/* Logout Button */}
      <div className="border-t border-gray-200">
        <button
          onClick={close}
          className="w-full text-left px-4 py-2 text-sm font-medium text-red-600 hover:bg-gray-100"
        >
          Logout
        </button>
      </div>
    </div>
  );
}