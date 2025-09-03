"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

// Import your images
import rating1 from "@/public/rate.png";
import rating2 from "@/public/rate2.png";
import rating3 from "@/public/rate3.png";
import rating4 from "@/public/rate4.png";
import rating5 from "@/public/rate5.png";
import rating6 from "@/public/rate6.png";

const reviews = [
  {
    id: 1,
    img: rating1,
    link: "/",
    label: "Holistic Expertise: Complete solutions from design to execution.",
  },
  {
    id: 2,
    img: rating2,
    link: "/services",
    label:
      "Technology Driven: Leaders in BIM, 3D printing, and AR/VR applications.",
  },
  {
    id: 3,
    img: rating3,
    link: "/services",
    label:
      "Sustainable Focus: Eco-friendly designs that respect the environment.",
  },
  {
    id: 4,
    img: rating4,
    link: "/services",
    label:
      "Client-Centric Approach: Personalized, transparent, and collaborative.",
  },
  {
    id: 5,
    img: rating5,
    link: "/services",
    label:
      "Multidisciplinary Team: Architects, engineers, designers, and managers working seamlessly.",
  },
  {
    id: 6,
    img: rating6,
    link: "/services",
    label:
      "Innovation Driven: Constantly adopting emerging technologies to deliver future-ready solutions.",
  },
];

export default function Ratings() {
  return (
    <section className="w-full pt- pb-12">
      {/* Heading */}
      <div className="text-center mb-8">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-900 font-NeueMontreal">
          Our Core Strengths
        </h2>
        <p className="mt-1 text-gray-500 text-sm sm:text-base">
          Excellence across design, technology, sustainability, and collaboration
        </p>
      </div>

      {/* Grid */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[20px]">
        {reviews.map((item, i) => (
          <div
            key={item.id}
            className="relative w-full h-[35vh] sm:h-[30vh] lg:h-[40vh] rounded-[12px] overflow-hidden"
          >
            <Image
              src={item.img}
              alt="reviewImg"
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, 
                     (max-width: 1024px) 50vw, 
                     33vw"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center p-[15px]">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.3,
                  delay: i * 0.1,
                  ease: "easeOut",
                }}
                className="px-[20px] py-[12px] rounded-full border border-white bg-white/10 backdrop-blur-md"
              >
                <Link
                  href={item.link}
                  className="text-white text-[13px] sm:text-[14px] lg:text-[15px] leading-[20px] font-NeueMontreal text-center"
                >
                  {item.label}
                </Link>
              </motion.div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
