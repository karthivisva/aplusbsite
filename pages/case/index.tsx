"use client";
import {
  Heroworkiz,
  Aboutworkiz,
  Chelenge,
  Result,
  Works,
  Credit,
  VideoWorkiz,
} from "@/container";
import { useEffect } from "react";
import { Curve, Ready } from "@/components";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Work() {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

  return (
    <>
      <Curve backgroundColor="#f1f1f1">
        <Heroworkiz />
        <Aboutworkiz />
        <Chelenge />
        <VideoWorkiz />
        <Result />
        <Credit />
        <Works />
        <Ready />
      </Curve>

      {/* WhatsApp Button */}
      <WhatsAppButton
        phoneNumber="8220122815"
        message="Hi! Any help? Contact us"
      />
    </>
  );
}
