"use client";

import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import image from "../app/assests/Logo-Brown_Instagram.jpg"
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const pathname = usePathname(); // Get current path

  return (
    <div>
      <nav className="flex items-center justify-between p-4 md:px-8 lg:px-16 w-full">
        {/* Logo */}
        <div className="flex items-center">
          <Image
            width={110}
            height={110}
            alt="Logo"
            src={image}
            className="md:w-[100px] pb-[20px] w-[80px] rounded-full"
          />
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex ml-[600px] space-x-8 items-center text-[#777577] font-['Nunito']">
          <div className="gap-4">
            <div className={`text-black text-[30px] font-gilroy font-normal hover:text-gray-600 leading-none ${pathname === '/' ? 'underline' : ''}`}>
              <Link href="/">Home</Link>
            </div>
          </div>
          <div className={`text-black text-[30px] font-gilroy font-normal hover:text-gray-600 leading-none ${pathname === '/aboutus' ? 'underline ' : ''}`}>
            <Link href="/aboutus">About us</Link>
          </div>
          <div className={`text-black text-[30px] font-gilroy font-normal hover:text-gray-600 leading-none ${pathname === '/villas' ? 'underline' : ''}`}>
            <Link href="/villas">Villas</Link>
          </div>
        </div>

        {/* Schedule a Call Button (Desktop) */}
        <div className="hidden md:block">
          <div className="w-[270px] pr-[3px] h-[62px] py-[35px] bg-[#4c2b21] rounded-[11px] justify-center items-center inline-flex">
            <div className="text-white text-3xl font-normal font-gilroy_medium">Schedule a call</div>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={toggleMenu} className="md:hidden text-gray-800 text-3xl focus:outline-none">
          ☰
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-[90px] left-0 w-full bg-white flex flex-col items-center py-4 space-y-4 md:hidden text-[#777577] font-['Nunito']">
            <div className="text-black text-xl font-gilroy font-normal hover:text-gray-600 leading-none" onClick={toggleMenu}>
              <Link href="/">Home</Link>
            </div>
            <div className="text-black text-xl font-gilroy font-normal hover:text-gray-600 leading-none" onClick={toggleMenu}>
              <Link href="/aboutus">About us</Link>
            </div>
            <div className="text-black text-xl font-gilroy font-normal hover:text-gray-600 leading-none" onClick={toggleMenu}>
              <Link href="/villas">Villas</Link>
            </div>
            <div
              className="bg-[#4c2b21] flex justify-center items-center text-white text-xl font-gilroy_medium font-normal rounded-[11px] hover:bg-[#3e2a1d] transition duration-200"
              onClick={toggleMenu}
            >
              Schedule a call
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}

export default Navbar;

// import image from ","