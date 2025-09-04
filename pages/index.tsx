"use client";

import { useEffect } from "react";
import { Curve, Marquee, Ready } from "@/components";
import { About, Clients, Hero, Projects } from "@/container";
import WhatsAppButton from "@/components/WhatsAppButton";
import Testimonial from "@/components/Testimonial";
import AssociatesCarousel from "@/components/AssociatesCarousel";
import Loading from "@/components/Loading"; // ✅ import loader

export default function Home() {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

  return (
    <>
      {/* ✅ Page Loader */}
      <Loading />

      <Curve backgroundColor={"#f1f1f1"}>
        <Hero />
        <Ready />
        <div
          className="w-full z-10 relative rounded-t-[2px] padding-y"
          style={{ backgroundColor: "#b3d297" }}
        >
          {/* 🔹 Marquee with Image Mask Effect */}
          <Marquee
            title="a    p l u s     b"
            className="text-mask font-extrabold 
              pb-[55px] lg:pb-[40px] md:pb-[30px] sm:pb-[50px] xm:pb-[15px] 
              text-[540px] leading-[330px] 
              lg:text-[380px] lg:leading-[240px] 
              md:text-[300px] md:leading-[160px] 
              sm:text-[230px] sm:leading-[140px] 
              xm:text-[130px] xm:leading-[80px]"
          />
        </div>
        <About />
        <AssociatesCarousel />
        <Testimonial />
        <Projects />
        <Clients />
      </Curve>

      {/* WhatsApp Button */}
      <WhatsAppButton
        phoneNumber="8220122815"
        message="Hi! Any help? Contact us"
      />
    </>
  );
}
