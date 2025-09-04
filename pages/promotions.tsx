"use client";

import React from "react";
import WhatsAppButton from "@/components/WhatsAppButton";

interface Promotion {
  title: string;
  description: string;
  image?: string;
  link?: string;
  comingSoon?: boolean;
}

const promotions: Promotion[] = [
  {
    title: "Summer Offer 2025",
    description:
      "Get up to 20% off on all interior design services this summer. Limited time only!",
    image: "/promo1.jpg",
    link: "/contact",
    comingSoon: true,
  },
  {
    title: "Free Consultation",
    description:
      "Book a free consultation with our design experts and bring your dream project to life.",
    image: "/promo2.jpg",
    link: "/contact",
    comingSoon: true,
  },
];

export default function Promotions() {
  return (
    <>
      <section className="py-16 bg-[#f1f1f1] mt-4 md:mt-32">
        <div className="max-w-7xl mx-auto px-4">
          {/* Section Heading */}
          <h2 className="text-4xl font-semibold font-FoundersGrotesk uppercase tracking-[3px] text-[#212121] text-center mb-12">
            Upcoming Promotions
          </h2>

          {/* Promotion Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {promotions.map((promo, idx) => (
              <div
                key={idx}
                className="bg-gray-50 p-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col"
              >
                {promo.image && (
                  <img
                    src={promo.image}
                    alt={promo.title}
                    className="rounded-xl w-full h-48 object-cover mb-4"
                  />
                )}
                <h3 className="text-xl font-semibold font-FoundersGrotesk uppercase tracking-[1px] text-[#212121] mb-2">
                  {promo.title}
                </h3>
                <p className="text-gray-600 mb-4">{promo.description}</p>
                {promo.comingSoon ? (
                  <span className="mt-auto text-gray-400 font-medium font-FoundersGrotesk uppercase tracking-[1px]">
                    Coming Soon
                  </span>
                ) : (
                  promo.link && (
                    <a
                      href={promo.link}
                      className="mt-auto text-[#4d8045] font-medium font-FoundersGrotesk uppercase tracking-[1px] hover:underline"
                    >
                      Learn More →
                    </a>
                  )
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fixed WhatsApp Button */}
      <WhatsAppButton
        phoneNumber="8220122815"
        message="Hi! Any help? Contact us"
      />
    </>
  );
}
