import React, { useState } from "react";
import SideBar from "./SideBar/SideBar";
import Profile from "./Profile/Profile";
import Notification from "./Notification/Notification";
import HelpCenter from "./HelpCenter/HelpCenter";
import Discover from "./Discover/Discover";
import Image from "next/image";
import Link from "next/link";
import { MdNotifications } from "react-icons/md";
import { BsSearch } from "react-icons/bs";
import { CgMenuLeft } from "react-icons/cg";
import { FaUser } from "react-icons/fa";
import { Flamenco } from "next/font/google";

export default function NavBar() {
  const [discover, setDiscover] = useState(false);
  const [help, setHelp] = useState(false);
  const [notification, setNotification] = useState(false);
  const [profile, setProfile] = useState(false);
  const [sidebar, setSidebar] = useState(false);

  return (
    <nav className="flex items-center justify-between px-6 py-4 fixed w-full z-50 bg-gradient-to-r from-purple-500 to-blue-500 bg-opacity-30 backdrop-blur-3xl shadow-lg border-b border-white/20">
      {/* Left Side - Logo & Marketplace Name */}
      <div className="flex items-center gap-3">
        <a href="/dashboard">
          <Image src="/logo.png" alt="Marketplace Logo" width={40} height={40} className="rounded-full object-cover shadow-md"/>
        </a>
        <h1 className="text-xl font-semibold text-white tracking-wide">Marketplace</h1>
      </div>

      {/* Center - Desktop Navigation */}
      <div className="relative hidden md:flex items-center gap-6">
        {/* discover dropdown */}
        <div className="relative">
          <button onClick={() => setDiscover(!discover)} className="text-white hover:text-gray-200 transition-all duration-300 font-medium">
            Discover
          </button>
          {discover && <Discover close={() => setDiscover(false)} />}
        </div>
        
        {/* help center drop down */}
        <div className="relative">
          <button onClick={() => setHelp(!help)} className="text-white hover:text-gray-200 transition-all duration-300 font-medium">
            Help Center
          </button>
          {help && <HelpCenter close={()=> setHelp(false)} />}
        </div>
      </div>

      {/* Right Side - Icons & Profile */}
      <div className="flex items-center gap-4">
        <BsSearch className="text-xl text-white cursor-pointer hover:text-gray-200 transition-all duration-300" />
        
        {/* notification dropdown */}
        <div>
          <MdNotifications className="text-2xl text-white cursor-pointer hover:text-gray-200 transition-all duration-300" onClick={() => setNotification(!notification)} />
          {notification && <Notification close={() => setNotification(false)} />}
        </div>
        
        {/* user dropdown */}
        <div>
          <FaUser className="text-xl text-white cursor-pointer hover:text-gray-200 transition-all duration-300" onClick={() => setProfile(!profile)} />
          {profile && <Profile close={() => setProfile(false)} />}
        </div>
        
        <CgMenuLeft className="text-2xl text-white md:hidden cursor-pointer hover:text-gray-200 transition-all duration-300" onClick={() => setSidebar(!sidebar)} />
      </div>

      {/* Sidebar (Mobile Menu) */}
      {sidebar && <SideBar close={() => setSidebar(false)} />}
    </nav>
  );
}