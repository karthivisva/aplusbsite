"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function CoreTeam() {
	const team = [
		{
			id: 1,
			name: "VIGNESWARAN KV",
			role: "Principal Architect — Visionary & Strategic Leader",
			details: `As the Principal Architect, Vigneswaran KV defines APLUSB’s design philosophy. 
He ensures every project reflects sustainability, aesthetics, and innovation while mentoring architects and leading high-level discussions.`,
		},
		{
			id: 2,
			name: "SYED ABUTHAHIR U",
			role: "Chief Architect — Design Innovator & Technical Authority",
			details: `Responsible for translating concepts into technical drawings, 
leading BIM adoption, feasibility studies, and AR/VR prototypes for client presentations.`,
		},
		{
			id: 3,
			name: "ADHIP DHARUNESH",
			role: "Civil Engineer — Structural Backbone",
			details: `Ensures structural durability, soil/material analysis, 
eco-friendly practices like rainwater harvesting, and compliance with IS/global standards.`,
		},
		
		{
			id: 5,
			name: "VARATHARAJAPERMAL N",
			role: "Senior Architect — Detail-Oriented Designer & Mentor",
			details: `Prepares detailed drawings, mentors juniors, integrates sustainable solutions, 
and aligns design with client expectations.`,
		},
		{
			id: 6,
			name: "RAJ KAILASHAN U",
			role: "Senior Architect — Design Realist & Execution Specialist",
			details: `Balances creativity with feasibility, develops construction-ready plans, 
and supervises site implementations.`,
		},
		{
			id: 7,
			name: "VIZHAG MOHANRAJ R",
			role: "Senior Architect — Innovator in Visualization & Technical Detailing",
			details: `Creates 3D models, renders, AR/VR walk-throughs, compliance reports, 
and ensures construction accuracy.`,
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
