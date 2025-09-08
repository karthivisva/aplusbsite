"use client";

import { useEffect } from "react";
import { Curve, Marquee, Ready } from "@/components";
import { About, Clients, Hero, Projects } from "@/container";
import WhatsAppButton from "@/components/WhatsAppButton";
import Testimonial from "@/components/Testimonial";
import AssociatesCarousel from "@/components/AssociatesCarousel";
import Loading from "@/components/Loading";

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
          className="w-full z-10 relative rounded-t-[2px] padding-y marquee-container"
          style={{ backgroundColor: "#b3d297" }}
        >
          {/* 🔹 Marquee with Black Text Overlay Effect */}
          <Marquee
            title="a    p l u s     b"
            className="text-image-mask font-extrabold
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
        <Projects />
        <Testimonial />
        <Clients />
      </Curve>

      {/* WhatsApp Button */}
      <WhatsAppButton
        phoneNumber="8220122815"
        message="Hi! Any help? Contact us"
      />

      <style jsx global>{`
        .marquee-container {
          position: relative;
          overflow: hidden;
        }

        /* Reduced opacity background image */
        .marquee-container::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: url('/aboutImg.webp');
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          background-attachment: fixed;
          opacity: 0.4; /* Increased opacity for better black text overlay effect */
          z-index: 1;
        }

        .text-image-mask {
          position: relative;
          z-index: 2;
          /* Black text with overlay blend mode */
          color: black;
          text-shadow: none;
          /* Overlay blend mode - creates contrast enhancement */
          mix-blend-mode: overlay;
        }

        /* Alternative black text blend effects */
        .text-multiply-blend {
          position: relative;
          z-index: 2;
          color: black;
          mix-blend-mode: multiply; /* Darkens/deepens the background where text passes */
        }

        .text-soft-light-blend {
          position: relative;
          z-index: 2;
          color: black;
          mix-blend-mode: soft-light; /* Gentle contrast effect */
        }

        .text-hard-light-blend {
          position: relative;
          z-index: 2;
          color: black;
          mix-blend-mode: hard-light; /* Strong contrast effect */
        }

        .text-color-burn-blend {
          position: relative;
          z-index: 2;
          color: black;
          mix-blend-mode: color-burn; /* Intensifies colors where text passes */
        }

        /* For a more dramatic black text effect */
        .text-dark-overlay {
          position: relative;
          z-index: 2;
          color: rgba(0, 0, 0, 0.9);
          mix-blend-mode: overlay;
          text-shadow: 0 1px 2px rgba(0,0,0,0.1);
        }

        /* Black text with difference blend - creates interesting inversion */
        .text-difference-blend {
          position: relative;
          z-index: 2;
          color: black;
          mix-blend-mode: difference;
        }
      `}</style>
    </>
  );
}