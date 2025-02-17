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




export default function NavBar() {
  const [discover, setDiscover] = useState(false);
  const [help, setHelp] = useState(false);
  const [notification, setNotification] = useState(false);
  const [profile, setProfile] = useState(false);
  const [sidebar, setSidebar] = useState(false);

  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white shadow-md fixed w-full z-50">
      {/* Left Side - Logo & Marketplace Name */}
      <div className="flex items-center gap-3">
        <Image src="/logo.png" alt="Marketplace Logo" width={40} height={40} />
        <h1 className="text-xl font-semibold text-gray-800">Marketplace</h1>
      </div>
      
      {/* Center - Desktop Navigation */}
      <div className="hidden md:flex items-center gap-6">
        <button
          onClick={() => setDiscover(!discover)}
          className="text-gray-700 hover:text-gray-900"
        >
          Discover
        </button>
        <button
          onClick={() => setHelp(!help)}
          className="text-gray-700 hover:text-gray-900"
        >
          Help Center
        </button>
      </div>
      
      {/* Right Side - Icons & Profile */}
      <div className="flex items-center gap-4">
        <BsSearch className="text-xl text-gray-600 cursor-pointer hover:text-gray-800" />
        <MdNotifications
          className="text-2xl text-gray-600 cursor-pointer hover:text-gray-800"
          onClick={() => setNotification(!notification)}
        />
        <FaUser
          className="text-xl text-gray-600 cursor-pointer hover:text-gray-800"
          onClick={() => setProfile(!profile)}
        />
        <CgMenuLeft
          className="text-2xl text-gray-600 md:hidden cursor-pointer hover:text-gray-800"
          onClick={() => setSidebar(!sidebar)}
        />
      </div>
      
      {/* Sidebar (Mobile Menu) */}
      {sidebar && <SideBar close={() => setSidebar(false)} />}
      {discover && <Discover close={() => setDiscover(false)} />}
      {help && <HelpCenter close={() => setHelp(false)} />}
      {notification && <Notification close={() => setNotification(false)} />}
      {profile && <Profile close={() => setProfile(false)} />}
    </nav>
  );
}
