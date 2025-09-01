"use client";

import Link from "next/link";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { footernavbarItems } from "@/constants";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { AnimatePresence, motion } from "framer-motion";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], weight: ["600", "700"] });

export default function MobileNav() {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      {/* Top Navbar (Mobile Only) */}
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.3, 0.86, 0.36, 0.95] }}
        className="w-full hidden sm:flex xm:flex md:flex justify-between items-center h-[15vh] px-4 bg-[#f1f1f1] overflow-x-hidden"
      >
        <Link href={"/"}>
          <div className="flex items-baseline gap-1">
            <h1
              className={`text-2xl font-bold tracking-wide ${inter.className} bg-gradient-to-r from-[#4d8045] to-[#88b164] bg-clip-text text-transparent`}
            >
              a plus b
            </h1>
            <span className={`text-xs font-medium text-gray-700 ${inter.className}`}>
              Consortium
            </span>
          </div>
        </Link>
        <HiOutlineMenuAlt4
          onClick={() => setToggle(true)}
          className="text-3xl cursor-pointer text-black"
        />
      </motion.div>

      {/* Mobile Menu */}
      <AnimatePresence mode="wait">
        {toggle && (
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.8, ease: [0.3, 0.86, 0.36, 0.95] }}
            className="fixed top-0 left-0 w-screen h-screen z-50 flex flex-col bg-secondry overflow-x-hidden"
          >
            {/* Top Row */}
            <div className="w-full flex justify-between items-center h-[8vh] border-b border-[#f1f1f155] px-4 bg-[#f1f1f1]">
              <Link href={"/"}>
                <div className="flex items-baseline gap-1">
                  <h1
                    className={`text-3xl font-bold tracking-wide ${inter.className} bg-gradient-to-r from-[#4d8045] to-[#45850c] bg-clip-text text-transparent`}
                  >
                    a plus b
                  </h1>
                  <span className={`text-sm font-medium text-gray-700 ${inter.className}`}>
                    Consortium
                  </span>
                </div>
              </Link>
              <IoMdClose
                onClick={() => setToggle(false)}
                className="text-4xl cursor-pointer text-background"
              />
            </div>

            {/* Nav Links */}
            <ul className="w-full flex flex-col gap-5 px-4 mt-8">
              {footernavbarItems.map((item) => (
                <Link
                  href={item.href}
                  key={item.id}
                  onClick={() => setToggle(false)}
                  className="text-[28px] leading-[36px] font-FoundersGrotesk font-bold tracking-[-0.9px] text-background"
                >
                  {item.title}
                </Link>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
