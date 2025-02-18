import React, { useState } from "react";
import Link from "next/link";
import { GrClose } from "react-icons/gr";
import { TiSocialInstagram, TiSocialFacebook, TiSocialLinkedin, TiSocialTwitter } from "react-icons/ti";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";
import { FiInfo, FiPhone, FiUserPlus, FiLogIn, FiCreditCard } from "react-icons/fi";
import Button from "../../Button/Button";
interface HelpCenterItem {
  name: string;
  link: string;
  icon: any
}

interface CloseableComponentProps {
  close: () => void;
}

const SideBar: React.FC<CloseableComponentProps> = ({ close }) => {
  const [openDiscover, setOpenDiscover] = useState(false);
  const [openHelp, setOpenHelp] = useState(false);

  // Discover items
  const discoverItems = [
    {
      name: "Collection",
      link: "/collection",
    },
    {
      name: "Search",
      link: "/search",
    },
    {
      name: "Author Profile",
      link: "/author-profile",
    },
    {
      name: "NFT Details",
      link: "/nft-detail",
    },
    {
      name: "Account Setting",
      link: "/account-setting",
    },
    {
      name: "Connect Wallet",
      link: "/connect-wallet",
    },
  ];

  // Help Center items
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
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex z-50">
      {/* Sidebar */}
      <div className="bg-white w-64 h-full shadow-lg p-4 overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={close}
          className="flex items-center text-red-500 mb-4"
        >
          <GrClose className="mr-2" /> Close
        </button>

        {/* Discover Section */}
        <div className="mb-4">
          <button
            onClick={() => setOpenDiscover(!openDiscover)}
            className="flex items-center justify-between w-full text-gray-800 font-medium mb-2"
          >
            <span className="flex items-center">
              <TiArrowSortedDown className={`text-xl transition-transform ${openDiscover ? 'rotate-180' : ''}`} />
              <span className="ml-2">Discover</span>
            </span>
          </button>
          {openDiscover && (
            <div className="pl-4">
              {discoverItems.map((item, index) => (
                <Link key={index} href={item.link}>
                  <div
                    className="flex items-center py-2 text-sm text-gray-700 hover:text-gray-900 cursor-pointer"
                    onClick={close}
                  >
                    {item.name}
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* Help Center Section */}
        <div className="mb-4">
          <button
            onClick={() => setOpenHelp(!openHelp)}
            className="flex items-center justify-between w-full text-gray-800 font-medium mb-2"
          >
            <span className="flex items-center">
              <TiArrowSortedDown className={`text-xl transition-transform ${openHelp ? 'rotate-180' : ''}`} />
              <span className="ml-2">Help Center</span>
            </span>
          </button>
          {openHelp && (
            <div className="pl-4">
              {helpCenterItems.map((item, index) => (
                <Link key={index} href={item.link}>
                  <div
                    className="flex items-center py-2 text-sm text-gray-700 hover:text-gray-900 cursor-pointer"
                    onClick={close}
                  > <div className="mr-2">{item.icon} </div>
                    {item.name}
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* Social Media Links */}
        <div className="mt-6">
          <p className="text-gray-600 text-sm font-medium mb-2">Follow Us</p>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-700 hover:text-gray-900">
              <TiSocialFacebook className="text-2xl" />
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-900">
              <TiSocialTwitter className="text-2xl" />
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-900">
              <TiSocialInstagram className="text-2xl" />
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-900">
              <TiSocialLinkedin className="text-2xl" />
            </a>
          </div>
        </div>
      {/* Buttons */}
        <div className="mt-6 space-y-4">
           {/* Create Button */}
          <Button btnName="Create"  className="w-full bg-green-600 hover:bg-green-700    px-4 py-2 rounded-md font-medium text-white transition-all duration-200 focus:outline-none"/> 
           {/* Connect Wallet Button */}
          <Button btnName="Connect Wallet" className="w-full bg-purple-600 hover:bg-purple-700     px-4 py-2 rounded-md font-medium text-white transition-all duration-200 focus:outline-none"/>
        </div>
      </div>
    </div>
  );
};

export default SideBar;