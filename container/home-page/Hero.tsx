"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { ochiside } from "@/public";
import { useEffect, useState } from "react";

export default function Hero() {
  // Slideshow images
  const images = [
    "/project1.webp",
    "/project2.webp",
    "/project3.webp",
    "/projec4.webp",
    "/project5.webp",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Change image every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section
      className="w-full h-screen sm:mb-[-10px] xm:mb-[-10px] relative overflow-hidden"
      data-scroll
      data-scroll-speed="-.3"
    >
      {/* Background Slideshow */}
	  {/* Background Slideshow */}
<div className="absolute top-0 md:top-[12vh] left-0 right-0 bottom-0">
  {images.map((src, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0 }}
      animate={{ opacity: currentIndex === index ? 1 : 0 }}
      transition={{ duration: 2, ease: "easeInOut" }}
      className="absolute inset-0 w-full h-full bg-cover bg-center"
      style={{
        backgroundImage: `url(${src})`,
      }}
    />
  ))}

  {/* Dark overlay for text visibility */}
  <div className="absolute inset-0 bg-black/50" />
</div>


      {/* Content */}
      <div className="relative w-full h-full flex flex-col justify-between">
        {/* Empty spacer */}
        <div />

        {/* Main Content */}
        <div className="w-full flex flex-col justify-between h-[75vh] sm:h-[85vh] xm:h-[85vh]">
          {/* Heading Section */}
          <div className="w-full flex justify-between gap-[20px] pl-[50px] md:pl-[30px] sm:pl-[20px] xm:pl-[20px]">
            <div>
              <h1 className="heading tracking-[3px] text-white font-semibold font-FoundersGrotesk uppercase">
                Designing
                <br />
                <div className="flex items-center gap-[3px]">
                  <motion.span
                    initial={{ width: 0 }}
                    animate={{ width: "auto" }}
                    transition={{
                      ease: [0.86, 0, 0.07, 0.995],
                      duration: 1,
                      delay: 1.5,
                    }}
                    className="leading-[130px]"
                  >
                    <Image
                      width={120}
                      height={50}
                      src={ochiside}
                      alt="img"
                      className="w-auto h-[95px] lg:w-auto lg:h-auto md:w-[100px] md:h-[63px] sm:w-[74px] sm:h-[45px] xm:w-[64px] xm:h-[40px] object-cover xl:mt-[15px] mt-[10px] rounded-[10px]"
                    />
                  </motion.span>

                  <h1 className="heading tracking-[-1.3px] text-white font-semibold font-FoundersGrotesk uppercase">
                    DREAMS
                  </h1>
                </div>
                Building Realities
              </h1>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="w-full flex flex-col h-[60vh] py-[90px] sm:mb-[80px] xm:mb-[80px] gap-[30px]">
            {/* Project CTA Row */}
            <div className="flex justify-between items-center padding-x gap-[2px] sm:flex-col sm:items-start xm:flex-col xm:items-start">
              <div className="w-[50%] xm:w-full sm:w-full">
                <p className="paragraph font-NeueMontreal text-white">
                  Architecture | Interior | Construction
                </p>
              </div>
              <div className="w-[70%] xm:w-full sm:w-full">
                <p className="paragraph font-NeueMontreal text-white">
                  For public and private companies
                </p>
              </div>

              <div className="w-[50%] xm:w-full sm:w-full flex justify-between xm:flex-col xm:items-start sm:flex-col sm:items-start gap-[20px]">
                <div className="flex items-center gap-[5px] group">
                  <div className="rounded-[50px] border border-white/60 group-hover:bg-secondry py-[3px] px-[12px] cursor-pointer">
                    <Link
                      className="paragraph font-NeueMontreal text-white uppercase group-hover:text-background transition-all transform duration-[0.3s] ease-[.215,.61,.355,1]"
                      href="/contact"
                    >
                      start the project
                    </Link>
                  </div>

                  <div className="w-[33px] flex items-center justify-center h-[33px] border border-white/60 rounded-full p-[1px] sm:p-[30px] xm:pb-[30px] group-hover:bg-secondry transition-all transform duration-[0.3s] ease-[.215,.61,.355,1] cursor-pointer xm:hidden sm:hidden">
                    <p className="font-normal text-white group-hover:text-background">
                      <ArrowUpRight size={24} strokeWidth={1.25} />
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Scroll Down Animation */}
            <div className="w-full flex items-center overflow-hidden justify-center xm:hidden sm:hidden"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
