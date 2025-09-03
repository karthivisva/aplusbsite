import Link from "next/link";
import { useState } from "react";
import { navVariants } from "@/motion";
import { TextHover } from "@/animation";
import { navbarItems } from "@/constants";
import { useMotionValueEvent, useScroll, motion } from "framer-motion";
import MobileNav from "./MobileNav";

export default function Navbar() {
  const [hidden, setHidden] = useState(false);
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
           <span className="bg-[#4d8045] px-2 py-1 rounded">
  <span className="text-white text-[28px] font-bold tracking-wide">
    a plus b
  </span>
</span>
            <span className="text-[14px] font-medium text-black">
              Consortium
            </span>
          </Link>
        </div>

        {/* Navbar Links */}
        <div className="flex gap-x-[20px] w-[50%]">
          {navbarItems.map((item) => (
            <Link
              key={item.id}
              className={`w-fit paragraph font-medium font-NeueMontreal text-secondry capitalize flex flex-col hover ${
                item.id === 5 && "ml-auto"
              }`}
              href={item.href}
            >
              <TextHover titile1={item.title} titile2={item.title} />
            </Link>
          ))}
        </div>
      </motion.nav>
      <MobileNav />
    </>
  );
}