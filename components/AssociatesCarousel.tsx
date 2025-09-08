"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion, useMotionValue, animate } from "framer-motion";

interface Associate {
  name: string;
  image: string;
  link: string; // 🔗 new field
}

const associates: Associate[] = [
  {
    name: "Raaj Associates",
    image: "/assosiates2.jpg",
    link: "https://raajassociates.com", // example link
  },
  {
    name: "MANNOVIYAM",
    image: "/assosiates3.jpg",
    link: "https://mannoviyam.org", // example link
  },
  {
    name: "Associate 4",
    image: "/associate4.png",
    link: "https://example.com", // example link
  },
];

export default function AssociatesCarousel() {
  const containerRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const [itemsToRender, setItemsToRender] = useState<Associate[]>([]);
  const animationRef = useRef<any>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const screenWidth = window.innerWidth;
    const repeats = Math.ceil(screenWidth / 200);
    const repeatedArray: Associate[] = [];

    for (let i = 0; i < repeats * 3; i++) {
      repeatedArray.push(...associates);
    }

    setItemsToRender(repeatedArray);

    startAnimation();
  }, []);

  const startAnimation = () => {
    if (!containerRef.current) return;

    const screenWidth = window.innerWidth;
    const distance = containerRef.current.scrollWidth / 2;

    // set different durations for different screen sizes
    let duration = 60; // default
    if (screenWidth < 640) {
      duration = 100; // slower on mobile
    } else if (screenWidth < 1024) {
      duration = 80; // medium speed for tablet
    } else {
      duration = 60; // faster for desktop
    }

    animationRef.current = animate(x, -distance, {
      duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "loop",
    });
  };

  const handleMouseEnter = () => {
    if (window.innerWidth >= 1024 && animationRef.current) {
      animationRef.current.stop(); // pause
    }
  };

  const handleMouseLeave = () => {
    if (window.innerWidth >= 1024) {
      startAnimation(); // resume
    }
  };

  return (
    <div className="py-12 overflow-hidden">
      <div className="max-w-7xl mx-auto text-center mb-6">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
          Our Associates
        </h2>
        <p className="text-gray-500 mt-2">
          We’re proud to collaborate with these amazing partners
        </p>
      </div>

      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={containerRef}
          className="flex gap-12"
          style={{ x }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {itemsToRender.map((associate, idx) => (
            <a
              key={idx}
              href={associate.link}
              target="_blank"
              rel="noopener noreferrer"
              className="min-w-[140px] flex flex-col justify-center items-center text-center hover:scale-105 transition-transform"
            >
              <img
                src={associate.image}
                alt={associate.name}
                className="h-20 w-20 object-cover rounded-full"
              />
              <p className="mt-2 text-sm font-medium text-gray-700">
                {associate.name}
              </p>
            </a>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
