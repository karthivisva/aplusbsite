// components/Testimonial.tsx
"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface TestimonialItem {
  company: string;
  feedback: string;
  image?: string; // optional client image from public folder
  rating?: number; // 1-5 stars
}

const testimonials: TestimonialItem[] = [
  {
    company: "MPAC",
    feedback: `We at MPAC are extremely pleased with the work delivered by APLUSB Consortium on our recent construction and interior design project. Their team demonstrated a deep understanding of our requirements and executed the project with professionalism, precision, and creativity.

From the structural execution to the interior detailing, every aspect was handled with care and expertise. The result is a space that not only meets our operational needs but also enhances the overall environment for our team and visitors alike.

APLUSB Consortium maintained clear communication, adhered to timelines, and consistently exceeded our expectations. We sincerely thank them for their dedication and would confidently recommend their services to any organization looking for quality-driven construction and design solutions.`,
    image: "/testimonial3.webp",
    rating: 5,
  },
  {
    company: "Kauvery Hospital",
    feedback: `It has been a pleasure working with APLUSB Consortium on the interior design of our facility at Kauvery Hospital. Their team brought a clear understanding of the unique needs of a healthcare environment — combining aesthetics with functionality to create spaces that are welcoming, efficient, and patient-friendly.

From consultation to completion, APLUSB consistently maintained high standards of professionalism and design integrity. Their ability to transform clinical spaces into warm, calming environments has made a noticeable impact on both patient experience and staff comfort.

We are extremely satisfied with the outcome and truly value their dedication, attention to detail, and ability to deliver within the required timelines. We would not hesitate to work with APLUSB Consortium again for future projects and highly recommend them for healthcare interior design.`,
    image: "/testimonial.webp",
    rating: 5,
  },
  {
    company: "CAMPUS",
    feedback: `We at CAMPUS are proud to share our experience working with APLUSB Consortium on our recent design project. Their team delivered outstanding results across both interior and exterior design, transforming our vision into a cohesive, functional, and visually striking environment.

From the outset, APLUSB Consortium demonstrated a clear understanding of our goals and brought innovative, thoughtful design solutions that elevated the overall quality of our space. Their attention to detail, responsiveness, and professional approach made the entire process smooth and collaborative.

The final outcome perfectly reflects the identity and purpose of CAMPUS — a well-balanced blend of aesthetic appeal and practical design. We are truly pleased with the results and highly recommend APLUSB Consortium for any organization seeking excellence in design and execution.`,
    image: "/testimonial2.webp",
    rating: 4,
  },
];

export default function Testimonial() {
  return (
    <section className="py-16 bg-{#f1f1f1}">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          What Our Clients Say
        </h2>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((item, idx) => (
            <TestimonialCard key={idx} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}

// Separate card with "Read More" logic + animations
function TestimonialCard({ company, feedback, image, rating }: TestimonialItem) {
  const [expanded, setExpanded] = useState(false);

  const preview =
    feedback.length > 180 ? feedback.slice(0, 180) + "..." : feedback;

  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col items-center text-center">
      {/* Client Image */}
      {image && (
        <img
          src={image}
          alt={company}
          className="w-20 h-20 rounded-full object-cover mb-4"
        />
      )}

      {/* Feedback Text with animation */}
      <AnimatePresence initial={false}>
        <motion.p
          key={expanded ? "expanded" : "collapsed"}
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="text-gray-700 whitespace-pre-line mb-4 overflow-hidden"
        >
          {expanded ? feedback : preview}
        </motion.p>
      </AnimatePresence>

      {/* Read More Button */}
      {feedback.length > 180 && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="text-[#4d8045] font-medium hover:underline mb-4"
        >
          {expanded ? "Read Less" : "Read More"}
        </button>
      )}

      {/* Star Rating */}
      {rating && (
        <div className="flex mb-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <span
              key={i}
              className={i < rating ? "text-yellow-400" : "text-gray-300"}
            >
              ★
            </span>
          ))}
        </div>
      )}

      {/* Company Name */}
      <p className="mt-2 font-semibold text-[#4d8045]">{company}</p>
    </div>
  );
}
