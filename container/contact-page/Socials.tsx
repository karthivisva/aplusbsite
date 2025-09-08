"use client";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import { Eyes } from "@/components";
import { LinkHover } from "@/animation";

export default function Socials() {
  const [rotate, setRotate] = useState(0);

  // Clickable social phrases
  const phrase = [
    { name: "INSTAGRAM", href: "https://www.instagram.com" },
    { name: "YouTUBE", href: "https://www.youtube.com" },
    { name: "FACEBOOK", href: "https://www.facebook.com" },
  ];

  // Mouse-follow rotation
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      const deltaX = mouseX - window.innerWidth / 2;
      const deltaY = mouseY - window.innerHeight / 2;

      const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setRotate(angle - 280);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Scroll-based motion
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  const mq = useTransform(scrollYProgress, [0, 1], [0, -700]);

  return (
    <section
      className="w-full min-h-screen sm:h-screen xm:h-screen bg-about padding-y relative"
      ref={container}
    >
      <div className="w-full h-full flex justify-center items-center flex-col gap-[50px]">
        {/* Clickable Social Phrases - Vertical Stack */}
     {/* Clickable Social Phrases - Vertical Stack */}
<div className="flex flex-col items-center text-center text-[180px] lg:text-[140px] md:text-[100px] sm:text-[70px] xm:text-[60px] font-bold font-FoundersGrotesk text-secondry uppercase pointer-events-auto">
  {phrase.map((item, idx) => (
    <motion.div
      key={idx}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: idx * 0.3, duration: 0.6 }}
    >
      <Link
        href={item.href}
        target="_blank"
        className="hover:text-secondry/70 transition-colors"
      >
        {item.name}
      </Link>
    </motion.div>
  ))}
</div>


        {/* Contact Section */}
        <div className="w-full border-t border-[#21212155] pt-[20px]">
          <div className="w-full flex sm:flex-col xm:flex-col justify-between gap-y-[20px] padding-x">
            {/* Contact Header */}
            <div className="w-[50%] sm:w-full xm:w-full">
              <h3 className="paragraph font-medium text-secondry font-NeueMontreal">
                Our Contact
              </h3>
            </div>

            {/* Address + Email */}
            <div className="w-[50%] sm:w-full xm:w-full flex sm:flex-col xm:flex-col justify-between gap-y-[20px]">
              {/* Address */}
              <div>
                <h1 className="paragraph font-medium font-NeueMontreal text-secondry pb-[20px]">
                  Location:
                </h1>
                <div className="flex flex-col gap-y-[10px]">
                  <LinkHover
                    className="before:h-[1px] after:h-[1px] w-fit paragraph font-medium capitalize flex flex-col before:bottom-[1px] after:bottom-[1px]"
                    title="134, 3rd Floor, Kalidas Road"
                    href="/"
                  />
                  <LinkHover
                    className="before:h-[1px] after:h-[1px] w-fit paragraph font-medium capitalize flex flex-col before:bottom-[1px] after:bottom-[1px]"
                    title="Ramnagar, Coimbatore - 641009"
                    href="/"
                  />
                </div>
              </div>

              {/* Email */}
              <div className="flex w-fit h-fit gap-x-[5px] group">
                <div className="rounded-[50px] border-[2px] border-[#21212155] group-hover:bg-secondry py-[3px] px-[12px] cursor-pointer">
                  <Link
                    href="mailto:aplusbconsortium@gmail.com"
                    className="paragraph font-NeueMontreal text-secondry uppercase group-hover:text-background transition-all duration-200 ease-in"
                  >
                    aplusbconsortium@gmail.com
                  </Link>
                </div>

                <div className="w-[33px] flex items-center justify-center h-[33px] border-[2px] border-[#21212155] rounded-[50px] group-hover:bg-secondry transition-all duration-200 ease-in cursor-pointer sm:hidden xm:hidden">
                  <ArrowUpRight
                    size={24}
                    strokeWidth={1.25}
                    className="text-secondry group-hover:text-background"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Animated Eyes */}
      <motion.div
        className="w-full absolute top-[50%] transform -translate-y-1/2 gap-[30px] flex items-center justify-center"
        style={{ y: mq }}
      >
        <Eyes className="w-[230px] h-[230px] md:w-[200px] md:h-[200px] sm:w-[150px] sm:h-[150px] xm:w-[150px] xm:h-[150px] sm:flex-col xm:flex-col" />
      </motion.div>
    </section>
  );
}
