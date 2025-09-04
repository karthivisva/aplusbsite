"use client";
import { useEffect } from "react";
import { Curve } from "@/components";
import { Herocontact, Form, FAQ, Socials } from "@/container";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Contact() {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

  return (
    <>
      <Curve backgroundColor={"#f1f1f1"}>
        <Herocontact />
        <Form />
        <Socials />
        <FAQ />
      </Curve>

      {/* Fixed WhatsApp Button */}
      <WhatsAppButton
        phoneNumber="8220122815"
        message="Hi! Any help? Contact us"
      />
    </>
  );
}
