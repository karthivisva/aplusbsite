"use client";

import Link from "next/link";
import Image from "next/image"; // ✅ import Image for logo
import { useState } from "react";
import { navVariants } from "@/motion";
import { navbarItems } from "@/constants";
import { useMotionValueEvent, useScroll, motion } from "framer-motion";
import MobileNav from "./MobileNav";

export default function Navbar() {
  const [hidden, setHidden] = useState(false);
  const [active, setActive] = useState<number | null>(null);
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
        {/* ✅ Logo Section replaced with logo.png */}
        <div className="flex-shrink-0 max-w-[40%] lg:max-w-[35%] xl:max-w-[30%]">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png" // should be inside /public folder
              alt="Company Logo"
              width={220}   // ⬆️ Bigger width
              height={80}   // ⬆️ Bigger height
              priority
              className="h-auto w-auto object-contain"
            />
          </Link>
        </div>

        {/* Navbar Links with pill highlight */}
        <div className="flex items-center gap-x-2 lg:gap-x-4 xl:gap-x-8 2xl:gap-x-12 flex-shrink-0">
          {navbarItems.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              onClick={() => setActive(item.id)}
              className="relative whitespace-nowrap inline-block flex-shrink-0"
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
                className={`relative z-10 px-2 lg:px-3 xl:px-4 2xl:px-6 py-2 lg:py-3 text-sm lg:text-base xl:text-lg 2xl:text-xl font-semibold transition-colors duration-300 ${
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
