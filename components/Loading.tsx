"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Loading() {
  const [isLoading, setIsLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // detect screen size
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640); // Tailwind "sm"
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  // ✅ vertical shift different for mobile vs desktop
  const yOffset = isMobile ? -50 : -30;

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center"
          initial={{
            backgroundColor: "white",
            scale: 10,
            opacity: 1,
            rotate: -360, // 🔥 start spinning
            y: yOffset,
          }}
          animate={{
            backgroundColor: "white",
            scale: 1,
            opacity: 1,
            rotate: 0, // 🔥 end straight
            y: yOffset,
          }}
          exit={{
            backgroundColor: "rgba(255,255,255,0)",
            scale: 0,
            x: "-100vw",
            y: yOffset,
            opacity: 0,
            transition: {
              opacity: { duration: 0.5 },
              scale: { duration: 0.8 },
              x: { duration: 0.8 },
              rotate: { duration: 0.8 }, // keep smooth
            },
          }}
          transition={{
            duration: 0.8,
            ease: [0.9, 0.05, 0.5, 1],
          }}
        >
          {/* ✅ Responsive wrapper for logo */}
          <div className="relative w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] md:w-[180px] md:h-[180px] lg:w-[200px] lg:h-[200px]">
            <Image
              src="/ochi-side.jpg"
              alt="Logo"
              fill
              priority
              className="object-contain"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
