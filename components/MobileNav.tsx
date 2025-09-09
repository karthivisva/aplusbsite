"use client";

import Link from "next/link";
import Image from "next/image"; // ✅ for logo
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { footernavbarItems } from "@/constants";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { AnimatePresence, motion } from "framer-motion";

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
        {/* ✅ Logo replaced with image */}
        <Link href={"/"} className="flex items-center">
          <Image
            src="/logo.png"
            alt="Company Logo"
            width={180}   // ⬆️ adjust size
            height={180}
            priority
            className="h-auto w-auto object-contain"
          />
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
              <Link href={"/"} className="flex items-center">
                <Image
                  src="/logo.png"
                  alt="Company Logo"
                  width={150}  // smaller version inside menu
                  height={70}
                  priority
                  className="h-auto w-auto object-contain"
                />
              </Link>
              <IoMdClose
                onClick={() => setToggle(false)}
                className="text-3xl cursor-pointer text-black"
              />
            </div>

            {/* Nav Links */}
            <ul className="w-full flex flex-col gap-[20px] padding-x mt-8">
              {footernavbarItems.map((item) => (
                <Link
                  href={item.href}
                  key={item.id}
                  onClick={() => setToggle(false)}
                  className="text-[28px] leading-[36px] font-bold tracking-tight text-background"
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
