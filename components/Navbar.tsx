"use client";

import Link from "next/link";
import { useState } from "react";
import { navVariants } from "@/motion";
import { navbarItems } from "@/constants";
import { useMotionValueEvent, useScroll, motion } from "framer-motion";
import MobileNav from "./MobileNav";

export default function Navbar() {
  const [hidden, setHidden] = useState(false);
  const [active, setActive] = useState<number | null>(null); // 🚀 no default selection
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (previous && latest > previous) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <>
      <motion.nav
        variants={navVariants}
        className="w-full h-[12vh] padding-x fixed top-0 left-0 z-50 backdrop-blur-[7px] flex items-center justify-between sm:hidden xm:hidden md:hidden"
        animate={hidden ? "hidden" : "vissible"}
      >
        {/* Logo Section */}
        <div className="w-[50%]">
          <Link href={"/"} className="flex items-baseline gap-1">
            <span className="bg-[#4d8045] px-2 py-1 rounded inline-block">
              <span
                className="text-white text-[28px] font-bold tracking-wide"
                style={{
                  fontFamily: "'Luckiest Guy', cursive",
                  transform: "rotate(-5deg) skewX(-10deg)",
                }}
              >
                a plus b
              </span>
            </span>
            <span className="text-[30px] font-extrabold text-black">
              CONSORTIUM
            </span>
          </Link>
        </div>

        {/* Navbar Links with pill highlight */}
        <div className="flex gap-x-[60px] w-[50%] justify-end">
          {navbarItems.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              onClick={() => setActive(item.id)}
              className="relative whitespace-nowrap inline-block"
            >
              {active === item.id && (
                <motion.span
                  layoutId="highlight"
                  className="absolute inset-0 bg-[#4d8045] rounded-2xl opacity-100"
                  style={{ zIndex: -1 }}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 30,
                  }}
                />
              )}
              <span
                className={`relative z-10 px-4 py-2 text-base font-medium transition-colors duration-300 ${
                  active === item.id
                    ? "text-white"
                    : "text-secondry hover:text-black"
                }`}
              >
                {item.title}
              </span>
            </Link>
          ))}
        </div>
      </motion.nav>
      <MobileNav />
    </>
  );
}
