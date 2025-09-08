"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function CoreTeam() {
  const team = [
    {
      id: 1,
      name: "VIGNESHWARAN KV",
      role: "Principal Architect",
      details: "Visionary & strategic leader overseeing design philosophy and mentoring architects.",
    },
    {
      id: 2,
      name: "SYED ABUTHAHIR U",
      role: "Chief Architect",
      details: "Leads design innovation, technical drawings, feasibility studies, and ensures project quality.",
    },
    {
      id: 3,
      name: "VIJAY KUMAR J",
      role: "Project Management Consultant",
      details: "Manages project timelines, budgets, and ensures successful delivery of all project milestones.",
    },
    {
      id: 4,
      name: "RAJU DV",
      role: "Chief Engineer",
      details: "Oversees engineering solutions, structural integrity, and technical compliance on projects.",
    },
    {
      id: 5,
      name: "ADHIP DHARUNESH",
      role: "Civil Engineer",
      details: "Ensures structural durability, material analysis, and compliance with civil engineering standards.",
    },
    {
      id: 6,
      name: "VARATHARAJAPERUMAL N",
      role: "Senior Architect",
      details: "Prepares detailed architectural drawings, mentors juniors, and integrates sustainable design solutions.",
    },
    {
      id: 7,
      name: "RAJ KAILASHAN U",
      role: "Senior Architect",
      details: "Balances creative design with execution feasibility and supervises site implementations.",
    },
    {
      id: 8,
      name: "VIZHAG MOHANRAJ R",
      role: "Senior Architect",
      details: "Specializes in 3D modeling, visualizations, and technical detailing for accurate construction.",
    },
    {
      id: 9,
      name: "SNEHA RS",
      role: "Accounts",
      details: "Manages financial records, budgeting, and ensures smooth accounting operations.",
    },
    {
      id: 10,
      name: "SOUMYA R",
      role: "Senior Engineer",
      details: "Oversees engineering execution, technical coordination, and ensures project compliance.",
    },
  ];

  const [activeAccordion, setActiveAccordion] = useState<number | null>(team[0].id);

  const toggleAccordion = (id: number) => {
    setActiveAccordion((prev) => (prev === id ? null : id));
  };

  return (
    <section className="w-full padding-y">
      <h1 className="sub-heading padding-x font-medium font-NeueMontreal text-secondry pb-[50px]">
        Core Team & Roles
      </h1>

      {team.map((member) => (
        <div
          key={member.id}
          className={`w-full flex py-[10px] flex-col ${
            member.id === 1
              ? "border-y border-[#21212155]"
              : "border-b border-[#21212155]"
          }`}
        >
          {/* Top row */}
          <div className="w-full flex items-center justify-between py-[10px] padding-x">
            <div className="w-[70%]">
              <h3 className="small-text font-normal font-NeueMontreal text-secondry">
                {member.name}
              </h3>
            </div>
            <div className="w-[30%] flex justify-end items-center">
              <button
                className={`small-text font-normal font-NeueMontreal uppercase transition-all duration-200 ease-in-out ${
                  activeAccordion === member.id
                    ? "text-gray-300"
                    : "text-secondry link-flash"
                }`}
                onClick={() => toggleAccordion(member.id)}
              >
                {activeAccordion === member.id ? "close" : "read"}
              </button>
            </div>
          </div>

          {/* Expanded content */}
          <AnimatePresence>
            {activeAccordion === member.id && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ ease: [0.4, 0, 0.2, 1], duration: 1 }}
                className="padding-x pb-[20px]"
              >
                <p className="small-text font-normal font-NeueMontreal text-gray-400 pb-[10px]">
                  {member.role}
                </p>
                <p className="small-text font-normal font-NeueMontreal text-secondry leading-relaxed">
                  {member.details}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </section>
  );
}
