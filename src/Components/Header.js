

import React, { useState } from "react";

const Header = () => {
  const [showAccountOptions, setShowAccountOptions] = useState(false);
  const [showKidsOptions, setShowKidsOptions] = useState(false);

  return (
    <div className="w-full fixed top-0 left-0 z-50 bg-opacity-80 px-6 py-4 flex items-center justify-between transform rotate-x-12">
      {/* Left */}
      <div className="flex items-center gap-10">
        <h1 className=" text-4xl font-extrabold tracking-wider drop-shadow-md animate-pulse text-pink-500 font-[Poppins]">
          NetFlix<span className="font-light">GPT</span>
        </h1>
        <ul className="hidden md:flex gap-6 text-white text-sm font-medium">
          <li className="cursor-pointer hover:text-pink-400">Home</li>
          <li className="cursor-pointer hover:text-pink-400">TV Shows</li>
          <li className="cursor-pointer hover:text-pink-400">Movies</li>
          <li className="cursor-pointer hover:text-pink-400">New & Popular</li>
          <li className="cursor-pointer hover:text-pink-400">My List</li>
          <li className="cursor-pointer hover:text-pink-400">Browse by Language</li>
        </ul>
      </div>

      {/* Right */}
      <div className="flex items-center gap-6 text-white text-sm">
        <span className="cursor-pointer hover:text-pink-400">🔍</span>

        <div
          className="relative cursor-pointer"
          onClick={() => setShowKidsOptions(!showKidsOptions)}
        >
          <span className="hover:text-pink-400">Children ⌄</span>
          {showKidsOptions && (
            <div className="absolute top-full right-0 mt-2 bg-white text-black text-sm p-3 rounded shadow-md w-40 z-10">
              <p className="hover:text-pink-500 cursor-pointer">Kids Mode</p>
              <p className="hover:text-pink-500 cursor-pointer">Parental Settings</p>
            </div>
          )}
        </div>

        <span className="cursor-pointer hover:text-pink-400">🔔</span>

        <div
          className="relative cursor-pointer"
          onClick={() => setShowAccountOptions(!showAccountOptions)}
        >
          <span className="hover:text-pink-400">👤 ⌄</span>
          {showAccountOptions && (
            <div className="absolute top-full right-0 mt-2 bg-white text-black text-sm p-3 rounded shadow-md w-40 z-10">
              <p className="hover:text-pink-500 cursor-pointer">Profile</p>
              <p className="hover:text-pink-500 cursor-pointer">Settings</p>
              <button  className="hover:text-pink-500 cursor-pointer">logout</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;

