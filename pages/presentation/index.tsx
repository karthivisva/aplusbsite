"use client";
import { useEffect } from "react";
import { Curve, Ready } from "@/components";
import {
  Heropresentation,
  Projectspresentation,
  Publication,
} from "@/container";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Presentation() {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

  return (
    <>
      <Curve backgroundColor={"#f1f1f1"}>
        <Heropresentation />
        <Projectspresentation />
        <Publication />
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
