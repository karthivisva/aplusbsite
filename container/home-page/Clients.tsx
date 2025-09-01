"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Button, Ratings } from "@/components";
import { motion, AnimatePresence } from "framer-motion";

// Import your images from public folder
import top1 from "@/public/top1.jpg";
import top2 from "@/public/top2.jpg";
import top3 from "@/public/top3.jpg";
import top4 from "@/public/top4.jpg";
import top5 from "@/public/top4.jpg";
import top6 from "@/public/top3.jpg";

export default function Clients() {
	const clientsItem = [
		{
			id: 1,
			website: "MPAC ",
			href: "/projects",
			title: "Project Details:",
			name: "Salem",
			src: top1,
			review:
				"Commercial Building (S+4) with a total built-up area of 12,500 sq.ft, designed for functionality and modern usage.",
			links: [
				{ id: 1, title: "Commercial", href: "/projects" },
				{ id: 2, title: "12,500 Sq.ft", href: "/projects" },
			],
		},
		{
			id: 2,
			website: "Kauvery Hospital",
			href: "/projects",
			title: "Project Details:",
			name: "Trichy",
			src: top2,
			review:
				"Interior works covering 50,000 sq.ft for one of the leading hospitals in Trichy, integrating modern healthcare design standards.",
			links: [
				{ id: 1, title: "Interior Works", href: "/projects" },
				{ id: 2, title: "50,000 Sq.ft", href: "/projects" },
			],
		},
		{
			id: 3,
			website: "Indian Air Force",
			href: "/projects",
			title: "Project Details:",
			name: "Coimbatore",
			src: top3,
			review:
				"Interior works spanning 8,000 sq.ft for the Indian Air Force, delivering a professional and functional design.",
			links: [
				{ id: 1, title: "Interior Works", href: "/projects" },
				{ id: 2, title: "8,000 Sq.ft", href: "/projects" },
			],
		},
		{
			id: 4,
			website: "Campus Showroom",
			href: "/projects",
			title: "Project Details:",
			name: "Salem",
			src: top4,
			review:
				"Showroom interiors with a floor space of 1,800 sq.ft, blending branding and modern display-focused design.",
			links: [
				{ id: 1, title: "Interior Works", href: "/projects" },
				{ id: 2, title: "1,800 Sq.ft", href: "/projects" },
			],
		},
		{
			id: 5,
			website: "Arima & Globus",
			href: "/projects",
			title: "Project Details:",
			name: "Coimbatore",
			src: top5,
			review:
				"Interior works covering 8,000 sq.ft for corporate spaces, combining functionality with sleek modern interiors.",
			links: [
				{ id: 1, title: "Interior Works", href: "/projects" },
				{ id: 2, title: "8,000 Sq.ft", href: "/projects" },
			],
		},
		{
			id: 6,
			website: "Dhiya Foundation",
			href: "/projects",
			title: "Project Details:",
			name: "Coimbatore",
			src: top6,
			review:
				"Interior design project with a 2,500 sq.ft scope, focused on creating efficient, adaptable spaces for the foundation.",
			links: [
				{ id: 1, title: "Interior Works", href: "/projects" },
				{ id: 2, title: "2,500 Sq.ft", href: "/projects" },
			],
		},
	];

	const [activeAccordion, setActiveAccordion] = useState(clientsItem[0].id);
	const toggleAccordion = (itemId: any) => {
		setActiveAccordion((prev) => (prev === itemId ? null : itemId));
	};

	return (
		<section className="w-full padding-y">
			<h1 className="sub-heading padding-x font-medium font-NeueMontreal text-secondry pb-[50px]">
				Top Projects
			</h1>
			{clientsItem.map((item) => (
				<div
					key={item.id}
					className={`w-full flex py-[10px] flex-col ${
						item.id == 1
							? "border-y border-[#21212155]"
							: "border-b border-[#21212155]"
					}`}>
					{/* Accordion Header */}
					<div className="w-full flex items-center justify-between py-[10px] padding-x">
						<div className="w-[50%] flex items-center">
							<div className="w-[40%] sm:w-auto xm:w-auto">
								<Link
									href={item.href}
									className="small-text font-normal font-NeueMontreal text-secondry link-flash">
									{item.website}
								</Link>
							</div>
							<div className="w-auto sm:hidden xm:hidden">
								<motion.h3
									className={`small-text font-normal font-NeueMontreal text-secondry ${
										activeAccordion === item.id ? "opacity-100" : "opacity-0"
									} opacity-0 transition-all duration-200 ease-in-out`}>
									{item.title}
								</motion.h3>
							</div>
						</div>
						<div className="w-[50%] flex items-center justify-between">
							<div className="w-[40%] sm:w-auto xm:w-auto">
								<h3 className="small-text font-normal font-NeueMontreal text-secondry">
									{item.name}
								</h3>
							</div>
							<div className="w-[10%] sm:w-auto xm:w-auto flex items-end justify-end">
								<button
									className={`small-text font-normal font-NeueMontreal uppercase transition-all duration-200 ease-in-out ${
										activeAccordion === item.id
											? "text-gray-300"
											: "text-secondry link-flash"
									}`}
									onClick={() => toggleAccordion(item.id)}>
									{activeAccordion === item.id ? "read" : "read"}
								</button>
							</div>
						</div>
					</div>

					{/* Accordion Body */}
					<div
						className={`w-full flex justify-between padding-x sm:flex-col xm:flex-col`}>
						<div className="w-[20%] sm:w-auto xm:w-auto" />
						<div className="w-[30%] sm:w-auto xm:w-auto sm:flex xm:flex flex-wrap gap-x-[5px] sm:pt-[10px] xm:pt-[10px]">
							{item.links.map((link) => (
								<AnimatePresence key={link.id}>
									{activeAccordion === item.id && (
										<motion.div
											initial={{ opacity: 0, height: 0 }}
											animate={{ opacity: 1, height: "auto" }}
											exit={{ opacity: 0, height: 0 }}
											transition={{
												ease: [0.4, 0, 0.2, 1],
												duration: 1,
											}}>
											<Button href={link.href} title={link.title} />
										</motion.div>
									)}
								</AnimatePresence>
							))}
						</div>

						{/* Project Image + Review */}
						<div className="w-[40%] sm:w-auto xm:w-auto">
							<AnimatePresence>
								{activeAccordion === item.id && (
									<motion.div
										initial={{ opacity: 0, height: 0 }}
										animate={{ opacity: 1, height: "auto" }}
										exit={{ opacity: 0, height: 0 }}
										transition={{
											ease: [0.4, 0, 0.2, 1],
											duration: 1.3,
										}}>
										<div className="flex flex-col gap-[20px] py-[30px]">
											<div className="relative w-[130px] h-[130px]">
												<Image
													src={item.src}
													alt={item.website}
													fill
													className="object-cover rounded-[10px]"
												/>
											</div>
											<div>
												<p className="small-text tracking-wider font-normal font-NeueMontreal text-secondry">
													{item.review}
												</p>
											</div>
										</div>
									</motion.div>
								)}
							</AnimatePresence>
						</div>
						<div className="w-[10%] sm:w-auto xm:w-auto" />
					</div>
				</div>
			))}
			<div className="padding-x pt-[80px]">
				<Ratings />
			</div>
		</section>
	);
}
