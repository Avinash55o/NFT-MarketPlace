import React from "react";
import Link from "next/link";
import { FiInfo, FiPhone, FiUserPlus, FiLogIn, FiCreditCard } from "react-icons/fi";

interface HelpCenterItem {
  name: string;
  link: string;
  icon: any;
}

interface CloseableComponentProps {
  close: () => void;
}

export default function HelpCenter({ close }: CloseableComponentProps) {
  // Help Center items with icons
  const helpCenterItems: HelpCenterItem[] = [
    {
      name: "About",
      link: "/about",
      icon: <FiInfo className="text-gray-600" />,
    },
    {
      name: "Contact Us",
      link: "/contact-us",
      icon: <FiPhone className="text-gray-600" />,
    },
    {
      name: "Sign Up",
      link: "/sign-up",
      icon: <FiUserPlus className="text-gray-600" />,
    },
    {
      name: "Sign In",
      link: "/sign-in",
      icon: <FiLogIn className="text-gray-600" />,
    },
    {
      name: "Subscription",
      link: "/subscription",
      icon: <FiCreditCard className="text-gray-600" />,
    },
  ];

  return (
    <div
      className="absolute top-full left-0 mt-2 w-64 bg-white shadow-lg rounded-md overflow-hidden z-50"
      style={{ zIndex: 1000 }}
    >
      {/* Header */}
      <div className="px-4 py-3 border-b border-gray-200 bg-gray-100">
        <h3 className="text-sm font-semibold text-gray-800">Help Center</h3>
      </div>

      {/* Help Center List */}
      <div className="py-2">
        {helpCenterItems.map((item, index) => (
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