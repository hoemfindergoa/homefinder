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

export default function Home() {
  const [introVisible, setIntroVisible] = useState<boolean>(true);
  useEffect(() => {
    const timer = setTimeout(() => setIntroVisible(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen bg-white text-gray-800">
      <Analytics />
      {introVisible && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
          {/* Intro animation... */}
        </div>
      )}

      {/* Header */}
      <header className="flex justify-between items-center py-2 px-4 md:px-8 bg-white shadow-md">
        <Image
          className="rounded-full"
          height={50}
          width={50}
          alt="logo"
          src={image}
        />
        <nav className="hidden md:flex space-x-4 md:space-x-8">
          <a href="#" className="hover:text-gray-600 text-[#4C2B21] px-2 md:px-4 py-2">
            Home
          </a>
          <a href="#" className="hover:text-gray-600 text-[#4C2B21] px-2 md:px-4 py-2">
            About us
          </a>
          <a href="#" className="hover:text-gray-600 text-[#4C2B21] px-2 md:px-4 py-2">
            Villas
          </a>
          <Button className="bg-[#4C2B21] text-white px-4 py-2 rounded-md hover:bg-brown-800">
            Schedule a call
          </Button>
        </nav>
      </header>

      {/* Main Section */}
      <main className="text-center py-10 px-4 md:px-20">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-5xl mb-2"
        >
          Your Dream Home Awaits
        </motion.h1>

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 2, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="text-6xl md:text-[120px]  font-bold mb-4 text-shadow-lg text-transparent bg-clip-text bg-gradient-to-r from-[#403D3D] via-[#403D3D] to-[#4C2B21] animate-glow"
        >
          Coming Soon
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="text-[#403D3D] text-lg md:text-2xl mb-8"
        >
          "Stay tuned for the ultimate property search experience"
        </motion.p>

        {/* Email Input */}
        <div className="w-full max-w-lg px-2 mx-auto border border-[#7A7979] rounded-full flex items-center py-2 mb-4">
          <Input
            type="email"
            placeholder="Enter your email address"
            className="w-3/4 mx-4 border-none py-2"
          />
          <Button className="bg-[#4C2B21] w-1/4 text-[10px]  md:text-base font-bold text-white py-2 md:py-6 rounded-full hover:bg-brown-800">
            Notify Me
          </Button>
        </div>

        <div className="flex justify-center">
          <a
            href="tel:+919873344942"
            className="block bg-[#F6F4F4] rounded-full px-4 py-2 w-full max-w-md text-gray-500 mb-16"
          >
            Call/WhatsApp us at +91 9873344942
          </a>
        </div>

        {/* Section with Villas */}
        <section className="px-4 py-4 bg-[#FBF8F4] md:px-0">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-2xl md:text-3xl font-semibold mb-8"
          >
            Luxury Living in the Heart of Goa
          </motion.h2>
          <p className="max-w-xl mx-auto mb-12 text-gray-600">
            Discover the perfect blend of modern comforts and tropical charm at
            Goa Villas. Our premium villas are designed to provide you with an
            unparalleled living experience.
          </p>

          {/* Villa Images */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative overflow-hidden rounded-lg shadow-lg"
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
              className="relative overflow-hidden rounded-lg shadow-lg"
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
              className="relative overflow-hidden rounded-lg shadow-lg"
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
