import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FiMail } from "react-icons/fi";
import { TiSocialInstagram, TiSocialFacebook, TiSocialLinkedin, TiSocialTwitter } from "react-icons/ti";

export default function Footer() {
  // Discover items
  const discoverItems= [
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
 const helpCenterItems= [
     {
       name: "About",
       link: "/about",
     
     },
     {
       name: "Contact Us",
       link: "/contact-us",
      
     },
     {
       name: "Sign Up",
       link: "/sign-up",
     
     },
     {
       name: "Sign In",
       link: "/sign-in",
       
     },
     {
       name: "Subscription",
       link: "/subscription",
      
     },
   ];

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        {/* Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* First Column: Logo and Description */}
          <div className="flex flex-col items-start  md:items-start">
            <Image
              src="/logo.png"
              alt="Logo"
              width={50}
              height={50}
              className="mb-4 rounded-full object-cover" 
            />
            <p className="text-gray-400 text-sm text-left md:text-left">
              The world's first and largest digital marketplace for crypto collectibles and non-fungible tokens (NFTs). Buy, sell, and discover exclusive digital assets.
            </p>
          </div>

          {/* Second Column: Discover Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Discover</h3>
            <ul className="space-y-2">
              {discoverItems.map((item, index) => (
                <li key={index}>
                  <Link href={item.link} className="text-gray-400 hover:text-white transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Third Column: Help Center Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Help Center</h3>
            <ul className="space-y-2">
              {helpCenterItems.map((item, index) => (
                <li key={index}>
                  <Link href={item.link} className="text-gray-400 hover:text-white transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Fourth Column: Subscription and Social Media */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-semibold mb-4 text-center md:text-left">
              Subscribe to Our Newsletter
            </h3>
            <p className="text-gray-400 mb-4 text-center md:text-left">
              Stay updated with the latest news and updates from our platform.
            </p>
            <form className="w-full flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors w-full md:w-auto"
              >
                <FiMail className="text-xl" />
              </button>
            </form>

            {/* Social Media Links */}
            <div className="mt-6 flex justify-center md:justify-start space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <TiSocialFacebook className="text-2xl" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <TiSocialTwitter className="text-2xl" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <TiSocialInstagram className="text-2xl" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <TiSocialLinkedin className="text-2xl" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-8 text-center text-gray-500 text-sm">
          © 2023 Your NFT Marketplace. All rights reserved.
        </div>
      </div>
    </footer>
  );
}