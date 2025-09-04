"use client";
import {
  Heroabout,
  Aboutabout,
  Team,
  Partners,
  Insights,
  Principles,
} from "@/container";
import { useEffect } from "react";
import { Curve, Ready } from "@/components";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function About() {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

  return (
    <>
      <Curve backgroundColor={"#f1f1f1"}>
        <Heroabout />
        <Aboutabout />
        <Team />
        <Principles />
        <Partners />
        <Insights />
        <Ready />
      </Curve>

      {/* Fixed WhatsApp Button */}
      <WhatsAppButton
        phoneNumber="8220122815"
        message="Hi! Any help? Contact us"
      />
    </>
  );
}
