"use client"; // Needed for Next.js components using hooks

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Analytics } from "@vercel/analytics/react";
import image  from  "../app/assests/Logo-Brown_Instagram.jpg"
import image1 from "../app/assests/image1.png"
import image2 from "../app/assests//image2.png"
import image3 from "../app/assests/image3.png"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"




export default function Home() {
  const [introVisible, setIntroVisible] = useState<boolean>(true);
  // Hide intro after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => setIntroVisible(false),2000);
    return () => clearTimeout(timer);
  }, []);

  // Update cursor position


  return (
    <div className="relative min-h-screen bg-white text-gray-800">
      {/* Intro Animation */}
      <Analytics />
      {introVisible && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
    {/* Diagonal Cylinders */}
    <motion.div
      initial={{ x: -500, y: -500, rotate: 0 }}
      animate={{ x: [0, 500], y: [0, 500], rotate: 360 }}
      transition={{ duration: 3, repeat: Infinity, repeatType: "mirror" }}
      className="absolute left-0 top-0 w-24 h-24 bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 rounded-full shadow-lg opacity-50"
    />

    <motion.div
      initial={{ x: 500, y: -500, rotate: 0 }}
      animate={{ x: [-500, 0], y: [0, 500], rotate: -360 }}
      transition={{ duration: 3, repeat: Infinity, repeatType: "mirror" }}
      className="absolute right-0 top-0 w-24 h-24 bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 rounded-full shadow-lg opacity-50"
    />

    {/* Diagonal Cylinders Moving from Bottom */}
    <motion.div
      initial={{ x: -500, y: 500, rotate: 0 }}
      animate={{ x: [0, 500], y: [0, -500], rotate: 360 }}
      transition={{ duration: 3, repeat: Infinity, repeatType: "mirror" }}
      className="absolute left-0 bottom-0 w-24 h-24 bg-gradient-to-r from-orange-400 via-red-500 to-purple-500 rounded-full shadow-lg opacity-50"
    />

    <motion.div
      initial={{ x: 500, y: 500, rotate: 0 }}
      animate={{ x: [-500, 0], y: [0, -500], rotate: -360 }}
      transition={{ duration: 3, repeat: Infinity, repeatType: "mirror" }}
      className="absolute right-0 bottom-0 w-24 h-24 bg-gradient-to-r from-blue-400 via-green-500 to-yellow-500 rounded-full shadow-lg opacity-50"
    />

    {/* Movie intro text animation */}
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delayChildren: 0.3, staggerChildren: 0.1 }}
      className="text-6xl font-bold text-gray-800"
    >
      {Array.from("Welcome to Goa Villas").map((letter, index) => (
        <motion.span
          key={index}
          initial={{ y: -200, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 50,
            damping: 10,
            duration: 1,
            delay: index * 0.1, // Stagger letters based on index
          }}
          className="inline-block"
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.div>

    {/* Vertical Cylinders */}
    <motion.div
      initial={{ x: -100, scale: 0 }}
      animate={{ x: 0, scale: 1 }}
      transition={{
        duration: 1.5,
        delay: 0.5,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "reverse",
      }}
      className="absolute w-12 h-96 bg-gradient-to-r from-purple-400 via-blue-500 to-pink-500 rounded-lg shadow-lg opacity-75"
      style={{ left: "10%", top: "20%" }}
    />

    <motion.div
      initial={{ x: 100, scale: 0 }}
      animate={{ x: 0, scale: 1 }}
      transition={{
        duration: 1.5,
        delay: 0.8,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "reverse",
      }}
      className="absolute w-12 h-96 bg-gradient-to-r from-green-400 via-blue-500 to-teal-500 rounded-lg shadow-lg opacity-75"
      style={{ right: "10%", top: "40%" }}
    />

    {/* Moving Triangles */}
    <motion.div
      initial={{ x: -200, y: -200 }}
      animate={{ x: [0, 200], y: [0, 200] }}
      transition={{ duration: 2, repeat: Infinity, repeatType: "mirror" }}
      className="absolute w-0 h-0 border-l-[50px] border-l-transparent border-r-[50px] border-r-transparent border-b-[100px] border-b-yellow-500 opacity-80"
      style={{ top: "15%", left: "15%" }}
    />

    <motion.div
      initial={{ x: 200, y: -200 }}
      animate={{ x: [-200, 0], y: [0, 200] }}
      transition={{ duration: 2, repeat: Infinity, repeatType: "mirror" }}
      className="absolute w-0 h-0 border-l-[50px] border-l-transparent border-r-[50px] border-r-transparent border-b-[100px] border-b-blue-500 opacity-80"
      style={{ top: "30%", right: "20%" }}
    />

    <motion.div
      initial={{ x: -200, y: 200 }}
      animate={{ x: [0, 200], y: [0, -200] }}
      transition={{ duration: 2, repeat: Infinity, repeatType: "mirror" }}
      className="absolute w-0 h-0 border-l-[50px] border-l-transparent border-r-[50px] border-r-transparent border-b-[100px] border-b-red-500 opacity-80"
      style={{ bottom: "20%", left: "20%" }}
    />

    <motion.div
      initial={{ x: 200, y: 200 }}
      animate={{ x: [-200, 0], y: [0, -200] }}
      transition={{ duration: 2, repeat: Infinity, repeatType: "mirror" }}
      className="absolute w-0 h-0 border-l-[50px] border-l-transparent border-r-[50px] border-r-transparent border-b-[100px] border-b-green-500 opacity-80"
      style={{ bottom: "25%", right: "15%" }}
    />
  </div>
)}




      {/* Header */}
      <header className="flex justify-between items-center py1 px-8 bg-white shadow-md">
        <Image  className="rounded-full" height={80} width={80} alt="logo" src={image}>
          


        </Image>
        <nav className="hidden md:flex space-x-8">
          <a href="#" className="hover:text-gray-600 text-[#4C2B21]  px-4 py-2">Home</a>
          <a href="#" className="hover:text-gray-600 text-[#4C2B21]  px-4 py-2">About us</a>
          <a href="#" className="hover:text-gray-600  text-[#4C2B21] px-4 py-2">Villas</a>
          <Button className="bg-[#4C2B21] text-white px-4 py-2 rounded-md hover:bg-brown-800">
            Schedule a call
          </Button>
        </nav>
      </header>

      {/* Main Section */}
      <main className="text-center py-10 px-4 md:px-20">
        {/* Scroll Animation for Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl  mb-2"
        >
          Your Dream Home Awaits
        </motion.h1>

        {/* Coming Soon Animation */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 2, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="text-[120px] font-bold mb-2 text-shadow-lg text-transparent bg-clip-text bg-gradient-to-r from-[#403D3D] via-[#403D3D] to-[#4C2B21]  animate-glow"
        >
          Coming Soon
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="text-[#403D3D] text-[30px] mb-8"
        >
          &quot;Stay tuned for the ultimate property search experience&quot;
        </motion.p>

        {/* Email Input */}
        <div className=" w-[550px] px-2 mx-auto border border-[#7A7979] justify-center   rounded-full focus:outline-none focus:ring-2 focus:ring-brown-600 flex items-center py-2 mb-4">
          <Input
            type="email"
            placeholder="Enter your email address"
            className="w-[400px] mx-4  border-none py-2 "
          />
          <Button className="bg-[#4C2B21] w-[120px] font-bold  items-center text-white  py-6 rounded-full hover:bg-brown-800">
            Notify Me
          </Button>
        </div>

        <div className="flex justify-center">
          <a
            href="tel:+919873344942"
            className="block bg-[#F6F4F4] rounded-full px-2 py-2 w-[500px] items-center justify-center text-gray-500 mb-16"
          >
            Call/WhatsApp us at +91 9873344942
          </a>
        </div>

        {/* Section with Villas */}
        <section className="px-8 mx-0 py-4 bg-[#FBF8F4] md:px-0">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-3xl font-semibold mb-8"
          >
            Luxury Living in the Heart of Goa
          </motion.h2>
          <p className="max-w-xl mx-auto mb-12 text-gray-600">
            Discover the perfect blend of modern comforts and tropical charm at Goa Villas. Our premium villas are designed to provide you with an unparalleled living experience.
          </p>

          {/* Villa Images */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300"
            >
              <Image
                src={image1}
                alt="Villa 1"
                width={368}
                height={724}
                className="object-cover"
              />
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300"
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
              className="relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300"
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
      </main>
    </div>
  );
}
