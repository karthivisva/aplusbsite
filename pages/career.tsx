"use client";

import React from "react";
import { motion } from "framer-motion";
import WhatsAppButton from "@/components/WhatsAppButton";

interface Job {
  title: string;
  location: string;
  type: string; // Full-time, Internship
  description: string;
  applyLink: string;
}

const jobs: Job[] = [
  {
    title: "Architect",
    location: "Chennai, India",
    type: "Full-time",
    description:
      "Join Plus B Consortium to design innovative residential and commercial projects. We seek architects with 3+ years of experience and a strong creative vision.",
    applyLink: "/careers/architect",
  },
  {
    title: "Interior Designer",
    location: "Remote",
    type: "Internship",
    description:
      "Work on real-world projects with our interior design team. Gain hands-on experience in residential and commercial interiors.",
    applyLink: "/careers/interior-designer",
  },
  {
    title: "Construction Project Manager",
    location: "Chennai, India",
    type: "Full-time",
    description:
      "Manage and supervise construction projects from concept to completion. Ideal candidates have 5+ years of experience in construction management.",
    applyLink: "/careers/project-manager",
  },
];

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Career() {
  return (
    <>
      <motion.section
        className="py-16 bg-[#f1f1f1] mt-4 md:mt-32"
        initial="hidden"
        animate="visible"
        exit="hidden"
        variants={containerVariants}
      >
        <div className="max-w-7xl mx-auto px-4">
          {/* Page Title */}
          <motion.h2
            className="text-4xl font-semibold font-FoundersGrotesk uppercase tracking-[3px] text-[#212121] text-center mb-16"
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Careers at Plus B Consortium
          </motion.h2>

          {/* Job Cards */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
            variants={containerVariants}
          >
            {jobs.map((job, idx) => (
              <motion.div
                key={idx}
                className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col p-8 border border-gray-100"
                variants={cardVariants}
              >
                <h3 className="text-2xl font-semibold font-FoundersGrotesk uppercase tracking-[1px] text-[#212121] mb-3">
                  {job.title}
                </h3>

                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-sm font-FoundersGrotesk font-medium uppercase tracking-[1px] bg-[#e6f4ea] text-[#4d8045] px-3 py-1 rounded-full">
                    {job.type}
                  </span>
                  <span className="text-sm font-FoundersGrotesk font-medium uppercase tracking-[1px] bg-[#f0f0f0] text-gray-700 px-3 py-1 rounded-full">
                    {job.location}
                  </span>
                </div>

                <p className="text-gray-600 mb-6 flex-1">{job.description}</p>

                <a
                  href={job.applyLink}
                  className="mt-auto inline-block text-white bg-[#4d8045] hover:bg-[#3d6736] font-FoundersGrotesk font-semibold uppercase tracking-[1px] text-center px-6 py-3 rounded-xl transition-all duration-300"
                >
                  Apply Now
                </a>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Fixed WhatsApp Button */}
      <WhatsAppButton
        phoneNumber="8220122815"
        message="Hi! Any help? Contact us"
      />
    </>
  );
}
