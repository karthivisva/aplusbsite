"use client";

import Link from "next/link";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { footernavbarItems } from "@/constants";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { AnimatePresence, motion } from "framer-motion";

// Import Inter font (for Consortium text)
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
        className="w-full hidden justify-between items-center h-[15vh] padding-x sm:flex xm:flex md:flex bg-[#f1f1f1]"
      >
        <Link href={"/"}>
          <div className="flex items-baseline gap-1">
            {/* Smaller funky "a plus b" */}
            <span className="bg-[#4d8045] px-2 py-1 rounded inline-block">
              <span
                className="text-white text-[22px] font-bold tracking-wide"
                style={{
                  fontFamily: "'Luckiest Guy', cursive",
                  transform: "rotate(-5deg) skewX(-10deg)",
                }}
              >
                a plus b
              </span>
            </span>

            {/* Smaller bold Consortium */}
            <span className="text-[24px] font-extrabold text-black">
              CONSORTIUM
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
            transition={{ duration: 1, ease: [0.3, 0.86, 0.36, 0.95] }}
            className="fixed top-0 bottom-0 right-0 z-50 w-full min-h-screen flex flex-col bg-secondry"
          >
            {/* Top Row inside menu */}
            <div className="w-full flex justify-between items-center h-[8vh] border-b border-[#f1f1f155] padding-x bg-[#f1f1f1]">
              <Link href={"/"}>
                <div className="flex items-baseline gap-1">
                  {/* Smaller funky "a plus b" in menu */}
                  <span className="inline-block">
                    <span
                      className="bg-[#4d8045] px-2 py-1 rounded inline-block text-white text-[22px] font-bold tracking-wide"
                      style={{
                        fontFamily: "'Luckiest Guy', cursive",
                   
                      }}
                    >
                      a plus b
                    </span>
                  </span>

                  {/* Smaller bold Consortium in menu */}
                  <span className="text-[22px] font-extrabold text-black">
                    CONSORTIUM
                  </span>
                </div>
              </Link>
              <IoMdClose
                onClick={() => setToggle(false)}
             
              />
            </div>

            {/* Nav Links */}
            <ul className="w-full flex flex-col gap-[20px] padding-x mt-8">
              {footernavbarItems.map((item) => (
                <Link
                  href={item.href}
                  key={item.id}
                  onClick={() => setToggle(false)}
                  className="text-[28px] leading-[36px] font-FoundersGrotesk font-bold tracking-[-.9] text-background"
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
