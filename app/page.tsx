"use client"; // Needed for Next.js components using hooks
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Analytics } from "@vercel/analytics/react";
import image from "../app/assests/Logo-Brown_Instagram.jpg";
import image1 from "../app/assests/image1.png";
import image2 from "../app/assests/image2.png";
import image3 from "../app/assests/image3.png";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { LinkedInLogoIcon } from "@radix-ui/react-icons";
import {InstagramLogoIcon} from "@radix-ui/react-icons";

import Link from "next/link";
export default function Home() {
  const [introVisible, setIntroVisible] = useState<boolean>(true);

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    const timer = setTimeout(() => setIntroVisible(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen bg-white text-gray-800">
      <Analytics />
      {introVisible && (
       <div className="fixed inset-0 z-50 flex items-center justify-center bg-white text-[#4C2B21]">
       {/* Crazy Loader Animation */}
       <div className="relative w-64 h-64">
         {/* Bouncing Circles */}
         <motion.div
           className="absolute top-0 left-1/2 w-12 h-12 rounded-full bg-gradient-to-r from-[#4C2B21] via-[#4C2B21] to-[#FFFFFF]"
           animate={{
             y: [0, -100, 0],
             scale: [1, 1.5, 1],
             rotate: [0, 360, 0],
           }}
           transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
         />
         <motion.div
           className="absolute bottom-0 left-1/2 w-16 h-16 rounded-full bg-gradient-to-r from-[#FFFFFF] via-[#4C2B21] to-[#4C2B21]"
           animate={{
             y: [0, 100, 0],
             scale: [1, 1.5, 1],
             rotate: [0, -360, 0],
           }}
           transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
         />
         
         {/* Rotating Triangle */}
         <motion.div
           className="absolute w-0 h-0 border-l-[50px] border-l-transparent border-r-[50px] border-r-transparent border-b-[100px] border-b-[#4C2B21]"
           animate={{ rotate: [0, 360, 0] }}
           transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
           style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
         />

         {/* Flashing Square */}
         <motion.div
           className="absolute w-16 h-16 bg-[#4C2B21]"
           animate={{ opacity: [1, 0, 1] }}
           transition={{ duration: 0.5, repeat: Infinity }}
           style={{ top: "10%", left: "10%" }}
         />
       </div>
     </div>
      )}

<nav className="flex items-center justify-between p-4 md:px-8 lg:px-16 w-full">
        {/* Logo */}
        <div className="flex items-center">
          <Image
            width={110}
            height={110}
            alt="Logo"
            src={image}
            className=" md:w-[100px] w-[80px] rounded-full"
          />
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex ml-[500px] space-x-8 items-center text-[#777577] font-['Nunito']">
          <div className="text-black text-3xl font-gilroy font-normal hover:text-gray-600 leading-none">

            <Link href="/">
            Home
            </Link>
          </div>
          <div className="text-black text-3xl font-gilroy font-normal hover:text-gray-600 leading-none">
          <Link href="/aboutus">
            About us
            </Link>
          </div>
          <div className="text-black text-3xl font-gilroy font-normal hover:text-gray-600 leading-none">
          <Link href="/villas">
          Villas
            </Link>
          </div>
        </div>

        {/* Schedule a Call Button (Desktop) */}
        <div className="hidden md:block">
   
<div className="w-[279px] h-[62px] pl-[30px] pr-9 pt-[15px] pb-2.5 bg-[#4c2b21] rounded-[11px] justify-start items-center inline-flex">
<div className="text-white text-3xl font-normal font-gilroy_medium ">Schedule a call</div>
</div>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-gray-800 text-3xl  focus:outline-none"
        >
          ☰
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-[90px] left-0 w-full bg-white    flex flex-col items-center py-4 space-y-4 md:hidden text-[#777577] font-['Nunito']">
            <div
              className="text-black text-xl font-gilroy font-normal hover:text-gray-600 leading-none"
              onClick={toggleMenu}
            >
              Home
            </div>
            <div
              className="text-black text-xl font-gilroy font-normal hover:text-gray-600 leading-none"
              onClick={toggleMenu}
            >
              About us
            </div>
            <div
              className="text-black text-xl font-gilroy font-normal hover:text-gray-600 leading-none"
              onClick={toggleMenu}
            >
              Villas
            </div>

            <div
              className="pl-[30px] pr-9 pt-[15px] pb-2.5 bg-[#4c2b21] text-white text-xl font-gilroy_medium font-normal rounded-[11px] hover:bg-[#3e2a1d] transition duration-200"
              onClick={toggleMenu}
            >
              Schedule a call
            </div>
          </div>
        )}
      </nav>

      <div>
        <main className="text-center md:py-10 py-2 px-4 md:px-20">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="md:text-4xl text-xl md:pt-[6px]  gilroy_medium md:text-[40px] "
          >
            Your Dream Home Awaits
          </motion.h1>

        <div className=" text-[40px] pt-[5px] md:text-[90px] font-gilroy_bold text-shadow-lg text-transparent bg-clip-text bg-gradient-to-b from-[#4C2B21] via-[#403D3D] to-[#5e5858]">
            Coming Soon
          </div>

          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="text-[#403D3D] font-gilroy_medium md:text-[30px]  text-xl md:font-[28px]  pt-[5px]"
          >
            "Stay tuned for the ultimate property search experience"
          </motion.p>

          {/* Email Input */}
          <div className="pt-[55px] ">
            <div className="md:w-[800px] w-[350px] mt-[10px] py-1  px-1 mx-auto border border-[#7A7979] rounded-full flex items-center     ">
              <Input
                type="email"
                placeholder="Enter your email address"
                className="w-3/4 placeholder-black md:text-[25px] text-15px font-gilroy_light  text-black  mx-4 border-none md:my-2 md:py-4 py-1"
              />
              <Button className="bg-[#4C2B21] font-gilroy_medium  w-1/4 text-[8px]  md:text-[25px]   text-white py-2 md:py-6 rounded-full hover:bg-brown-800">
                Notify Me
              </Button>
            </div>
          </div>

          <div className="pt-[55px] mb-[15px]">
<div className="md:w-[832px]  w-[350px] h-[43px] md:h-[83px] md:pl-[146px] justify-center md:pr-[173px] pt-[26px] pb-[21px] bg-[#f6f4f4] rounded-[19px] items-center inline-flex">
<div className="text-[#2d2c2c] md:text-3xl text-[15px] font-normal font-gilroy_medium">Call/WhatsApp us at +91 9873344942 </div>
</div>
          </div>
        </main>
      </div>

        {/* Section with Villas */}
        <section className="px-[28px] py-4 text-center pt-[45px] pb-[50px] md:px-20 bg-[#FBF8F4] ">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-2xl md:text-3xl font-gilroy_medium mb-8"
          >
            Luxury Living in the Heart of Goa
          </motion.h2>
          <p className="max-w-xl md:text-xl  text-sm font-gilroy mx-auto mb-8 text-gray-600">
            Discover the perfect blend of modern comforts and tropical charm at
            Goa Villas. Our premium villas are designed to provide you with an
            unparalleled living experience.
          </p>

          {/* Villa Images */}
          <div className="grid grid-cols-1 justify-center items-center sm:grid-cols-2 md:grid-cols-3 gap-6">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className=" "
            >
              <Image
                src={image1}
                alt="Villa 1"
                width={368}
                height={724}
                className=""
              />
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative "
            >
              <Image
                src={image2}
                alt="Villa 2"
                width={368}
                height={724}
                className="object-cover"
              />
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative overflow-hidden "
            >
              <Image
                src={image3}
                alt="Villa 3"
                width={368}
                height={724}
                className="object-cover"
              />
            </motion.div>
          </div>
        </section>



      <footer className="bg-[#FBF8F4] px-8 py-8 border-t border-gray-300">
  <div className="container mx-auto flex pt-6 flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
    <div className="flex items-center space-x-4">
      <span className="font-semibold text-black">Follow us on -</span>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
      <InstagramLogoIcon/>
      </a>
      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
      <LinkedInLogoIcon/>
      </a>
    </div>

    <div className="text-black text-center md:text-left">
      <span className="font-semibold">Need Support?</span>
      <a  href="mailto:Care@Homefinderr.com" className= "text-sm ml-2">
        Care@Homefinderr.com
      </a>
    </div>
  </div>

  <div className="mt-8 border-t border-gray-300 pt-4  text-[#3F3E3E] text-sm">
    Homefinderr©copyright2024 All Rights Reserved.
  </div>
</footer>

    </div>
  );
}
